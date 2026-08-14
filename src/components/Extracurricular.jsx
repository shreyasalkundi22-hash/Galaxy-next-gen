import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, ArrowUpRight } from 'lucide-react';
import { EXTRACURRICULAR } from '../data/schoolData';

export default function Extracurricular({ onOpenAdmissions }) {
  return (
    <section id="activities" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-900 text-xs font-bold uppercase tracking-wider mb-4 border border-pink-200"
          >
            <Trophy className="w-3.5 h-3.5 text-pink-600" />
            <span>Extracurricular Growth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            More Than Learning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal italic max-w-xl mx-auto"
          >
            "Discover talents. Build confidence. Express yourself."
          </motion.p>
        </div>

        {/* Interactive Activities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXTRACURRICULAR.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Gradient Overlay & Icon Badge */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Emoji Pill Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-md">
                  <span className="text-xl">{activity.icon}</span>
                  <span className="text-xs font-bold text-slate-900">{activity.title}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                    {activity.tag}
                  </span>
                </div>
              </div>

              {/* Card Description */}
              <div className="p-6">
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {activity.description}
                </p>

                <button
                  onClick={onOpenAdmissions}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#7B2CBF] hover:text-[#161E54] group/link transition-colors"
                >
                  <span>Explore Activity Enquiries</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Highlight Callout Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 bg-gradient-to-br from-[#161E54] via-[#7B2CBF] to-[#4A1259] text-white flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 text-2xl mb-4">
                ✨
              </div>
              <h3 className="text-2xl font-bold font-display leading-tight">
                All-Round Talent Development
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-purple-100/90 font-normal leading-relaxed">
                Extracurricular sessions at Galaxy Next Gen are seamlessly blended into our daily routines to inspire self-confidence and joyous creative expression.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenAdmissions}
                className="w-full py-3 px-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Enquire About Co-Curriculars</span>
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
