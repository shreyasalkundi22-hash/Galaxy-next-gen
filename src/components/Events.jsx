import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell } from 'lucide-react';

export default function Events() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200"
          >
            <Calendar className="w-3.5 h-3.5 text-purple-600" />
            <span>Updates & News</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            What's Happening
          </motion.h2>
        </div>

        {/* Events Coming Soon Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-3xl bg-white border border-purple-100 p-8 text-center shadow-md relative overflow-hidden"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 text-[#7B2CBF] flex items-center justify-center mb-4">
            <Bell className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
            Events & Updates Coming Soon
          </h3>

          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            Important dates, celebrations, announcements, and upcoming school activities will be listed here as the session progresses.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
