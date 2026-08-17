import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Flame } from 'lucide-react';
import { ACTIVITIES } from '../data/schoolData';

export default function Extracurricular({ onOpenAdmissions }) {
  return (
    <section id="activities" className="py-24 sm:py-32 bg-[#0D1B2A] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7B2CBF]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Oversized Marquee Typography */}
      <div className="mb-16 overflow-hidden py-4 border-y border-slate-800/80 bg-slate-950/40">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 whitespace-nowrap text-4xl sm:text-7xl font-black font-display tracking-tight text-slate-700/40 uppercase select-none"
        >
          <span>KARATE • YOGA • MUSIC • DRAWING • GYMNASTICS • KARATE • YOGA • MUSIC • DRAWING • GYMNASTICS</span>
          <span>KARATE • YOGA • MUSIC • DRAWING • GYMNASTICS • KARATE • YOGA • MUSIC • DRAWING • GYMNASTICS</span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-widest mb-4 border border-amber-400/40"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Co-Curricular Enrichment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight uppercase"
          >
            ACTIVITIES & ENRICHMENT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto"
          >
            Building discipline, physical agility, rhythm, and artistic expression through fun guided programs.
          </motion.p>
        </div>

        {/* 5 Activity Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group h-[380px] flex flex-col justify-between p-6 cursor-pointer"
              onClick={onOpenAdmissions}
              data-cursor={activity.title.toUpperCase()}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl shadow-md">
                  {activity.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-400/90 text-slate-950 text-xs font-black uppercase tracking-wider">
                  Included
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-black font-display tracking-tight text-white uppercase group-hover:text-amber-300 transition-colors">
                  {activity.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
