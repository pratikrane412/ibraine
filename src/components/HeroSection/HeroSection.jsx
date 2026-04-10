import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, BarChart3, Heart, MessageCircle, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#fafafa] overflow-hidden font-sans pt-10 md:pt-20 pb-20 selection:bg-indigo-100"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[100%] md:w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[80%] md:w-[40%] h-[40%] bg-amber-50/50 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* --- HEADER CONTENT --- */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center mb-12 md:mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <Sparkles className="w-3 h-3 text-indigo-600" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-indigo-600">The New Standard</span>
          </div>

          <h1 className="font-lora font-medium text-[42px] md:text-[90px] leading-[1.1] md:leading-[0.95] text-slate-900 mb-6 tracking-tight">
            AI-Driven Conversion <br className="hidden md:block" /> 
            <span className="italic text-indigo-600">Growth Right Away</span>
          </h1>

          <p className="text-slate-500 text-base md:text-xl max-w-xl mx-auto leading-relaxed font-jakarta font-medium mb-10">
            Automate high-performing influencer ads through our neural marketing ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-sm shadow-xl hover:bg-indigo-600 transition-all">
              Request a Quote
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all">
              Call Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- THE 3D STAGE (Mobile Optimized) --- */}
      <div className="relative max-w-5xl mx-auto h-[550px] md:h-[750px] flex justify-center items-center">
        
        {/* Subtle Light Floor */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[100px] md:h-[250px] bg-indigo-200/20 blur-[80px] rounded-full" />

        <motion.div 
          className="relative w-full h-full flex justify-center items-center scale-[0.85] sm:scale-90 md:scale-100"
          style={{ perspective: 1500, rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          
          {/* 1. CENTRAL PHONE */}
          <motion.div 
            style={{ translateZ: 50 }}
            className="relative z-20 w-[260px] md:w-[320px] aspect-[9/18.5] bg-[#020617] rounded-[3rem] md:rounded-[4rem] p-2.5 md:p-3.5 shadow-2xl border-t border-white/20"
          >
             <div className="w-full h-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative">
                <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
                    className="w-full h-full object-cover brightness-90" 
                    alt="Influencer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* LIVE Badge */}
                <div className="absolute top-6 right-6 bg-red-500 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                   <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                   <span className="text-[10px] font-black text-white uppercase tracking-tighter">Live</span>
                </div>

                {/* Profile Bar */}
                <div className="absolute bottom-6 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-3.5 rounded-2xl flex items-center gap-3">
                   <div className="w-9 h-9 rounded-full border border-indigo-400 overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=32" alt="avatar" />
                   </div>
                   <div className="text-left leading-tight">
                      <p className="text-[11px] font-bold text-white">Alex Rivera</p>
                      <p className="text-[9px] text-white/50 font-bold uppercase tracking-tight">Campaign Manager</p>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* 2. TOP LEFT: WATCH CARD (Overlap Phone) */}
          <motion.div 
            style={{ translateZ: 120 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute left-[0%] md:left-[8%] top-[12%] md:top-[15%] z-30"
          >
             <div className="w-36 md:w-48 aspect-square bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-3 md:p-4 shadow-2xl border border-white/60">
                <div className="w-full h-full rounded-[1.8rem] md:rounded-[2.2rem] overflow-hidden relative bg-slate-100">
                   <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80" alt="product" className="w-full h-full object-cover mix-blend-multiply" />
                   {/* Rating Pill inside card */}
                   <div className="absolute -bottom-1 -left-1 right-[-1px] bg-white p-2 flex items-center gap-1 justify-center rounded-t-xl shadow-lg scale-75 md:scale-100">
                      {[1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                      <span className="text-[10px] font-bold text-slate-700 ml-1">5.0</span>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* 3. BOTTOM LEFT: ANALYTICS (Pushed over Phone) */}
          <motion.div 
            style={{ translateZ: 180 }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-[-5%] md:left-[4%] bottom-[20%] md:bottom-[18%] z-40"
          >
             <div className="bg-amber-400 px-5 md:px-7 py-3 md:py-4 rounded-2xl md:rounded-[2.5rem] flex items-center gap-3 md:gap-4 shadow-2xl border-t-2 border-white/30">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-lg md:rounded-xl flex items-center justify-center">
                   <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="text-left font-jakarta">
                   <p className="text-[8px] md:text-[9px] font-bold text-black/60 uppercase leading-none mb-1">Engagement</p>
                   <span className="text-xl md:text-3xl font-black text-black tracking-tighter">42.8%</span>
                </div>
             </div>
          </motion.div>

          {/* 4. TOP RIGHT: SALES (Tucked in) */}
          <motion.div 
            style={{ translateZ: 100 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
            className="absolute right-[0%] md:right-[5%] top-[20%] md:top-[22%] z-10 scale-90 md:scale-100"
          >
             <div className="bg-emerald-50/90 backdrop-blur-xl p-4 md:p-6 rounded-[2rem] md:rounded-[3rem] flex items-center gap-4 border border-emerald-100 shadow-xl">
                <div className="text-left font-jakarta">
                   <p className="text-[8px] md:text-[9px] font-bold text-emerald-600 uppercase mb-1">Sales</p>
                   <span className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">12k</span>
                </div>
             </div>
          </motion.div>

          {/* 5. BOTTOM RIGHT: SOCIAL FEED (Tucked in) */}
          <motion.div 
            style={{ translateZ: 150 }}
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
            className="absolute right-[-2%] md:right-[2%] bottom-[12%] md:bottom-[10%] z-30 scale-75 md:scale-100 origin-right"
          >
             <div className="w-56 md:w-64 bg-white/90 backdrop-blur-2xl p-3 rounded-[2.5rem] border border-white shadow-2xl">
                <div className="aspect-[4/5] rounded-[1.8rem] overflow-hidden mb-3">
                   <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" alt="post" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between px-3 pb-1">
                   <div className="flex gap-4 text-slate-300">
                      <Heart className="w-5 h-5" />
                      <MessageCircle className="w-5 h-5" />
                   </div>
                   <div className="bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                      <span className="text-[10px] font-bold text-indigo-600">8.4k Likes</span>
                   </div>
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;