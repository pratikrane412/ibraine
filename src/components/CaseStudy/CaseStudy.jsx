import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const WORK_DATA = [
  {
    id: 1,
    client: "Mentos",
    title: "Mentos made a mast Gen-Z comeback & clocked 36M+ reach",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000", 
    category: "Campaign"
  },
  {
    id: 2,
    client: "Pune Police",
    title: "Fresh emotional approach leads to 76% seatbelt compliance.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000", 
    category: "Social Impact"
  },
  {
    id: 3,
    client: "Skybags",
    title: "Repositioning Skybags from a bag to Adventure Identity.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000",
    category: "Branding"
  },
  {
    id: 4,
    client: "Centerfruit",
    title: "Creating a zesty gamified website for a popular candy.",
    image: "https://images.unsplash.com/photo-1582050041567-9cfdd330d545?q=80&w=1000",
    category: "Web Design"
  },
  {
    id: 5,
    client: "Nuego",
    title: "Breaking barriers in Electric Mobility with NueGo.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000",
    category: "E-Mobility"
  },
  {
    id: 6,
    client: "Happydent",
    title: "Displaced a deep-rooted habit with minimal impact.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000",
    category: "Minimalism"
  }
];

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState('Casestudy');

  return (
    <section className="relative w-full bg-[#030712] py-24 lg:py-40 px-6 overflow-hidden selection:bg-indigo-500 selection:text-white font-jakarta">
      
      {/* --- ELITE BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-amber-500/10 rounded-full blur-[120px]" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-zinc-500 font-bold text-[10px] md:text-xs tracking-[0.4em] uppercase">Portfolio 2024</span>
            </div>
            <h2 className="font-lora text-white text-[50px] md:text-[80px] lg:text-[100px] font-medium leading-[0.9] tracking-tighter">
              Explore Our <br />
              <span className="text-zinc-500 italic">Latest Work</span>
            </h2>
          </motion.div>

          {/* TABS CONTROLLER (Matching the screenshot style) */}
          <div className="flex bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 relative">
            {['Casestudy', 'Daily Creativity'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-500 z-10 ${
                  activeTab === tab ? 'text-black' : 'text-zinc-400'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- PORTFOLIO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-y-20">
          {WORK_DATA.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              {/* Image Container with Parallax Effect */}
              <div className="relative aspect-[16/10] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-zinc-900 mb-8 border border-white/5">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={work.image} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  alt={work.client}
                />
                
                {/* Floating Action Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </div>

                {/* Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-white text-[9px] font-bold uppercase tracking-widest">{work.category}</span>
                </div>
              </div>

              {/* Text Info Area */}
              <div className="px-2">
                <h4 className="font-lora text-white text-2xl font-medium mb-3 group-hover:text-indigo-400 transition-colors">
                  {work.client}
                </h4>
                <p className="font-jakarta text-zinc-500 text-sm md:text-base leading-relaxed line-clamp-2 group-hover:text-zinc-300 transition-colors">
                  {work.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SECTION FOOTER --- */}
        <div className="mt-20 md:mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-zinc-500 text-sm font-medium font-jakarta">Ready to see your business grow?</p>
           <motion.button 
             whileHover={{ x: 10 }}
             className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs group font-jakarta"
           >
              View More Case Studies
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all">
                <ArrowUpRight size={16} />
              </div>
           </motion.button>
        </div>
      </div>

      {/* Background Accent Text (Optional Branding) */}
      <div className="absolute bottom-10 right-[-5%] text-[20vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter leading-none">
        IMPACT
      </div>
    </section>
  );
};

export default CaseStudy;