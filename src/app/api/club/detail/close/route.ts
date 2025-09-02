import { NextRequest, NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  try {
    const response = await apiClient.post(`/clubs/${id}/close`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error closing club:', error);
    return NextResponse.json({ success: false, error: 'Failed to close club' });
  }
}
