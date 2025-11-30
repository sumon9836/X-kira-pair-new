
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if this is first visit or refresh
    const hasVisited = sessionStorage.getItem('hasVisited');
    setIsFirstVisit(!hasVisited);
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Mark as visited for this session
      sessionStorage.setItem('hasVisited', 'true');
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`fixed inset-0 flex items-center justify-center overflow-hidden ${
            isFirstVisit ? 'z-[100]' : 'z-[200]'
          }`}
        >
          {/* Base black background */}
          <div className="absolute inset-0 bg-black" />

          {/* Animated gradient orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 0.8, 1],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/25 rounded-full blur-[100px]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0.25, 0.45, 0.25],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]"
          />

          {/* Floating particles */}
          {isMounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: 0
              }}
              animate={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: [0, 0.6, 0],
              }}
              transition={{ 
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full blur-[1px]"
            />
          ))}

          {/* Grid pattern overlay with blur */}
          <div className="absolute inset-0 opacity-10 blur-[2px]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />

          {/* Content with backdrop blur */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="relative z-10 text-center backdrop-blur-sm bg-black/20 p-12 rounded-3xl border border-blue-500/10"
          >
            {/* Logo */}
            <motion.div
              initial={{ letterSpacing: '0.15em', filter: 'blur(10px)' }}
              animate={{ letterSpacing: '0em', filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className="text-8xl md:text-9xl font-bold thunder mb-4 relative">
                <motion.span
                  animate={{ 
                    textShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 0 40px rgba(59, 130, 246, 0.8)',
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent inline-block"
                >
                  x - k i r a
                </motion.span>
                <motion.span
                  initial={{ scale: 0, rotate: -180, filter: 'blur(5px)' }}
                  animate={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.4, duration: 0.6, ease: 'backOut' }}
                  className="text-blue-400 inline-block"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))'
                  }}
                >
                  .
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-blue-300/80 text-sm tracking-widest uppercase mb-10 font-light"
            >
              WhatsApp Bot Platform
            </motion.p>

            {/* Loading dots with glow */}
            <div className="flex gap-3 justify-center mb-8">
              {[0, 0.15, 0.3].map((delay, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -15, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    delay,
                    ease: 'easeInOut'
                  }}
                  className="w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"
                  style={{
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)'
                  }}
                />
              ))}
            </div>

            {/* Progress bar with glow */}
            <div className="w-72 h-1.5 bg-blue-950/50 rounded-full overflow-hidden mx-auto backdrop-blur-sm border border-blue-500/20">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full relative"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
                }}
              >
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-blue-300/60 text-xs mt-4 font-mono"
            >
              {progress}%
            </motion.p>
          </motion.div>

          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full blur-[1px]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-500/5 rounded-full blur-[2px]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
