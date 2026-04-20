import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, CheckCircle2, PhoneCall, ChevronDown, ChevronUp
} from 'lucide-react';
import { Headphones, Puzzle } from 'lucide-react';
import ContactSection from '../../components/ContactSection/ContactSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';

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

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [current, setCurrent] = useState(0);
  const go = (n) => setCurrent(Math.max(0, Math.min(n, MAX)));

  const faqs = [
    { title: "Plan & Strategize", content: "We begin with in-depth discovery sessions to understand your business goals, target audience, and competitive landscape — crafting a roadmap that ensures every line of code serves a purpose." },
    { title: "Design & Prototype", content: "Our designers create stunning UI/UX wireframes and interactive prototypes, giving you a clear visual of your website before a single line of code is written." },
    { title: "Develop & Build", content: "Our expert developers bring designs to life using the latest technologies — React, Next.js, Node.js, and more — building fast, scalable, and secure web solutions." },
    { title: "Launch & Optimise", content: "After rigorous testing across devices and browsers, we launch your site and continue to monitor performance, making data-driven improvements to maximise results." }
  ];

  const brandLogos = [
    "/client/Artigenius Logo.png",
    "/client/Futurz4x4 Logo.webp",
    "/client/Meditac Kits Logo.png",
    "/client/Vastu Energetics Logo.png",
    "/client/Papita Logo.jpg",
    "/client/Emrik Cakes Logo.webp",
    "/client/DLOK.png",
    "/client/KOLGA.png",
    "/client/Alpha.png",
    "/client/LEAK.webp",
    "/client/Treat Resort logo.png",
    "/client/ORM.png",
  ];

  return (
    <main className="w-full bg-white overflow-hidden font-lora text-[#1a1a1a]">

      {/* ════ 1. HERO SECTION ════ */}
      <section className="relative bg-[#fcfaf2] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
        <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} src="/images/bg1.webp" className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-50" />
        <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} src="/images/bg2.webp" className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-50" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2">
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
              We design<span className="relative inline-block z-10">
                high-impact websites
                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#FDB813]/60 -z-10 rounded-sm"></span>
              </span> that turn visitors into loyal, long-term customers.
            </motion.h1>

            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-gray-600 text-[18px] mb-8 leading-relaxed">
              A powerful website is the backbone of your digital presence. We build fast, responsive, and visually engaging websites tailored to your brand—designed to capture attention, enhance user experience, and drive real business growth from day one.            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-5 mb-6">
              <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                Talk to our Web Expert Now
              </button>
              <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                <Play size={20} className="fill-black" /> Watch a Demo
              </button>
            </motion.div>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }} className="text-gray-500 text-[15px]">
              We’ll get your new website live quickly—ready to perform and start delivering real results.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">
            <img src="/images/web1_converted.png" className="absolute right-0 top-0 w-[85%] object-contain z-10 rounded-2xl shadow-xl" alt="Web Development Hero" />
            <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} src="/images/web2_converted.webp" className="absolute left-[-10%] top-[20%] w-[60%] z-20 shadow-2xl rounded-xl" alt="Stats" />
            <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} src="/images/web4_converted.webp" className="absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl" alt="Graph" />
            <motion.img animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }} src="/images/web3_converted.webp" className="absolute right-[-5%] bottom-[5%] w-[40%] z-20" alt="ROI" />
          </motion.div>
        </div>
      </section>

      {/* ════ 2. BRANDS SLIDER ════ */}
      <section className="py-20 px-6 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Brands We’ve Helped Transform Through Powerful Digital Experiences</h2>
          <p className="text-gray-500 mb-12 text-lg">Across industries, we craft custom-built websites that drive measurable growth. Your vision, our code—let’s build something impactful together.</p>
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

      {/* ════ 3. FEATURE: STUNNING DESIGN ════ */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[500px] w-full">
            <img src="/images/web5_converted.png" className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10" alt="Web Design" />
            <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} src="/images/web6_converted.png" className="absolute top-0 right-0 w-[65%] z-20 rounded-2xl shadow-2xl" alt="Coding" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
            <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">Where stunning design meets seamless functionality.</h2>
            <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">Your website is often the first impression of your brand—and a slow, outdated, or confusing experience can cost you valuable customers. We build modern, high-performance websites that capture attention, enhance usability, and keep visitors engaged.</p>
            <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">From conversion-focused landing pages to complex web applications, we blend elegant design with clean, scalable code—ensuring your website evolves with your business and delivers results from day one.</p>
            <ul className="space-y-4 mb-10">
              {["Certified Web Development Experts", "Assured Code Quality & Security", "Transparent Milestone Reporting"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                  <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                </li>
              ))}
            </ul>
            <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">Get a free consultation now</button>
          </motion.div>
        </div>
      </section>

      {/* ════ 4. FEATURE: ACTIONABLE INSIGHTS ════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
            <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">We transform your ideas into impactful digital experiences.</h2>
            <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">As a trusted website development agency in Mumbai, we design and develop high-performance websites that are fast, mobile-optimized, and built to rank. Whether you're starting from scratch or upgrading your current platform, our 10+ years of experience ensures scalable solutions that drive real business growth and strong ROI</p>
            <ul className="space-y-4 mb-10">
              {["Precision-crafted, fully responsive design", "High-speed performance for seamless user experience", "Built-in SEO foundations for better visibility", "Secure, scalable, and future-ready development", "Tailor-made solutions aligned with your brands"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                  <CheckCircle2 className="text-[#FDB813] shrink-0" size={24} /> {item}
                </li>
              ))}
            </ul>
            <button className="bg-[#FDB813] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Talk to our Web Expert Now</button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">
            <img src="/images/web7_converted.png" className="absolute top-0 right-0 w-[90%] z-10 rounded-2xl shadow-xl" alt="Web Development Process" />
            <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }} src="/images/web8_converted.png" className="absolute bottom-10 left-[-5%] w-[60%] z-20 shadow-2xl rounded-xl bg-white" alt="Stats Tool" />
          </motion.div>
        </div>
      </section>

      {/* ════ 5. ACCORDION / FAQ SECTION ════ */}
      <section className="py-24 px-6 bg-[#fcfaf2]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[600px] w-full">
            <img src="/images/web9_converted.png" className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl" alt="Web Development Agency" />
            <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} src="/images/web10_converted.png" className="absolute top-[20%] right-[-5%] w-[60%] z-20 rounded-2xl shadow-2xl" alt="Code" />
            <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }} src="/images/web11_converted.png" className="absolute bottom-0 left-[10%] w-[70%] z-30 shadow-2xl bg-white rounded-2xl" alt="Stats2" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
            <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">Website Development Company in Mumbai</h2>
            <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">Elevate your brand with a high-performance, professionally crafted website. Build trust, attract quality traffic, and stand out in a competitive market. Let’s create something exceptional—get in touch today!</p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                    <span className={`font-bold text-lg ${openFaq === index ? 'text-[#FDB813]' : 'text-black'}`}>{faq.title}</span>
                    {openFaq === index ? <ChevronUp className="text-[#FDB813]" /> : <ChevronDown className="text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-6 text-gray-500 text-[15px]">
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
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-lora text-4xl lg:text-5xl mb-6">We are a Premium Website Development Agency</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-gray-300 text-lg">Experience results-driven web development with one of the <b>best website development agencies in Mumbai</b>! We begin with meticulous planning, design, and precision engineering.</motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-teal-600/50">
          <div className="pt-6 md:pt-0">
            <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">200+</h3>
            <p className="text-gray-300 text-lg">Websites successfully delivered!</p>
          </div>
          <div className="pt-6 md:pt-0">
            <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">300%</h3>
            <p className="text-gray-300 text-lg">Average increase in online leads</p>
          </div>
          <div className="pt-6 md:pt-0">
            <h3 className="font-bold text-5xl lg:text-6xl text-[#FDB813] mb-2">10+</h3>
            <p className="text-gray-300 text-lg">Years of web development expertise!</p>
          </div>
        </div>
      </section>

      {/* ════ 7. VIDEO BANNER ════ */}
      <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer" className="relative z-10 w-24 h-24 bg-[#FDB813] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(253,184,19,0.5)]">
          <Play size={40} className="fill-black text-black ml-2" />
        </a>
      </section>

      {/* ════ 8. TESTIMONIALS ════ */}
      <TestimonialsSection reviews={reviews} />


      {/* ════ 9. MINI CTA ════ */}
      <section className="py-20 px-6 bg-slate-50 text-center border-t border-gray-200">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
          <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">Unlock the full potential of your business with Ibraine's Web Experts</h2>
          <p className="text-gray-600 text-lg mb-10">Partner with Ibraine, the website development experts, to build a powerful digital presence. Our custom-built websites are engineered to attract visitors, build trust, and convert them into paying customers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#FDB813] hover:text-black transition-all shadow-lg">Call Now</button> */}
            <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Our Portfolio</button>
          </div>
        </motion.div>
      </section>

      {/* ════ 10. CONTACT FORM SECTION ════ */}
      <ContactSection
        headingLine1="Let's Talk with"
        headingLine2="Experienced"
        headingHighlight="Web Development"
        headingLine3="Consultant"
      />

    </main>
  );
};

export default WebDevelopment;