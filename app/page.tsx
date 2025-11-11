'use client';

import Link from 'next/link';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import RealTimeStats from './components/RealTimeStats'; // Added import

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <LoadingScreen />
      <CustomCursor />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="border border-neutral-600 rounded-full flex items-center justify-center"></div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="nav-link text-sm font-medium">Features</a>
              <a href="#getting-started" className="nav-link text-sm font-medium">Get Started</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-grid py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="animate-fade-in max-w-4xl mx-auto">
              <h1 className="text-[6em] md:text-[8em] mb-6 mt-16 thunder">
                <span className="text-gradient">x-kira</span><span className="text-indigo-500">.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-14 text-muted-foreground max-w-2xl mx-auto font-light">
                Free WhatsApp Bot with advanced features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/pair-pro" className="glow-button px-8 py-3 rounded-lg font-semibold text-lg tracking-tight">
                  pair x-kira pro
                </Link>
                <Link href="/pair" className="secondary-button font-semibold px-8 py-3 rounded-lg tracking-tight text-lg">
                  pair x-kira
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold mb-4">Built for performance</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enterprise-grade features with developer-first experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-hover rounded-lg p-6">
                <div className="feature-icon w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground text-sm">Optimized for speed with minimal resource usage</p>
              </div>

              <div className="card-hover rounded-lg p-6">
                <div className="feature-icon w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Multi-Device</h3>
                <p className="text-muted-foreground text-sm">Full WhatsApp Web multi-device support</p>
              </div>

              <div className="card-hover rounded-lg p-6">
                <div className="feature-icon w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Plugin System</h3>
                <p className="text-muted-foreground text-sm">Extensible architecture with custom plugins</p>
              </div>

              <div className="card-hover rounded-lg p-6">
                <div className="feature-icon w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Group Management</h3>
                <p className="text-muted-foreground text-sm">Advanced admin tools and moderation</p>
              </div>

              <div className="card-hover rounded-lg p-6">
                <div className="feature-icon w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Media Downloads</h3>
                <p className="text-muted-foreground text-sm">Built-in media processing and downloads</p>
              </div>

              <div className="card-hover rounded-lg p-6">
                <div className="feature-icon w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Configurable</h3>
                <p className="text-muted-foreground text-sm">Flexible commands and extensive configuration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-24 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get started in seconds</h2>
              <p className="text-xl text-muted-foreground">Three simple steps to deploy your bot</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">1</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Generate pair code</h3>
                  <p className="text-muted-foreground">Click x-kira pair button enter your WhatsApp number with country code</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">2</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">How to link device</h3>
                  <p className="text-muted-foreground">Go to your WhatsApp click 3 dots, click link device, paste your code</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">3</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Successful pair</h3>
                  <p className="text-muted-foreground">Type .menu to see all features</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 border-t border-border">
          <div className="container mx-auto px-6">
            {/* Render the RealTimeStats component here */}
            <RealTimeStats />
            <div className="grid md:grid-cols-3 gap-8 text-center mt-8"> {/* Added mt-8 for spacing */}
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-muted-foreground">Built-in Features</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-black font-bold text-xs">X</span>
                  </div>
                  <span className="font-semibold">X-kira MD</span>
                </div>
                <p className="text-muted-foreground text-sm">Advanced WhatsApp bot framework for developers.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Product</h3>
                <div className="space-y-2 text-sm">
                  <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">Features</a>
                  <a href="#getting-started" className="block text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
                  <a href="https://github.com/sumon9836" className="block text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">&copy; 2025 x-kira-MD.</p>
              <p className="text-muted-foreground text-sm mt-2 md:mt-0">Built for the developer community</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}