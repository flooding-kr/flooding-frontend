import { NextRequest, NextResponse } from 'next/server';

import { apiClient } from '@/shared/libs/apiClient';

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  try {
    const response = await apiClient.post(`/clubs/${id}/open`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error opening club:', error);
    return NextResponse.json({ success: false, error: 'Failed to open club' });
  }
}
