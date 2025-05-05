import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

import isValidToken from './shared/libs/is-vaild-token';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  const { isAccessTokenValid, isRefreshTokenValid } = isValidToken({
    accesstoken: accessToken,
    refreshtoken: refreshToken,
  });

  if (!isRefreshTokenValid) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if (!isAccessTokenValid) {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/re-issue`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Refresh-Token': `Bearer ${refreshToken}`,
          },
          withCredentials: true,
        }
      );

      if (response.status !== 200) {
        return NextResponse.redirect(new URL('/signin', request.url));
      }

      const newAccessToken = response.data.access_token;
      const newRefreshToken = response.data.refresh_token;
      const accessTokenExpires = new Date(`${response.data.access_token_expired_at}Z`);
      const refreshTokenExpires = new Date(`${response.data.refresh_token_expired_at}Z`);

      const res = NextResponse.next();

      res.cookies.set('accessToken', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: accessTokenExpires,
        sameSite: 'strict',
      });

      res.cookies.set('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: refreshTokenExpires,
        sameSite: 'strict',
      });

      return res;
    } catch (err) {
      console.error('토큰 재발급 실패:', err);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/auth|signin|signup|_next/static|_next/image|favicon.ico).*)'],
};
