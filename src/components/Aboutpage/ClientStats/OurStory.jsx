import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const timelineData = [
  { year: "2011", desc: "iBraine was founded by visionary leaders in Mumbai, India." },
  { year: "2012", desc: "Started a training institute to generate more talent for the industry" },
  { year: "2013", desc: "Completed 100 projects for different clients." },
  // { year: "2015", desc: "Reached 1,000 active global clients and scaled operations." },
  { year: "2018", desc: "Awarded as “Top 20 Digital Marketing Service Provider” in India." },
  { year: "2019", desc: "Awarded as “Top digital marketing consultant provider” in India." },
  { year: "2022", desc: "Our founder was featured as “Most Powerful Men in Business." },
];

const OurStory = () => {
  return (
    <section className="relative w-full bg-[#111319] py-20 lg:py-26 overflow-hidden selection:bg-indigo-500/30">

      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* 
          CONTAINER REFINED: 
          - Changed to mx-auto for centering
          - Applied px-6 md:px-12 lg:px-20 to match Founder section spacing
      */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">

        {/* ════ LEFT SIDE: STICKY ASYMMETRICAL GRID ════ */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 lg:sticky lg:top-32 self-start">
          {/* Main Tall Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1 row-span-2 aspect-[3/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" className="w-full h-full object-cover" alt="Team Session" />
          </motion.div>

          {/* Top Right Small */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800" className="w-full h-full object-cover" alt="Collaborative work" />
          </motion.div>

          {/* Bottom Right Small */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" className="w-full h-full object-cover" alt="Strategy planning" />
          </motion.div>

          {/* Large Wide Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-2 aspect-[16/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl mt-2"
          >
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000" className="w-full h-full object-cover" alt="Office Culture" />
          </motion.div>
        </div>

        {/* ════ RIGHT SIDE: THE CHRONICLES ════ */}
        <div className="lg:col-span-6 flex flex-col pt-4 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold text-[10px] tracking-[0.2em] uppercase mb-8">
              <Sparkles size={14} /> Our Journey
            </div>
            <h2 className="font-lora text-white text-[48px] md:text-[68px] font-medium leading-[1.1] tracking-tight mb-8">
              Our <span className="italic text-indigo-400">Story</span>
            </h2>
            <p className="font-jakarta text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Since 2012, we've partnered with hundreds of brands to build robust digital ecosystems. We combine deep technical expertise with data-driven marketing to engineer measurable growth.
            </p>
          </motion.div>

          {/* VERTICAL TIMELINE */}
          <div className="relative border-l border-white/10 ml-4 space-y-12 pb-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-10 group"
              >
                {/* Timeline Bullet */}
                <div className="absolute -left-[6.5px] top-1.5 w-3 h-3 rounded-full bg-[#111319] border-2 border-slate-700 group-hover:border-indigo-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,1)]" />

                {/* Year Badge */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-jakarta font-black text-white group-hover:text-indigo-400 transition-colors">
                    {item.year}
                  </span>
                  <div className="h-px w-8 bg-indigo-500/20 group-hover:w-12 transition-all duration-500" />
                </div>

                {/* Description */}
                <p className="font-jakarta text-slate-500 text-base leading-relaxed max-w-sm group-hover:text-slate-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;