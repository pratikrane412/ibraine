import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Headphones } from 'lucide-react';
import ContactSection from '../../components/ContactSection/ContactSection';

const fadeUp = {
   hidden: { opacity: 0, y: 40 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


const reviews = [
   { name: "Rashid Khan", role: "", initials: "RK", text: "One of the standout qualities of Ibraine is their exceptional team of professionals. They are not just experts in their respective fields but also great communicators who take the time to understand your business goals. This personalized approach is evident in every campaign they run." },
   { name: "Anil Singh Kunwar Singh Aswal", role: "", initials: "AS", text: "Im impressed with the kind of Digital marketing expertize iBraine has delivered. Their ability to scale budgets without killing efficiency is a genuine superpower. Every rupee we give them comes back multiplied. Truly world-class." },
   { name: "Rohit Patil", role: "", initials: "RP", text: "Our online bookings tripled in 90 days. The Google and Meta campaigns were laser-sharp — right audience, right creative, right moment. Cost per booking dropped by 58%. I wouldn't trust anyone else with our ad budget!" },
   { name: "Vikram Gargote", role: "", initials: "VG", text: "Switched agencies three times before finding this team. Within 45 days our D2C revenue jumped 2.4x. The level of strategic depth combined with flawless execution is genuinely rare in the market." },
   { name: "Junaid Makrani", role: "", initials: "JM", text: "From zero to 50,000 monthly active users in 4 months through performance marketing alone. Their Meta funnel architecture and retention retargeting is masterclass-level. ROI we never thought possible." },
   { name: "Ed Lopez", role: "", initials: "EL", text: "Our cost per purchase dropped 47% in the first month. The creative iterations they run are relentless and data-backed. Every campaign feels custom-built, not templated. Absolute game-changers for e-commerce." },
   { name: "Yash Lad", role: "", initials: "YL", text: "Real estate leads used to cost us ₹2,400 each. Now we're at ₹380 with 3x better quality. Their Google Search strategy combined with smart landing page testing made all the difference. Exceptional work." },
   { name: "Kinjal Gohil", role: "", initials: "KG", text: "We launched our D2C health brand with zero digital footprint. Within 90 days we had a 5x ROAS on Meta and a profitable Google Shopping account. The roadmap they built for us is worth its weight in gold." },
   { name: "Shraddha Somani", role: "", initials: "SS", text: "B2B lead generation through Meta was something we never believed in — until they proved us wrong. 300+ quality leads in 60 days with a CPL 60% below industry average. The results speak louder than any pitch." },
   { name: "Deepika Joshi", role: "", initials: "DJ", text: "From a struggling furniture brand to a recognised name — all in 6 months. Their full-funnel strategy blending awareness and conversion campaigns is the reason we're now expanding to 3 new cities. Can't recommend enough." },
];

const CARD_WIDTH = 340;
const GAP = 20;
const VISIBLE = 3;
const STEP = CARD_WIDTH + GAP;
const MAX = reviews.length - VISIBLE;




const PerformanceMarketing = () => {
   const [openFaq, setOpenFaq] = useState(0);
   const [current, setCurrent] = useState(0);
   const go = (n) => setCurrent(Math.max(0, Math.min(n, MAX)));

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
      "/client/MRC.png",
      "/client/NAT.png",
      "/client/Meditac Kits Logo.png",
      "/client/Vastu Energetics Logo.png",
      "/client/Papita Logo.jpg",
      "/client/LOK.png",
      "/client/Emrik Cakes Logo.webp",
      "/client/Artigenius Logo.png",
      "/client/GRT.png",
      "/client/DHOBI.png",
      "/client/Thorny Affairs Logo.png",
      "/client/Lullabies Logo.png",
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
                     src="/images/p2.jpg"
                     className="absolute right-0 top-0 w-[85%] h-[72%] object-cover z-10 rounded-2xl shadow-2xl"
                     alt="Performance Marketing Expert" />

                  {/* Floating card 1: analytics dashboard */}
                  <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                     src="/images/p4.webp"
                     className="absolute left-[-10%] top-[20%] w-[58%] h-[190px] object-cover z-20 shadow-2xl rounded-xl"
                     alt="Ad Analytics Dashboard" />

                  {/* Floating card 2: charts & graphs */}
                  <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}
                     src="/images/p3.webp"
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
               <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90 transition-all duration-500">
                  {brandLogos.map((logo, index) => (
                     <div
                        key={index}
                        className="w-32 md:w-40 h-20 md:h-24 flex items-center justify-center"
                     >
                        <img
                           src={logo}
                           alt="Brand Logo"
                           className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
                        />
                     </div>
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
                     src="/images/p6.webp"
                     className="absolute bottom-0 left-0 w-[80%] h-[380px] object-cover rounded-2xl shadow-xl z-10"
                     alt="Performance Marketing Team" />

                  {/* Floating: ads dashboard screen */}
                  <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                     src="/images/p5.webp"
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
                     src="/images/p7.jpg"
                     className="absolute top-0 left-0 w-[70%] h-[360px] object-cover z-10 rounded-2xl shadow-xl"
                     alt="Performance Marketing Analysis" />

                  {/* Floating: creative team working on ads */}
                  <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                     src="/images/p8.webp"
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
         <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop&q=80')" }}></div>
            <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer"
               className="relative z-10 w-24 h-24 bg-[#FDB813] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(253,184,19,0.5)]">
               <Play size={40} className="fill-black text-black ml-2" />
            </a>
         </section>

         {/* ════ 8. TESTIMONIALS ════ */}
         <section className="py-24 bg-white overflow-hidden">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto px-6 mb-14">
               <h2 className="font-lora text-4xl lg:text-5xl font-normal text-[#1a162d] leading-tight mb-4">
                  Testimonials That Make Us <em className="text-[#FDB813] not-italic font-lora italic">Blush</em>
               </h2>
               <p className="text-gray-400 text-lg leading-relaxed">
                  Hear from brands who stopped burning budgets and started breaking records — all through performance-first marketing.
               </p>
            </div>

            {/* Slider */}
            <div className="pl-12 overflow-hidden">
               <motion.div
                  className="flex"
                  style={{ gap: GAP }}
                  animate={{ x: -current * STEP }}
                  transition={{ type: "spring", stiffness: 300, damping: 35 }}
               >
                  {reviews.map((r, i) => (
                     <div
                        key={i}
                        style={{ flex: `0 0 ${CARD_WIDTH}px` }}
                        className="bg-[#fcfaf2] rounded-[2rem] border border-[#ede8d4] p-8 flex flex-col justify-between"
                     >
                        <div>
                           {/* Avatar + Name */}
                           <div className="flex items-center gap-3 mb-5">
                              <div className="w-12 h-12 rounded-full bg-[#FDB813] flex items-center justify-content-center text-white font-bold text-sm shrink-0 flex items-center justify-center">
                                 {r.initials}
                              </div>
                              <div>
                                 <p className="font-bold text-[#1a162d] text-base leading-tight">{r.name}</p>
                                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mt-0.5">{r.role}</p>
                              </div>
                           </div>
                           {/* Quote */}
                           <p className="text-gray-500 text-sm leading-relaxed italic">"{r.text}"</p>
                        </div>
                        {/* Stars */}
                        <div className="mt-5 pt-4 border-t border-black/5">
                           <span className="text-[#FDB813] tracking-widest text-sm">★★★★★</span>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-10 px-6">
               <button
                  onClick={() => go(current - 1)}
                  disabled={current === 0}
                  className="w-11 h-11 rounded-full border border-[#e8e2cc] bg-white flex items-center justify-center transition-all hover:bg-[#FDB813] hover:border-[#FDB813] group disabled:opacity-30 disabled:cursor-not-allowed"
               >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-300 group-hover:stroke-white transition-colors">
                     <polyline points="15 18 9 12 15 6" />
                  </svg>
               </button>

               {/* Dots */}
               <div className="flex gap-2 items-center">
                  {Array.from({ length: MAX + 1 }).map((_, i) => (
                     <button
                        key={i}
                        onClick={() => go(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#FDB813]" : "w-2 bg-[#e8e2cc]"}`}
                     />
                  ))}
               </div>

               <button
                  onClick={() => go(current + 1)}
                  disabled={current === MAX}
                  className="w-11 h-11 rounded-full border border-[#e8e2cc] bg-white flex items-center justify-center transition-all hover:bg-[#FDB813] hover:border-[#FDB813] group disabled:opacity-30 disabled:cursor-not-allowed"
               >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-300 group-hover:stroke-white transition-colors">
                     <polyline points="9 18 15 12 9 6" />
                  </svg>
               </button>
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
         <ContactSection
            headingLine1="Let's Talk with"
            headingLine2="Experienced"
            headingHighlight="Performance Marketing"
            headingLine3="Consultant"
         />

      </main>
   );
};

export default PerformanceMarketing;