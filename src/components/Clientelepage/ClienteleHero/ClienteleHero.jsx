import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const ClienteleHero = () => {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center select-none">
      
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[#f8fafc]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#e0f2fe]/40 via-transparent to-[#fef3c7]/30"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#fde68a] bg-[#fffbeb] text-[#d97706] text-sm font-semibold shadow-sm mx-auto"
        >
          <Trophy size={16} className="fill-current" />
          <span>Our Clientele</span>
        </motion.div>

        {/* Main Heading - Updated to match your inspection data */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[40px] md:text-[60px] leading-[1.2] text-black"
          style={{ 
            fontFamily: "'Lora', serif", 
            fontWeight: 400,
            fontStyle: 'normal'
          }}
        >
          We believe our greatest <br className="hidden md:block" />
          <span className="relative inline-block text-[#3b82f6]">
            reward
            {/* Yellow Marker Line */}
            <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#fdb813] rounded-full"></div>
          </span> 
          {" "}is our client's trust and <br className="hidden md:block" /> satisfaction
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-lg md:text-xl font-normal tracking-wide"
          style={{ fontFamily: "'Lora', serif" }}
        >
          We are not your agency, we are your partner.
        </motion.p>
      </div>

      {/* Decorative background blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700 pointer-events-none"></div>
    </section>
  );
};

export default ClienteleHero;