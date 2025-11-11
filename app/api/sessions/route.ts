
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
  const debug = {
    apiUrl: process.env.NEXT_PUBLIC_API || "NOT_SET",
    apiProUrl: process.env.NEXT_PUBLIC_API_PRO || "NOT_SET",
    apiResponse: null as any,
    apiProResponse: null as any,
  };
  
  const apiUrl = process.env.NEXT_PUBLIC_API || "";
  const apiProUrl = process.env.NEXT_PUBLIC_API_PRO || "";

  console.log('Fetching sessions from:', { apiUrl, apiProUrl });

  // Fetch from regular API
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/sessions`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-cache'
      });
      console.log('API response status:', response.status);
      if (response.ok) {
        const data: SessionsResponse = await response.json();
        console.log('API data:', data);
        debug.apiResponse = data;
        total += data.total || 0;
      } else {
        const text = await response.text();
        console.warn('API response not OK:', response.status, text);
      }
    } catch (error) {
      console.error('API endpoint error:', apiUrl, error);
    }
  } else {
    console.warn('NEXT_PUBLIC_API not set');
  }

  // Fetch from PRO API
  if (apiProUrl) {
    try {
      const response = await fetch(`${apiProUrl}/sessions`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-cache'
      });
      console.log('API PRO response status:', response.status);
      if (response.ok) {
        const data: SessionsResponse = await response.json();
        console.log('API PRO data:', data);
        debug.apiProResponse = data;
        total += data.total || 0;
      } else {
        const text = await response.text();
        console.warn('API PRO response not OK:', response.status, text);
      }
    } catch (error) {
      console.error('API PRO endpoint error:', apiProUrl, error);
    }
  } else {
    console.warn('NEXT_PUBLIC_API_PRO not set');
  }

  console.log('Total sessions:', total);
  return NextResponse.json({ total, debug });
}
