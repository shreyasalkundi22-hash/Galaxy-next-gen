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
    <section id="about" className="py-24 sm:py-32 bg-[#FAF9F5] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Headline Reveal */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 text-[#7B2CBF] text-xs font-extrabold uppercase tracking-widest mb-6 border border-purple-200"
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Philosophy</span>
          </motion.div>

          <div className="space-y-2 text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 leading-none uppercase">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              WHERE LITTLE MINDS
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#161E54] via-[#7B2CBF] to-[#A12568]"
            >
              BEGIN BIG JOURNEYS.
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Galaxy Next Gen Pre School on Sulla Road, Hubli provides a warm, nurturing environment where young children can learn, explore, create, and develop lifelong confidence.
          </motion.p>
        </div>

        {/* Asymmetric Visual Composition & Floating Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop"
                alt="Children engaged in creative learning"
                className="w-full h-[420px] sm:h-[500px] object-cover"
                data-cursor="PLAY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Sulla Road, Hubli
                  </span>
                  <h3 className="text-lg font-bold">A Safe & Inspiring Preschool Environment</h3>
                </div>
              </div>
            </div>

            {/* Floating Action Badges: PLAY, LEARN, CREATE, DISCOVER */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { title: 'PLAY', emoji: '🎈', desc: 'Joyful Growth', color: 'bg-purple-100 text-[#7B2CBF] border-purple-200' },
                { title: 'LEARN', emoji: '📚', desc: 'Foundational Skill', color: 'bg-amber-100 text-amber-800 border-amber-200' },
                { title: 'CREATE', emoji: '🎨', desc: 'Boundless Art', color: 'bg-pink-100 text-pink-800 border-pink-200' },
                { title: 'DISCOVER', emoji: '🔍', desc: 'Curious Curiosity', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' }
              ].map((badge) => (
                <motion.div
                  key={badge.title}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="bg-white p-3.5 rounded-2xl shadow-md border border-slate-100 flex items-center gap-3"
                  data-cursor={badge.title}
                >
                  <div className={`w-9 h-9 rounded-xl ${badge.color} border flex items-center justify-center font-black text-sm shrink-0`}>
                    {badge.emoji}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900 tracking-wider">{badge.title}</h4>
                    <p className="text-[10px] text-slate-500 font-medium">{badge.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-6">
              Our 8 Pillars of Child Development
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-normal mt-1 leading-normal">
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
