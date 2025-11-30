
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  return NextResponse.json(
    { status: 'error', message: 'Admin verify-user disabled: Firebase removed from project' },
    { status: 410 }
  );
}

export async function GET(request: Request) {
  return NextResponse.json(
    { status: 'error', message: 'Admin verify-user disabled: Firebase removed from project' },
    { status: 410 }
  );
}
