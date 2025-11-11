
import { NextResponse } from 'next/server';

interface Session {
  connected: boolean;
  user: string;
  jid: string;
  healthy: boolean;
}

interface SessionsResponse {
  total: number;
  healthy: number;
  sessions: Record<string, Session>;
}

export async function GET() {
  let total = 0;
  let apiCount = 0;
  let apiProCount = 0;
  
  const apiUrl = process.env.NEXT_PUBLIC_API || "";
  const apiProUrl = process.env.NEXT_PUBLIC_API_PRO || "";

  console.log('📊 Fetching real-time sessions...');

  // Fetch from regular API
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/sessions`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-store',
        next: { revalidate: 0 }
      });
      
      if (response.ok) {
        const data: SessionsResponse = await response.json();
        apiCount = data.total || 0;
        total += apiCount;
        console.log(`✅ API: ${apiCount} sessions`);
      } else {
        console.warn(`⚠️ API response: ${response.status}`);
      }
    } catch (error) {
      console.error('❌ API error:', error);
    }
  }

  // Fetch from PRO API
  if (apiProUrl) {
    try {
      const response = await fetch(`${apiProUrl}/sessions`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-store',
        next: { revalidate: 0 }
      });
      
      if (response.ok) {
        const data: SessionsResponse = await response.json();
        apiProCount = data.total || 0;
        total += apiProCount;
        console.log(`✅ API PRO: ${apiProCount} sessions`);
      } else {
        console.warn(`⚠️ API PRO response: ${response.status}`);
      }
    } catch (error) {
      console.error('❌ API PRO error:', error);
    }
  }

  console.log(`🎯 TOTAL SESSIONS: ${total} (API: ${apiCount} + PRO: ${apiProCount})`);
  
  return NextResponse.json(
    { 
      total,
      breakdown: {
        api: apiCount,
        apiPro: apiProCount
      },
      timestamp: new Date().toISOString()
    },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }
  );
}
