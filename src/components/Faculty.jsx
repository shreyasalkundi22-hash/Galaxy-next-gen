import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Clock, Heart, Award } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Faculty({ onOpenAdmissions }) {
  const placeholders = [
    { role: "Early Childhood Educator", category: "Pre-Primary Specialist" },
    { role: "Nursery & Playgroup Guide", category: "Sensory & Care Lead" },
    { role: "Kindergarten Facilitator", category: "Literacy & Numeracy Specialist" },
    { role: "Co-Curricular Coach", category: "Karate, Yoga & Fitness Lead" }
  ];

  return (
    <section id="faculty" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-900 text-xs font-bold uppercase tracking-wider mb-4 border border-violet-200"
          >
            <Users className="w-3.5 h-3.5 text-violet-600" />
            <span>Our Educators</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            Meet Our Faculty
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            Our dedicated team of compassionate educators who guide every child's first step into lifelong discovery.
          </motion.p>
        </div>

        {/* Placeholder Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholders.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-50/80 border border-slate-200/80 p-6 flex flex-col items-center text-center shadow-xs relative overflow-hidden"
            >
              {/* Silhouette Avatar Badge */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-amber-100 border-4 border-white shadow-md flex items-center justify-center mb-6 relative">
                <Users className="w-10 h-10 text-purple-400 opacity-60" />
                <div className="absolute -bottom-2 bg-amber-400 text-slate-950 p-1 rounded-full shadow-sm">
                  <Heart className="w-3.5 h-3.5 fill-slate-950" />
                </div>
              </div>

              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#7B2CBF] mb-1">
                {item.category}
              </span>

              <h3 className="text-lg font-bold text-slate-900 font-display mb-3">
                {item.role}
              </h3>

              {/* Coming Soon Notice */}
              <div className="w-full py-2 px-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center gap-1.5 mt-2">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Faculty Profile Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-medium italic">
            Detailed teacher qualifications and introduction profiles will be published shortly.
          </p>
        </div>

      </div>
    </section>
  );
}
