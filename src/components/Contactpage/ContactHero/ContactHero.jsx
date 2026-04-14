import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMessageSquare, FiArrowDown } from 'react-icons/fi';

const ContactHero = () => {
  const { scrollY } = useScroll();
  // Subtle parallax for background elements
  const orbY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative w-full py-32 md:py-10 px-6 overflow-hidden flex flex-col items-center justify-center text-center bg-[#fdfdfd]">

      {/* ════ LIVELY BACKGROUND SYSTEM ════ */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. Moving Mesh Orbs */}
        <motion.div
          style={{ y: orbY }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[70%] bg-[#2c66f6]/5 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: orbY }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-[#fdb813]/5 rounded-full blur-[100px]"
        />

        {/* 2. Professional Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* 3. Subtle Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:10%_100%]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl mx-auto"
      >

        

        {/* 2. Massive Editorial Heading */}
        <h1
          className="text-5xl md:text-8xl lg:text-[100px] font-medium text-[#0f172a] leading-[0.9] tracking-tighter font-serif"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Let's Start a <br />
          <span className="relative inline-block italic text-[#2c66f6]">
            Conversation
            {/* Animated SVG Hand-drawn Scribble */}
            <svg className="absolute -bottom-4 left-0 w-full h-6 text-[#fdb813]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
                d="M5 15 Q 30 5 50 15 T 95 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* 3. Subtext with better pacing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 text-slate-600 text-base md:text-xl font-medium max-w-md mx-auto italic leading-relaxed"
        >
          We bridge the gap between business vision and digital execution. We are your growth partner.
        </motion.p>

        {/* 4. Editorial Vertical Anchor */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="mt-20 flex flex-col items-center gap-4 opacity-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-slate-900 to-transparent" />
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* Font Import in component for safety */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
      `}</style>
    </section>
  );
};

export default ContactHero;