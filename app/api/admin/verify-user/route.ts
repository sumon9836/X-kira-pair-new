
import { NextResponse } from 'next/server';

const PERMANENT_ADMIN_KEY = '9836';

// In-memory storage for verified users
const verifiedUsers: Record<string, {
  phoneNumber: string;
  verified: boolean;
  verifiedAt: string;
}> = {};

export async function POST(request: Request) {
  try {
    const adminKey = request.headers.get('x-admin-key');

    if (!adminKey || adminKey !== PERMANENT_ADMIN_KEY) {
      return NextResponse.json(
        { status: 'error', message: 'Key not matching' },
        { status: 401 }
      );
    }

    const { phoneNumber, verified } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { status: 'error', message: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Store or update user verification status
    verifiedUsers[phoneNumber] = {
      phoneNumber,
      verified: verified !== undefined ? verified : true,
      verifiedAt: new Date().toISOString()
    };

    return NextResponse.json({
      status: 'success',
      message: `User ${phoneNumber} has been ${verified ? 'verified' : 'unverified'}`
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to verify user' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const adminKey = request.headers.get('x-admin-key');

  if (!adminKey || adminKey !== PERMANENT_ADMIN_KEY) {
    return NextResponse.json(
      { status: 'error', message: 'Key not matching' },
      { status: 401 }
    );
  }

  try {
    return NextResponse.json({
      status: 'success',
      users: verifiedUsers
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
