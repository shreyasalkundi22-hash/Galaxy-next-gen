import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles, Smile, ShieldCheck, Trophy, UserCheck, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US, SCHOOL_INFO } from '../data/schoolData';

export default function WhyChooseUs({ onOpenAdmissions }) {
  const getIcon = (name) => {
    switch (name) {
      case 'HeartHandshake': return HeartHandshake;
      case 'Sparkles': return Sparkles;
      case 'Smile': return Smile;
      case 'ShieldCheck': return ShieldCheck;
      case 'Trophy': return Trophy;
      case 'UserCheck': return UserCheck;
      default: return CheckCircle;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#7B2CBF] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            Why Parents Choose Galaxy Next Gen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            We create an enriching, supportive foundation on Sulla Road, Hubli, where every child feels valued, joyful, and confident to shine.
          </motion.p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = getIcon(item.icon);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#161E54] to-[#7B2CBF] text-amber-300 flex items-center justify-center shadow-md mb-6">
                    <IconComponent className="w-7 h-7 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-purple-700">
                  <span>Galaxy Core Standard</span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
