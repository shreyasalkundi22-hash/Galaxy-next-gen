import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, GraduationCap, Sparkles, ChevronRight, Heart, Star, Compass, Info, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
import { SCHOOL_INFO, HERO_IMAGES } from '../data/schoolData';
import logoImg from '../assets/logo.jpg';

export default function Hero({ onOpenAdmissions }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (y / rect.height) * 15, y: (-x / rect.width) * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollToExplore = (e) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="hero" className="relative min-h-[96vh] pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden flex items-center bg-gradient-to-b from-[#FAF8F5] via-[#F4F0EA] to-[#FAF8F5]">
      {/* Dynamic Aurora Ambient Mesh */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/20 via-sky-400/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/4 translate-y-1/4" />

      {/* Floating Constellation Stars & Sparkles */}
      <div className="absolute top-28 left-12 text-amber-400/80 animate-float-slow hidden md:block">
        <Star className="w-8 h-8 fill-amber-400" />
      </div>
      <div className="absolute top-44 right-24 text-indigo-500/80 animate-float-medium hidden md:block">
        <Sparkles className="w-10 h-10" />
      </div>
      <div className="absolute bottom-28 left-1/3 text-pink-500/70 animate-float-slow hidden md:block">
        <Heart className="w-7 h-7 fill-pink-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Standalone Emblem Logo with Animated Orbit Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8 group"
            >
              <div className="absolute -inset-3 rounded-full border border-dashed border-indigo-400/60 animate-orbit pointer-events-none" />
              <img
                src={logoImg}
                alt={SCHOOL_INFO.name}
                className="w-20 sm:w-24 md:w-28 h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Editorial Staggered Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] font-display">
              <span className="inline-block overflow-hidden mr-3">
                <motion.span custom={1} variants={wordVariants} initial="hidden" animate="visible" className="inline-block text-[#1E1B4B]">
                  GALAXY
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden">
                <motion.span custom={2} variants={wordVariants} initial="hidden" animate="visible" className="inline-block text-[#4F46E5]">
                  NEXT GEN
                </motion.span>
              </span>
              <span className="mt-3 block text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#D97706] italic font-normal text-3xl sm:text-5xl lg:text-6xl pt-1">
                "Where little minds begin big journeys."
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              A joyful, creative universe for curious minds, creative hearts, and confident futures on Sulla Road, Hubli.
            </motion.p>

            {/* Location & Call Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/90 text-indigo-950 border border-indigo-200 text-xs font-extrabold shadow-xs">
                <MapPin className="w-4 h-4 text-[#4F46E5]" />
                <span>{SCHOOL_INFO.shortLocation}</span>
              </div>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-950 border border-amber-300 text-xs font-extrabold hover:bg-amber-200 transition-colors shadow-xs"
                data-cursor="CALL"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700 fill-amber-500" />
                <span>Call Us: {SCHOOL_INFO.phone}</span>
              </a>
            </motion.div>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenAdmissions}
                data-cursor="EXPLORE"
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#1E1B4B] via-[#4F46E5] to-[#D97706] text-white font-black text-sm sm:text-base shadow-xl shadow-indigo-900/30 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer border border-white/20"
              >
                <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>EXPLORE OUR WORLD</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#about"
                onClick={scrollToExplore}
                data-cursor="DISCOVER"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/90 hover:bg-white text-slate-900 font-extrabold text-sm sm:text-base border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#4F46E5] group-hover:rotate-45 transition-transform" />
                <span>Explore School</span>
              </a>
            </motion.div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 text-slate-500 text-[11px] font-medium border border-slate-200">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Stock learning visuals shown • Official school photos updating soon</span>
            </div>
          </div>

          {/* Right Hero Column: 3D Tilting Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#4F46E5] via-[#F59E0B] to-[#EC4899] opacity-30 blur-2xl animate-pulse-glow" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-[370px] sm:h-[450px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={HERO_IMAGES[activeImageIndex].url}
                      alt={HERO_IMAGES[activeImageIndex].caption}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover"
                      data-cursor="VIEW"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-xs sm:text-sm font-bold tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{HERO_IMAGES[activeImageIndex].caption}</span>
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex gap-1.5 bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                  {HERO_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeImageIndex ? 'w-6 bg-amber-400' : 'w-2.5 bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Pill Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 left-0 sm:-bottom-6 sm:-left-2 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-indigo-100 flex items-center gap-3 hidden sm:flex z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#4F46E5] flex items-center justify-center font-bold text-lg">
                  🌟
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Holistic Care</h4>
                  <p className="text-[10px] text-slate-500 font-medium">A universe of possibilities</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 right-0 sm:-top-6 sm:-right-2 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3 hidden sm:flex z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                  🚀
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Galaxy Explorer</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Play • Learn • Discover</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
