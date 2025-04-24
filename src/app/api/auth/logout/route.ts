import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function POST() {
  const cookieStore = cookies();

  cookieStore.delete('user');
  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');
  return NextResponse.json({ message: 'Logged out successfully' });
}
