import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowRight, PhoneCall, LineChart, 
  Search, Target, TrendingUp, BarChart3, Globe2, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const SEOServices = () => {

  const features = [
    {
      title: "Sustainable Growth",
      desc: "Drive steady organic traffic without continuous ad spending.",
      icon: <LineChart />,
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      img: "https://iBraine.com/media/2023/08/growth.png"
    },
    {
      title: "Boosted Visibility",
      desc: "Top search engine rankings for max credibility.",
      icon: <Target />,
      span: "col-span-1",
      img: "https://iBraine.com/media/2023/08/performance-boost.png"
    },
    {
      title: "Cost-Effective",
      desc: "Budget-friendly options yielding higher ROI.",
      icon: <TrendingUp />,
      span: "col-span-1",
      img: "https://iBraine.com/media/2023/08/market-share.png"
    },
    {
      title: "Penalty Removal",
      desc: "Honest advice & fast recovery from Google penalties.",
      icon: <ShieldCheck />,
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      img: "https://iBraine.com/media/2023/08/penalty-card.png"
    },
    {
      title: "E-Commerce SEO",
      desc: "Optimize product pages for maximum conversions.",
      icon: <BarChart3 />,
      span: "col-span-1 md:col-span-2 lg:col-span-2",
      img: "https://iBraine.com/media/2023/08/customer-support.png"
    },
    {
      title: "International SEO",
      desc: "Expand your reach and start selling worldwide.",
      icon: <Globe2 />,
      span: "col-span-1",
      img: "https://iBraine.com/media/2023/08/worldwide-shipping.png"
    }
  ];

  const caseStudies = [
    {
      category: "E-Commerce",
      title: "Revamping TripXOXO: Enhancing Visibility & Revenue",
      img: "https://iBraine.com/media/2020/03/blog5-1-650x393.jpg",
      metrics: "+142% Organic Traffic"
    },
    {
      category: "Luxury Retail",
      title: "Establishing India’s Premier Luxury Fashion Store",
      img: "https://iBraine.com/media/2020/03/blog6-1-650x393.jpg",
      metrics: "Ranked #1 for 40+ Keywords"
    },
    {
      category: "B2B SaaS",
      title: "Boost Your Business Growth with Ultimate SEO Guide",
      img: "https://iBraine.com/media/2022/09/businessman-working-with-digital-finance-business-graph-perceptive-technology_31965-90360-650x289.jpg",
      metrics: "3x Lead Generation"
    }
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
      `}</style>

      {/* ════ 1. PREMIUM HERO SECTION ════ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-20 lg:pb-20 px-4 md:px-8 overflow-hidden bg-white">
        {/* Background Gradients & Mesh */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FB8C32]/10 rounded-full blur-[100px]" />
           <div className="absolute top-[20%] right-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#1872BA]/10 rounded-full blur-[100px]" />
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#32323205_1px,transparent_1px),linear-gradient(to_bottom,#32323205_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-6 lg:mt-0">
          
          {/* Left Text */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full text-center lg:text-left">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1872BA]/20 shadow-sm text-[#1872BA] font-heading font-bold text-[10px] md:text-xs tracking-wider uppercase mb-5 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FB8C32] animate-pulse" /> #1 SEO Agency in Mumbai
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-5xl lg:text-[70px] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 font-extrabold tracking-tight text-[#323232]">
               Dominate Search. <br className="hidden lg:block"/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">
                  Crush Competitors.
               </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="font-body text-[#323232]/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We don't just chase traffic; we engineer revenue. Partner with Mumbai’s elite SEO experts to secure top rankings, build unshakeable authority, and turn organic searches into paying customers.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
               <button className="bg-[#FB8C32] text-white font-body font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#1872BA] transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(251,140,50,0.4)] text-sm md:text-base">
                  Get Your Free SEO Audit
               </button>
               <button className="bg-white text-[#323232] border border-[#323232]/10 font-body font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#fafbfc] transition-all duration-300 flex justify-center items-center gap-2 shadow-sm text-sm md:text-base">
                  <PhoneCall size={18} className="text-[#1872BA]" /> +91 9892 854 892
               </button>
            </motion.div>
          </motion.div>

          {/* Right: Faux UI Ranking Dashboard Animation */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="hidden lg:block relative mt-8 lg:mt-0">
             <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-[#323232]/5">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FB8C32]/10 text-[#FB8C32] rounded-xl flex items-center justify-center"><Search size={20}/></div>
                   <div>
                     <p className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/50 uppercase tracking-wider">Target Keyword</p>
                     <p className="font-heading text-lg md:text-xl font-bold text-[#323232]">"Best SEO Agency Mumbai"</p>
                   </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                   {/* Rank #1 (Your Site - Animates up) */}
                   <motion.div animate={{ y: [30, 0] }} transition={{ duration: 1, delay: 0.8, type: "spring" }} className="bg-gradient-to-r from-[#1872BA]/5 to-[#FB8C32]/5 border border-[#1872BA]/20 p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center justify-between relative z-10 shadow-md">
                      <div className="flex items-center gap-3 md:gap-4">
                         <div className="w-8 h-8 bg-[#1872BA] text-white rounded-full flex items-center justify-center font-heading font-bold text-xs md:text-sm">#1</div>
                         <div>
                           <p className="text-sm md:text-base font-heading font-bold text-[#323232]">ibraine.com</p>
                           <p className="text-[10px] md:text-xs font-body text-[#FB8C32] font-semibold">Your Website</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-1 text-[#FB8C32] font-heading font-bold text-xs md:text-sm">
                         <TrendingUp size={16} /> +12
                      </div>
                   </motion.div>

                   {/* Competitors */}
                   {[2, 3].map((num) => (
                     <div key={num} className="bg-[#fafbfc] border border-[#323232]/5 p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center justify-between opacity-60 grayscale">
                        <div className="flex items-center gap-3 md:gap-4">
                           <div className="w-8 h-8 bg-[#323232]/10 text-[#323232]/60 rounded-full flex items-center justify-center font-heading font-bold text-xs md:text-sm">#{num}</div>
                           <div>
                             <p className="text-sm md:text-base font-heading font-bold text-[#323232]">competitor-{num}.com</p>
                             <p className="text-[10px] md:text-xs font-body text-[#323232]/50 font-medium">Competitor</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-1 text-red-500 font-heading font-bold text-xs md:text-sm">
                           <TrendingUp size={16} className="rotate-180" /> -1
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Floating Decor */}
             <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} src="https://iBraine.com/media/2023/07/SEO-Agency-Shape-1.webp" className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 md:w-32 opacity-50 drop-shadow-xl" />
          </motion.div>

        </div>
      </section>

      {/* ════ 2. FLOATING STATS TAPE ════ */}
      <section className="relative z-20 -mt-6 md:-mt-10 px-4 md:px-8 max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#323232] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(50,50,50,0.2)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1872BA]/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10 text-center">
             {[
               { value: "170+", label: "Successful Campaigns" },
               { value: "2000+", label: "Keywords on Page #1", highlight: true },
               { value: "90 Days", label: "Avg. Time to Results" }
             ].map((stat, i) => (
                <div key={i} className={`pt-4 md:pt-0 flex flex-col justify-center ${i !== 0 ? 'md:pl-6' : ''}`}>
                   <h4 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2 ${stat.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]' : 'text-white'}`}>
                      {stat.value}
                   </h4>
                   <p className="text-white/60 font-body font-bold uppercase tracking-widest text-[9px] md:text-[10px]">{stat.label}</p>
                </div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* ════ 3. BENTO BOX SERVICES GRID ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8">
          <div className="max-w-[1440px] mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                 <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#323232] leading-[1.2] lg:leading-[1.1] mb-3 md:mb-4">
                    Comprehensive SEO Solutions <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">For Market Leaders</span>
                 </h2>
                 <p className="font-body text-[#323232]/70 text-sm md:text-base">We don't just optimize websites; we build digital moats around your business to secure long-term market dominance.</p>
              </div>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[260px]">
                  
                  {features.map((feature, i) => (
                      <motion.div key={i} variants={fadeUp} className={`bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-[#323232]/5 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${feature.span}`}>
                          <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-[#FB8C32]/10 to-[#1872BA]/5 opacity-0 group-hover:opacity-100 rounded-full blur-2xl transition-opacity duration-500" />
                          
                          <div className="flex justify-between items-start relative z-10">
                             <div className="w-10 h-10 md:w-14 md:h-14 bg-[#fafbfc] border border-[#323232]/5 rounded-xl md:rounded-2xl flex items-center justify-center text-[#FB8C32] group-hover:bg-[#FB8C32] group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                             </div>
                             <img src={feature.img} alt="icon" className="w-8 h-8 md:w-10 md:h-10 object-contain opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                          
                          <div className="relative z-10">
                             <h4 className="font-heading font-bold text-lg md:text-xl mb-1 md:mb-2 text-[#323232]">{feature.title}</h4>
                             <p className="font-body text-[#323232]/60 text-xs md:text-sm leading-relaxed max-w-[95%]">{feature.desc}</p>
                          </div>
                      </motion.div>
                  ))}

                  {/* CTA Bento Card */}
                  <motion.div variants={fadeUp} className="col-span-1 md:col-span-3 lg:col-span-4 bg-[#323232] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-xl">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(251,140,50,0.15),transparent_50%)]" />
                      <div className="relative z-10 max-w-xl text-center md:text-left">
                         <h4 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-2 md:mb-3">100% Guaranteed SEO Results</h4>
                         <p className="font-body text-white/70 text-sm md:text-base">Stop guessing with your organic growth. Partner with an agency that maps math to marketing.</p>
                      </div>
                      <button className="relative z-10 bg-[#FB8C32] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-body font-bold hover:bg-[#1872BA] transition-colors whitespace-nowrap text-sm md:text-base shadow-md">
                          Consult An Expert
                      </button>
                  </motion.div>
              </motion.div>
          </div>
      </section>

      {/* ════ 4. EDITORIAL "WHY US" SECTION ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white border-y border-[#323232]/5 relative overflow-hidden">
         <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
             
             {/* Left Graphics */}
             <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative order-2 lg:order-1 mt-8 lg:mt-0">
                 <div className="aspect-square bg-[#fafbfc] rounded-[2rem] md:rounded-[3rem] border border-[#323232]/5 p-6 md:p-8 flex items-center justify-center relative z-10 shadow-lg overflow-hidden">
                    <img src="https://iBraine.com/media/2023/07/SEO-Agency-Services-Image.webp" alt="SEO Strategy" className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
                 </div>
                 {/* Floating badge */}
                 <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-[#323232]/5 z-20 hidden sm:block">
                    <div className="flex gap-3 md:gap-4 items-center">
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1872BA]/10 flex items-center justify-center text-[#1872BA]"><CheckCircle2 size={20} /></div>
                       <div>
                         <p className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/50 uppercase mb-0.5 md:mb-1">Algorithm Safe</p>
                         <p className="font-heading font-bold text-sm md:text-lg text-[#323232]">White-Hat Only</p>
                       </div>
                    </div>
                 </motion.div>
             </motion.div>

             {/* Right Content */}
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 lg:order-2 space-y-5 md:space-y-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1 md:py-1.5 rounded-full bg-[#FB8C32]/10 text-[#FB8C32] font-heading font-bold text-[10px] md:text-xs tracking-wider uppercase">
                    Why Choose iBraine
                 </div>
                 <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[50px] leading-[1.2] lg:leading-[1.1] text-[#323232]">
                     Algorithm Updates Don't Scare Us. <br className="hidden lg:block"/> <span className="text-[#323232]/40">They Excite Us.</span>
                 </h2>
                 <p className="font-body text-[#323232]/70 text-sm md:text-base leading-relaxed">
                     Our aim is not only to improve your website’s visibility but to drive <b>high-intent traffic that converts</b>. We constantly monitor Google's algorithmic shifts and proactively refine your strategy to ensure optimal, future-proofed results.
                 </p>
                 
                 <div className="pt-4 md:pt-6 space-y-3 md:space-y-4">
                     {[
                       "Conversion-Focused Optimization Strategies", 
                       "100% Transparent ROI Reporting", 
                       "Dedicated Account Manager & Hassle-Free Support"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 md:gap-4 bg-[#fafbfc] p-3 md:p-4 rounded-xl md:rounded-2xl border border-[#323232]/5">
                           <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1872BA]/10 flex items-center justify-center text-[#1872BA] shrink-0">
                              <CheckCircle2 size={14} className="md:w-4 md:h-4" />
                           </div>
                           <span className="font-heading font-bold text-[#323232] text-xs md:text-sm">{item}</span>
                        </div>
                     ))}
                 </div>
             </motion.div>
         </div>
      </section>

      {/* ════ 5. PREMIUM CASE STUDIES ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#fafbfc]">
          <div className="max-w-[1440px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6">
                  <div className="max-w-2xl">
                     <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-[#323232] leading-[1.2] lg:leading-[1.1] mb-3 md:mb-4">
                         Real Data. <span className="italic text-[#323232]/40">Real Revenue.</span>
                     </h2>
                     <p className="font-body text-[#323232]/70 text-sm md:text-base">Don't just take our word for it. See how we've mathematically scaled traffic and profits for our partners.</p>
                  </div>
                  <Link to="/case-studies" className="bg-white border border-[#323232]/10 text-[#323232] px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-body font-bold hover:bg-[#1872BA] hover:text-white hover:border-[#1872BA] transition-colors shrink-0 shadow-sm flex items-center gap-2 text-sm md:text-base">
                      View All Results <ArrowRight size={16} />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {caseStudies.map((item, i) => (
                      <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer bg-white rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-4 border border-[#323232]/5 shadow-sm hover:shadow-xl hover:border-[#1872BA]/30 transition-all duration-300">
                          <div className="overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-5 relative">
                              <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1 rounded-full font-heading font-bold text-[10px] md:text-xs text-[#323232]">
                                 {item.category}
                              </div>
                          </div>
                          <div className="px-2 pb-2 md:pb-4">
                             <p className="text-[#FB8C32] font-body font-bold text-[10px] md:text-xs mb-1.5 md:mb-2 flex items-center gap-1.5 md:gap-2"><TrendingUp size={14} /> {item.metrics}</p>
                             <h4 className="font-heading font-bold text-base md:text-lg text-[#323232] group-hover:text-[#1872BA] transition-colors line-clamp-2">{item.title}</h4>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* ════ 6. FULL-WIDTH CTA (Dark Mode) ════ */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-[#323232] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,114,186,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
             <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-[64px] text-white leading-[1.2] lg:leading-[1.1] mb-6 md:mb-8 tracking-tight">
                 Ready to dominate your <br className="hidden md:block"/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8C32] to-[#1872BA]">digital landscape?</span>
             </h2>
             <p className="font-body text-white/70 text-sm md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">Stop losing market share to competitors with inferior products but better SEO.</p>
             <button className="bg-[#FB8C32] text-white font-body font-bold px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-[#1872BA] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(251,140,50,0.5)] text-sm md:text-base">
                 Claim Your Strategy Session
             </button>
          </motion.div>
      </section>

      {/* ════ 7. SPLIT CONTACT SECTION ════ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-[1440px] mx-auto bg-[#323232] rounded-[1.5rem] md:rounded-[2.5rem] border border-[#323232]/10 overflow-hidden flex flex-col lg:flex-row shadow-xl">
            
            {/* Left Info */}
            <div className="w-full lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1872BA]/20 to-transparent pointer-events-none" />
                
                <div className="relative z-10">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl shadow-sm border border-white/10 flex items-center justify-center text-[#FB8C32] mb-6 md:mb-8 backdrop-blur-sm">
                      <PhoneCall size={24} className="md:w-7 md:h-7" />
                   </div>
                   <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.2] lg:leading-[1.1] text-white mb-4 md:mb-6">
                       Speak directly with <br/> an SEO Expert.
                   </h2>
                   <p className="font-body text-white/70 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-md">
                       Fill out the form to the right, and let’s start mapping the mathematical journey towards your digital dominance.
                   </p>
                </div>

                <div className="relative z-10 bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl inline-block mt-auto w-full sm:w-auto backdrop-blur-sm">
                    <p className="text-[#FB8C32] font-heading font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1.5 md:mb-2 flex items-center gap-1.5"><PhoneCall size={12}/> Direct Priority Line</p>
                    <a href="tel:+919892854892" className="text-2xl md:text-3xl font-heading font-bold text-white hover:text-[#1872BA] transition-colors">+91 9892 854 892</a>
                </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-7/12 bg-white p-8 md:p-12 lg:p-16">
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6 md:mb-8 text-[#323232]">Request your custom growth plan.</h3>
                <form className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                       <div className="space-y-1.5">
                          <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Full Name</label>
                          <input type="text" placeholder="John Doe" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] font-body text-sm text-[#323232] transition-all" required />
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Work Email</label>
                          <input type="email" placeholder="john@company.com" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] font-body text-sm text-[#323232] transition-all" required />
                       </div>
                    </div>
                    
                    <div className="space-y-1.5">
                       <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">Website URL</label>
                       <input type="url" placeholder="https://yourwebsite.com" className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] font-body text-sm text-[#323232] transition-all" required />
                    </div>

                    <div className="space-y-1.5">
                       <label className="text-[10px] md:text-xs font-heading font-bold text-[#323232]/60 uppercase tracking-wider ml-1">What are your goals?</label>
                       <textarea rows="3" placeholder="Tell us about your current traffic and revenue goals..." className="w-full bg-[#fafbfc] border border-[#323232]/10 p-3 md:p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1872BA]/30 focus:border-[#1872BA] font-body text-sm text-[#323232] resize-none transition-all" required></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-[#FB8C32] text-white font-body font-bold text-xs md:text-sm uppercase tracking-widest py-3.5 md:py-4 rounded-xl hover:bg-[#1872BA] transition-all shadow-md mt-2 md:mt-4">
                        Send Secure Message
                    </button>
                </form>
            </div>
        </div>
      </section>

    </main>
  );
};

export default SEOServices;