import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const MarketingPlan = () => {
  const points = [
    "Laser-Focused KPIs",
    "Data-Backed Strategies",
    "Precision Targeting",
    "Transparent Reporting",
    "Customised Marketing Strategies"
  ];

  const navigate = useNavigate();
  

  return (
    <section className="relative w-full bg-[#fafafa] py-20 md:py-20 lg:py-24 overflow-hidden font-sans selection:bg-indigo-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ════ LEFT SIDE: THE DYNAMIC STACK ════ */}
        <div className="relative order-2 lg:order-1">
          {/* Main Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-8 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
              alt="Marketing Dashboard"
              className="w-full h-[400px] md:h-[550px] object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />
          </motion.div>

          {/* Floating Glass Card (Stats) */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-4 md:-right-10 z-20 bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white max-w-[200px] md:max-w-[240px]"
          >
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                <TrendingUp size={20} />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">98.4%</h4>
              <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Campaign Success Rate</p>
            </div>
          </motion.div>

          {/* Decorative Sparkle */}
          <div className="absolute -top-10 -left-6 z-0 opacity-20 hidden md:block">
            <Sparkles size={120} className="text-indigo-600" />
          </div>
        </div>

        {/* ════ RIGHT SIDE: TEXT CONTENT ════ */}
        <div className="flex flex-col text-left order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8">
              <Sparkles size={14} /> What do we do?
            </span>

            <h2 className="font-lora font-medium text-[30px] md:text-[40px] lg:text-[52px] leading-[1.1] text-slate-900 tracking-tight mb-8">
              Everything starts <br /> with a <span className="italic text-indigo-600 relative">
                Marketing
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="#4f46e5" strokeWidth="2" fill="none" opacity="0.3" />
                </svg>
              </span> plan.
            </h2>

            <p className="font-jakarta text-slate-500 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              We need to use more of actual office images than stock images to make the website look more personal
              Replace 98.4% Campaign Success Rate - with - Over 1200 Brands scaled with 3x revenue
              Replace Everything starts with a Marketing plan. - with - Everything starts with a roadmap to ROI
            </p>
          </motion.div>

          {/* Staggered Checklist */}
          <ul className="space-y-4 mb-12">
            {points.map((text, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-slate-700 font-jakarta font-semibold text-sm md:text-base group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                  <CheckCircle2 size={16} className="text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                {text}
              </motion.li>
            ))}
          </ul>

          {/* ════ CTA: SHIMMER BUTTON ════ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="relative group overflow-hidden bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-sm flex items-center gap-3 w-fit shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]"
            >
              {/* Shimmer Effect */}
              <motion.div
                variants={{ hover: { x: '100%' } }}
                initial={{ x: '-100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              />

              <span className="relative z-10">Let's Build Your Roadmap</span>
              <motion.div variants={{ hover: { x: 4 } }}>
                <ArrowRight size={18} className="relative z-10 text-indigo-400" />
              </motion.div>

              {/* Liquid Hover Fill */}
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MarketingPlan;