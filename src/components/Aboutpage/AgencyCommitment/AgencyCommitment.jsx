import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Zap, Trophy, Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const commitmentCards = [
  {
    title: "Valuing Talent & Reputation",
    desc: "We believe there is no substitute for elite talent. We source, train, and retain the sharpest minds in digital marketing so your campaigns are always handled by true experts, not just account managers.",
    icon: <Heart className="w-6 h-6" />,
    color: "indigo"
  },
  {
    title: "Partnership Built on Trust",
    desc: "Trust forms the bedrock of our business. We don't just work for clients; we partner with them to build lasting relationships rooted in mutual respect and shared goals.",
    icon: <Handshake className="w-6 h-6" />,
    color: "amber"
  },
  {
    title: "Absolute Transparency",
    desc: "Transparency is the future of sustainable business. We provide detailed, honest reporting at every stage, ensuring you are never left in the dark about your growth.",
    icon: <Zap className="w-6 h-6" />,
    color: "emerald"
  },
  {
    title: "Decade of Digital Mastery",
    desc: "With 10+ years of industry experience, our veteran team leverages deep market insights to help you scale your business with mathematical precision.",
    icon: <Trophy className="w-6 h-6" />,
    color: "rose"
  }
];


const AgencyCommitment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  // 1. AUTO-SCROLL LOGIC (3 Seconds) - Only active on Mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 1024) { // Only auto-scroll on mobile/tablet
        setActiveIndex((prev) => (prev + 1) % commitmentCards.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 2. SYNC SCROLL POSITION FOR AUTO-SCROLL
  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const container = scrollRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: activeIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  // 3. MANUAL SCROLL SYNC (Update dots when user swipes)
  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
      if (index !== activeIndex) setActiveIndex(index);
    }
  };

  return (
    <section className="relative w-full bg-[#fafafa] py-16 md:py-24 lg:py-32 px-6 overflow-visible selection:bg-indigo-100">

      {/* ════ BACKGROUND DECOR (Unchanged) ════ */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '10% 100%' }} />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .font-lora { font-family: 'Lora', serif; }
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        /* Utility to hide scrollbars */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between relative z-10">

        {/* ════ LEFT SIDE: STICKY (Unchanged on Desktop) ════ */}
        <div className="w-full lg:w-[42%] lg:sticky lg:top-32 self-start mb-16 lg:mb-0">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[10px] tracking-[0.2em] uppercase mb-8">
              <Sparkles size={14} /> Our values
            </div>
            <h2 className="font-lora text-[36px] md:text-[50px] lg:text-[62px] leading-[1.1] text-slate-900 mb-8 tracking-tight">
              Driving Growth, <br />
              Defining  <span className="italic text-indigo-600">Standards.</span>
            </h2>
            <p className="font-jakarta text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl mb-12">
              We don't just execute campaigns; we act as an extension of your team. Our foundation is built on absolute trust and strategies that actually move the needle.
            </p>
            <button onClick={() => navigate("/contact")} className="relative group overflow-hidden bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-tight flex items-center gap-3 w-fit shadow-2xl transition-all">
              <span className="relative z-10">Learn our process</span>
              <ArrowUpRight size={20} className="relative z-10 text-indigo-300" />
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </motion.div>
        </div>

        {/* ════ RIGHT SIDE: CAROUSEL ON MOBILE / STACK ON DESKTOP ════ */}
        <div className="w-full lg:w-[52%]">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory gap-6 md:gap-12 pb-10 lg:pb-20"
          >
            {commitmentCards.map((card, index) => (
              <div
                key={index}
                className="min-w-full lg:min-w-0 snap-center px-1 lg:px-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] shadow-sm hover:shadow-2xl transition-all duration-500 h-full"
                >
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12
                        ${card.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : ''}
                        ${card.color === 'amber' ? 'bg-amber-50 text-amber-600' : ''}
                        ${card.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : ''}
                        ${card.color === 'rose' ? 'bg-rose-50 text-rose-600' : ''}
                      `}>
                        {card.icon}
                      </div>
                      <h4 className="font-lora font-semibold text-slate-800 text-2xl md:text-3xl lg:text-4xl tracking-tight">
                        {card.title}
                      </h4>
                    </div>
                    <p className="font-jakarta text-[17px] md:text-[20px] text-slate-500 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                    <div className={`mt-10 h-1.5 w-12 group-hover:w-24 transition-all duration-500 rounded-full
                      ${card.color === 'indigo' ? 'bg-indigo-600' : ''}
                      ${card.color === 'amber' ? 'bg-amber-600' : ''}
                      ${card.color === 'emerald' ? 'bg-emerald-600' : ''}
                      ${card.color === 'rose' ? 'bg-rose-600' : ''}
                    `} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* MOBILE ONLY INDICATORS (DOTS) */}
          <div className="flex justify-center gap-3 lg:hidden mt-2">
            {commitmentCards.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-10 text-[12vw] font-black text-slate-900/[0.02] pointer-events-none hidden lg:block uppercase tracking-tighter">
        Commitment
      </div>
    </section>
  );
};

export default AgencyCommitment;