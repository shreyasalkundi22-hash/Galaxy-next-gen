import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import logoImg from '../assets/logo.jpg';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 350);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 10;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090E17] text-white px-4 overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4F46E5]/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

          {/* Logo & Orbit System */}
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border border-dashed border-amber-400/50 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-400 shadow-md shadow-amber-400/60 flex items-center justify-center">
                <Star className="w-2.5 h-2.5 text-slate-950 fill-slate-950" />
              </div>
            </motion.div>

            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white p-2 shadow-2xl shadow-indigo-950/80 border-2 border-amber-400 flex items-center justify-center relative overflow-hidden">
              <img
                src={logoImg}
                alt={SCHOOL_INFO.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* School Name */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl sm:text-3xl font-extrabold tracking-widest font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-indigo-200 uppercase text-center"
          >
            GALAXY NEXT GEN
          </motion.h2>

          <p className="mt-2 text-xs text-indigo-200/80 font-medium italic tracking-wider">
            A universe of possibilities
          </p>

          {/* Sleek Progress Bar (No Numbers) */}
          <div className="mt-10 w-48 sm:w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/60 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-400 via-indigo-500 to-pink-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
