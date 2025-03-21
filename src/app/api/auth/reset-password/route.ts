import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

interface ResetPasswordBody {
  email: string;
  code: string;
  password: string;
}

export async function POST(request: Request) {
  const body: ResetPasswordBody = await request.json();

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/password/reset`,
      body
    );
    return NextResponse.json(response.data);
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;

    const status = axiosError.response?.status || 500;
    const message = axiosError.response?.data?.message || 'Change failed';

    return NextResponse.json({ error: message }, { status });
  }
}
