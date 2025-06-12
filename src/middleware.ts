import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if (!accessToken) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/re-issue`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Refresh-Token': `Bearer ${refreshToken}`,
        },
        credentials: 'include',
      });

      if (!res.ok) {
        return NextResponse.redirect(new URL('/signin', request.url));
      }

      const data = await res.json();

      const response = NextResponse.next();

      response.cookies.set('accessToken', data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(`${data.access_token_expired_at}Z`),
        sameSite: 'strict',
      });

      response.cookies.set('refreshToken', data.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(`${data.refresh_token_expired_at}Z`),
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
