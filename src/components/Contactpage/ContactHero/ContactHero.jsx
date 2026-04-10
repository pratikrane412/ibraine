import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const ContactHero = () => {
  // Animation Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-40 px-6 overflow-hidden flex flex-col items-center justify-center text-center select-none font-sans">
      
      {/* ════ BACKGROUND GRADIENT GLOW ════ */}
      <div className="absolute inset-0 -z-10 bg-[#fdfdfd]">
        {/* Sky blue glow left */}
        <div className="absolute top-0 left-0 w-[50%] h-full bg-[radial-gradient(circle_at_20%_30%,#e0f2fe_0%,transparent_50%)] opacity-70"></div>
        {/* Warm amber glow right */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(circle_at_80%_40%,#fef3c7_0%,transparent_50%)] opacity-60"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-10"
      >
        
        {/* 1. Pill Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#fde68a] bg-[#fffbeb] text-[#d97706] text-xs md:text-sm font-bold shadow-sm"
        >
          <MessageSquare size={14} className="fill-current" />
          <span>Contact us</span>
        </motion.div>

        {/* 2. Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-7xl lg:text-[84px] font-bold text-[#0f172a] leading-[1.1] font-serif"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Let's Start a <br className="md:hidden" />
          <span className="relative inline-block text-[#2c66f6] ml-2">
            Conversation
            {/* Animated Yellow Underline */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-2 left-0 h-1.5 bg-[#fdb813] rounded-full"
            ></motion.div>
          </span> 
        </motion.h1>

        {/* 3. Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-500 text-base md:text-xl font-medium tracking-tight"
        >
          We are not your agency, we are your partner.
        </motion.p>
      </motion.div>

      {/* Decorative background blurs for extra depth */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default ContactHero;