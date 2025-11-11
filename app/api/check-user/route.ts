import { NextResponse } from 'next/server';
import { getDatabase, ref, get } from 'firebase/database';
import { app } from '@/lib/firebase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const phoneNumber = searchParams.get('phoneNumber');
  
  if (!phoneNumber) {
    return NextResponse.json(
      { status: 'error', message: 'Phone number is required' },
      { status: 400 }
    );
  }

  try {
    const database = getDatabase(app);
    const userRef = ref(database, `users/${phoneNumber}`);
    const snapshot = await get(userRef);
    
    if (snapshot.exists()) {
      const userData = snapshot.val();
      return NextResponse.json({
        status: 'success',
        verified: userData.verified || false,
        data: userData
      });
    } else {
      return NextResponse.json({
        status: 'success',
        verified: false,
        message: 'User not found'
      });
    }
  } catch (error) {
    console.error('Firebase error:', error);
    // Return unverified status on any error (including permission denied)
    // This will trigger WhatsApp redirect in the frontend
    return NextResponse.json({
      status: 'error',
      verified: false,
      message: 'Verification check failed - please contact admin'
    });
  }
}
