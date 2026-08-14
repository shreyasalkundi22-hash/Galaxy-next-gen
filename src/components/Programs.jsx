import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, GraduationCap, Check, BookOpen, Star, Compass } from 'lucide-react';
import { PROGRAMS } from '../data/schoolData';

export default function Programs({ onOpenAdmissions }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="programs" className="py-24 sm:py-32 bg-[#FAF9F5] relative overflow-hidden">
      {/* Creative Background Glowing Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-200/35 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-200/35 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Creative Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 to-amber-200 text-amber-950 text-xs font-extrabold uppercase tracking-wider mb-4 border border-amber-300/80 shadow-xs"
          >
            <GraduationCap className="w-4 h-4 text-amber-700" />
            <span>Structured Academic Pathways</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight"
          >
            Our Learning Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Nurturing young minds through play-based discovery, foundational literacy, and structured growth stages on Sulla Road, Hubli.
          </motion.p>
        </div>

        {/* Creative Bento Grid Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROGRAMS.map((program, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className={`relative group rounded-3xl bg-white border border-purple-100 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1 border-amber-200' : ''
                }`}
              >
                <div>
                  {/* Image Header with Translucent Badge Overlay */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide border backdrop-blur-md shadow-xs ${program.badgeColor}`}>
                        {program.age}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-black font-display tracking-wide drop-shadow-md">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7B2CBF] block mb-2">
                        Core Learning Focus
                      </span>
                      {program.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-purple-100 text-[#7B2CBF] flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={onOpenAdmissions}
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] hover:opacity-95 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Enquire For {program.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
