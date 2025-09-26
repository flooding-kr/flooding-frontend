import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id') ?? '';

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    const response = await apiClient.get(`/club/${id}`, {
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

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id') ?? '';

    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    await apiClient.delete(`/club/${id}`, {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    return NextResponse.json({ message: 'Club deleted successfully' });
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
