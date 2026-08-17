import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Sun, Palette, BookOpen, HeartHandshake, Eye } from 'lucide-react';
import { FACILITIES } from '../data/schoolData';

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 sm:py-32 bg-[#FAF9F5] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#7B2CBF] text-xs font-extrabold uppercase tracking-widest mb-4 border border-purple-200"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Infrastructure & Safety</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight uppercase"
          >
            CAMPUS FACILITIES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            Designed from the ground up for safety, comfort, exploration, and creative expression.
          </motion.p>
        </div>

        {/* Visual Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              data-cursor="FACILITY"
            >
              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/70 text-amber-300 text-[10px] font-bold tracking-wider backdrop-blur-md">
                    Campus Feature
                  </div>
                </div>

                <h3 className="text-xl font-extrabold font-display text-slate-900 mb-2">
                  {fac.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#7B2CBF] uppercase tracking-wider">
                  Sulla Road Campus
                </span>
                <div className="w-8 h-8 rounded-full bg-purple-50 text-[#7B2CBF] flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
