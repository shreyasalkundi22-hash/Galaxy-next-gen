import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, GraduationCap, Sparkles, ChevronRight, Heart, Star, Compass, Info, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO, HERO_IMAGES } from '../data/schoolData';

export default function Hero({ onOpenAdmissions }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <section id="hero" className="relative min-h-[94vh] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden flex items-center">
      {/* Background Organic Mesh & Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-purple-300/30 via-amber-200/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-purple-200/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none transform -translate-x-1/4 translate-y-1/4" />
      
      {/* Floating Star Badges */}
      <div className="absolute top-28 left-12 text-amber-400/70 animate-float-slow hidden md:block">
        <Star className="w-8 h-8 fill-amber-300" />
      </div>
      <div className="absolute top-48 right-20 text-purple-400/70 animate-float-medium hidden md:block">
        <Sparkles className="w-10 h-10" />
      </div>
      <div className="absolute bottom-24 left-1/3 text-pink-400/60 animate-float-slow hidden md:block">
        <Heart className="w-6 h-6 fill-pink-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Brand, Updated Headline, Actions */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            {/* Prominent Official School Logo Presentation */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 shadow-md border border-purple-200/80 mb-6 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 shadow-xs border border-purple-200 flex items-center justify-center shrink-0">
                <img
                  src="/logo.jpg"
                  alt={SCHOOL_INFO.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-black tracking-widest text-[#161E54] uppercase whitespace-nowrap">
                  GALAXY NEXT GEN
                </span>
                <span className="text-[10px] font-extrabold tracking-wider text-[#7B2CBF] uppercase whitespace-nowrap">
                  PRE-PRIMARY SCHOOL
                </span>
              </div>
            </motion.div>

            {/* Editorial Heading Structure with exact requested tagline: "A foundation for future." */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] font-display">
              <span className="block text-[#161E54]">GALAXY NEXT GEN</span>
              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] via-[#A12568] to-[#D97706] italic font-normal text-3xl sm:text-4xl lg:text-5xl pt-1">
                "A foundation for future."
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {SCHOOL_INFO.heroSubtitle}
            </p>

            {/* Location & Quick Contact Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-950 border border-purple-200/80 text-xs font-bold shadow-xs">
                <MapPin className="w-4 h-4 text-[#7B2CBF]" />
                <span>{SCHOOL_INFO.shortLocation}</span>
              </div>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-950 border border-amber-300/80 text-xs font-bold hover:bg-amber-200/80 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700 fill-amber-500" />
                <span>Call Us: {SCHOOL_INFO.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenAdmissions}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-purple-900/25 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Admission Enquiry</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href="#about"
                onClick={scrollToExplore}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/90 hover:bg-white text-slate-800 font-bold text-sm sm:text-base border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#7B2CBF] group-hover:rotate-45 transition-transform duration-300" />
                <span>Explore Our School</span>
              </a>
            </div>

            {/* Stock Visuals Disclaimer Pill */}
            <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 text-slate-500 text-[11px] font-medium border border-slate-200">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Stock learning visuals shown • Official school photos updating soon</span>
            </div>
          </motion.div>

          {/* Right Hero Column: Interactive Glass Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Backdrop Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#7B2CBF] via-[#F59E0B] to-[#A12568] opacity-25 blur-2xl animate-pulse-glow" />

              {/* Main Image Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-[350px] sm:h-[430px] w-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      src={HERO_IMAGES[activeImageIndex].url}
                      alt={HERO_IMAGES[activeImageIndex].caption}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-xs sm:text-sm font-bold tracking-wide flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{HERO_IMAGES[activeImageIndex].caption}</span>
                    </p>
                  </div>
                </div>

                {/* Slider Dots */}
                <div className="absolute top-4 right-4 flex gap-1.5 bg-slate-950/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  {HERO_IMAGES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeImageIndex ? 'w-6 bg-amber-400' : 'w-2 bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Pill Cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-0 sm:-bottom-6 sm:-left-2 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3 hidden sm:flex z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7B2CBF] flex items-center justify-center font-bold text-lg">
                  🌟
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Holistic Care</h4>
                  <p className="text-[10px] text-slate-500 font-medium">A foundation for future</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 right-0 sm:-top-6 sm:-right-2 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3 hidden sm:flex z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                  🎨
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Creative Learning</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Karate • Yoga • Music</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
