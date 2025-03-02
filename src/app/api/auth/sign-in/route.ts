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

    const accessTokenExpires = new Date(`${response.data.access_token_expired_at}Z`);
    const refreshTokenExpires = new Date(`${response.data.refresh_token_expired_at}Z`);

    const res = NextResponse.json(response.data);

    res.cookies.set('accessToken', response.data.access_token, {
      httpOnly: true,
      secure: true,
      expires: accessTokenExpires,
      sameSite: 'strict',
    });

    res.cookies.set('refreshToken', response.data.refresh_token, {
      httpOnly: true,
      secure: true,
      expires: refreshTokenExpires,
      sameSite: 'strict',
    });
    const userResponse = await apiClient.get('/user', {
      headers: { Authorization: `Bearer ${response.data.access_token}` },
    });

    const encodedUser = Buffer.from(JSON.stringify(userResponse.data)).toString('base64');

    res.cookies.set('user', encodedUser, {
      httpOnly: false,
      secure: true,
      expires: accessTokenExpires,
      sameSite: 'strict',
    });

    return res;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.message || 'Signin failed';

    return NextResponse.json({ error: message }, { status });
  }
}
