import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { homebaseGroupId: string } }
) {
  const { homebaseGroupId } = params;
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    const response = await apiClient.delete(`/homebase/${homebaseGroupId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      const message = error.response?.data?.message || 'Unknown error';
      return NextResponse.json({ error: message }, { status: status || 500 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
