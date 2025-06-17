import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

interface SigninRequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: SigninRequestBody = await request.json();
  try {
    const response = await apiClient.post('/auth/sign-in', body);

    const accessTokenExpires = new Date(
      new Date(`${response.data.access_token_expired_at}`).toUTCString()
    );
    const refreshTokenExpires = new Date(
      new Date(`${response.data.refresh_token_expired_at}`).toUTCString()
    );

    const res = NextResponse.json(response.data);

    res.cookies.set('accessToken', response.data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: accessTokenExpires,
      sameSite: 'strict',
    });

    res.cookies.set('refreshToken', response.data.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: refreshTokenExpires,
      sameSite: 'strict',
    });

    const userResponse = await apiClient.get('/user/myself', {
      headers: { Authorization: `Bearer ${response.data.access_token}` },
    });

    const encodedUser = Buffer.from(JSON.stringify(userResponse.data)).toString('base64');

    res.cookies.set('user', encodedUser, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      expires: accessTokenExpires,
      sameSite: 'strict',
    });

    return res;
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;
    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'Signin failed';

    return NextResponse.json({ error: message }, { status });
  }
}
