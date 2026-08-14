import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import logoImg from '../assets/logo.jpg';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0D1B2A] text-white px-4"
        >
          {/* Animated Background Mesh Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7B2CBF]/30 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#F59E0B]/20 rounded-full blur-2xl animate-float-slow pointer-events-none" />

          {/* Logo Frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mb-6"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white p-2.5 shadow-2xl shadow-purple-900/50 border border-amber-300/40 flex items-center justify-center overflow-hidden">
              <img
                src={logoImg}
                alt={SCHOOL_INFO.name}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Floating Star Badges */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-3 -right-3 p-1.5 rounded-full bg-amber-400 text-slate-950 shadow-lg"
            >
              <Star className="w-4 h-4 fill-slate-950" />
            </motion.div>
          </motion.div>

          {/* Brand Name */}
          <motion.h2
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-center font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-purple-200"
          >
            {SCHOOL_INFO.name}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 0.85 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-2 text-xs sm:text-sm text-purple-200/90 font-medium text-center italic tracking-wide"
          >
            "{SCHOOL_INFO.tagline}"
          </motion.p>

          {/* Animated Progress Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 w-48 sm:w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-amber-400 via-purple-500 to-pink-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
