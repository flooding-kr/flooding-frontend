import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const buildingType = searchParams.get('building') ?? 'MAIN_BUILDING';
  const floor = searchParams.get('floor') ?? 1;
  const accessToken = cookies().get('accessToken')?.value;
  const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined;

  try {
    const response = await apiClient.get(`/classroom`, {
      headers,
      params: {
        buildingType,
        floor,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;
    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || '교실실 정보를 가져오는 데 실패했습니다.';
    return NextResponse.json({ error: message }, { status });
  }
}
