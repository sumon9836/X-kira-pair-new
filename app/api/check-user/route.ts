
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(
    { status: 'error', message: 'User check disabled: Firebase removed from project' },
    { status: 410 }
  );
}
