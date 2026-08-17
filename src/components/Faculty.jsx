import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, UserCheck, GraduationCap } from 'lucide-react';
import { FACULTY } from '../data/schoolData';

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-900 text-xs font-extrabold uppercase tracking-widest mb-4 border border-rose-200"
          >
            <Heart className="w-4 h-4 text-rose-600 fill-rose-500" />
            <span>Nurturing Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight uppercase"
          >
            MEET OUR EDUCATORS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            Passionate early childhood educators dedicated to guiding young learners with love, safety, and personal guidance.
          </motion.p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACULTY.map((fac, idx) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#FAF9F5] rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              data-cursor="TEACHER"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-[#161E54] via-[#7B2CBF] to-[#A12568] p-1 shadow-lg">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#7B2CBF]">
                  <GraduationCap className="w-10 h-10" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold font-display text-slate-900 mb-1">
                {fac.name}
              </h3>
              <span className="text-xs font-bold text-[#7B2CBF] uppercase tracking-wider block mb-4">
                {fac.role}
              </span>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {fac.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
