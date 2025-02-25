import { NextRequest, NextResponse } from 'next/server';
import { AuthTokens } from './services/auth/auth.service';
import { PUBLIC_PAGES } from './configs/public.config';

export const middleware = (req: NextRequest) => {
  const { url, cookies } = req;

  const refreshToken = cookies.get(AuthTokens.REFRESH_TOKEN)?.value;

  const isAuthPage = url.includes('/login') || url.includes('/register');

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(PUBLIC_PAGES.HOME, url));
  }

  if (isAuthPage) {
    return NextResponse.next();
  }
};

export const config = { matcher: ['/login', '/register'] };
