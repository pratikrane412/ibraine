import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiYoutube, FiArrowUpRight } from 'react-icons/fi';

const socialNodes = [
  { name: "Instagram", icon: <FiInstagram />, char: "I", color: "hover:bg-pink-600", link: "#" },
  { name: "LinkedIn", icon: <FiLinkedin />, char: "L", color: "hover:bg-[#0072BC]", link: "#" },
  { name: "Twitter", icon: <FiTwitter />, char: "X", color: "hover:bg-slate-900", link: "#" },
  { name: "Facebook", icon: <FiFacebook />, char: "F", color: "hover:bg-blue-700", link: "#" },
  { name: "Youtube", icon: <FiYoutube />, char: "Y", color: "hover:bg-red-600", link: "#" },
  { name: "Contact", icon: <FiArrowUpRight />, char: "?", color: "hover:bg-[#f59e0b]", link: "/contact" },
];

const SocialFollow = () => {
  return (
    <section className="w-full bg-white border-t border-slate-900 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        
        {/* ════ LEFT: EDITORIAL BRANDING (Sticky Context) ════ */}
        <div className="lg:col-span-4 p-8 md:p-12 lg:p-20 border-r border-slate-900 flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-slate-900 rotate-45" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900">Ecosystem v3.0</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-[0.9] tracking-tighter" style={{ fontFamily: "'Lora', serif" }}>
              Join the <br /> 
              <span className="italic text-slate-400">Expansion.</span>
            </h2>
          </div>

          <div className="space-y-4">
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed max-w-[200px]">
               Our social channels serve as real-time logs of our digital experiments and growth frameworks.
             </p>
             <div className="h-px w-12 bg-slate-900" />
          </div>
        </div>

        {/* ════ RIGHT: THE TECHNICAL MATRIX ════ */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3">
          {socialNodes.map((node, i) => (
            <motion.a
              key={i}
              href={node.link}
              className={`relative h-64 md:h-80 border-r border-b border-slate-900 flex flex-col justify-between p-8 group transition-colors duration-500 ${node.color}`}
            >
              {/* Background Character (Reveals on hover) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <span className="text-[20rem] font-serif font-black text-slate-900/[0.03] group-hover:text-white/10 group-hover:scale-110 transition-all duration-700">
                  {node.char}
                </span>
              </div>

              {/* Node Metadata */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-white/60">
                  REF_0{i + 1}
                </span>
                <div className="text-xl text-slate-900 group-hover:text-white transition-colors">
                  {node.icon}
                </div>
              </div>

              {/* Platform Name */}
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white/60 mb-2">
                  Platform
                </p>
                <h4 className="text-xl md:text-2xl font-serif font-medium text-slate-900 group-hover:text-white tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
                  {node.name}.
                </h4>
              </div>
            </motion.a>
          ))}
        </div>

      </div>

      {/* ════ BOTTOM LOGO STRIP ════ */}
      
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
      `}</style>
    </section>
  );
};

export default SocialFollow;