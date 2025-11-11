'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

export default function RealTimeStats() {
  const [totalSessions, setTotalSessions] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/sessions', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        if (response.ok) {
          const data = await response.json();
          console.log('Real-time stats updated:', data);
          setTotalSessions(data.total || 0);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setLoading(false);
      }
    };

    // Fetch immediately
    fetchStats();

    // Refresh every 10 seconds for more real-time updates
    const interval = setInterval(fetchStats, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {loading ? (
          <span className="animate-pulse">--</span>
        ) : (
          <span>{totalSessions}+</span>
        )}
      </div>
      <div className="text-muted-foreground">Active Deployments</div>
    </motion.div>
  );
}