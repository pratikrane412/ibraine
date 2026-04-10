import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Target, CheckCircle2, 
  ShoppingCart, Magnet, DownloadCloud, Megaphone, 
  ArrowRight, Sparkles, Quote, Headphones, TrendingUp, Zap
} from 'lucide-react';

const PerformanceMarketing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  // Sync mobile scroll with active dot
  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
      setActiveIndex(index);
    }
  };

  // Reusable animation preset
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const campaigns = [
    { title: "E-com Conversions", desc: "Turn browsers into buyers through hyper-tailored dynamic retargeting.", icon: <ShoppingCart />, color: "from-[#FB8C32] to-[#1872BA]", span: "col-span-1 md:col-span-2 lg:col-span-2" },
    { title: "Lead Generation", desc: "High-intent contextual targeting.", icon: <Magnet />, color: "from-[#1872BA] to-[#0f5a96]", span: "col-span-1 lg:col-span-1" },
    { title: "App Installs", desc: "Scale user bases with actionable math.", icon: <DownloadCloud />, color: "from-[#FB8C32] to-[#e07522]", span: "col-span-1 lg:col-span-1" },
    { title: "Brand Awareness", desc: "Data-backed visual storytelling that connects.", icon: <Megaphone />, color: "from-[#323232] to-[#1a1a1a]", span: "col-span-1 md:col-span-2 lg:col-span-2" }
  ];

  return (
    <div className="w-full bg-[#fafbfc] overflow-hidden font-body text-[#323232] selection:bg-[#FB8C32] selection:text-white">
      
      {/* ════ GLOBAL TYPOGRAPHY STYLES ════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap');
        
        :root {
          --font-heading: 'Montserrat', system-ui, -apple-system, sans-serif;
          --font-body: 'Open Sans', system-ui, -apple-system, sans-serif;
        }

        .font-heading { font-family: var(--font-heading); }
        .font-body { font-family: var(--font-body); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .glass-panel { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5); }
      `}</style>

      {/* ════ 1. PREMIUM HERO SECTION ════ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-20 lg:pb-20 px-4 md:px-8 overflow-hidden bg-white">
        {/* Animated Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#1872BA] rounded-full blur-[100px]" />
           <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 10, repeat: Infinity, delay: 1 }} className="absolute bottom-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FB8C32] rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#32323205_1px,transparent_1px),linear-gradient(to_bottom,#32323205_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-6 lg:mt-0">
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="lg:col-span-6 text-center lg:text-left">
              
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1872BA]/20 shadow-sm text-[#1872BA] font-heading font-bold text-[10px] md:text-xs tracking-wider uppercase mb-5 md:mb-6">
                <Sparkles size={14} className="text-[#FB8C32]" /> Result-Oriented Agency
              </motion.div>
              
              <motion.div variants={fadeUp}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-[70px] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 font-extrabold tracking-tight text-[#323232]">
                  Scale Profit <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">With Precision.</span>
                </h1>
              </motion.div>

              <motion.div variants={fadeUp}>
                <p className="font-body text-[#323232]/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  The fastest-growing performance marketing agency. We drive unparalleled growth through data-driven testing and math-based scaling.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <button className="bg-[#FB8C32] text-white font-body font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#1872BA] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(251,140,50,0.4)] text-sm md:text-base">
                  Optimize Success
                </button>
                <button className="bg-white border border-[#323232]/10 text-[#323232] font-body font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#fafbfc] transition-all duration-300 flex justify-center items-center gap-2 shadow-sm text-sm md:text-base">
                  <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1872BA]/10 flex items-center justify-center text-[#1872BA]"><Play size={12} fill="currentColor" className="md:w-4 md:h-4" /></span> 
                  Watch Results
                </button>
              </motion.div>

            </motion.div>

            {/* Faux UI / Dashboard Graphic */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="lg:col-span-6 hidden lg:block relative">
              <div className="relative w-full aspect-[4/3] glass-panel rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl border border-[#323232]/5 overflow-hidden group">
                 <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-gradient-to-br from-[#1872BA]/10 to-[#FB8C32]/10 blur-3xl rounded-full" />
                 
                 {/* Faux Header */}
                 <div className="flex justify-between items-center mb-6 md:mb-8 pb-4 border-b border-[#323232]/5">
                    <div className="flex gap-3 md:gap-4 items-center">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-tr from-[#1872BA] to-[#FB8C32] flex items-center justify-center text-white shadow-md"><TrendingUp size={20} className="md:w-6 md:h-6" /></div>
                       <div>
                         <div className="h-2 md:h-2.5 w-16 md:w-20 bg-[#323232]/10 rounded-full mb-1.5 md:mb-2" />
                         <div className="h-1.5 md:h-2 w-10 md:w-12 bg-[#323232]/5 rounded-full" />
                       </div>
                    </div>
                    <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#1872BA]/10 text-[#1872BA] font-heading font-bold text-[10px] md:text-xs flex gap-1 items-center">
                      <Zap size={12} fill="currentColor" /> +248% ROAS
                    </div>
                 </div>

                 {/* Faux Charts */}
                 <div className="flex items-end gap-2 md:gap-3 h-32 md:h-48 w-full mt-6 md:mt-10">
                    {[30, 50, 40, 70, 60, 90, 80].map((height, i) => (
                      <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: 1, delay: i * 0.1 }} className="flex-1 bg-gradient-to-t from-[#1872BA]/20 to-[#1872BA] rounded-t-md md:rounded-t-lg relative group-hover:opacity-80 transition-opacity">
                         {i === 5 && <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#323232] text-white text-[8px] md:text-[10px] py-1 px-2 rounded-md font-body font-bold">₹15Cr</div>}
                      </motion.div>
                    ))}
                 </div>

                 {/* Floating Element */}
                 <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 md:-right-8 top-1/3 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-[#323232]/5 flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FB8C32]/10 flex items-center justify-center text-[#FB8C32]"><Target size={20} className="md:w-6 md:h-6" /></div>
                    <div>
                      <p className="text-[9px] md:text-[10px] text-[#323232]/50 font-heading font-bold uppercase mb-0.5 md:mb-1">CPA Reduced</p>
                      <p className="text-base md:text-xl font-heading font-black text-[#323232]">-42.5%</p>
                    </div>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ 2. FLOATING STATS TAPE ════ */}
      <section className="relative z-20 -mt-8 md:-mt-12 px-4 md:px-8 max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#323232] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(50,50,50,0.2)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#1872BA]/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10 text-center md:text-left">
            {[
              { label: "Ads Spend (12m)", value: "₹ 46.5Cr" },
              { label: "Average ROAS", value: "3.31x", highlight: true },
              { label: "Total Revenue Generated", value: "₹ 154Cr+" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col justify-center pt-4 md:pt-0 ${i !== 0 ? 'md:pl-8' : ''}`}>
                 <span className="text-white/60 font-body font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-1 md:mb-2">{stat.label}</span>
                 <h4 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-black ${stat.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]' : 'text-white'}`}>
                    {stat.value}
                 </h4>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════ 3. BENTO BOX CAMPAIGNS ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center md:text-left mb-10 md:mb-16">
             <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[50px] text-[#323232] leading-[1.2] lg:leading-[1.1] tracking-tight">
                Data-driven campaigns <br className="hidden md:block"/> for <span className="text-[#1872BA]">exponential</span> growth.
             </h2>
          </motion.div>

          {/* Desktop Bento Grid / Mobile Scroll */}
          <div ref={scrollRef} onScroll={handleScroll} className="flex lg:grid lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory pb-4 lg:pb-0">
            {campaigns.map((camp, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className={`min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center ${camp.span}`}>
                <div className="group bg-white border border-[#323232]/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
                   <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br ${camp.color} opacity-0 group-hover:opacity-10 blur-2xl md:blur-3xl transition-opacity duration-500`} />
                   
                   <div className="space-y-4 md:space-y-6 relative z-10">
                     <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${camp.color} flex items-center justify-center text-white shadow-sm`}>
                        {React.cloneElement(camp.icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                     </div>
                     <div>
                        <h4 className="font-heading font-bold text-lg md:text-xl text-[#323232] mb-2">{camp.title}</h4>
                        <p className="font-body text-[#323232]/70 text-sm md:text-base leading-relaxed">{camp.desc}</p>
                     </div>
                   </div>
                   
                   <div className="mt-8 md:mt-10 flex items-center gap-2 text-[#323232] font-heading font-bold text-xs md:text-sm group-hover:text-[#1872BA] transition-colors relative z-10">
                      Explore Framework <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform md:w-4 md:h-4" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Scroll Indicators */}
          <div className="flex justify-center gap-1.5 mt-2 lg:hidden">
             {campaigns.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-5 bg-[#1872BA]' : 'w-2 bg-[#323232]/20'}`} />
             ))}
          </div>
        </div>
      </section>

      {/* ════ 4. THE 90-DAY CHALLENGE (Dark Mode Impact) ════ */}
      <section className="bg-[#323232] py-16 md:py-20 lg:py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,140,50,0.15),transparent_70%)]" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
         
         <div className="max-w-3xl mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1872BA]/20 border border-[#1872BA]/30 text-[#1872BA] font-heading font-bold text-[10px] md:text-xs tracking-wider uppercase mb-5 md:mb-6">
                Guaranteed Results
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[54px] text-white leading-[1.2] lg:leading-[1.1] mb-4 md:mb-6 tracking-tight">
                 Get 1000 Customers <br className="hidden md:block"/> in 90 Days — <br className="block md:hidden"/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">or we work for free.</span>
              </h2>
              <p className="font-body text-white/70 text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
                 We take a mathematical approach to growth. No fluff, no "vanity metrics." Just ROI-focused strategy that scales your business with zero risk.
              </p>
              <button className="bg-[#FB8C32] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-body font-bold text-xs md:text-sm uppercase tracking-widest hover:scale-105 hover:bg-[#1872BA] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(251,140,50,0.5)]">
                 Accept The Challenge
              </button>
            </motion.div>
         </div>
      </section>

      {/* ════ 5. SMART SCALING (CSS Mockup Style) ════ */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[50px] text-[#323232] leading-[1.2] lg:leading-[1.1] tracking-tight">
                Smart Scaling, <br className="hidden lg:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1872BA] to-[#FB8C32]">Bigger Profits.</span>
              </h2>
              <p className="font-body text-[#323232]/70 text-sm md:text-base lg:text-lg leading-relaxed mx-auto lg:mx-0 max-w-xl">
                Maximize revenue without overburdening your resources. We find innovative ways to scale while utilizing your existing assets with surgical efficiency.
              </p>
              <div className="space-y-3 md:space-y-4 max-w-xl mx-auto lg:mx-0">
                 {[
                   "Surgical Precision Targeting",
                   "Proprietary Scaling Frameworks",
                   "ROI-First Mathematical Thinking"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 md:gap-4 bg-[#fafbfc] p-3 md:p-4 rounded-xl md:rounded-2xl border border-[#323232]/5 shadow-sm text-left">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1872BA]/10 flex items-center justify-center text-[#1872BA] flex-shrink-0">
                         <CheckCircle2 size={14} className="md:w-4 md:h-4" />
                      </div>
                      <span className="font-heading font-bold text-[#323232] text-xs md:text-sm">{item}</span>
                   </div>
                 ))}
              </div>
           </motion.div>

           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative order-1 lg:order-2 mt-6 lg:mt-0">
              {/* CSS Built Mockup Graphic */}
              <div className="aspect-square md:aspect-[4/5] bg-[#323232] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-xl relative overflow-hidden border-[6px] md:border-8 border-white">
                 <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(24,114,186,0.2),transparent_50%)]" />
                 
                 <div className="h-full flex flex-col relative z-10">
                    <div className="flex gap-2 mb-6 md:mb-8">
                       <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                       <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FB8C32]" />
                       <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-emerald-500" />
                    </div>
                    
                    <div className="space-y-4 md:space-y-6 flex-1">
                       <div className="h-24 md:h-32 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6 flex flex-col justify-center">
                          <div className="w-1/2 h-3 md:h-4 bg-white/20 rounded-full mb-3 md:mb-4" />
                          <div className="w-3/4 h-6 md:h-8 bg-[#1872BA]/40 rounded-md md:rounded-lg border border-[#1872BA]/50" />
                       </div>
                       <div className="flex gap-3 md:gap-4">
                          <div className="flex-1 h-20 md:h-24 bg-white/5 rounded-xl md:rounded-2xl border border-white/10" />
                          <div className="flex-1 h-20 md:h-24 bg-white/5 rounded-xl md:rounded-2xl border border-white/10" />
                       </div>
                       <div className="flex-1 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6 relative overflow-hidden">
                          <svg className="absolute inset-0 w-full h-full text-[#FB8C32]/40" preserveAspectRatio="none" viewBox="0 0 100 100">
                             <path d="M0,100 Q25,80 50,50 T100,0 L100,100 Z" fill="currentColor" />
                          </svg>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Floating Quote */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-8 bg-white p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-[#323232]/5 max-w-[200px] md:max-w-[250px] z-20">
                 <Quote className="text-[#FB8C32] w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3" />
                 <p className="font-heading font-bold text-sm md:text-lg text-[#323232] leading-tight">"Math dictates our marketing."</p>
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* ════ 6. CONTACT SECTION ════ */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-8 bg-[#fafbfc]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-[1200px] mx-auto bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-xl border border-[#323232]/5 overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-5">
              
              {/* Left Info Box */}
              <div className="lg:col-span-2 bg-[#323232] p-8 md:p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(24,114,186,0.4),transparent_60%)] pointer-events-none" />
                 
                 <div className="relative z-10 space-y-6 md:space-y-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#FB8C32] backdrop-blur-md border border-white/10 shadow-sm">
                       <Headphones size={24} className="md:w-7 md:h-7" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.2] lg:leading-[1.15]">Let's build your <br className="hidden sm:block"/><span className="text-[#FB8C32]">Growth Engine.</span></h2>
                    <p className="text-white/70 font-body text-sm md:text-base leading-relaxed">
                      Our experts are ready to bridge the gap between your digital vision and mathematical ROI.
                    </p>
                 </div>

                 <div className="relative z-10 mt-10 md:mt-16">
                    <p className="text-white/50 font-body font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1.5 md:mb-2">Direct Line</p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white">+91 9892 854 892</p>
                 </div>
              </div>
              
              {/* Right Form Box */}
              <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                 <form className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                      <div className="space-y-1.5">
                         <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Full Name</label>
                         <input placeholder="John Doe" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3.5 md:p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] transition-all font-body text-sm text-[#323232]" />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Work Email</label>
                         <input placeholder="john@company.com" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3.5 md:p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] transition-all font-body text-sm text-[#323232]" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Project Details</label>
                       <textarea placeholder="Tell us about your current MRR and goals..." rows="3" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3.5 md:p-4 rounded-xl outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] transition-all font-body text-sm text-[#323232] resize-none" />
                    </div>
                    <button className="w-full bg-[#FB8C32] text-white py-3.5 md:py-4 rounded-xl font-body font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#1872BA] transition-colors duration-300 mt-2 md:mt-4 shadow-md">
                       Book Strategy Call
                    </button>
                 </form>
              </div>

           </div>
        </motion.div>
      </section>

    </div>
  );
};

export default PerformanceMarketing;