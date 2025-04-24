import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name') ?? '';

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    const response = await apiClient.get('/user/student/search', {
      params: { name },
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return NextResponse.json(
        { error: error.response?.data || 'User search failed' },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
