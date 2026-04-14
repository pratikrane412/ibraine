import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiEdit3, FiGlobe, FiBarChart, FiArrowUpRight } from 'react-icons/fi';

const growthPoints = [
  {
    title: "Defined Objectives",
    tag: "GOAL_MAPPING",
    desc: "We move past generic 'growth' and define measurable success milestones—from lead velocity to unshakeable brand recall.",
    icon: <FiTarget />
  },
  {
    title: "Audience Intelligence",
    tag: "DATA_MINING",
    desc: "Surgical analysis of preference patterns and behavioral triggers ensures your message isn't just heard, but acted upon.",
    icon: <FiUsers />
  },
  {
    title: "High-Caliber Content",
    tag: "CREATIVE_ENGINE",
    desc: "Aesthetics that perform. We build visual and copy ecosystems designed to dominate social feeds and build unshakeable trust.",
    icon: <FiEdit3 />
  },
  {
    title: "Cross-Channel Velocity",
    tag: "OMNI_REACH",
    desc: "A unified approach across SEO, Paid Social, and Search that captures intent at every single stage of the buyer journey.",
    icon: <FiGlobe />
  },
  {
    title: "ROI Optimization",
    tag: "MATH_FIRST",
    desc: "Continuous algorithmic testing and budget reallocation to ensure your CAC decreases as your volume scales.",
    icon: <FiBarChart />
  }
];

const GrowthElements = () => {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 bg-[#fdfdfd] overflow-hidden border-t border-slate-100 font-sans">

      {/* ════ BACKGROUND LIVELY SYSTEM ════ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px:32px]" />
        <div className="absolute top-1/2 right-[-10%] w-96 h-96 bg-[#0052e6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* ════ LEFT: STICKY EDITORIAL CONTEXT ════ */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 bg-[#fdb813] rounded-full animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-400">Scaling Framework v4.0</span>
            </div>

            <h2
              className="text-[40px] md:text-[60px] font-medium text-slate-950 leading-[0.95] tracking-tighter font-serif mb-10"
              style={{ fontFamily: "'Lora', serif" }}
            >
              The DNA of <br />
              <span className="italic text-[#0052e6]">Exponential</span> <br />
              Growth.
            </h2>

            <p className="text-slate-500 text-sm italic leading-relaxed max-w-sm mb-12 font-serif">
              Turning digital campaigns into unshakeable market dominance requires a mathematical and creative symmetry. Here is how we engineer it.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-[#0052e6] group-hover:text-white group-hover:border-[#0052e6] transition-all duration-500">
                <FiArrowUpRight size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Request Strategy Audit</span>
            </motion.button>
          </div>

          {/* ════ RIGHT: TECHNICAL LIST (No Cards) ════ */}
          <div className="lg:col-span-7 border-t border-slate-950/10">
            {growthPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group py-12 border-b border-slate-950/10 hover:bg-slate-50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-4">

                  {/* Index & Technical Tag */}
                  <div className="md:col-span-3">
                    <p className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-[#0052e6] transition-colors mb-2">
                      0{i + 1}
                    </p>
                    <span className="text-[8px] font-sans font-black text-slate-400 border border-slate-200 px-2 py-0.5 rounded tracking-widest group-hover:border-[#0052e6]/30 transition-colors">
                      {point.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-9 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-slate-300 group-hover:text-[#fdb813] transition-colors">
                        {point.icon}
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-medium text-slate-900 font-serif"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-slate-500 leading-relaxed italic max-w-lg">
                      {point.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

            
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default GrowthElements;