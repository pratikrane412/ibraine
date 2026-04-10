import React from 'react';
import { motion } from 'framer-motion';

const ChallengesSection = () => {
  // Animation settings for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* ════ LEFT SIDE: FLOW VISUAL ════ */}
        <div className="relative bg-gray-50 rounded-[2.5rem] p-8 lg:p-12 min-h-[600px] flex flex-col items-center">
          
          {/* Decorative Spark Icon (Lime Green) */}
          <motion.div 
            animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-8 right-12 text-[#ccff00] z-20"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M12 3v3M18.36 5.64l-2.12 2.12M21 12h-3M18.36 18.36l-2.12-2.12M12 21v-3M5.64 18.36l2.12-2.12M3 12h3M5.64 5.64l2.12 2.12" />
            </svg>
          </motion.div>

          {/* 1. Top User Pill */}
          <motion.div 
            custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-full py-3 px-6 shadow-sm border border-gray-100 flex items-center gap-4 w-fit mb-4"
          >
            <img src="https://i.pravatar.cc/100?u=laura" className="w-10 h-10 rounded-full object-cover" alt="User" />
            <div className="space-y-1.5">
              <div className="w-24 h-2 bg-gray-100 rounded-full"></div>
              <div className="w-16 h-2 bg-gray-50 rounded-full"></div>
            </div>
          </motion.div>

          {/* Down Arrow 1 */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="my-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>

          {/* 2. Yellow Question Card */}
          <motion.div 
            custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border-2 border-[#fdb813] shadow-sm max-w-[380px] relative z-10"
          >
            <p className="font-bold text-black mb-3">Hi Laura, (...)</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              What is your campaign objective and what are your expectations from your agency?
            </p>
          </motion.div>

          {/* Down Arrow 2 */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} className="my-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>

          {/* 3. Detailed Response Card */}
          <motion.div 
            custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 max-w-[420px] relative"
          >
            <p className="text-black font-bold leading-relaxed text-base">
              I want to create brand awareness and boost online sales and revenue. 
              My expectations from the agency are to achieve at least a 4x ROAS in the initial stage.
            </p>
            
            {/* Checkmark Accent */}
            <motion.div 
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}
              className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#ccff00] rounded-full flex items-center justify-center border-4 border-white shadow-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* ════ RIGHT SIDE: TEXT CONTENT ════ */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#111111] leading-[1.1] mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Challenges we <br /> faced during <br /> execution
          </h2>
          
          <div className="space-y-6 max-w-xl">
            <p className="text-gray-500 text-lg leading-relaxed">
              Discover the hurdles we conquered to achieve success. From unexpected twists to unique industry challenges, we share how we navigated difficulties and found solutions.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              These stories highlight our ability to adapt and overcome, showcasing our dedication to delivering effective digital marketing solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ChallengesSection;