import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function PATCH() {
  try {
    const refreshToken = cookies().get('refreshToken')?.value;
    if (!refreshToken) {
      return NextResponse.json({ error: 'No refresh token found' }, { status: 401 });
    }

    const response = await apiClient.patch(
      '/auth/re-issue',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || 'Signin failed';
      return NextResponse.json({ error: message }, { status });
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
