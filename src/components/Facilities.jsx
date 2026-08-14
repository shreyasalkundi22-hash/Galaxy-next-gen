import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Clock, Sparkles, Shield, Palette, Gamepad2, BookOpen, Layers } from 'lucide-react';

export default function Facilities({ onOpenAdmissions }) {
  const facilityCategories = [
    { title: "Learning Spaces", icon: BookOpen, desc: "Thoughtfully structured, vibrant learning corners." },
    { title: "Activity Areas", icon: Gamepad2, desc: "Dedicated zones for interactive games & movement." },
    { title: "Creative Spaces", icon: Palette, desc: "Artistic expression corners for drawing & crafts." },
    { title: "Play Areas", icon: Layers, desc: "Child-friendly indoor play spaces designed for safety." },
    { title: "Safety & Care", icon: Shield, desc: "Nurturing environment with dedicated care guidelines." },
    { title: "Learning Resources", icon: Sparkles, desc: "Age-appropriate toys, books & interactive learning tools." }
  ];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200"
          >
            <Building2 className="w-3.5 h-3.5 text-sky-600" />
            <span>School Environment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            Learning Spaces & Facilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
          >
            We are constantly enhancing our campus spaces for young learners on Sulla Road, Hubli.
          </motion.p>
        </div>

        {/* Facility Cards Grid with "Details Coming Soon" Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityCategories.map((facility, idx) => {
            const IconComp = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between relative overflow-hidden"
              >
                {/* Coming Soon Top Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold border border-amber-200">
                  <Clock className="w-3 h-3 text-amber-600 animate-spin-slow" />
                  <span>Details Coming Soon</span>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#7B2CBF] flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                    {facility.title}
                  </h3>

                  <p className="text-sm text-slate-500 font-normal leading-relaxed">
                    {facility.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Information update pending</span>
                  <button
                    onClick={onOpenAdmissions}
                    className="text-xs font-bold text-[#7B2CBF] hover:underline"
                  >
                    Enquire Facility
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
