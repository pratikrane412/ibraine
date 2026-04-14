import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiSearch, FiPenTool, FiActivity, FiTarget } from 'react-icons/fi';

const steps = [
  {
    num: "01",
    title: "Algorithmic Research",
    desc: "We dive deep into behavioral data and search intent patterns before a single pixel is moved.",
    icon: <FiSearch />
  },
  {
    num: "02",
    title: "Creative Synthesis",
    desc: "Merging brand vision with data-backed visual aesthetics to trigger immediate audience engagement.",
    icon: <FiPenTool />
  },
  {
    num: "03",
    title: "Surgical Scaling",
    desc: "Mathematically distributing budget across high-velocity channels for maximum conversion lift.",
    icon: <FiActivity />
  }
];

const MethodologySection = () => {
  const { scrollYProgress } = React.useRef(null); // Simple ref placeholder

  return (
    <section className="relative w-full py-24 md:py-44 px-6 bg-white overflow-hidden font-sans border-t border-slate-100">

      {/* ════ LIVELY BACKGROUND SYSTEM ════ */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[linear-gradient(to_bottom,#0052e6_1px,transparent_1px)] bg-[size:100%_10%]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* ════ LEFT: EDITORIAL PROCESS ════ */}
          <div className="lg:col-span-6 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <FiTarget className="text-[#fdb813]" size={16} />
                <span className="text-[10px] font-sans font-black uppercase tracking-[0.5em] text-slate-400 italic">Execution Blueprint v2.0</span>
              </div>

              <h2
                className="text-[40px] md:text-[68px] font-medium text-slate-950 leading-[0.95] tracking-tighter font-serif mb-10"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Engineering the <br />
                <span className="italic text-[#0052e6]">Process</span> of Growth.
              </h2>

              <p className="text-slate-500 text-sm italic leading-relaxed max-w-sm mb-12 font-serif opacity-70">
                We bridge the gap between creative intuition and mathematical results through a step-by-step strategy.
              </p>
            </motion.div>

            {/* THE STEP LIST (Technical Index) */}
            <div className="space-y-0 relative border-l border-slate-100 ml-2">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative pl-12 pb-12 last:pb-0"
                >
                  {/* Technical Bullet */}
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#0052e6] group-hover:scale-125 transition-all duration-500" />

                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono font-bold text-[#fdb813]">STP_{step.num}</span>
                      <h4 className="text-xl font-bold text-slate-900 tracking-tight font-serif" style={{ fontFamily: "'Lora', serif" }}>{step.title}</h4>
                    </div>
                    <p className="text-[13px] text-slate-400 leading-relaxed italic max-w-xs group-hover:text-slate-600 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT: BREAKOUT VISUAL ════ */}
          <div className="lg:col-span-6 relative pt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              {/* Editorial Sharp Image (No blob, just clean rounding) */}
              <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[10px] border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-[2s]"
                  alt="Strategic Execution"
                />
                {/* Subtle Brand Filter */}
                <div className="absolute inset-0 bg-[#0052e6]/5 mix-blend-overlay pointer-events-none" />
              </div>

              {/* FLOATING PERFORMANCE WIDGET (Lively touch) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 md:-left-16 bg-[#0c0d12] p-6 rounded-3xl shadow-2xl border border-white/10 z-20 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0052e6]/20 flex items-center justify-center text-[#fdb813] shadow-inner">
                  <FiActivity size={24} />
                </div>
                <div>
                  <p className="text-[9px] font-sans font-black uppercase tracking-widest text-slate-500 mb-1">Conversion Status</p>
                  <p className="text-xl font-bold text-white tracking-tighter">Optimal Range</p>
                </div>
              </motion.div>

              {/* Large floating Sparkle from your reference */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-10 right-0 text-[#fdb813] opacity-20 blur-[1px]"
              >
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-[0.5em]">
            Methodology_Module_Ref: iBraine_v4.1
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0052e6] text-white px-10 py-4 rounded-full font-sans font-black text-[11px] uppercase tracking-[0.3em] shadow-xl hover:bg-[#fdb813] hover:text-black transition-all duration-500 flex items-center gap-4 group"
          >
            Launch Discovery <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default MethodologySection;