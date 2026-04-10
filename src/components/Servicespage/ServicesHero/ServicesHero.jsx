import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart2, Smile, Trophy, ArrowRight, TrendingUp, Users, Activity } from 'lucide-react';

const ServicesHero = () => {
  // Animation Variants
  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatAnimation = (delay) => ({
    hidden: { opacity: 0, y: 50, z: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      z: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" } 
    },
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
    }
  });

  return (
    <div className="relative min-h-screen w-full bg-[#111111] overflow-hidden font-sans flex flex-col items-center pt-24 pb-32">
      
      {/* --- BACKGROUND GLOW --- */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[#ffb400]/10 blur-[120px] rounded-[100%] pointer-events-none z-0" />

      {/* --- TOP CONTENT (Centered) --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">
        
        <motion.div initial="hidden" animate="visible" variants={textReveal} className="mb-6">
           <span className="inline-block border border-[#ffb400]/50 text-[#ffb400] text-xs font-bold tracking-widest px-4 py-1.5 rounded-full uppercase bg-[#ffb400]/10 backdrop-blur-sm">
              Digital Solutions
            </span>
        </motion.div>

        {/* explicitly added text-white and font-sans here */}
        <motion.h1 
          initial="hidden" animate="visible" variants={textReveal} transition={{ delay: 0.1 }}
          className="text-white font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Is your business lost? <br className="hidden md:block" />
          We will get you <span className="text-[#ffb400] relative whitespace-nowrap">
            found.
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#ffb400]/50" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
            </svg>
          </span>
        </motion.h1>

        {/* changed to text-gray-300 for better visibility */}
        <motion.p 
          initial="hidden" animate="visible" variants={textReveal} transition={{ delay: 0.2 }}
          className="text-gray-300 font-sans text-base md:text-lg leading-relaxed max-w-2xl mb-10"
        >
          iBraine is a leading digital marketing agency based in Mumbai that delivers strategic and creative digital marketing solutions for brand success through our expertise.
        </motion.p>

        <motion.div 
          initial="hidden" animate="visible" variants={textReveal} transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button className="bg-white text-black font-bold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors w-full sm:w-auto flex justify-center items-center gap-2">
            Explore Our Services <ArrowRight size={18} />
          </button>
          <button className="bg-[#2a2a2a] text-white font-bold text-sm md:text-base px-8 py-4 rounded-xl hover:bg-[#3a3a3a] transition-colors border border-white/5 w-full sm:w-auto">
            Up to 10x Sales Guarantees
          </button>
        </motion.div>
      </div>

      {/* --- 3D ISOMETRIC MOCKUP GRID --- */}
      <div className="relative w-full h-[600px] sm:h-[700px] mt-10 md:mt-20 flex justify-center perspective-[1500px] z-10 transform scale-[0.45] sm:scale-[0.6] md:scale-[0.8] lg:scale-100 origin-top">
        
        {/* The Rotated Plane */}
        <div className="relative w-[1000px] h-[800px] transform-style-preserve-3d" 
             style={{ transform: 'rotateX(55deg) rotateZ(-35deg)' }}>

          {/* CARD 1: Main Platform Dashboard */}
          <motion.div 
            initial="hidden" animate="animate" whileInView="visible" viewport={{ once: true }}
            variants={floatAnimation(0.2)}
            className="absolute top-[300px] left-[100px] w-[500px] h-[320px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 flex flex-col overflow-hidden border border-gray-100"
          >
            <div className="w-full h-4 flex gap-2 mb-6">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex gap-6 h-full">
              <div className="w-1/3 flex flex-col gap-4">
                 <h3 className="text-black font-bold text-2xl leading-tight">Digital<br/>Marketing<br/>Hub</h3>
                 <div className="w-full h-2 bg-gray-100 rounded-full mt-4"></div>
                 <div className="w-4/5 h-2 bg-gray-100 rounded-full"></div>
                 <button className="mt-auto bg-[#ffb400] text-black text-xs font-bold py-3 rounded-lg w-full">View Reports</button>
              </div>
              <div className="w-2/3 bg-gray-50 rounded-xl p-4 flex flex-col relative overflow-hidden">
                 <div className="flex justify-between items-center mb-4 text-black">
                    <span className="font-bold text-sm">Traffic Growth</span>
                    <TrendingUp size={16} className="text-green-500"/>
                 </div>
                 <div className="absolute bottom-0 left-0 w-full h-32 flex items-end px-4 pb-4 gap-2">
                    <div className="w-1/6 bg-blue-200 h-[30%] rounded-t-sm"></div>
                    <div className="w-1/6 bg-blue-300 h-[50%] rounded-t-sm"></div>
                    <div className="w-1/6 bg-blue-400 h-[40%] rounded-t-sm"></div>
                    <div className="w-1/6 bg-blue-500 h-[70%] rounded-t-sm"></div>
                    <div className="w-1/6 bg-blue-600 h-[90%] rounded-t-sm"></div>
                    <div className="w-1/6 bg-blue-700 h-[100%] rounded-t-sm"></div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: 10X Sales Guarantee */}
          <motion.div 
            initial="hidden" animate="animate" whileInView="visible" viewport={{ once: true }}
            variants={floatAnimation(0.4)}
            className="absolute top-[80px] left-[520px] w-[300px] h-[180px] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400">
                <Rocket size={24} />
              </div>
              <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-md">Guarantee</span>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">10X</h4>
              <p className="text-gray-400 text-sm">More Sales Guaranteed</p>
            </div>
          </motion.div>

          {/* CARD 3: Conversion Rate */}
          <motion.div 
            initial="hidden" animate="animate" whileInView="visible" viewport={{ once: true }}
            variants={floatAnimation(0.6)}
            className="absolute top-[280px] left-[650px] w-[280px] h-[240px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <Activity size={20} />
              </div>
              <span className="text-gray-800 font-bold text-sm">Conversion Rate</span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
               <div className="relative w-24 h-24 rounded-full border-8 border-gray-100 border-t-green-500 border-r-green-500 flex items-center justify-center transform -rotate-45">
                 <span className="text-black font-bold text-xl transform rotate-45">10%</span>
               </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">Avg. optimization rate</p>
          </motion.div>

          {/* CARD 4: Happy Clients */}
          <motion.div 
            initial="hidden" animate="animate" whileInView="visible" viewport={{ once: true }}
            variants={floatAnimation(0.8)}
            className="absolute top-[540px] left-[620px] w-[260px] h-[140px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 flex flex-col justify-center"
          >
            <div className="flex justify-between items-center mb-3">
               <h4 className="text-2xl font-bold text-white">500+</h4>
               <Smile className="text-yellow-400" size={24} />
            </div>
            <p className="text-gray-400 text-sm mb-3">Happy Clients Worldwide</p>
            <div className="flex -space-x-2">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-[#0a0a0a] flex items-center justify-center">
                    <Users size={12} className="text-gray-400"/>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* CARD 5: Small Stat / Experience */}
          <motion.div 
            initial="hidden" animate="animate" whileInView="visible" viewport={{ once: true }}
            variants={floatAnimation(0.5)}
            className="absolute top-[180px] left-[50px] w-[240px] h-[100px] bg-gradient-to-br from-[#ffb400] to-orange-500 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 flex items-center gap-4 text-black"
          >
             <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <Trophy size={24} />
             </div>
             <div>
                <h4 className="text-2xl font-bold">8+ Years</h4>
                <p className="text-black/70 text-xs font-semibold">Of Experience</p>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ServicesHero;