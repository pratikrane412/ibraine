import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

// --- Background Animation (Subtle Paths) ---
function FloatingPaths({ position }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 8 * position} -${189 + i * 6}C-${380 - i * 8 * position} -${189 + i * 6} -${312 - i * 8 * position} ${216 - i * 6} ${152 - i * 8 * position} ${343 - i * 6}C${616 - i * 8 * position} ${470 - i * 6} ${684 - i * 8 * position} ${875 - i * 6} ${684 - i * 8 * position} ${875 - i * 6}`,
    width: 0.2 + i * 0.02,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <svg className="w-full h-full text-indigo-500" viewBox="0 0 696 316" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{ duration: 15, repeat: Infinity, delay: path.id * 0.2, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

const AboutSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <section className="relative w-full bg-[#030712] py-24 lg:py-30 px-6 overflow-hidden">
      {/* 1. INTERACTIVE LIGHT ORB */}
      <div
        className="hidden lg:block absolute pointer-events-none transition-transform duration-700 ease-out z-0"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(163, 230, 0, 0.07) 0%, transparent 70%)',
        }}
      />

      {/* 2. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-indigo-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center">

          {/* HEADER AREA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#FB8930]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">About iBraine</span>
            </div>

            <h2 className="font-lora text-white text-4xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
              Scaling Businesses with <span className="italic text-[#FB8930] font-normal">Data-Driven Digital Marketing</span>
            </h2>
          </motion.div>

          {/* CONTENT GRID */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* LEFT SIDE: THE HIGHLIGHTED MISSION */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl"
            >
              <p className="font-jakarta text-xl lg:text-3xl text-gray-100 leading-relaxed mb-8">
                We don't just run ads; we build full-spectrum digital ecosystems across
                <span className="text-white font-bold underline decoration-[#FB8930] decoration-2 underline-offset-8 ml-2">
                  Social, Search, and Performance.
                </span> designed to scale your revenue.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {[
                  { label: "SEO Experts", icon: <Target className="w-5 h-5 text-[#FB8930]" /> },
                  { label: "Performance", icon: <Zap className="w-5 h-5 text-[#FB8930]" /> },
                  { label: "Social Growth", icon: <Sparkles className="w-5 h-5 text-[#FB8930]" /> }
                ].map((feature, i) => (
                  <div key={i} className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                    {feature.icon}
                    <span class="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-wider">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: THE STORY */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-8 pt-4 lg:pt-6"
            >
              <p className="text-gray-400 text-lg leading-relaxed font-jakarta">
                Our goal is straightforward: turn your digital presence into a revenue-generating asset. We achieve this through performance-based marketing solutions designed to:              </p>

              <p className="text-gray-400 text-lg leading-relaxed font-jakarta">
                <ul>
                  <li><strong>Influence Buyers:</strong> Engage your ideal audience at every touchpoint.</li>
                  <li><strong>Drive Traffic:</strong> Dominate search and social algorithms.</li>
                  <li><strong>Generate Revenue:</strong> Convert clicks into loyal, paying customers.</li>
                </ul>              </p>

              {/* MODERN BUTTON */}
              <div className="mt-8">
                <motion.button
                  whileHover="hover"
                  onClick={() => navigate("/services/seo-services")}
                  className="relative group inline-flex items-center gap-4 bg-[#FB8930] px-10 py-5 rounded-full overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 font-lora text-black font-black text-sm uppercase tracking-widest font-bold ">
                    GET A FREE MARKETING AUDIT
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-black group-hover:translate-x-2 transition-transform duration-300" />

                  {/* Hover Liquid Effect */}
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;