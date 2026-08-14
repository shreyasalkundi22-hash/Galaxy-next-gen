import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, Heart, Star } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function ParentStories({ onOpenAdmissions }) {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>Community Feedback</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            What Parents Say
          </motion.h2>
        </div>

        {/* Coming Soon Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-8 text-center shadow-xs relative overflow-hidden"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 fill-amber-400" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
            Parent Stories Coming Soon
          </h3>

          <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
            We look forward to sharing authentic feedback and inspiring stories from our parent community at Galaxy Next Gen Pre School, Sulla Road, Hubli.
          </p>

          <button
            onClick={onOpenAdmissions}
            className="px-6 py-3 rounded-xl bg-[#161E54] text-white text-xs font-bold shadow-sm hover:bg-[#7B2CBF] transition-colors"
          >
            Connect With Admissions
          </button>
        </motion.div>

      </div>
    </section>
  );
}
