
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (!code) {
    return NextResponse.json(
      { status: 'error', message: 'Phone number is required' },
      { status: 400 }
    );
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_PRO || "http://ballast.proxy.rlwy.net:11473";
  
  try {
    const response = await fetch(`${apiUrl}/pair?code=${code}`);
    const data = await response.json();
    
    return NextResponse.json(data, { status: response.ok ? 200 : response.status });
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to connect to pairing service' },
      { status: 502 }
    );
  }
}
