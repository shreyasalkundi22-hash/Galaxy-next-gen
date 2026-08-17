import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Heart, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#090E17] text-white relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#4F46E5]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-widest mb-8 border border-amber-400/30"
        >
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Parent Trust & Reviews</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-purple-300">
          WHAT PARENTS SAY
        </h2>
        <p className="text-xs sm:text-base text-slate-400 font-normal max-w-xl mx-auto mb-16">
          Real stories from happy families at Galaxy Next Gen Pre School, Sulla Road, Hubli.
        </p>

        {/* 3D Stacked Quote Card Deck Slider */}
        <div className="relative max-w-3xl mx-auto h-[320px] sm:h-[340px] flex items-center justify-center">
          {TESTIMONIALS.map((item, idx) => {
            // Compute relative offset from active index
            const offset = (idx - activeIndex + TESTIMONIALS.length) % TESTIMONIALS.length;
            const isActive = offset === 0;
            const isNext = offset === 1 || (offset === -2 && TESTIMONIALS.length === 3);
            const isPrev = offset === TESTIMONIALS.length - 1;

            let zIndex = 10;
            let scale = 0.82;
            let opacity = 0.4;
            let xOffset = 0;
            let rotate = 0;

            if (isActive) {
              zIndex = 30;
              scale = 1;
              opacity = 1;
              xOffset = 0;
              rotate = 0;
            } else if (isNext) {
              zIndex = 20;
              scale = 0.92;
              opacity = 0.75;
              xOffset = 60;
              rotate = 4;
            } else if (isPrev) {
              zIndex = 20;
              scale = 0.92;
              opacity = 0.75;
              xOffset = -60;
              rotate = -4;
            }

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  scale,
                  opacity,
                  x: xOffset,
                  rotate,
                  zIndex
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 180 }}
                onClick={() => setActiveIndex(idx)}
                className={`absolute inset-x-0 p-8 sm:p-10 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border ${
                  isActive ? 'border-amber-400/80 shadow-2xl shadow-purple-900/40 ring-2 ring-amber-400/20' : 'border-slate-800'
                } cursor-pointer text-left flex flex-col justify-between`}
                style={{ top: 0, bottom: 0 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-amber-400/60" />
                  </div>

                  <p className="text-sm sm:text-xl font-medium font-sans italic text-slate-100 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold font-display text-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                      Parent of {item.child} ({item.program})
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-black text-xs flex items-center justify-center">
                    Hubli
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Slider Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700 shadow-md"
            aria-label="Previous review"
            data-cursor="PREV"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2.5">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'w-9 bg-amber-400 shadow-md shadow-amber-400/50' : 'w-3 bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700 shadow-md"
            aria-label="Next review"
            data-cursor="NEXT"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
