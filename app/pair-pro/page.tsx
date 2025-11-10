'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PairProPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [pairCode, setPairCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePair = async () => {
    if (!phoneNumber) {
      setError('Please enter your phone number');
      return;
    }

    setLoading(true);
    setError('');
    setPairCode('');
    setSuccess(false);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_PRO || 'http://ballast.proxy.rlwy.net:11473';
      const response = await fetch(`${apiUrl}/pair?code=${phoneNumber}`);
      const data = await response.json();

      if (data.status === 'success') {
        setPairCode(data.code);
        setSuccess(true);
      } else if (data.status === 'error') {
        if (data.message === 'This number is blocked') {
          setError('blocked');
        } else if (data.message === 'This number is already connected' || data.connected) {
          setError('connected');
        } else {
          setError(data.message || 'An error occurred');
        }
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyCode = () => {
    if (pairCode) {
      navigator.clipboard.writeText(pairCode);
      alert('Code copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-2">
              <span className="text-black font-bold text-xs">X</span>
            </div>
            <span className="font-semibold">X-kira MD</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">X-kira</span> <span className="text-indigo-500">Pro</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Enter your WhatsApp number to get your PRO pairing code
              </p>
            </div>

            <div className="card-hover rounded-lg p-8">
              {!success && !error && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number (with country code)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g., 917074029156"
                      className="input-field"
                      disabled={loading}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Enter your number without + or spaces (e.g., 917074029156)
                    </p>
                  </div>

                  <button
                    onClick={handlePair}
                    disabled={loading}
                    className="glow-button w-full px-6 py-3 rounded-lg font-semibold text-lg"
                  >
                    {loading ? 'Generating...' : 'Get PRO Pair Code'}
                  </button>
                </div>
              )}

              {success && pairCode && (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="success-green rounded-lg p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold mb-2">PRO Pair Code Generated!</h2>
                    <p className="text-sm mb-4">Enter this code in WhatsApp: Link a Device</p>
                    <div className="bg-black/30 rounded-lg p-4 mb-4">
                      <p className="text-4xl font-mono font-bold tracking-wider">{pairCode}</p>
                    </div>
                    <button
                      onClick={copyCode}
                      className="glow-button px-6 py-2 rounded-lg font-semibold"
                    >
                      <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy Code
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setPairCode('');
                      setPhoneNumber('');
                    }}
                    className="secondary-button px-6 py-2 rounded-lg font-semibold"
                  >
                    Generate Another Code
                  </button>
                </div>
              )}

              {error === 'blocked' && (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="error-red rounded-lg p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h2 className="text-2xl font-bold mb-2">Number Blocked</h2>
                    <p className="text-lg">You are blocked. Please contact the developer.</p>
                  </div>
                  <button
                    onClick={() => {
                      setError('');
                      setPhoneNumber('');
                    }}
                    className="secondary-button px-6 py-2 rounded-lg font-semibold"
                  >
                    Try Another Number
                  </button>
                </div>
              )}

              {error === 'connected' && (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold mb-2">Already Connected</h2>
                    <p className="text-lg">This number is already connected. Please logout from your bot and try again.</p>
                  </div>
                  <button
                    onClick={() => {
                      setError('');
                      setPhoneNumber('');
                    }}
                    className="secondary-button px-6 py-2 rounded-lg font-semibold"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {error && error !== 'blocked' && error !== 'connected' && (
                <div className="text-center space-y-6 animate-fade-in">
                  <div className="error-red rounded-lg p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <h2 className="text-2xl font-bold mb-2">Error</h2>
                    <p className="text-lg">{error}</p>
                  </div>
                  <button
                    onClick={() => {
                      setError('');
                      setPhoneNumber('');
                    }}
                    className="secondary-button px-6 py-2 rounded-lg font-semibold"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Need help? Check out our{' '}
                <a href="/#getting-started" className="text-indigo-400 hover:underline">
                  getting started guide
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
