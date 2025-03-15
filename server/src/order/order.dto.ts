import { OrderStatus } from '@prisma/client'
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateOrderDto {
	@IsOptional()
	@IsString()
	promoCode?: string
}

export class ChangeOrderStatusDto {
	@IsString()
	@IsNotEmpty()
	readonly orderId: string

	@IsEnum(OrderStatus)
	readonly status: OrderStatus
}
