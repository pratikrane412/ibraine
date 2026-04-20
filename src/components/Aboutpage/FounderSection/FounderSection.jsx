import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react'; // Removed ArrowRight

const FounderSection = () => {
  return (
    <section className="relative w-full bg-[#fafafa] py-16 md:py-24 lg:py-32 px-6 overflow-hidden selection:bg-indigo-100">

      {/* --- ELITE BACKGROUND DESIGN --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Mesh Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-indigo-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[40%] bg-teal-50/60 rounded-full blur-[100px]" />

        {/* Subtle Grid & Grain */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

        {/* --- LEFT SIDE: EDITORIAL CONTENT --- */}
        <div className="flex flex-col text-left lg:col-span-7 order-2 lg:order-1">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* TAGLINE */}
            <div className="flex items-center gap-3 mb-8">
              <span className="p-1.5 rounded-lg bg-teal-50 text-[#fb8930]">
                <Sparkles size={16} />
              </span>
              <span className="font-jakarta font-bold text-[10px] md:text-xs tracking-[0.3em] text-slate-500 uppercase">
                Founder, Ibraine
              </span>
            </div>

            {/* MASSIVE EDITORIAL HEADING */}
            <h2 className="font-lora text-[42px] md:text-[70px] lg:text-[85px] font-medium leading-[1] text-slate-900 mb-10 tracking-tight">
              Building the <br />
              <span className="italic text-indigo-600">Ecosystems </span>
              <span className="inline-block mx-3 md:mx-5 align-middle">
                <motion.div
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="text-[#fb8930]"
                >
                  <svg width="45" height="45" viewBox="0 0 24 24" className="md:w-[60px] md:h-[60px] fill-current">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </motion.div>
              </span>
              That Scale Brands. <br className="hidden md:block" />

            </h2>

            {/* REFINED DIVIDER */}
            <div className="relative flex items-center mb-10">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#fb8b36] to-transparent"></div>
              <div className="w-1.5 h-1.5 bg-[#fb8b36] rotate-45 mx-2"></div>
            </div>

            {/* DESCRIPTION CONTENT */}
            <p className="font-jakarta text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-medium">
              We bridge the gap between business vision and digital execution. Our goal is to leverage technical innovation and deep marketing expertise to scale your business with precision            </p>

          </motion.div>
        </div>

        {/* --- RIGHT SIDE: PREMIUM PORTRAIT --- */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* The Main Image Frame */}
            <div className="aspect-[4/5] w-full min-w-[280px] max-w-[450px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-zinc-100 border-[10px] border-white">
              <img
                src="/images/Harsh-Ibraine.png"
                alt="Founder"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Info Card (Depth) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white max-w-[200px] hidden md:block"
            >
              <Quote className="text-[#fb8b36] w-8 h-8 mb-3 opacity-50" />
              <p className="font-jakarta text-[13px] font-bold text-slate-800 leading-tight">
                "True growth happens when data informs creativity, and strategy dictates execution." - Harsh"
              </p>
            </motion.div>

            {/* Technical Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(#fb8b36_2px,transparent_1.5px)] [background-size:20px_20px] -z-10 opacity-60"></div>
          </motion.div>

          {/* Background Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-100/30 blur-[80px] -z-20 rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default FounderSection;