'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PairPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pairCode, setPairCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGetPairCode = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid phone number with country code');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulated pairing - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      const code = Math.random().toString(36).substring(2, 10).toUpperCase();
      setPairCode(code);
    } catch (err) {
      setError('Failed to generate pair code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-5xl font-bold thunder mb-2">
              <span className="text-gradient">x-kira</span>
              <span className="text-indigo-500">.</span>
            </h1>
          </Link>
          <p className="text-muted-foreground">Pair your WhatsApp number</p>
        </div>

        <div className="card-hover rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number (with country code)
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1234567890"
                className="input-field"
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="error-red p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {pairCode && (
              <div className="pair-code-display">
                <p className="text-sm text-muted-foreground mb-2">Your Pair Code:</p>
                <p className="text-3xl font-bold font-mono tracking-wider">{pairCode}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Open WhatsApp → Settings → Linked Devices → Link a Device → Enter this code
                </p>
              </div>
            )}

            <button
              onClick={handleGetPairCode}
              disabled={isLoading}
              className="glow-button w-full px-6 py-3 rounded-lg font-semibold"
            >
              {isLoading ? 'Generating...' : 'Get Pair Code'}
            </button>

            <Link
              href="/"
              className="secondary-button w-full px-6 py-3 rounded-lg font-semibold block text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}