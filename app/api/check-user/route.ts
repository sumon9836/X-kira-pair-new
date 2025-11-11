
import { NextResponse } from 'next/server';

// Import the same storage reference (this works because Next.js API routes share memory in dev)
// For production, you'd want to use a proper database
const getVerifiedUsers = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000'}/api/admin/verify-user`, {
      headers: {
        'x-admin-key': '9836'
      }
    });
    const data = await response.json();
    return data.users || {};
  } catch {
    return {};
  }
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const phoneNumber = searchParams.get('phoneNumber');

    if (!phoneNumber) {
      return NextResponse.json(
        { verified: false, message: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Check if user is verified in storage
    const users = await getVerifiedUsers();
    const user = users[phoneNumber];

    return NextResponse.json({
      verified: user ? user.verified : false,
      phoneNumber,
      data: user
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { verified: false, message: 'Failed to check user' },
      { status: 500 }
    );
  }
}
