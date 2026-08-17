import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

export default function GalaxyScrollbar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('01 / HOME');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const scrollTimeoutRef = useRef(null);
  const trackRef = useRef(null);

  const sections = [
    { id: 'hero', label: '01 / HOME' },
    { id: 'about', label: '02 / ABOUT' },
    { id: 'our-world', label: '03 / OUR WORLD' },
    { id: 'programs', label: '04 / PROGRAMS' },
    { id: 'activities', label: '05 / ACTIVITIES' },
    { id: 'facilities', label: '06 / FACILITIES' },
    { id: 'faculty', label: '07 / FACULTY' },
    { id: 'gallery', label: '08 / GALLERY' },
    { id: 'admissions', label: '09 / ADMISSIONS' },
    { id: 'contact', label: '10 / CONTACT' },
  ];

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const percent = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollPercent(percent);
        setIsCompleted(percent >= 98.5);
      }

      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1200);

      // Detect active section
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].label);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleTrackClick = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const percentage = Math.min(1, Math.max(0, clickY / rect.height));
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: percentage * totalHeight,
      behavior: 'smooth'
    });
  };

  if (isTouchDevice) return null;

  const visible = isScrolling || isHovered;

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-3 sm:right-4 top-10 bottom-10 w-6 z-[9990] flex items-center justify-center cursor-pointer pointer-events-auto select-none"
      data-cursor="SCROLL"
    >
      {/* Subtle Orbital Path */}
      <div className="w-1 h-full bg-slate-400/20 backdrop-blur-md rounded-full relative overflow-hidden border border-white/20">
        <motion.div
          className="w-full bg-gradient-to-b from-[#F59E0B] via-[#4F46E5] to-[#EC4899] rounded-full"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      {/* Travelling Planet Thumb */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 flex items-center"
        style={{ top: `${scrollPercent}%` }}
        animate={{
          scale: isHovered ? 1.3 : isScrolling ? 1.15 : 1
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        {/* Contextual Section Label */}
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute right-8 whitespace-nowrap px-3 py-1 rounded-full bg-[#1E1B4B]/90 text-amber-300 text-[10px] font-black tracking-widest uppercase backdrop-blur-md border border-amber-400/40 shadow-xl pointer-events-none flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{activeSection}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Orbit Ring */}
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/80 animate-orbit pointer-events-none" />

          {/* Planet Body */}
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[#F59E0B] via-[#4F46E5] to-[#EC4899] shadow-lg shadow-purple-500/60 border border-white flex items-center justify-center">
            <Star className="w-2 h-2 text-slate-950 fill-slate-950" />
          </div>
        </div>

        {/* Completion Burst at 100% Scroll */}
        {isCompleted && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-amber-400/60 blur-xs pointer-events-none"
          />
        )}
      </motion.div>
    </div>
  );
}
