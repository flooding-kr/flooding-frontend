import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function PATCH(request: Request) {
  const refreshToken = cookies().get('refreshToken')?.value;
  console.log(refreshToken);

  try {
    const response = await apiClient.patch(
      '/auth/re-issue',
      {},
      {
        headers: {
          'Refresh-Token': refreshToken,
        },
      }
    );

    const accessTokenExpires = new Date(`${response.data.access_token_expired_at}+09:00`);
    const refreshTokenExpires = new Date(`${response.data.refresh_token_expired_at}+09:00`);

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
    const message = axiosError.response?.data?.reason || 'Re-issue failed';

    return NextResponse.json({ error: message }, { status });
  }
}
