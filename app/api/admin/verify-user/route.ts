
import { NextResponse } from 'next/server';
import { database } from '@/lib/firebase';
import { ref, get, set, update } from 'firebase/database';

const PERMANENT_ADMIN_KEY = '9836';

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

    // Store user in Firebase
    const userRef = ref(database, `users/${phoneNumber}`);
    await set(userRef, {
      phoneNumber,
      verified: verified !== undefined ? verified : true,
      verifiedAt: new Date().toISOString()
    });

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
    // Fetch all users from Firebase
    const usersRef = ref(database, 'users');
    const snapshot = await get(usersRef);
    
    const users = snapshot.exists() ? snapshot.val() : {};

    return NextResponse.json({
      status: 'success',
      users
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
