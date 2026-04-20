import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Headphones, ArrowRight, CheckCircle2, 
  TrendingUp, Globe, Users, Target, PhoneCall, Mail
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const AffiliateMarketing = () => {
  
  const industries = [
    { name: "E-Commerce", img: "https://ibraine.com/wp-content/uploads/2024/05/online-store.png" },
    { name: "Travel", img: "https://ibraine.com/wp-content/uploads/2024/05/travel-and-tourism.png" },
    { name: "Finance", img: "https://ibraine.com/wp-content/uploads/2024/03/invesment.png" },
    { name: "Health & Fitness", img: "https://ibraine.com/wp-content/uploads/2024/03/protection.png" },
    { name: "Education", img: "https://ibraine.com/wp-content/uploads/2024/05/school.png" },
    { name: "Beauty & Cosmetics", img: "https://ibraine.com/wp-content/uploads/2024/05/botox.png" },
    { name: "Fashion", img: "https://ibraine.com/wp-content/uploads/2024/05/fashion.png" },
    { name: "Technology", img: "https://ibraine.com/wp-content/uploads/2024/05/project-management.png" }
  ];

  const networkLogos = [
    "https://ibraine.com/wp-content/uploads/2024/05/Group-79-2.png",
    "https://ibraine.com/wp-content/uploads/2024/05/Group-78-1.png",
    "https://ibraine.com/wp-content/uploads/2024/05/Group-80-1.png",
    "https://ibraine.com/wp-content/uploads/2024/05/Group-83.png"
  ];

  return (
    <main className="w-full bg-white overflow-hidden font-body text-[#323232] selection:bg-[#FB8C32] selection:text-white">
      
      {/* 
        ════ GLOBAL TYPOGRAPHY STYLES ════
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap');
        
        :root {
          --font-heading: 'Montserrat', system-ui, -apple-system, sans-serif;
          --font-body: 'Open Sans', system-ui, -apple-system, sans-serif;
        }

        .font-heading { font-family: var(--font-heading); }
        .font-body { font-family: var(--font-body); }
        .glass-panel { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.5); }
      `}</style>

      {/* ════ 1. PREMIUM HERO SECTION ════ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-20 lg:pb-20 px-4 md:px-8 flex items-center bg-[#fafbfc] overflow-hidden">
        {/* Background Ambient Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#FB8C32] opacity-10 rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] right-[-5%] w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#1872BA] opacity-10 rounded-full blur-[80px]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#3232320A_1px,transparent_1px),linear-gradient(to_bottom,#3232320A_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        </div>

        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10 w-full">
          
          {/* Left: Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full lg:w-1/2 text-center lg:text-left z-20 mt-6 lg:mt-0">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1872BA]/20 shadow-sm font-bold text-xs tracking-wider uppercase mb-5 font-body text-[#1872BA]">
              <span className="w-2 h-2 rounded-full bg-[#FB8C32] animate-pulse" /> Performance Driven
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-6xl lg:text-[70px] leading-[1.1] md:leading-[1.05] mb-4 font-extrabold text-[#323232] tracking-tight">
               Scale Revenue With <br className="hidden md:block" />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">Affiliate Networks.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="font-body text-[#323232]/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
               We connect your brand with top-tier affiliates to boost lead generation and drive exponential sales without the upfront ad spend. 
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-8">
               <button className="bg-[#FB8C32] text-white font-body font-bold px-6 py-3.5 rounded-xl hover:bg-[#1872BA] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(251,140,50,0.4)] flex items-center justify-center gap-2 text-sm md:text-base">
                  Launch Your Program <ArrowRight size={18} />
               </button>
            </motion.div>

            {/* Micro Image Stack - Glassmorphic */}
            <motion.div variants={fadeUp} className="glass-panel inline-flex items-center gap-3 p-2.5 pr-4 rounded-full shadow-lg mx-auto lg:mx-0">
                <div className="flex -space-x-2">
                    {["goal.png", "clipboard.png", "keyword-1.png", "ranking.png"].map((img, i) => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[2px] md:border-[3px] border-white shadow-sm bg-[#f8f9fc] flex items-center justify-center overflow-hidden">
                           <img src={`https://ibraine.com/wp-content/uploads/2024/03/${img}`} className="w-4 h-4 md:w-5 md:h-5 object-contain" alt="icon" />
                        </div>
                    ))}
                </div>
                <div className="text-left">
                   <p className="font-heading font-bold text-[#323232] text-xs md:text-sm leading-tight">750+ Global Partners</p>
                   <p className="text-[#323232]/60 font-body text-[10px]">Generating active ROI daily</p>
                </div>
            </motion.div>
          </motion.div>

          {/* Right: Premium Floating Composition */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-full lg:w-1/2 relative h-[280px] sm:h-[350px] lg:h-[450px] flex justify-center items-center mt-6 lg:mt-0">
             
             {/* Center Main Image */}
             <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-[90%] md:w-[80%] lg:w-[75%] bg-white rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-[0_15px_40px_-10px_rgba(50,50,50,0.1)] border border-[#323232]/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,140,50,0.08),transparent_50%)] rounded-[1.5rem] md:rounded-[2rem]" />
                <img src="https://ibraine.com/wp-content/uploads/2024/05/Group-77-2.png" className="w-full object-contain relative z-10" alt="Main Dashboard" />
             </motion.div>
             
             {/* Dynamic Floating Badges */}
             <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} src="https://ibraine.com/wp-content/uploads/2024/05/program-1.png" className="absolute top-0 right-0 lg:right-4 w-16 sm:w-24 md:w-28 z-20 shadow-xl rounded-xl md:rounded-[1.5rem] bg-white border border-white" />
             
             <motion.img animate={{ rotate: [0, 5, -5, 0], y: [8, -8, 8] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} src="https://ibraine.com/wp-content/uploads/2024/05/affiliate-marketing-3.png" className="absolute bottom-0 left-0 lg:left-4 w-16 sm:w-24 md:w-28 z-20 shadow-xl rounded-xl md:rounded-[1.5rem] bg-white border border-white" />
             
             <motion.img animate={{ x: [-8, 8, -8], scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} src="https://ibraine.com/wp-content/uploads/2024/05/networking-1.png" className="absolute top-1/2 -left-2 lg:-left-4 w-14 sm:w-20 md:w-24 z-20 hidden sm:block shadow-xl rounded-lg md:rounded-xl bg-white border border-white" />
          </motion.div>

        </div>
      </section>

      {/* ════ 2. WHY CHOOSE (Modern Bento Grid) ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
         <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
               <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-[#323232] mb-3 md:mb-4 leading-[1.2]">
                  Why choose Ibraine to manage your <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">affiliate program?</span>
               </h2>
               <p className="font-body text-[#323232]/70 text-sm md:text-base">We don't just set up links; we actively recruit, negotiate, and optimize partnerships to ensure scalable growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
               {[
                 { title: "Industry Reputation", img: "reputation.png", text: "Growing elite affiliate programs since 2011. Top-tier networks consistently recommend us as the partner of choice." },
                 { title: "Strategic Expertise", img: "expertise.png", text: "Our team consists of aggressive growth marketers dedicated to delivering hard, measurable results for your business." },
                 { title: "Maximum ROI", img: "roi.png", text: "By managing the rigorous day-to-day details, we save your budget and allow your internal team to focus on product." }
               ].map((item, i) => (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="bg-[#fafbfc] p-6 md:p-8 rounded-[1.5rem] shadow-sm hover:shadow-lg transition-all duration-300 border border-[#323232]/5 group relative overflow-hidden">
                     {/* Hover Gradient Background */}
                     <div className="absolute top-0 right-0 w-24 h-24 bg-[#FB8C32]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-[#323232]/5 group-hover:scale-110 group-hover:border-[#FB8C32]/30 transition-all duration-500 shadow-sm">
                        <img src={`https://ibraine.com/wp-content/uploads/2024/05/${item.img}`} className="w-7 md:w-8 object-contain" alt={item.title} />
                     </div>
                     <h3 className="font-heading font-bold text-lg md:text-xl mb-2 md:mb-3 text-[#323232]">{item.title}</h3>
                     <p className="font-body text-[#323232]/70 text-xs md:text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ════ 3. EXPLAINER (Dark Mode Contrast) ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#323232] text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,140,50,0.15),transparent_60%)] pointer-events-none" />
         
         <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
            
            {/* Left: Glassmorphic Visual */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="relative aspect-video lg:aspect-[4/3] bg-white/5 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/10 p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden group">
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                   
                   <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-[#FB8C32]/20 border border-[#FB8C32]/30 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 group-hover:bg-[#1872BA]/30 group-hover:border-[#1872BA]/40 transition-all duration-300">
                      <Zap className="text-[#FB8C32] group-hover:text-[#1872BA] transition-colors" size={28} />
                   </div>
                   <h3 className="font-heading font-bold text-lg md:text-xl mb-1 text-white">Performance Hub</h3>
                   <p className="text-white/70 font-body text-xs md:text-sm max-w-[250px]">Pay only when real sales and leads are successfully generated.</p>
                   
                   {/* Decorative Floating Dots */}
                   <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-6 right-6 w-2 h-2 bg-[#1872BA] rounded-full shadow-[0_0_10px_rgba(24,114,186,0.6)]" />
                   <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-6 left-6 w-3 h-3 bg-[#FB8C32] rounded-full shadow-[0_0_10px_rgba(251,140,50,0.6)]" />
                </div>
            </motion.div>
            
            {/* Right: Text Content */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="w-full lg:w-1/2 order-1 lg:order-2">
                <motion.div variants={fadeUp} className="bg-[#FB8C32]/10 border border-[#FB8C32]/20 text-[#FB8C32] font-body font-bold px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4 md:mb-6 uppercase text-[10px] md:text-xs tracking-widest">
                   <TrendingUp size={12} /> The Mechanics
                </motion.div>
                
                <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl lg:text-[46px] mb-4 md:mb-6 leading-[1.2] lg:leading-[1.1] tracking-tight">
                   What really is <br className="hidden lg:block" /> <span className="text-[#FB8C32]">Affiliate Marketing?</span>
                </motion.h2>
                
                <motion.div variants={fadeUp} className="space-y-3 md:space-y-4 text-white/80 font-body text-sm md:text-base leading-relaxed">
                   <p>
                      Online business owners use performance-based advertisements, rewarding highly-skilled specialists (affiliates) with incentives for bringing in new, paying clients. 
                   </p>
                   <p>
                      Our professionals forge deep connections with high-traffic websites to promote your products. Every time a visitor is referred and converts, you pay a small fee—making it mathematically the most economical and risk-free form of digital marketing.
                   </p>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-6 md:mt-8 flex flex-wrap gap-3">
                   <div className="flex items-center gap-2 text-white font-heading font-bold text-xs md:text-sm">
                      <CheckCircle2 size={18} className="text-[#1872BA]" /> Zero Risk
                   </div>
                   <div className="flex items-center gap-2 text-white font-heading font-bold text-xs md:text-sm">
                      <CheckCircle2 size={18} className="text-[#1872BA]" /> Pay Per Sale
                   </div>
                </motion.div>
            </motion.div>
         </div>
      </section>

      {/* ════ 4. INDUSTRIES GRID (Interactive Cards) ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#fafbfc] relative">
          <div className="max-w-[1440px] mx-auto text-center">
             <div className="mb-8 md:mb-12">
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[42px] text-[#323232] mb-3 md:mb-4">Optimized For Every Industry</h2>
                <p className="font-body text-[#323232]/70 text-sm md:text-base">We have active, high-converting affiliate partners ready to promote in these sectors.</p>
             </div>
             
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                {industries.map((item, i) => (
                   <motion.div 
                      key={i} 
                      initial="hidden" 
                      whileInView="visible" 
                      viewport={{ once: true }} 
                      variants={fadeUp} 
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -3, borderColor: "#1872BA" }} 
                      className="bg-white p-5 md:p-6 rounded-[1.25rem] md:rounded-[1.5rem] border border-[#323232]/5 shadow-sm transition-all duration-300 flex flex-col items-center group cursor-default"
                   >
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#fafbfc] rounded-full flex items-center justify-center mb-3 md:mb-4 shadow-sm border border-[#323232]/5 group-hover:shadow-[#1872BA]/20 transition-all">
                         <img src={item.img} className="w-6 h-6 md:w-8 md:h-8 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" alt={item.name} />
                      </div>
                      <span className="font-heading font-bold text-[#323232] text-xs md:text-sm lg:text-base">{item.name}</span>
                   </motion.div>
                ))}
             </div>
          </div>
      </section>

      {/* ════ 5. NETWORKS LOGO STRIP ════ */}
      <section className="py-8 md:py-12 px-4 md:px-8 bg-white border-y border-[#323232]/5">
          <div className="max-w-[1440px] mx-auto text-center">
             <p className="font-body font-bold text-[#323232]/40 text-[10px] md:text-xs uppercase tracking-widest mb-6 md:mb-8">We integrate natively with top global networks</p>
             <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
                {networkLogos.map((logo, i) => (
                   <img key={i} src={logo} className="h-6 md:h-8 lg:h-12 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" alt="Network Partner" />
                ))}
             </div>
          </div>
      </section>

      {/* ════ 6. PREMIUM CONTACT SECTION ════ */}
      <section className="relative py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#fafbfc] overflow-hidden">
        <div className="max-w-[1440px] mx-auto bg-[#323232] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-xl relative">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[radial-gradient(circle_at_center,rgba(251,140,50,0.15),transparent_70%)] pointer-events-none" />

            {/* --- LEFT SIDE: TEXT CONTENT --- */}
            <div className="w-full lg:w-5/12 p-6 md:p-10 lg:p-12 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center text-[#FB8C32] shadow-sm mb-6 md:mb-8 border border-white/10 backdrop-blur-sm">
                <Headphones size={20} className="md:w-6 md:h-6" />
              </div>
    
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-white mb-4 md:mb-6">
                Ready to build your <br />
                <span className="text-[#FB8C32]">Affiliate Army?</span>
              </h2>
    
              <p className="text-white/70 font-body text-sm md:text-base leading-relaxed mb-6 md:mb-10">
                Our team of growth experts is ready to map out your performance marketing strategy. Fill out the form to secure your free consultation.
              </p>
    
              <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl backdrop-blur-md inline-block w-full sm:w-auto">
                 <p className="text-[#FB8C32] font-body font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1.5 flex items-center gap-1.5"><PhoneCall size={12} /> Direct Line</p>
                 <a href="tel:+919321111753" className="text-white text-xl md:text-2xl font-heading font-bold hover:text-[#1872BA] transition-colors">
                   +91 9321111753
                 </a>
              </div>
            </div>
            
            {/* --- RIGHT SIDE: FORM --- */}
            <div className="w-full lg:w-7/12 bg-white p-6 md:p-10 lg:p-12 relative z-10">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-[#323232] mb-5 md:mb-6">Request your growth proposal.</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="space-y-1.5">
                       <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] transition-all font-body text-sm text-[#323232]" />
                   </div>
                   <div className="space-y-1.5">
                       <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Work Email</label>
                       <input type="email" placeholder="john@company.com" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] transition-all font-body text-sm text-[#323232]" />
                   </div>
                </div>

                <div className="space-y-1.5">
                   <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Company Website</label>
                   <input type="url" placeholder="https://yourbrand.com" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] transition-all font-body text-sm text-[#323232]" />
                </div>

                <div className="space-y-1.5">
                   <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Project Details</label>
                   <textarea rows="3" placeholder="Tell us about your product margins and goals..." className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] transition-all font-body resize-none text-sm text-[#323232]"></textarea>
                </div>
  
                <button className="w-full bg-[#FB8C32] text-white px-6 py-3.5 rounded-lg font-body font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-[#1872BA] transition-colors duration-300 shadow-md mt-2 md:mt-4">
                  Send Secure Message
                </button>
              </form>
            </div>

        </div>
      </section>

    </main>
  );
};

export default AffiliateMarketing;