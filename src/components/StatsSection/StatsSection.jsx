import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Asterisk, Sparkles } from 'lucide-react';

const subStats = [
  { value: "200+", label: "Industries impacted through innovative design" },
  { value: "93%", label: "A proven track record with a high retention rate" },
  { value: "7x", label: "Experience up to 7x revenue growth with iBraine" },
];

const StatsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // --- MOUSE TRACKING PHYSICS ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // The spotlight circle: grows from 0 to 220px
  const radius = isHovered ? 220 : 0;
  const clipPath = useTransform(
    [springX, springY],
    ([x, y]) => `circle(${radius}px at ${x}px ${y}px)`
  );

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-[#0a0a0a] cursor-none"
    >
      
      {/* --- ELITE BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#7c1414] rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#1e1e4a] rounded-full blur-[140px] opacity-50" />
        
        {/* Noise & Grid Overlay */}
        <div className="absolute inset-0 z-10 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* ════ LAYER 1: THE DARK BASE ════ */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-20">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-10"
          >
            <Asterisk className="text-red-500 w-5 h-5 animate-[spin_8s_linear_infinite]" />
            <span className="text-zinc-400 font-jakarta text-[11px] tracking-[0.4em] uppercase font-bold">The iBraine Legacy</span>
          </motion.div>
          <p className="text-zinc-300 font-lora text-xl md:text-3xl font-medium text-center max-w-2xl leading-relaxed">
            A decade of <span className="italic text-white">transforming</span> ambitious brands through digital precision.
          </p>
        </div>

        {/* The Hover Target Area */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[150px] md:h-[250px] flex items-center justify-center mb-20 md:mb-32 group"
        >
          <h2 className="text-[18vw] md:text-[200px] font-jakarta font-extrabold text-white leading-none tracking-tighter select-none opacity-20 group-hover:opacity-100 transition-opacity duration-700">
            15+years
          </h2>
          {/* Subtle instructions */}
          {!isHovered && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute -bottom-4 text-zinc-500 text-[10px] uppercase tracking-widest flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3" /> Move mouse to explore
            </motion.div>
          )}
        </div>

        {/* BOTTOM STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 w-full pt-16 border-t border-white/10 font-jakarta">
          {subStats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4">{stat.value}</h3>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-[240px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ════ LAYER 2: THE SPOTLIGHT REVEAL ════ */}
      {/* This layer sits perfectly on top of Layer 1 */}
      <motion.div 
        style={{ clipPath }}
        className="absolute inset-0 z-30 bg-red-600 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full h-full flex flex-col items-center justify-center">
            {/* The revealed text inside the spotlight */}
            <h2 className="font-lora text-[16vw] md:text-[180px] font-medium text-white leading-none tracking-tight italic select-none">
                experience
            </h2>
            
            {/* Decorative element inside spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45" />
        </div>
      </motion.div>

      {/* CUSTOM CURSOR FOLLOWER */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-[100] hidden lg:block"
      />

    </section>
  );
};

export default StatsSection;