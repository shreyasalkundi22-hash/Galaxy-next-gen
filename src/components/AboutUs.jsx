import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass, Lightbulb, Users, Dumbbell, BookOpen, Smile, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export default function AboutUs() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Holistic Development",
      icon: Heart,
      color: "bg-rose-500 text-white",
      desc: "Balancing intellectual curiosity, emotional wellness, physical health, and social awareness."
    },
    {
      title: "Learning Through Exploration",
      icon: Compass,
      color: "bg-purple-500 text-white",
      desc: "Encouraging hands-on discovery and sensory activities that turn every lesson into an adventure."
    },
    {
      title: "Creativity & Imagination",
      icon: Lightbulb,
      color: "bg-amber-500 text-white",
      desc: "Fostering artistic expression, storytelling, music, and inventive play without limits."
    },
    {
      title: "Confidence & Expression",
      icon: Smile,
      color: "bg-emerald-500 text-white",
      desc: "Helping children express their ideas clearly and build resilient, confident self-worth."
    },
    {
      title: "Social Development",
      icon: Users,
      color: "bg-blue-500 text-white",
      desc: "Nurturing empathy, sharing, group collaboration, and lifelong friendly social habits."
    },
    {
      title: "Physical Development",
      icon: Dumbbell,
      color: "bg-indigo-500 text-white",
      desc: "Promoting fine and gross motor skills through structured movement, yoga, and active play."
    },
    {
      title: "Academic Foundations",
      icon: BookOpen,
      color: "bg-violet-500 text-white",
      desc: "Building intuitive early literacy, phonics, number sense, and logical curiosity."
    },
    {
      title: "Joyful Learning",
      icon: Sparkles,
      color: "bg-pink-500 text-white",
      desc: "Ensuring that every child wakes up excited to learn, play, and grow every single day."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 text-[#7B2CBF] text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Galaxy Next Gen</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight"
          >
            Growing Curious Minds. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568]">
              Building Confident Futures.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Galaxy Next Gen Pre School on Sulla Road, Hubli provides a warm, nurturing environment where young children can learn, explore, create, and develop lifelong confidence.
          </motion.p>
        </div>

        {/* Split Screen Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Image with Floating Action Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
                alt="Children engaged in creative learning at Galaxy Next Gen Pre School"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                    Sulla Road, Hubli
                  </span>
                  <h3 className="text-lg font-bold">A Safe & Inspiring Preschool Environment</h3>
                </div>
              </div>
            </div>

            {/* 4 Required Floating Accent Pills: Learn, Explore, Create, Grow */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white p-3.5 rounded-2xl shadow-md border border-purple-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-[#7B2CBF] flex items-center justify-center font-extrabold text-sm">
                  📚
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Learn</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Foundational Joy</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white p-3.5 rounded-2xl shadow-md border border-amber-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-extrabold text-sm">
                  🔍
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Explore</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Curiosity First</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white p-3.5 rounded-2xl shadow-md border border-pink-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-extrabold text-sm">
                  🎨
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Create</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Boundless Art</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white p-3.5 rounded-2xl shadow-md border border-emerald-100 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-sm">
                  🌱
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Grow</h4>
                  <p className="text-[10px] text-slate-500 font-medium">Confident Futures</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: 8 Growth Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-6">
              Our 8 Pillars of Child Development
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ y: -3 }}
                    className={`p-4 rounded-2xl bg-white border transition-all cursor-pointer shadow-xs ${
                      activePillar === idx
                        ? 'border-[#7B2CBF] ring-2 ring-purple-200 shadow-md'
                        : 'border-slate-100 hover:border-purple-200'
                    }`}
                    onClick={() => setActivePillar(idx)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl ${pillar.color} shrink-0 shadow-xs`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-normal mt-1 leading-normal">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-purple-50/80 border border-purple-100 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#7B2CBF] shrink-0" />
              <p className="text-xs text-purple-950 font-medium">
                At Galaxy Next Gen Pre School, every child receives personal care, attention, and warm encouragement tailored to their unique pace of discovery.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
