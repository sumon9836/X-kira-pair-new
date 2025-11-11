'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onAnimationComplete={(definition) => {
            if (definition === "exit") {
              console.log("Loading screen exited");
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated background gradient */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent"
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 hero-grid opacity-30" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-center relative z-10"
          >
            {/* Logo with enhanced styling */}
            <motion.div
              initial={{ letterSpacing: '0.1em' }}
              animate={{ letterSpacing: '0em' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-7xl md:text-8xl font-bold thunder mb-6 relative">
                <span className="text-gradient inline-block">x-kira</span>
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: 'backOut' }}
                  className="text-indigo-500 inline-block"
                >
                  .
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground text-sm tracking-wider uppercase mb-8 font-light"
            >
              WhatsApp Bot Platform
            </motion.p>

            {/* Enhanced loading dots */}
            <div className="flex gap-2.5 justify-center mb-6">
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.8, 
                  delay: 0,
                  ease: 'easeInOut'
                }}
                className="w-2.5 h-2.5 bg-gradient-to-br from-white to-indigo-300 rounded-full shadow-lg shadow-white/20"
              />
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.8, 
                  delay: 0.15,
                  ease: 'easeInOut'
                }}
                className="w-2.5 h-2.5 bg-gradient-to-br from-white to-indigo-300 rounded-full shadow-lg shadow-white/20"
              />
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.8, 
                  delay: 0.3,
                  ease: 'easeInOut'
                }}
                className="w-2.5 h-2.5 bg-gradient-to-br from-white to-indigo-300 rounded-full shadow-lg shadow-white/20"
              />
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-muted/30 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}