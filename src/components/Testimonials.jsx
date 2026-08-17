import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
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
    <section className="py-24 sm:py-32 bg-[#161E54] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7B2CBF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-widest mb-8 border border-amber-400/30"
        >
          <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span>Parent Trust & Reviews</span>
        </motion.div>

        {/* Large Quotation Icon */}
        <div className="mb-6 inline-flex p-4 rounded-full bg-white/10 backdrop-blur-md text-amber-400">
          <Quote className="w-10 h-10" />
        </div>

        {/* Testimonial Content Slider */}
        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-3xl font-medium font-sans italic text-slate-100 leading-relaxed max-w-3xl mx-auto">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>

              <div>
                <h4 className="text-lg sm:text-xl font-extrabold font-display text-white">
                  {TESTIMONIALS[activeIndex].name}
                </h4>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-widest mt-1">
                  Parent of {TESTIMONIALS[activeIndex].child} ({TESTIMONIALS[activeIndex].program})
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/30'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
