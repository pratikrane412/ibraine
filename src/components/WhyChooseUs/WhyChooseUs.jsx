import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Globe, Layout, Sparkles, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-[#fafafa] py-16 md:py-24 lg:py-20 overflow-hidden selection:bg-indigo-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[40%] bg-cyan-50/60 rounded-full blur-[100px]" />
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[grid-black-pattern]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-serif-hero { font-family: 'Instrument Serif', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- LEFT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase font-jakarta">
            <Sparkles size={14} /> Agency Excellence
          </div>

          <h2 className="font-lora font-medium text-[30px] md:text-[40px] lg:text-[52px] leading-[1.1] text-slate-900 tracking-tight mb-8">
            From Big Thinking <br />
            to <span className="italic text-indigo-600 relative inline-block">
              Solid Execution
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="font-jakarta text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
            iBraine is among the top digital marketing agencies in Mumbai. 
            Experience the <span className="font-bold text-slate-900">game-changing impact</span> of result-oriented strategies. 
            We help businesses thrive and outshine competition in the modern digital landscape.
          </p>

          {/* New Bento-style Certs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Google</p>
                <p className="text-sm font-bold text-slate-800 italic">Certified Partner</p>
              </div>
            </div>
            <div className="group p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Layout size={24} />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shopify</p>
                <p className="text-sm font-bold text-slate-800 italic">Certified Partner</p>
              </div>
            </div>
          </div>

          <button className="relative group bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-sm flex items-center gap-3 overflow-hidden transition-all hover:scale-105 shadow-xl">
            <span className="relative z-10">Get in touch now</span>
            <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* --- RIGHT VISUALS (Advanced UI Stack) --- */}
        <div className="relative h-[500px] md:h-[650px] flex items-center justify-center lg:justify-end perspective-1000">
          
          {/* Card 1: Data Analytics (Background) */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 right-4 md:right-10 w-64 md:w-80 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white z-10"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-indigo-600" />
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-tight">Revenue Growth</h4>
              </div>
              <span className="bg-indigo-100 text-indigo-600 text-[10px] px-2 py-0.5 rounded-full font-bold">+12%</span>
            </div>
            <div className="h-32 flex items-end gap-2 px-2">
               {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                 <motion.div 
                  key={i} 
                  initial={{ height: 0 }} 
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-md" 
                 />
               ))}
            </div>
          </motion.div>

          {/* Card 2: Brand ID (The Foreground "Solid" Execution) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute bottom-10 left-0 md:left-20 w-56 md:w-72 aspect-[3/4] bg-slate-900 rounded-[2.5rem] p-6 shadow-2xl z-20 overflow-hidden"
          >
             <div className="w-full h-full border border-white/10 rounded-[1.8rem] flex flex-col p-4">
                <div className="w-8 h-8 rounded-full bg-indigo-500 mb-4" />
                <div className="space-y-2">
                  <div className="w-full h-1.5 bg-white/20 rounded-full" />
                  <div className="w-[80%] h-1.5 bg-white/20 rounded-full" />
                </div>
                <div className="mt-auto pt-6 flex flex-col gap-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-indigo-400" />
                        <div className="w-full h-1 bg-white/5 rounded-full" />
                     </div>
                   ))}
                </div>
             </div>
             {/* Decorative Grain */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
          </motion.div>

          {/* Floating High-Impact Badge */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-20 right-0 md:right-5 bg-cyan-400 p-8 rounded-3xl shadow-[0_20px_40px_rgba(34,211,238,0.4)] z-30 text-center border-4 border-white"
          >
             <h3 className="text-4xl md:text-5xl font-jakarta font-black text-slate-900 leading-none tracking-tighter">5Cr.+</h3>
             <p className="text-[10px] font-bold text-slate-800 mt-2 uppercase tracking-widest">Revenue Generated</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;