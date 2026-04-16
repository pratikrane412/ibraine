import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Headphones } from 'lucide-react';

const fadeUp = {
   hidden: { opacity: 0, y: 40 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const SEOExperts = () => {
   const [openFaq, setOpenFaq] = useState(0);

   const faqs = [
      {
         title: "In-depth keyword research & strategy",
         content: "We identify high-intent, low-competition keywords that drive qualified organic traffic to your website. Our data-driven approach ensures you rank for the terms your customers are actively searching for — not just high-volume vanity keywords."
      },
      {
         title: "On-page SEO optimization",
         content: "From meta tags, headings, and schema markup to content structure and internal linking — we optimize every on-page element so search engines fully understand and rank your pages for the right queries."
      },
      {
         title: "Technical SEO & site audits",
         content: "We fix crawl errors, improve page speed, optimize Core Web Vitals, and ensure your website architecture is technically flawless — so search engines can index and rank your pages without any friction."
      },
      {
         title: "Authority link building",
         content: "We earn high-quality backlinks from authoritative, relevant websites through ethical white-hat outreach strategies that boost your domain authority and accelerate your climb up the search rankings."
      }
   ];

   const brandLogos = [
      "/client/Artigenius Logo.png",
      "/client/NAT.png",
      "/client/Meditac Kits Logo.png",
      "/client/Vastu Energetics Logo.png",
      "/client/Papita Logo.jpg",
      "/client/Emrik Cakes Logo.webp",
      "/client/MRC.png",
      "/client/GRT.png",
      "/client/DHOBI.png",
      "/client/LOK.png",
      "/client/Thorny Affairs Logo.png",
      "/client/Lullabies Logo.png",
   ];

   return (
      <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">

         {/* ════ 1. HERO SECTION ════ */}
         <section className="relative bg-[#f0f7f4] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
            <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
               src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-1.webp"
               className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-40" />
            <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}
               src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-2.webp"
               className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-40" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
               {/* Left: Text */}
               <div className="lg:w-1/2">
                  <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
                     className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
                     We get your website to{" "}
                     <span className="relative inline-block z-10">
                        page one
                        <span className="absolute left-0 bottom-2 w-full h-3 bg-[#FDB813]/60 -z-10 rounded-sm"></span>
                     </span>{" "}
                     of Google and keep it there — organically.
                  </motion.h1>

                  <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                     className="text-gray-600 text-[18px] mb-8 leading-relaxed">
                     Search Engine Optimisation is the most powerful long-term digital strategy available. Unlike paid ads that stop the moment your budget runs out, SEO builds compounding organic traffic — delivering a steady stream of high-intent visitors month after month.
                  </motion.p>

                  <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
                     className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                     <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                        Talk to our SEO Expert Now
                     </button>
                     <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                        <Play size={20} className="fill-black" /> Watch a Demo
                     </button>
                  </motion.div>

                  <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }}
                     className="text-gray-500 text-[15px]">
                     We can audit your site today and build a custom SEO roadmap to start ranking fast.
                  </motion.p>
               </div>

               {/* Right: Hero Images — SEO-specific illustrations */}
               <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                  className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">

                  {/* Main hero — SEO analytics illustration */}
                  <img
                     src="/images/seo1_converted.png"
                     className="absolute right-0 top-0 w-[85%] object-contain z-10 rounded-2xl"
                     alt="SEO Analytics"
                  />
                  {/* Floating card 1 — keyword research visual */}
                  <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                     src="/images/seo2_converted.png"
                     className="absolute left-[-10%] top-[20%] w-[58%] z-20 shadow-2xl rounded-xl"
                     alt="Keyword Research"
                  />
                  {/* Floating card 2 — organic traffic growth */}
                  <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}
                     src="/images/seo3_converted.png"
                     className="absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl"
                     alt="Organic Traffic"
                  />
                  {/* Floating badge — Google ranking visual */}
                  <motion.img animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }}
                     src="/images/seo4_converted.png"
                     className="absolute right-[-5%] bottom-[5%] w-[38%] z-20 rounded-xl shadow-xl"
                     alt="Google Rankings"
                  />
               </motion.div>
            </div>
         </section>

         {/* ════ 2. BRANDS SLIDER ════ */}
         <section className="py-20 px-6 border-b border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto text-center">
               <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Brands We've Ranked on Google's First Page</h2>
               <p className="text-gray-500 mb-12 text-lg">Diverse industries. Proven SEO strategies. Sustainable organic growth. Your rankings, our mission. Join us now.</p>
               <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {brandLogos.map((logo, index) => (
                     <img key={index} src={logo} alt="Brand Logo" className="w-32 md:w-40 object-contain hover:scale-110 transition-transform" />
                  ))}
               </div>
            </div>
         </section>

         {/* ════ 3. FEATURE: DOMINATE SEARCH ════ */}
         <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

               {/* Left: Two layered SEO images */}
               <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="lg:w-1/2 relative h-[500px] w-full">
                  <img
                     src="/images/seo5_converted.png"
                     className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10"
                     alt="SEO Strategy"
                  />
                  <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                     src="/images/seo6_converted.png"
                     className="absolute top-0 right-0 w-[62%] z-20 rounded-2xl shadow-2xl"
                     alt="Technical SEO"
                  />
               </motion.div>

               {/* Right: Text */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                  <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                     Dominate search results with on-page, off-page, technical, and local SEO.
                  </h2>
                  <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">
                     Getting your website to position one on Google for the right keywords is one of the most powerful growth levers available. It generates consistent, high-intent organic traffic without paying for every single click.
                  </p>
                  <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                     Our holistic SEO approach covers everything — from deep keyword research and content strategy to technical audits and authoritative link building — ensuring you don't just rank, you stay ranked.
                  </p>
                  <ul className="space-y-4 mb-10">
                     {["Certified SEO Specialists", "100% White-Hat Techniques", "Transparent Monthly Reporting"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                           <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">
                     Get a free SEO audit now
                  </button>
               </motion.div>
            </div>
         </section>

         {/* ════ 4. FEATURE: TURN DATA INTO GROWTH ════ */}
         <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

               {/* Left: Text */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                  <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                     We turn search data into a compounding organic growth engine
                  </h2>
                  <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                     As a leading <b>Search Engine Optimisation agency in Mumbai</b>, we deliver sustainable, compounding organic traffic. Your website appears when people search for what you offer — no ad spend required. With 10+ years of SEO expertise, our agency ensures measurable, long-term ROI through proven white-hat strategies. Start today and begin climbing the rankings.
                  </p>
                  <ul className="space-y-4 mb-10">
                     {[
                        "Long-Term Organic Visibility",
                        "High-Intent Targeted Traffic",
                        "Zero Per-Click Ad Cost",
                        "Fully Measurable Results",
                        "Custom SEO Roadmap for Your Business"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                           <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">
                     Talk to our SEO Expert Now
                  </button>
               </motion.div>

               {/* Right: SEO link building & analytics visuals */}
               <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">
                  <img
                     src="/images/seo7_converted.png"
                     className="absolute top-0 right-0 w-[90%] z-10 rounded-2xl"
                     alt="Link Building"
                  />
                  <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }}
                     src="/images/seo8_converted.png"
                     className="absolute bottom-10 left-[-5%] w-[58%] z-20 shadow-2xl rounded-xl bg-white"
                     alt="SEO Analytics Data"
                  />
               </motion.div>
            </div>
         </section>

         {/* ════ 5. ACCORDION / PROCESS SECTION ════ */}
         <section className="py-24 px-6 bg-[#f0f7f4]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

               {/* Left: SEO process images */}
               <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="lg:w-1/2 relative h-[600px] w-full">
                  <img
                     src="/images/seo9_converted.png"
                     className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl"
                     alt="Content Marketing"
                  />
                  <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                     src="/images/seo10_converted.png"
                     className="absolute top-[20%] right-[-5%] w-[58%] z-20 rounded-2xl shadow-2xl"
                     alt="Local SEO"
                  />
                  <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }}
                     src="/images/seo11_converted.png"
                     className="absolute bottom-0 left-[10%] w-[68%] z-30 shadow-2xl bg-white rounded-2xl"
                     alt="SERP Rankings"
                  />
               </motion.div>

               {/* Right: Accordion */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                  <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">
                     Search Engine Optimisation Company in Mumbai
                  </h2>
                  <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">
                     Supercharge your brand with expert SEO services! Climb Google's rankings, attract floods of organic visitors, and outrank your competitors for good. Let's make SEO magic happen — contact us now!
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
                                 <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6 text-gray-500 text-[15px]">
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
         <section className="py-24 px-6 bg-gradient-to-r from-green-900 to-green-700 text-white text-center">
            <div className="max-w-5xl mx-auto mb-16">
               <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="font-lora text-4xl lg:text-5xl mb-6">
                  We are a Search Engine Optimisation Agency
               </motion.h2>
               <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="text-gray-300 text-lg">
                  Experience results-driven SEO services with one of the <b>best SEO agencies in Mumbai</b>! We begin with a deep website audit, competitor analysis, and a fully customised ranking strategy built for your business.
               </motion.p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-green-600/50">
               <div className="pt-6 md:pt-0">
                  <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">3 Crore+</h3>
                  <p className="text-gray-300 text-lg">Organic revenue generated for clients!</p>
               </div>
               <div className="pt-6 md:pt-0">
                  <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">320%</h3>
                  <p className="text-gray-300 text-lg">Average organic traffic growth</p>
               </div>
               <div className="pt-6 md:pt-0">
                  <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">500+</h3>
                  <p className="text-gray-300 text-lg">Keywords ranked on Page 1 of Google!</p>
               </div>
            </div>
         </section>

         {/* ════ 7. VIDEO BANNER ════ */}
         <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
            <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer"
               className="relative z-10 w-24 h-24 bg-[#FDB813] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(253,184,19,0.5)]">
               <Play size={40} className="fill-black text-black ml-2" />
            </a>
         </section>

         {/* ════ 8. TESTIMONIALS ════ */}
         <section className="py-24 px-6 bg-white text-black">
            <div className="max-w-7xl mx-auto">
               <div className="mb-16 text-center max-w-3xl mx-auto">
                  <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                     What people <span className="italic text-[#FDB813]">say</span>
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed">
                     Hear from clients who transformed their organic search presence and built lasting digital authority with our SEO strategies.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                     {
                        name: "Aman Chowdary",
                        role: "Luxulo - Founder",
                        img: "https://brandwitty.com/media/2023/09/testimonial2.png",
                        text: "The SEO team took our website from invisible to page one on Google within 4 months. Organic traffic went up by 280% and we started getting genuine inquiries daily — without spending a single rupee on ads!"
                     },
                     {
                        name: "Salman Khan",
                        role: "RewardPort - Business Head",
                        img: "https://brandwitty.com/media/2023/09/testimonial13.png",
                        text: "Their keyword strategy and content optimisation work has been exceptional. We now rank for over 200 competitive keywords in our niche. The quality of leads coming through organic search is far superior to any paid channel."
                     },
                     {
                        name: "Rahul Pandey",
                        role: "Synk Salon - Founder",
                        img: "https://brandwitty.com/media/2023/09/testimonial11.png",
                        text: "The technical SEO audit uncovered issues we never knew existed. After fixes were implemented, our site speed improved dramatically and we jumped 30 positions on our core keywords. Outstanding results!"
                     }
                  ].map((review, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-[#f0f7f4] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                     >
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
               <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">
                  Unlock the full organic potential of your business with Ibraine
               </h2>
               <p className="text-gray-600 text-lg mb-10">
                  Partner with Ibraine, the SEO experts, to dominate search engines and grow organically. Our proven strategies will elevate your website's authority, attract your ideal audience, and deliver compounding long-term results.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">Call Now</button>
                  <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Case Studies</button>
               </div>
            </motion.div>
         </section>

         {/* ════ 10. CONTACT FORM SECTION ════ */}
         <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

            {/* Search icon decoration (top right) — replacing puzzle piece */}
            <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block">
               <div className="w-24 h-24 lg:w-32 lg:h-32 text-green-500">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                     <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
               </div>
            </div>

            <div className="absolute top-4 left-[45%] w-6 h-6 bg-green-500 rounded-full opacity-80 hidden lg:block"></div>
            <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-orange-400 rounded-full opacity-60 hidden lg:block"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

               {/* Left */}
               <div className="space-y-8">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 shadow-sm">
                     <Headphones size={24} />
                  </div>

                  <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                     Let's Talk with <br />
                     Experienced <br />
                     <span className="text-marker">SEO &amp; Content</span> <br />
                     Consultants
                  </h2>

                  <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                     Ready to rank higher and grow organically? Our SEO consultants are here to help! Fill out the form and let's start building your path to page one of Google.
                  </p>

                  <div className="pt-4">
                     <p className="text-[#ffb400] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p>
                     <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                        <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                        +91 9892 854 892
                     </p>
                  </div>
               </div>

               {/* Right: Form */}
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
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm" />
                        <input type="email" placeholder="Your email"
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm" />
                        <input type="tel" placeholder="Your phone"
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm" />
                        <textarea placeholder="Tell us about your SEO goals..." rows="5"
                           className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#FDB813] transition-colors shadow-sm resize-none"></textarea>
                        <button className="w-full sm:w-auto border-2 border-[#FDB813] text-[#FDB813] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#FDB813] hover:text-white transition-all duration-300">
                           Send Message
                        </button>
                     </form>
                     <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                        Let's Boost Your <span className="text-[#1a162d] font-black">Organic Rankings!</span>
                     </p>
                  </div>
               </div>
            </div>
         </section>

      </main>
   );
};

export default SEOExperts;