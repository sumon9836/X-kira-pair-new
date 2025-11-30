'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface User {
  phoneNumber: string;
  verified: boolean;
  verifiedAt?: string;
}

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState<Record<string, User>>({});
  const [loading, setLoading] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleLogin = async () => {
    if (!adminKey) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/admin/verify-user', {
        method: 'GET',
        headers: {
          'x-admin-key': adminKey,
        },
      });
      
      const data = await response.json();
      
      if (response.ok && data.status === 'success') {
        sessionStorage.setItem('adminKey', adminKey);
        setIsAuthenticated(true);
        setUsers(data.users || {});
        setMessage('');
      } else {
        setMessage(data.message || 'Key not matching');
        setMessageType('error');
        setIsAuthenticated(false);
      }
    } catch (error) {
      setMessage('Login failed');
      setMessageType('error');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminKey');
    setIsAuthenticated(false);
    setAdminKey('');
    setUsers({});
  };

  const fetchUsers = async () => {
    const key = sessionStorage.getItem('adminKey');
    if (!key) {
      setIsAuthenticated(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/verify-user', {
        method: 'GET',
        headers: {
          'x-admin-key': key,
        },
      });
      const data = await response.json();
      
      if (response.ok && data.status === 'success') {
        setUsers(data.users || {});
        setIsAuthenticated(true);
      } else {
        setMessage('Failed to fetch users');
        setMessageType('error');
        if (response.status === 401) {
          handleLogout();
        }
      }
    } catch (error) {
      setMessage('Error fetching users');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyUser = async (phoneNumber: string, verified: boolean) => {
    const key = sessionStorage.getItem('adminKey');
    if (!key) {
      setIsAuthenticated(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/verify-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': key,
        },
        body: JSON.stringify({
          phoneNumber,
          verified,
        }),
      });

      const data = await response.json();
      
      if (response.ok && data.status === 'success') {
        setMessage(data.message);
        setMessageType('success');
        fetchUsers();
        setNewPhoneNumber('');
      } else {
        setMessage(data.message || 'Failed to update user');
        setMessageType('error');
        if (response.status === 401) {
          handleLogout();
        }
      }
    } catch (error) {
      setMessage('Error updating user');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    if (newPhoneNumber) {
      handleVerifyUser(newPhoneNumber, true);
    }
  };

  useEffect(() => {
    const savedKey = sessionStorage.getItem('adminKey');
    if (savedKey) {
      setAdminKey(savedKey);
      fetchUsers();
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-2">
                <span className="text-black font-bold text-xs">X</span>
              </div>
              <span className="font-semibold">X-kira MD Admin</span>
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Home
            </Link>
          </div>
        </header>

        <section className="py-24 relative overflow-hidden min-h-[80vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">
                  <span className="text-gradient">Admin</span> <span className="text-indigo-500">Panel</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Enter admin key to access user verification
                </p>
              </div>

              <div className="card-hover rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="adminKey" className="block text-sm font-medium mb-2">
                      Admin Key
                    </label>
                    <input
                      id="adminKey"
                      type="password"
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                      placeholder="Enter admin key"
                      className="input-field"
                    />
                  </div>

                  <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="glow-button w-full px-6 py-3 rounded-lg font-semibold text-lg"
                  >
                    {loading ? 'Verifying...' : 'Login'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-2">
              <span className="text-black font-bold text-xs">X</span>
            </div>
            <span className="font-semibold">X-kira MD Admin</span>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchUsers}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              disabled={loading}
            >
              {loading ? 'Refreshing...' : '↻ Refresh'}
            </button>
            <button
              onClick={handleLogout}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              <span className="text-gradient">User</span> Verification
            </h1>

            {message && (
              <div className={`mb-6 p-4 rounded-lg ${messageType === 'success' ? 'bg-green-900/30 border border-green-700 text-green-400' : 'bg-red-900/30 border border-red-700 text-red-400'}`}>
                {message}
              </div>
            )}

            <div className="card-hover rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Add New User</h2>
              <div className="flex gap-4">
                <input
                  type="tel"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  placeholder="Phone number (e.g., 917003816486)"
                  className="input-field flex-1"
                  disabled={loading}
                />
                <button
                  onClick={handleAddUser}
                  disabled={loading || !newPhoneNumber}
                  className="glow-button px-6 py-3 rounded-lg font-semibold"
                >
                  Verify User
                </button>
              </div>
            </div>

            <div className="card-hover rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Verified Users</h2>
              
              {Object.keys(users).length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No users found</p>
              ) : (
                <div className="space-y-4">
                  {Object.entries(users).map(([key, user]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-border">
                      <div className="flex-1">
                        <p className="font-semibold">{user.phoneNumber}</p>
                        <p className="text-sm text-muted-foreground">
                          {user.verified ? '✓ Verified' : '✗ Not Verified'}
                          {user.verifiedAt && ` - ${new Date(user.verifiedAt).toLocaleString()}`}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {!user.verified && (
                          <button
                            onClick={() => handleVerifyUser(user.phoneNumber, true)}
                            disabled={loading}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-sm transition-colors"
                          >
                            Verify
                          </button>
                        )}
                        {user.verified && (
                          <button
                            onClick={() => handleVerifyUser(user.phoneNumber, false)}
                            disabled={loading}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-sm transition-colors"
                          >
                            Unverify
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
