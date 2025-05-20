import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function POST(request: Request) {
  const formData = await request.formData();
  const images = formData.getAll('images');

  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  console.log('이미지 수:', images.length);
  console.log(
    '파일 이름들:',
    images.map((img: any) => img.name)
  );

  const data = new FormData();
  images.forEach(img => data.append('images', img));

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/file/image`, data, {
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ reason: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.reason || 'Upload failed';

    console.error('Upload Error:', axiosError);

    return NextResponse.json({ error: message }, { status });
  }
}
