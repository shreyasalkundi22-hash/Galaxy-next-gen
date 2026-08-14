import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Phone, Send, CheckCircle2, AlertCircle, Sparkles, User, Mail, MessageSquare, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCHOOL_INFO, PROGRAMS } from '../data/schoolData';

export default function Admissions({ isModal = false, onCloseModal }) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    program: 'Playgroup',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) errs.parentName = "Parent/Guardian name is required";
    if (!formData.childName.trim()) errs.childName = "Child's name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number (e.g. 7892794899)";
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  return (
    <section id="admissions" className={`relative overflow-hidden ${isModal ? 'p-0' : 'py-20 sm:py-28 bg-white'}`}>
      <div className={`${isModal ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#7B2CBF] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Admissions Open</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
            >
              Begin Your Child's Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto"
            >
              We welcome you to join the Galaxy Next Gen Pre School family on Sulla Road, Hubli. Submit your enquiry below or call us directly.
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Phone Call Card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#161E54] via-[#7B2CBF] to-[#4A1259] p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[420px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-extrabold border border-white/20 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Phone Assistance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight mb-4">
                Prefer to speak with us directly?
              </h3>

              <p className="text-sm text-purple-100/90 leading-relaxed font-normal mb-8">
                Our admissions coordinator is happy to answer your questions regarding programs, enrollment routines, and campus visits.
              </p>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block mb-1">
                  Official Phone Contact
                </span>
                <span className="text-2xl sm:text-3xl font-black font-display text-white tracking-wide block">
                  {SCHOOL_INFO.phoneDisplay}
                </span>
                <span className="text-xs text-purple-200 block mt-1">Sulla Road, Hubli, Karnataka</span>
              </div>
            </div>

            <div>
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-3 group"
              >
                <Phone className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Call {SCHOOL_INFO.phone} Now</span>
              </a>
            </div>
          </div>

          {/* Admission Enquiry Form */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-50/90 border border-slate-200 p-6 sm:p-8 shadow-md relative">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                  Enquiry Received!
                </h3>

                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-slate-900">{formData.parentName}</strong>. Your enquiry for <strong className="text-[#7B2CBF]">{formData.childName}</strong> ({formData.program}) has been recorded.
                </p>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-semibold mb-6 max-w-md mx-auto text-left">
                  <span className="block font-bold mb-1">📢 Immediate Assistance Notice:</span>
                  For instant confirmation or campus visit arrangements, please call <a href={`tel:${SCHOOL_INFO.phone}`} className="underline font-bold text-amber-950">{SCHOOL_INFO.phone}</a>.
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      parentName: '',
                      childName: '',
                      phone: '',
                      email: '',
                      program: 'Playgroup',
                      message: ''
                    });
                    if (onCloseModal) onCloseModal();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#161E54] text-white text-xs font-bold shadow-md hover:bg-[#7B2CBF] transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Parent & Child Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => handleChange('parentName', e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 pl-10 rounded-2xl bg-white border text-sm font-medium focus:outline-none transition-all ${
                          errors.parentName ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-100'
                        }`}
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.parentName && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.parentName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Child's Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.childName}
                        onChange={(e) => handleChange('childName', e.target.value)}
                        placeholder="e.g. Ananya"
                        className={`w-full px-4 py-3 pl-10 rounded-2xl bg-white border text-sm font-medium focus:outline-none transition-all ${
                          errors.childName ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-100'
                        }`}
                      />
                      <User className="w-4 h-4 text-[#7B2CBF] absolute left-3.5 top-3.5" />
                    </div>
                    {errors.childName && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.childName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="e.g. 7892794899"
                        className={`w-full px-4 py-3 pl-10 rounded-2xl bg-white border text-sm font-medium focus:outline-none transition-all ${
                          errors.phone ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-100'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-amber-500 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="parent@example.com"
                        className={`w-full px-4 py-3 pl-10 rounded-2xl bg-white border text-sm font-medium focus:outline-none transition-all ${
                          errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-slate-200 focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-100'
                        }`}
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.email && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Program Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Program Interested In
                  </label>
                  <div className="relative">
                    <select
                      value={formData.program}
                      onChange={(e) => handleChange('program', e.target.value)}
                      className="w-full px-4 py-3 pl-10 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-100 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Playgroup">Playgroup</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Evening Tuition">Evening Tuition Classes</option>
                    </select>
                    <BookOpen className="w-4 h-4 text-[#7B2CBF] absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message / Additional Enquiries
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Ask about admissions timing, activities, or campus visit scheduling..."
                      className="w-full px-4 py-3 pl-10 rounded-2xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#7B2CBF] focus:ring-2 focus:ring-purple-100 transition-all"
                    />
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568] text-white font-extrabold text-sm sm:text-base shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Send Admission Enquiry</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center font-medium">
                  🔒 Your details are kept private and strictly used for admission communications.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
