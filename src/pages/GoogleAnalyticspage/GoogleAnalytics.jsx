import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart4, Target, Search, FileText, 
  ShieldCheck, Zap, ArrowRight, Activity, LineChart, CheckCircle2, TrendingUp 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const GoogleAnalytics = () => {
  const steps = [
    { num: "01", title: "Set Goals", desc: "Define milestones and chart a mathematical path to success.", icon: <Target size={24} /> },
    { num: "02", title: "Track Data", desc: "From user behavior to micro-metrics, track every single touchpoint.", icon: <Search size={24} /> },
    { num: "03", title: "Check Reports", desc: "Gain valuable, automated insights through our customized dashboards.", icon: <FileText size={24} /> },
    { num: "04", title: "Analyze Numbers", desc: "Uncover actionable, hidden trends to exponentially drive growth.", icon: <BarChart4 size={24} /> }
  ];

  const servicesList = [
    "Account Creation", "View Setup", "External Campaign Tracking", 
    "Custom Alerts", "Code Customization", "Dashboard Setup", 
    "Internal Search Tracking", "Custom Definitions", "Event Tracking", 
    "E-Commerce Tracking", "Filter Creation", "Goal Funnel Setup"
  ];

  return (
    <main className="w-full bg-[#fafbfc] overflow-hidden font-body text-[#323232] selection:bg-[#FB8C32] selection:text-white">
      
      {/* ════ GLOBAL TYPOGRAPHY STYLES ════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap');
        
        :root {
          --font-heading: 'Montserrat', system-ui, -apple-system, sans-serif;
          --font-body: 'Open Sans', system-ui, -apple-system, sans-serif;
        }

        .font-heading { font-family: var(--font-heading); }
        .font-body { font-family: var(--font-body); }
        .glass-card { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); }
      `}</style>

      {/* ════ 1. PREMIUM DARK HERO SECTION ════ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 px-4 md:px-8 flex items-center bg-[#323232] text-white overflow-hidden">
        {/* Animated Tech Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)' }}></div>
        <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#1872BA]/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FB8C32]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative z-10 w-full mt-6 lg:mt-0">
          
          {/* Left: Text Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full lg:w-1/2 text-center lg:text-left z-20">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md text-white">
                <Activity size={14} className="text-[#FB8C32]" />
                <span className="font-body text-[10px] md:text-xs font-bold tracking-widest uppercase">750+ Worldwide Clients</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl lg:text-[70px] leading-[1.1] md:leading-[1.05] mb-5 md:mb-6 font-extrabold tracking-tight text-white">
               Craft Strategies with <br className="hidden lg:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1872BA] to-[#FB8C32]">Analytics Insights.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="font-body text-white/70 text-sm md:text-base lg:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
               Collect, measure, and deeply analyze website data to understand human behavior. We deliver crystal-clear data visualizations to mathematically optimize your ROI.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
               <button className="bg-[#FB8C32] text-white font-body font-bold px-6 py-3.5 rounded-xl hover:bg-[#1872BA] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(251,140,50,0.4)] text-sm md:text-base">
                  Analyze My Website
               </button>
               <button className="glass-card text-white font-body font-bold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
                  <LineChart size={18} /> View Sample Report
               </button>
            </motion.div>
          </motion.div>

          {/* Right: Premium Widgetized Collage */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
             
             {/* Main Graphic */}
             <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} src="https://ibraine.com/wp-content/uploads/2024/03/Group_43-removebg-preview.png" className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-[75%] z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" alt="Analytics Expert" />
             
             {/* Floating Widget 1 (Goal) */}
             <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 md:top-4 right-[0%] lg:right-[5%] z-20 glass-card p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="bg-[#FB8C32]/20 p-2 rounded-lg border border-[#FB8C32]/30">
                   <img src="https://ibraine.com/wp-content/uploads/2024/03/goal.png" className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="Goal" />
                </div>
                <div>
                   <p className="text-[8px] md:text-[10px] text-white/60 font-body uppercase font-bold tracking-wider">Goal Reached</p>
                   <p className="font-heading font-bold text-base md:text-lg text-white">100%</p>
                </div>
             </motion.div>

             {/* Floating Widget 2 (Ranking) */}
             <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-0 md:bottom-4 left-[0%] lg:left-[5%] z-20 glass-card p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="bg-[#1872BA]/20 p-2 rounded-lg border border-[#1872BA]/30">
                   <img src="https://ibraine.com/wp-content/uploads/2024/03/ranking.png" className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="Ranking" />
                </div>
                <div>
                   <p className="text-[8px] md:text-[10px] text-white/60 font-body uppercase font-bold tracking-wider">Search Rank</p>
                   <p className="font-heading font-bold text-base md:text-lg text-white flex items-center gap-1">Top #1 <TrendingUp className="text-[#FB8C32] w-4 h-4" /></p>
                </div>
             </motion.div>

             {/* Floating Widget 3 (Keywords) */}
             <motion.div animate={{ scale: [0.95, 1.05, 0.95], rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-1/2 -right-2 md:-right-4 z-0 glass-card p-2 md:p-3 rounded-full shadow-2xl hidden sm:block">
                 <img src="https://ibraine.com/wp-content/uploads/2024/03/keyword-1.png" className="w-8 h-8 md:w-12 md:h-12 object-contain" alt="Keyword" />
             </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════ 2. PROCESS FLOW (Modern Cards) ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white border-b border-[#323232]/5 relative">
        <div className="max-w-[1440px] mx-auto text-center mb-10 md:mb-16 relative z-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#323232] mb-3 md:mb-4 tracking-tight">
                Unveiling the Art of <br className="block sm:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1872BA] to-[#FB8C32]">Data Enhancement.</span>
            </h2>
            <p className="font-body text-[#323232]/70 text-sm md:text-base max-w-2xl mx-auto">We transform chaotic raw data into a streamlined, highly-actionable pipeline.</p>
        </div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative">
            {/* Ambient Background Glow for steps */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[#1872BA]/5 rounded-full blur-[80px] z-0"></div>

            {steps.map((step, i) => (
               <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="relative z-10 group h-full">
                  <div className="bg-white border border-[#323232]/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden relative flex flex-col">
                      
                      {/* Watermark Number */}
                      <div className="absolute -right-2 -top-4 font-heading font-black text-[80px] md:text-[100px] text-[#323232]/5 group-hover:text-[#1872BA]/5 transition-colors duration-500 pointer-events-none select-none z-0">
                         {step.num}
                      </div>

                      {/* Top Glowing Border Effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1872BA] to-[#FB8C32] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                      <div className="relative z-10">
                          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 shadow-sm text-white
                             ${i === 0 ? 'bg-[#FB8C32]' : ''}
                             ${i === 1 ? 'bg-[#1872BA]' : ''}
                             ${i === 2 ? 'bg-[#323232]' : ''}
                             ${i === 3 ? 'bg-gradient-to-br from-[#FB8C32] to-[#1872BA]' : ''}
                          `}>
                              {step.icon}
                          </div>
                          <div className="inline-block bg-[#323232] text-white text-[9px] md:text-[10px] font-body font-bold px-3 py-1 rounded-full mb-3 md:mb-4 tracking-widest uppercase">Phase {step.num}</div>
                          <h4 className="font-heading font-bold text-xl md:text-2xl mb-2 md:mb-3 text-[#323232]">{step.title}</h4>
                          <p className="font-body text-[#323232]/70 leading-relaxed text-xs md:text-sm">{step.desc}</p>
                      </div>
                  </div>
               </motion.div>
            ))}
        </div>
      </section>

      {/* ════ 3. INSIGHTS SECTION (Editorial Style) ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#fafbfc]">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* Left Graphic */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative order-2 lg:order-1 mt-6 lg:mt-0">
                <div className="relative bg-white p-3 md:p-4 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-[#323232]/5 z-10">
                   <img src="https://ibraine.com/wp-content/uploads/2024/03/Group-42.webp" alt="GA Help Dashboard" className="w-full rounded-[1.5rem] md:rounded-[2rem] object-cover" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-[#FB8C32]/20 rounded-full blur-2xl md:blur-3xl z-0" />
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-60 md:h-60 bg-[#1872BA]/20 rounded-full blur-2xl md:blur-3xl z-0" />
            </motion.div>
            
            {/* Right Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 lg:order-2 space-y-5 md:space-y-6">
                <motion.div variants={fadeUp} className="inline-flex items-center gap-1.5 md:gap-2 bg-white border border-[#323232]/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm text-[#FB8C32] text-[10px] md:text-xs font-body font-bold uppercase tracking-widest">
                   <BarChart4 size={14} /> Analytics Mastery
                </motion.div>
                
                <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl lg:text-[46px] text-[#323232] leading-[1.2] lg:leading-[1.1] tracking-tight">
                   How does <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">Google Analytics</span> help?
                </motion.h2>
                
                <motion.div variants={fadeUp} className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border-l-4 border-[#FB8C32] shadow-sm">
                   <p className="font-body text-[#323232]/80 text-sm md:text-base font-medium italic">
                       In today’s rapidly expanding online environment, pure intuition is no longer enough. GA has evolved into the central nervous system of digital business research.
                   </p>
                </motion.div>

                <motion.p variants={fadeUp} className="font-body text-[#323232]/70 text-sm md:text-base leading-relaxed">
                    It maps exact human behavior on your website, critical for targeted market research. Beyond digital, our setups measure traffic spikes correlated with traditional print or media advertising, giving you the absolute truth about your ROI.
                </motion.p>

                <motion.div variants={fadeUp} className="pt-2 md:pt-4">
                   <button className="bg-[#323232] text-white font-body font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#FB8C32] transition-all duration-300 flex items-center gap-2 md:gap-3 group shadow-lg text-sm md:text-base">
                      Maximize Your Potential <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                   </button>
                </motion.div>
            </motion.div>
         </div>
      </section>

      {/* ════ 4. BENTO GRID CHECKLIST ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white relative overflow-hidden">
         {/* Background Grid Accent */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#32323205_1px,transparent_1px),linear-gradient(to_bottom,#32323205_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none" />
         
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 relative z-10">
            
            {/* Title Bento Card */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-4 bg-[#323232] p-8 md:p-10 lg:p-12 rounded-[1.5rem] md:rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-[#1872BA]/30 blur-[60px] md:blur-[80px] rounded-full" />
                <ShieldCheck className="text-[#FB8C32] mb-6 md:mb-8 relative z-10" size={48} />
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 relative z-10 leading-tight">Expert <br/> Technical <span className="text-[#FB8C32]">Setups.</span></h2>
                <p className="font-body text-white/70 text-sm md:text-base relative z-10 leading-relaxed">We don't just "install" code. We surgically customize every single digital touchpoint to ensure clean, unquestionable data.</p>
            </motion.div>

            {/* Checklist Bento Tags */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-max content-center">
                {servicesList.map((item, i) => (
                   <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 15 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.02, backgroundColor: "#fafbfc", borderColor: "#1872BA" }} 
                      className="p-4 md:p-5 border border-[#323232]/10 rounded-xl md:rounded-2xl flex items-center gap-3 bg-white transition-all shadow-sm group cursor-default"
                   >
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#1872BA]/10 text-[#1872BA] flex items-center justify-center shrink-0 group-hover:bg-[#1872BA] group-hover:text-white transition-colors">
                          <CheckCircle2 size={14} className="md:w-4 md:h-4" />
                      </div>
                      <span className="font-heading font-semibold text-[#323232] text-xs md:text-sm">{item}</span>
                   </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* ════ 5. PREMIUM CTA SECTION ════ */}
      <section className="relative py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#FB8C32] text-white text-center overflow-hidden">
         {/* Modern Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-tr from-[#1872BA]/40 to-transparent pointer-events-none" />
         
         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-[1.2] lg:leading-[1.1] tracking-tight">Accelerate Your Presence, <br className="hidden md:block"/> Elevate Your Success.</h2>
            <p className="font-body text-white/90 text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
               Unlock the mathematical power of digital marketing to reach your exact audience, drive hyper-engagement, and achieve exponential business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <button className="bg-[#323232] text-white font-body font-bold text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl hover:bg-white hover:text-[#323232] transition-colors duration-300">
                    Call Us Now
                </button>
                <button className="bg-transparent border border-white text-white font-body font-bold text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    Request Proposal
                </button>
            </div>
         </motion.div>
      </section>

    </main>
  );
};

export default GoogleAnalytics;