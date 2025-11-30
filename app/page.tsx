"use client";

import Link from "next/link";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import RealTimeStats from "./components/RealTimeStats";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <AnimatedBackground />
      <CustomCursor />
      <div className="min-h-screen bg-background relative z-10">
        {/* Header */}
        <header
          className="border-b border-white/10 sticky top-0 z-50"
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="container mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="font-semibold text-lg syne">x-kira</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="nav-link text-sm font-medium space-grotesk hover:text-indigo-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#getting-started"
                className="nav-link text-sm font-medium space-grotesk hover:text-indigo-400 transition-colors"
              >
                Get Started
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-grid py-32 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-background/80"></div>

          {/* Floating orbs for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="animate-fade-in max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                  100+ Active Users
                </span>
              </div>
              <h1 className="text-[5em] sm:text-[7em] md:text-[9em] lg:text-[11em] mb-8 mt-4 thunder leading-none">
                <span
                  className="text-gradient inline-block"
                  style={{ textShadow: "0 0 80px rgba(99, 102, 241, 0.3)" }}
                >
                  x-kira
                </span>
              </h1>

              <p className="text-lg md:text-2xl lg:text-3xl mb-4 text-foreground/95 max-w-3xl mx-auto font-light leading-relaxed space-grotesk">
                Free WhatsApp Bot with advanced features
              </p>

              <p className="text-sm md:text-lg mb-12 text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Enterprise-grade automation, multi-device support, and powerful
                plugin system. Get started in seconds with our streamlined
                pairing process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/pair-pro"
                  className="glow-button px-10 py-4 rounded-xl font-semibold text-base tracking-wide uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-white/10"
                >
                  Pair X-Kira Pro
                </Link>
                <Link
                  href="/pair"
                  className="secondary-button font-semibold px-10 py-4 rounded-xl tracking-wide uppercase text-base transition-all duration-300"
                >
                  Pair X-Kira
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 animate-slide-up">
              <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6 backdrop-blur-sm">
                <span className="text-sm font-semibold text-indigo-300 tracking-wide uppercase space-grotesk">
                  Features
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight syne">
                Built for <span className="text-gradient">performance</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Enterprise-grade features with developer-first experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-hover rounded-xl p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  Lightning Fast
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimized for speed with minimal resource usage
                </p>
              </div>

              <div className="card-hover rounded-xl p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  Multi-Device
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full WhatsApp Web multi-device support
                </p>
              </div>

              <div className="card-hover rounded-xl p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  Plugin System
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Extensible architecture with custom plugins
                </p>
              </div>

              <div className="card-hover rounded-xl p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  Group Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced admin tools and moderation
                </p>
              </div>

              <div className="card-hover rounded-xl p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  Media Downloads
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built-in media processing and downloads
                </p>
              </div>

              <div className="card-hover rounded-xl p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition-colors">
                  Configurable
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Flexible commands and extensive configuration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section
          id="getting-started"
          className="py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
        >
          <div className="absolute inset-0 hero-grid opacity-20"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6 backdrop-blur-sm">
                <span className="text-sm font-semibold text-indigo-300 tracking-wide uppercase space-grotesk">
                  Quick Start
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight syne">
                Get started in <span className="text-gradient">seconds</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
                Three simple steps to deploy your bot
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="relative">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-indigo-300 text-black rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 syne">
                      Generate pair code
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Click x-kira pair button and enter your WhatsApp number
                      with country code
                    </p>
                  </div>
                </div>
                {/* Connector line for desktop */}
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-6"></div>
              </div>

              <div className="relative">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-indigo-300 text-black rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 syne">
                      Link your device
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Open WhatsApp, tap the 3 dots menu, select "Link a
                      device", and paste your code
                    </p>
                  </div>
                </div>
                {/* Connector line for desktop */}
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent -translate-x-6"></div>
              </div>

              <div className="relative">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-indigo-300 text-black rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 syne">
                      Start using
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Successfully paired! Type{" "}
                      <code className="px-2 py-1 bg-muted/50 rounded text-sm font-mono">
                        .menu
                      </code>{" "}
                      to explore all features
                    </p>
                  </div>
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
            <div className="grid md:grid-cols-3 gap-8 text-center mt-8">
              {" "}
              {/* Added mt-8 for spacing */}
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
                <p className="text-muted-foreground text-sm">
                  Advanced WhatsApp bot framework for developers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Product</h3>
                <div className="space-y-2 text-sm">
                  <a
                    href="#features"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                  <a
                    href="#getting-started"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                  <a
                    href="https://github.com/sumon9836"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                &copy; 2025 x-kira-MD.
              </p>
              <p className="text-muted-foreground text-sm mt-2 md:mt-0">
                Built for the developer community
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
