import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Headphones } from 'lucide-react';

const fadeUp = {
   hidden: { opacity: 0, y: 40 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const PerformanceMarketing = () => {
   const [openFaq, setOpenFaq] = useState(0);

   const faqs = [
      {
         title: "Deep Brand & Market Intelligence",
         content: "We begin by decoding your brand, audience psychology, and market positioning. Using AI-driven insights + human strategy, we identify what truly drives your customer to convert."
      },
      {
         title: "Data-Led Audience Targeting",
         content: "We don’t guess — we engineer audiences. Advanced segmentation, behavioral data, and predictive AI models help us reach high-intent users at scale."
      },
      {
         title: "High-Performance Copy & Creative Strategy",
         content: "We craft scroll-stopping copy & creatives backed by performance data. Every ad is designed to capture attention, trigger emotion, and drive action."
      },
      {
         title: "Transparent Reporting & Growth Insights",
         content: "Clear dashboards. Actionable insights. Real results. You don’t just see numbers — you understand what’s driving growth and how to scale it further."
      }
   ];

   const brandLogos = [
      "https://brandwitty.com/media/2023/08/Lamanpg-1.png",
      "https://brandwitty.com/media/2023/08/Clear-trip-1.png",
      "https://brandwitty.com/media/2023/08/Rustomjee-2.png",
      "https://brandwitty.com/media/2023/08/Kalpataru-2.png",
      "https://brandwitty.com/media/2023/08/Speakwell-2.png",
      "https://brandwitty.com/media/2023/08/askon-1-2.png",
      "https://brandwitty.com/media/2023/08/Signature-smiles-1.png",
      "https://brandwitty.com/media/2023/08/Bath-shop-1.png"
   ];

   return (
      <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">

         {/* ════ 1. HERO SECTION ════ */}
         <section className="relative bg-[#fcfaf2] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
            <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
               src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-1.webp"
               className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-50" />
            <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}
               src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-2.webp"
               className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-50" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
               <div className="lg:w-1/2">
                  <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
                     className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
                     We Don’t Run Ads. {" "}
                     <span className="relative inline-block z-10">
                        We Engineer
                        <span className="absolute left-0 bottom-2 w-full h-3 bg-[#FDB813]/60 -z-10 rounded-sm"></span>
                     </span>{" "}
                     Predictable Revenue.
                  </motion.h1>

                  <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                     className="text-gray-600 text-[18px] mb-8 leading-relaxed">
                     Scale your business with data-backed campaigns, intelligent automation, and conversion-focused execution. Every penny is optimized. Every click is accountable.
                  </motion.p>

                  <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
                     className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                     <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                        Talk to our Performance Expert Now
                     </button>
                     <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                        <Play size={20} className="fill-black" /> Watch a Demo
                     </button>
                  </motion.div>

                  <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }}
                     className="text-gray-500 text-[15px]">
                     Rs. X Cr+ Revenue Generated | 5-12X ROAS Delivered | 20K+ Conversions Driven.
                  </motion.p>
               </div>

               {/* HERO IMAGES — Performance Marketing visuals */}
               <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                  className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">

                  {/* Main image: marketer analyzing campaign data on laptop */}
                  <img
                     src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80"
                     className="absolute right-0 top-0 w-[85%] h-[72%] object-cover z-10 rounded-2xl shadow-2xl"
                     alt="Performance Marketing Expert" />

                  {/* Floating card 1: analytics dashboard */}
                  <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=80"
                     className="absolute left-[-10%] top-[20%] w-[58%] h-[190px] object-cover z-20 shadow-2xl rounded-xl"
                     alt="Ad Analytics Dashboard" />

                  {/* Floating card 2: charts & graphs */}
                  <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}
                     src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80"
                     className="absolute left-[10%] bottom-[5%] w-[44%] h-[155px] object-cover z-30 shadow-2xl rounded-xl"
                     alt="Campaign ROI Chart" />

                  {/* Floating ROAS badge */}
                  <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }}
                     className="absolute right-[-4%] bottom-[10%] z-20 bg-white rounded-2xl shadow-2xl p-5 w-[40%]">
                     <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest mb-1">Avg. ROAS</p>
                     <p className="text-4xl font-bold text-[#FDB813]">8.4x</p>
                     <p className="text-[12px] text-green-500 font-semibold mt-1">↑ 34% vs last quarter</p>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         {/* ════ 2. BRANDS SLIDER ════ */}
         <section className="py-20 px-6 border-b border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto text-center">
               <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Brands That Trust Our Performance Engine</h2>
               <p className="text-gray-500 mb-12 text-lg">From D2C startups to enterprise brands — we've driven measurable, profitable growth across every industry. Your success story is next.</p>
               <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {brandLogos.map((logo, index) => (
                     <img key={index} src={logo} alt="Brand Logo" className="w-32 md:w-40 object-contain hover:scale-110 transition-transform" />
                  ))}
               </div>
            </div>
         </section>

         {/* ════ 3. FEATURE: FULL-FUNNEL CAMPAIGNS ════ */}
         <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
               <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="lg:w-1/2 relative h-[500px] w-full">

                  {/* Main: marketing team reviewing campaign results */}
                  <img
                     src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&auto=format&fit=crop&q=80"
                     className="absolute bottom-0 left-0 w-[80%] h-[380px] object-cover rounded-2xl shadow-xl z-10"
                     alt="Performance Marketing Team" />

                  {/* Floating: ads dashboard screen */}
                  <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                     src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80"
                     className="absolute top-0 right-0 w-[62%] h-[260px] object-cover z-20 rounded-2xl shadow-2xl"
                     alt="Ads Performance Dashboard" />
               </motion.div>

               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                  <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                     Built on AI. Driven by Performance.

                  </h2>
                  <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">
                     Most agencies optimize campaigns.
                     We optimize outcomes using AI.
                  </p>
                  <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                     Our proprietary approach includes
                  </p>
                  <ul className="space-y-4 mb-10">
                     {["Predictive Audience Targeting", "Smart Media Buying", "Conversion-Focused Funnels", "Creative Intelligence", "Full-Funnel Tracking & Attribution"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                           <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">Get a free performance audit</button>
               </motion.div>
            </div>
         </section>

         {/* ════ 4. FEATURE: DATA-DRIVEN GROWTH ════ */}
         <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                  <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                     We turn data into decisions that maximize your ROAS
                  </h2>
                  <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                     As a leading <b>Performance Marketing agency in Mumbai</b>, we don't just run ads — we build revenue-generating machines. Every campaign is backed by deep audience data, creative intelligence, and continuous optimization. With 10+ years of paid media expertise across e-commerce, real estate, fintech, and edtech, we've consistently delivered industry-best CPAs and sustainable, profitable scale for our clients.
                  </p>
                  <ul className="space-y-4 mb-10">
                     {[
                        "ROI-first approach (not impressions & clicks)",
                        "Dedicated performance strategist",
                        "Transparent reporting dashboards",
                        "Fast execution & testing cycles",
                        "AI + human expertise combined"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                           <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Talk to our Performance Expert Now</button>
               </motion.div>

               <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">

                  {/* Main: data analytics and revenue charts */}
                  <img
                     src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&auto=format&fit=crop&q=80"
                     className="absolute top-0 right-0 w-[90%] h-[72%] object-cover z-10 rounded-2xl shadow-xl"
                     alt="Performance Data Analytics" />

                  {/* Floating CPL bar chart widget */}
                  <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }}
                     className="absolute bottom-10 left-[-5%] w-[58%] z-20 shadow-2xl rounded-xl bg-white p-5">
                     <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Cost Per Lead — 90 Day Trend</p>
                     <div className="flex items-end gap-1 h-14">
                        {[90, 75, 68, 80, 55, 40, 28].map((h, i) => (
                           <div key={i} className="flex-1 rounded-sm transition-all"
                              style={{ height: `${h}%`, background: i === 6 ? '#FDB813' : '#e5e7eb' }}></div>
                        ))}
                     </div>
                     <p className="text-[12px] text-green-500 font-bold mt-2">↓ 69% CPL reduction in 90 days</p>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         {/* ════ 5. ACCORDION / HOW WE WORK ════ */}
         <section className="py-24 px-6 bg-[#fcfaf2]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
               <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="lg:w-1/2 relative h-[600px] w-full">

                  {/* Main: person analyzing performance on screens */}
                  <img
                     src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700&auto=format&fit=crop&q=80"
                     className="absolute top-0 left-0 w-[70%] h-[360px] object-cover z-10 rounded-2xl shadow-xl"
                     alt="Performance Marketing Analysis" />

                  {/* Floating: creative team working on ads */}
                  <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                     src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=80"
                     className="absolute top-[20%] right-[-5%] w-[55%] h-[220px] object-cover z-20 rounded-2xl shadow-2xl"
                     alt="Ad Creative Team" />

                  {/* Floating bottom: live campaign stats widget */}
                  <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }}
                     className="absolute bottom-0 left-[10%] w-[68%] z-30 shadow-2xl bg-white rounded-2xl p-5">
                     <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold mb-3">Live Campaign Stats</p>
                     <div className="grid grid-cols-3 gap-3">
                        {[
                           { label: "Impressions", value: "4.2M" },
                           { label: "Clicks", value: "98K" },
                           { label: "Conversions", value: "12.4K" }
                        ].map((stat, i) => (
                           <div key={i} className="text-center">
                              <p className="text-lg font-bold text-[#1a162d]">{stat.value}</p>
                              <p className="text-[10px] text-gray-400">{stat.label}</p>
                           </div>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>

               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                  <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">
                     Performance Marketing Agency in Mumbai
                  </h2>
                  <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">
                     Stop burning budget on impressions that don't convert. Our outcome-first approach means every campaign is engineered around your growth goals — from the first click to the final sale. Here's how we consistently deliver results:
                  </p>

                  <div className="space-y-4">
                     {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                           <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                              className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                              <span className={`font-bold text-lg ${openFaq === index ? 'text-[#FDB813]' : 'text-black'}`}>
                                 {faq.title}
                              </span>
                              {openFaq === index ? <ChevronUp className="text-[#FDB813]" /> : <ChevronDown className="text-gray-400" />}
                           </button>
                           <AnimatePresence>
                              {openFaq === index && (
                                 <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-500 text-[15px]">
                                    {faq.content}
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </section>

         {/* ════ 6. GRADIENT STATS SECTION ════ */}
         <section className="py-24 px-6 bg-gradient-to-r from-teal-900 to-teal-700 text-white text-center">
            <div className="max-w-5xl mx-auto mb-16">
               <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="font-lora text-4xl lg:text-5xl mb-6">We are a Performance Marketing Agency</motion.h2>
               <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="text-gray-300 text-lg">
                  Experience outcome-driven campaigns with one of the <b>best performance marketing agencies in Mumbai</b>! We begin with deep audience research, funnel strategy, creative production, and relentless data-driven optimization to deliver maximum ROAS for your brand.
               </motion.p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-teal-600/50">
               <div className="pt-6 md:pt-0">
                  <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">₹50 Cr+</h3>
                  <p className="text-gray-300 text-lg">Ad spend managed profitably!</p>
               </div>
               <div className="pt-6 md:pt-0">
                  <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">8x</h3>
                  <p className="text-gray-300 text-lg">Average ROAS across all campaigns</p>
               </div>
               <div className="pt-6 md:pt-0">
                  <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">2L+</h3>
                  <p className="text-gray-300 text-lg">Leads generated at record-low CPL!</p>
               </div>
            </div>
         </section>

         {/* ════ 7. VIDEO BANNER ════ */}
         {/* <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop&q=80')" }}></div>
            <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer"
               className="relative z-10 w-24 h-24 bg-[#FDB813] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(253,184,19,0.5)]">
               <Play size={40} className="fill-black text-black ml-2" />
            </a>
         </section> */}

         {/* ════ 8. TESTIMONIALS ════ */}
         <section className="py-24 px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto">
               <div className="mb-16 text-center max-w-3xl mx-auto">
                  <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                     Testimonials That Make Us  <span className="italic text-[#FDB813]">Blush</span>
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                     Hear from brands who stopped burning budgets and started breaking records — all through performance-first marketing.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                     {
                        name: "Aman Chowdary",
                        role: "Luxulo — Founder",
                        img: "https://brandwitty.com/media/2023/09/testimonial2.png",
                        text: "The team brought our CPL down from ₹850 to ₹180 in just 6 weeks. Their audience segmentation and creative testing approach is unlike anything we've experienced. Our pipeline has never looked this healthy. Phenomenal!"
                     },
                     {
                        name: "Salman Khan",
                        role: "RewardPort — Business Head",
                        img: "https://brandwitty.com/media/2023/09/testimonial13.png",
                        text: "We hit a consistent 7x ROAS on Meta within the first 3 months. Their ability to scale budgets without killing efficiency is a genuine superpower. Every rupee we give them comes back multiplied. Truly world-class."
                     },
                     {
                        name: "Rahul Pandey",
                        role: "Synk Salon — Founder",
                        img: "https://brandwitty.com/media/2023/09/testimonial11.png",
                        text: "Our online bookings tripled in 90 days. The Google and Meta campaigns were laser-sharp — right audience, right creative, right moment. Cost per booking dropped by 58%. I wouldn't trust anyone else with our ad budget!"
                     }
                  ].map((review, i) => (
                     <motion.div key={i} whileHover={{ y: -10 }}
                        className="bg-[#fcfaf2] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                        <div>
                           <div className="flex items-center gap-4 mb-8">
                              <img src={review.img} alt={review.name}
                                 className="w-16 h-16 rounded-full object-cover border-2 border-[#FDB813] shadow-md" />
                              <div>
                                 <h4 className="font-bold text-lg text-[#1a162d] leading-tight">{review.name}</h4>
                                 <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{review.role}</p>
                              </div>
                           </div>
                           <p className="text-gray-600 text-[16px] leading-relaxed italic">"{review.text}"</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200/50">
                           <div className="flex text-[#FDB813] gap-1 text-sm">
                              {"★★★★★".split("").map((star, idx) => <span key={idx}>{star}</span>)}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* ════ 9. MINI CTA ════ */}
         <section className="py-20 px-6 bg-slate-50 text-center border-t border-gray-200">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
               className="max-w-4xl mx-auto">
               <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">
                  A Global Independent Digital Marketing Network | Start A Project
               </h2>
               <p className="text-gray-600 text-lg mb-10">
                  Partner with Ibraine, the performance marketing specialists, to transform your ad spend into measurable, scalable revenue. Our outcome-first campaigns are engineered for one thing — your profitable growth.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {/* <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">Call Now</button> */}
                  <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Case Studies</button>
               </div>
            </motion.div>
         </section>

         {/* ════ 10. CONTACT FORM SECTION ════ */}
         <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

            <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block animate-floating">
               <div className="w-24 h-24 lg:w-32 lg:h-32 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                     <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z" />
                  </svg>
               </div>
            </div>

            <div className="absolute top-4 left-[45%] w-6 h-6 bg-blue-500 rounded-full opacity-80 hidden lg:block"></div>
            <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-orange-400 rounded-full opacity-60 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

               {/* LEFT */}
               <div className="space-y-8">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-400 shadow-sm">
                     <Headphones size={24} />
                  </div>

                  <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                     Let's Talk with <br />
                     Experienced <br />
                     <span className="text-marker">Performance Marketing</span> <br />
                     Consultants
                  </h2>

                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                     Ready to scale your business with campaigns that actually convert? Our performance experts are here to help. Fill out the form and let's engineer your path to predictable, profitable growth — starting today.
                  </p>

                  <div className="pt-4">
                     {/* <p className="text-[#ffb400] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p> */}
                     <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                        <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                        <a href="tel:+919892854892" className="hover:underline">
                           +91 9892 854 892
                        </a>
                     </p>
                  </div>
               </div>

               {/* RIGHT */}
               <div className="relative">
                  <div className="absolute -top-16 -left-16 hidden xl:block pointer-events-none">
                     <p className="font-serif italic text-gray-400 text-sm mb-1 -rotate-12">Fill the form</p>
                     <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="opacity-40">
                        <path d="M10,10 Q50,10 50,60 T90,90" strokeLinecap="round" />
                        <path d="M85,90 L95,95 L95,85" strokeLinecap="round" />
                     </svg>
                  </div>

                  <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
                     <form className="space-y-6">
                        <input type="text" placeholder="Your name"
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm" />
                        <input type="email" placeholder="Your email"
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm" />
                        <input type="tel" placeholder="Your phone"
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm" />
                        <textarea placeholder="Tell us about your campaign goals..." rows="5"
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-brand-yellow transition-colors shadow-sm resize-none"></textarea>
                        <button className="w-full sm:w-auto border-2 border-brand-yellow text-brand-yellow px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-yellow hover:text-white transition-all duration-300">
                           Send Message
                        </button>
                     </form>
                     <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                        Let's Boost Your <span className="text-[#1a162d] font-black">Online Revenue!</span>
                     </p>
                  </div>
               </div>
            </div>
         </section>

      </main>
   );
};

export default PerformanceMarketing;