import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Sparkles, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/schoolData';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#7B2CBF] text-xs font-extrabold uppercase tracking-widest mb-4 border border-purple-200"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Visual Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight uppercase"
          >
            LIFE AT GALAXY NEXT GEN
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            A vibrant glimpse into daily learning, playful activities, celebrations, and creative moments.
          </motion.p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveImageIndex(idx)}
              className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer border-4 border-white h-72 sm:h-80"
              data-cursor="EXPLORE"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 p-6 flex flex-col justify-between" />

              <div className="relative z-10 self-end">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold font-display leading-snug">
                  {item.caption}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Fullscreen Lightbox */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 flex flex-col"
            >
              <div className="relative flex-1 overflow-hidden min-h-[300px] sm:min-h-[480px]">
                <img
                  src={GALLERY_IMAGES[activeImageIndex].url}
                  alt={GALLERY_IMAGES[activeImageIndex].caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-slate-900 text-white border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                    {GALLERY_IMAGES[activeImageIndex].category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display">
                    {GALLERY_IMAGES[activeImageIndex].caption}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {activeImageIndex + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
