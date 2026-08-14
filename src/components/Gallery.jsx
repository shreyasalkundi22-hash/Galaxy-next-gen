import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Clock, X, Image as ImageIcon, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);

  const previewImages = [
    {
      url: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop",
      title: "Play & Discovery"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      title: "Creative Art Sessions"
    },
    {
      url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
      title: "Storytelling & Literacy"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      title: "Social Interaction"
    },
    {
      url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
      title: "Color & Craft Exploration"
    },
    {
      url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop",
      title: "Early Learning Toys"
    }
  ];

  const handleTriggerModal = () => {
    setModalOpen(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <>
      <section id="gallery" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-4 border border-rose-200"
            >
              <Camera className="w-3.5 h-3.5 text-rose-600" />
              <span>Campus Moments</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
            >
              Moments at Galaxy Next Gen
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
            >
              A glimpse into daily joy, active learning, and creative discovery.
            </motion.p>
          </div>

          {/* Preview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={handleTriggerModal}
                className="group relative rounded-3xl overflow-hidden shadow-md cursor-pointer h-64 border-2 border-white"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-slate-900 text-[10px] font-extrabold border border-white/60 shadow-xs">
                    Stock Preview
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <span className="text-sm font-bold font-display">{img.title}</span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Trigger Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleTriggerModal}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] text-white font-extrabold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin-slow" />
              <span>Explore Full School Gallery</span>
            </button>
          </div>

        </div>
      </section>

      {/* Animated Modal Dialog for Gallery Coming Soon */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl border border-purple-100 text-center overflow-hidden z-10"
            >
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-200/50 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-200/50 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon Illustration */}
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-100 to-amber-100 border-2 border-purple-200 text-[#7B2CBF] flex items-center justify-center mb-6 shadow-md relative">
                <Sparkles className="w-10 h-10 animate-pulse" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-2 -right-2 bg-amber-400 p-1.5 rounded-full text-slate-950 shadow-xs"
                >
                  <Star className="w-4 h-4 fill-slate-950" />
                </motion.div>
              </div>

              {/* Exact Prompt Required Copy */}
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#7B2CBF] block mb-2">
                Galaxy Next Gen Pre School
              </span>

              <h3 className="text-2xl font-extrabold text-slate-900 font-display mb-3">
                Something wonderful is coming...
              </h3>

              <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                "Our gallery is being prepared. Check back soon to discover moments from Galaxy Next Gen Pre School."
              </p>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 text-xs text-purple-950 font-semibold mb-6">
                Official photographs of our classrooms, activities, and campus environment will be updated shortly!
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#161E54] to-[#7B2CBF] text-white font-extrabold text-xs shadow-md hover:opacity-95 transition-opacity"
              >
                Got It, Thank You!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
