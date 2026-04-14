import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiDatabase, FiArrowRight, FiActivity, FiZap } from 'react-icons/fi';

const CaseStudiesHero = () => {
  const { scrollY } = useScroll();

  // Parallax layers for that 21st-century developer feel
  const textY = useTransform(scrollY, [0, 500], [0, -120]);
  const imageY = useTransform(scrollY, [0, 500], [0, 60]);
  const orbY = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section className="relative w-full min-h-screen bg-[#0052e6] overflow-hidden flex items-center pt-20 pb-10 font-sans selection:bg-[#ffed4e] selection:text-black">

      {/* ════ LIVELY BACKGROUND SYSTEM ════ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Massive Parallax Mesh Glow */}
        <motion.div
          style={{ y: orbY }}
          className="absolute top-[-20%] right-[-10%] w-[80%] h-[100%] bg-blue-400/20 rounded-full blur-[140px] animate-pulse"
        />

        {/* Editorial Background Watermark */}
        <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 opacity-[0.04] select-none">
          <span className="text-[35vw] font-serif font-black italic tracking-tighter text-white uppercase leading-none">
            ARCHIVE
          </span>
        </div>

        {/* Technical Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:12.5%_100%]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* ════ LEFT: EDITORIAL CONTENT (6 Columns) ════ */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-6 z-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[#ffed4e] mb-10"
            >
              <FiDatabase size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-50">Proven Results // Database</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[52px] md:text-[80px] lg:text-[105px] font-medium leading-[0.85] tracking-tighter font-serif text-white mb-12"
              style={{ fontFamily: "'Lora', serif" }}
            >
              A Deep Dive <br />
              into Digital <br />
              <span className="italic text-blue-200 relative inline-block">
                Marketing.
                {/* Hand-drawn Underline */}
                <svg className="absolute -bottom-4 left-0 w-full h-6 text-[#ffed4e]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
                    d="M5 15 Q 35 5 60 15 T 95 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-blue-50 text-base md:text-xl italic leading-relaxed max-w-md mb-16 font-serif"
            >
              Experience the mathematical precision behind Mumbai's most successful digital growth frameworks.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-6 cursor-pointer bg-white/5 p-2 pr-10 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-[#ffed4e] flex items-center justify-center text-black shadow-2xl group-hover:rotate-45 transition-transform duration-500">
                <FiArrowRight size={28} />
              </div>
              <span className="text-[11px] font-sans font-black uppercase tracking-[0.4em] text-white">Explore Frameworks</span>
            </motion.button>
          </motion.div>

          {/* ════ RIGHT: MASSIVE BREAKOUT IMAGE (6 Columns) ════ */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-12 lg:mt-0">

            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full lg:w-[130%] lg:-mr-24" // Image now breaks out of the grid width
            >
              <img
                src="/images/CASEs.png"
                alt="iBraine Growth"
                className="w-full h-auto object-contain drop-shadow-[0_60px_60px_rgba(0,0,0,0.5)]"
              />

              {/* FLOATING DATA WIDGETS (The "Lively" Developer Style) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[25%] -left-4 lg:-left-12 bg-white/10 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/20 shadow-2xl flex items-center gap-5 z-20 min-w-[220px]"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/40">
                  <FiActivity size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-blue-100 opacity-60 mb-1">Avg Reach Lift</p>
                  <p className="text-2xl font-bold text-white leading-none tracking-tighter">+240%</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-0 lg:right-10 bg-[#ffed4e] p-5 rounded-3xl shadow-2xl z-20 text-black flex items-center gap-4"
              >
                <FiZap fill="black" size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Viral Sprints Active</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* ════ BOTTOM METADATA BAR ════ */}
        <div className="mt-20 lg:mt-0 flex justify-between items-center opacity-40">
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-white uppercase italic">Live Verification Active</span>
          </div>
          <div className="h-px flex-grow mx-12 bg-gradient-to-r from-transparent via-white to-transparent" />
          <span className="text-[10px] font-mono tracking-widest text-white uppercase">iBraine_REF_2024_v3.0</span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
      `}</style>
    </section>
  );
};

export default CaseStudiesHero;