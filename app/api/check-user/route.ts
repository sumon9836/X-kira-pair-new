
import { NextResponse } from 'next/server';
import { database } from '@/lib/firebase';
import { ref, get } from 'firebase/database';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const phoneNumber = searchParams.get('phoneNumber');

    if (!phoneNumber) {
      return NextResponse.json(
        { status: 'error', message: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Check user in Firebase
    const userRef = ref(database, `users/${phoneNumber}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      return NextResponse.json({
        status: 'error',
        message: 'User not found',
        verified: false
      });
    }

    const userData = snapshot.val();

    return NextResponse.json({
      status: 'success',
      verified: userData.verified === true,
      user: userData
    });
  } catch (error) {
    console.error('Error checking user:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to check user verification status' },
      { status: 500 }
    );
  }
}
