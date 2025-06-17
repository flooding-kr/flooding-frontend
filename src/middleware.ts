import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const user = request.cookies.get('user')?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if (!accessToken || !user) {
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/re-issue`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Refresh-Token': `Bearer ${refreshToken}`,
          },
        }
      );

      const userRes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/myself`, {
        headers: { Authorization: `Bearer ${res.data.access_token}` },
      });

      const encodedUser = Buffer.from(JSON.stringify(userRes.data)).toString('base64');

      const response = NextResponse.next();

      response.cookies.set('accessToken', res.data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(new Date(`${res.data.access_token_expired_at}`).toUTCString()),
        sameSite: 'strict',
      });

      response.cookies.set('refreshToken', res.data.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(new Date(`${res.data.refresh_token_expired_at}`).toUTCString()),
        sameSite: 'strict',
      });

      response.cookies.set('user', encodedUser, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(new Date(`${res.data.access_token_expired_at}`).toUTCString()),
        sameSite: 'strict',
      });
      return response;
    } catch (err) {
      console.error('토큰 재발급 실패:', err);
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/auth|signin|signup|_next/static|_next/image|favicon.ico).*)'],
};
