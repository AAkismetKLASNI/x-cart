import { CartService } from '@/cart/cart.service';
import { UserService } from '@/user/user.service';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role, type User } from '@prisma/client';
import { verify } from 'argon2';
import { omit } from 'lodash';
import { AuthDto } from './dto/auth.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private userService: UserService,
    private cartService: CartService
  ) {}

  private readonly TOKEN_EXPIRATION_ACCESS = '1h';
  private readonly TOKEN_EXPIRATION_REFRESH = '7d';

  async login({ cartItems, ...dto }: AuthDto) {
    const user = await this.validateUser(dto);

    if (cartItems && cartItems.length) {
      await this.cartService.syncCart(user.id, {
        items: cartItems.map((item) => ({
          product: item.product,
          quantity: item.quantity,
        })),
      });
    }

    return this.buildResponseObject(user);
  }

  async register({ cartItems, ...dto }: RegisterDto) {
    const userExists = await this.userService.getByEmail(dto.email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }
    const user = await this.userService.create(dto);

    if (cartItems && cartItems.length > 0) {
      await this.cartService.syncCart(user.id, {
        items: cartItems.map((item) => ({
          product: item.product,
          quantity: item.quantity,
        })),
      });
    }

    return this.buildResponseObject(user);
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken);
    if (!result) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    const user = await this.userService.getById(result.id);
    return this.buildResponseObject(user);
  }

  async buildResponseObject(user: User) {
    const tokens = await this.issueTokens(user.id, user.rights);
    return { user: this.omitPassword(user), ...tokens };
  }

  private async issueTokens(userId: string, rights: Role[]) {
    const payload = { id: userId, rights };
    const accessToken = this.jwt.sign(payload, {
      expiresIn: this.TOKEN_EXPIRATION_ACCESS,
    });
    const refreshToken = this.jwt.sign(payload, {
      expiresIn: this.TOKEN_EXPIRATION_REFRESH,
    });
    return { accessToken, refreshToken };
  }

  private async validateUser(dto: AuthDto) {
    const user = await this.userService.getByEmail(dto.email);
    if (!user) {
      throw new UnauthorizedException('Email or password invalid');
    }
    const isValid = await verify(user.password, dto.password);
    if (!isValid) {
      throw new UnauthorizedException('Email or password invalid');
    }
    return user;
  }

  private omitPassword(user: User) {
    return omit(user, ['password']);
  }
}
