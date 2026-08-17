import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Send, Phone, MapPin, CheckCircle2, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO } from '../data/schoolData';

export default function Admissions({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    program: 'Playgroup',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      childName: '',
      phone: '',
      email: '',
      program: 'Playgroup',
      message: ''
    });
    if (onClose) onClose();
  };

  return (
    <section id="admissions" className="py-24 sm:py-32 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-widest border border-amber-300">
              <GraduationCap className="w-4 h-4 text-amber-700" />
              <span>Admissions Open {SCHOOL_INFO.year}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 leading-tight uppercase">
              READY TO BEGIN THE JOURNEY?
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Take the first step towards a bright, confident future for your child at Galaxy Next Gen Pre School on Sulla Road, Hubli.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7B2CBF] flex items-center justify-center shrink-0 font-bold">
                  📍
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Campus Location</h4>
                  <p className="text-xs text-slate-600 font-medium">{SCHOOL_INFO.location}</p>
                </div>
              </div>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 shadow-xs hover:bg-amber-100 transition-colors block"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold">
                  📞
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Admission Hotline</h4>
                  <p className="text-sm font-black text-amber-900">{SCHOOL_INFO.phoneDisplay}</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Form Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="border-b border-slate-100 pb-4 mb-6">
                      <h3 className="text-2xl font-black font-display text-slate-900">
                        Admission Inquiry Form
                      </h3>
                      <p className="text-xs text-slate-500 font-normal mt-1">
                        Fill out the details below and our team will get in touch with you shortly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Parent's Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-200 transition-all text-sm font-medium outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Child's Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.childName}
                          onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                          placeholder="e.g. Aarav Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-200 transition-all text-sm font-medium outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 7892794899"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-200 transition-all text-sm font-medium outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Program Interested In *
                        </label>
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-200 transition-all text-sm font-medium outline-none bg-white"
                        >
                          <option value="Playgroup">Playgroup (1.5 - 2.5 Yrs)</option>
                          <option value="Nursery">Nursery (2.5 - 3.5 Yrs)</option>
                          <option value="LKG">LKG (3.5 - 4.5 Yrs)</option>
                          <option value="UKG">UKG (4.5 - 5.5 Yrs)</option>
                          <option value="Evening Tuition">Evening Tuition & Activities</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Message / Specific Queries
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us any questions or preferred timings..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-200 transition-all text-sm font-medium outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      data-cursor="SUBMIT"
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] hover:opacity-95 text-white font-extrabold text-sm shadow-xl shadow-purple-900/25 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Admission Inquiry</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <h3 className="text-3xl font-black font-display text-slate-900">
                      Inquiry Received! 🎉
                    </h3>

                    <p className="text-sm text-slate-600 font-normal max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.parentName}</strong>! Our admissions desk at Galaxy Next Gen Pre School will contact you shortly at <strong className="text-[#7B2CBF]">{formData.phone}</strong>.
                    </p>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Submit Another Response
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
