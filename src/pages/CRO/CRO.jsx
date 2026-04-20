import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp, Headphones } from 'lucide-react';
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
// ─── All CRO-themed images from Unsplash (reliable, no auth required) ───
const IMG = {
    // Hero section
    heroMain: "/images/cro1_converted.png",   // analytics dashboard on laptop
    heroCard1: "/images/cro2_converted.png", // charts / graphs card
    heroCard2: "/images/cro3_converted.png", // metrics screen
    heroROI: "/images/cro4_converted.png",  // ROI growth

    // Floating decoration shapes (keep original)
    shape1: "/images/bg1.webp",
    shape2: "/images/bg2.webp",

    // Section 3 — Maximize conversions
    sec3Bottom: "/images/cro5_converted.png", // person at dashboard
    sec3Top: "/images/cro6_converted.png", // heatmap / UX screen

    // Section 4 — Actionable insights
    sec4Main: "/images/cro7_converted.png",  // A/B test data on screen
    sec4Float: "/images/cro8_converted.png",  // reuse dashboard as floating card

    // Section 5 — FAQ / accordion image stack
    sec5TopLeft: "/images/cro9_converted.png", // team at whiteboard
    sec5MidRight: "/images/cro10_converted.png", // team collaboration
    sec5BotLeft: "/images/cro11_converted.png",  // conversion graph

    // Video banner background
    videoBg: "/images/crogg.png",
};

const CROOptimization = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [current, setCurrent] = useState(0);
    const go = (n) => setCurrent(Math.max(0, Math.min(n, MAX)));

    const faqs = [
        {
            title: "User behaviour analysis & insights",
            content: "We study heatmaps, scroll patterns, and session recordings to identify friction points, confusion areas, and missed opportunities across your pages."
        },
        {
            title: "A/B testing & experimentation",
            content: "We test variations of key elements like headlines, CTAs, layouts, and offers — using statistically valid methods to find what truly drives conversions."
        },
        {
            title: "Conversion-focused copy & design",
            content: "We refine messaging and visual hierarchy to guide users seamlessly — building trust, clarity, and motivation to act."
        },
        {
            title: "Funnel optimisation",
            content: "We evaluate your entire journey — from landing page to final conversion — and eliminate drop-offs to improve overall performance."
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
            <section className="relative bg-[#f0f4ff] pt-32 pb-24 px-6 min-h-[90vh] flex flex-col justify-center">
                <motion.img
                    animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
                    src={IMG.shape1}
                    className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-50"
                    alt=""
                />
                <motion.img
                    animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}
                    src={IMG.shape2}
                    className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-50"
                    alt=""
                />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="lg:w-1/2">
                        <motion.h1
                            initial="hidden" animate="visible" variants={fadeUp}
                            className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black"
                        >
                            Turn Existing Traffic{" "}
                            <span className="relative inline-block z-10">
                                into Measurable
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#4f7fff]/40 -z-10 rounded-sm"></span>
                            </span>{" "}
                            Revenue Growth
                        </motion.h1>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                            className="text-gray-600 text-[18px] mb-8 leading-relaxed"
                        >
                            More traffic doesn’t guarantee growth — better conversion does.
                            We build data-driven CRO systems that transform user behaviour into higher conversions, increased revenue, and stronger ROI without increasing ad spend.

                        </motion.p>

                        <motion.div
                            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-5 mb-6"
                        >
                            <button className="bg-[#4f7fff] text-white font-bold px-8 py-4 rounded-md hover:bg-black transition-all shadow-lg w-full sm:w-auto">
                                Talk to our CRO Expert Now
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                                <Play size={20} className="fill-black" /> Watch a Demo
                            </button>
                        </motion.div>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }}
                            className="text-gray-500 text-[15px]"
                        >
                            Most websites convert less than 3% of visitors. We help you fix that — fast.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0"
                    >
                        {/* Main hero — analytics dashboard on laptop */}
                        <img
                            src={IMG.heroMain}
                            className="absolute right-0 top-0 w-[85%] object-cover object-top rounded-2xl z-10 shadow-2xl"
                            style={{ height: "75%" }}
                            alt="CRO Analytics Dashboard"
                        />
                        {/* Floating card 1 — charts */}
                        <motion.img
                            animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                            src={IMG.heroCard1}
                            className="absolute left-[-10%] top-[22%] w-[58%] z-20 shadow-2xl rounded-xl object-cover"
                            style={{ height: "160px" }}
                            alt="Conversion Charts"
                        />
                        {/* Floating card 2 — metrics */}
                        <motion.img
                            animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}
                            src={IMG.heroCard2}
                            className="absolute left-[8%] bottom-[8%] w-[46%] z-30 shadow-2xl rounded-xl object-cover"
                            style={{ height: "130px" }}
                            alt="Metrics Screen"
                        />
                        {/* Floating ROI card */}
                        <motion.img
                            animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }}
                            src={IMG.heroROI}
                            className="absolute right-[-5%] bottom-[4%] w-[38%] z-20 rounded-xl object-cover shadow-xl"
                            style={{ height: "120px" }}
                            alt="ROI Growth"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ════ 2. BRANDS SLIDER ════ */}
            <section className="py-20 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Trusted by Brands Focused on Performance, Not Just Traffic</h2>
                    <p className="text-gray-500 mb-12 text-lg">Across industries, we’ve helped businesses unlock more value from their existing traffic through structured testing, behavioural insights, and conversion-focused experiences.</p>
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

            {/* ════ 3. FEATURE: MAXIMIZE CONVERSIONS ════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] w-full"
                    >
                        {/* Bottom-left: person at analytics dashboard */}
                        <img
                            src={IMG.sec3Bottom}
                            className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10 object-cover"
                            style={{ height: "370px" }}
                            alt="Analytics Dashboard"
                        />
                        {/* Top-right floating: heatmap screen */}
                        <motion.img
                            animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src={IMG.sec3Top}
                            className="absolute top-0 right-0 w-[62%] z-20 rounded-2xl shadow-2xl object-cover"
                            style={{ height: "220px" }}
                            alt="Heatmap Analysis"
                        />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                            Maximise the Value of Every Visitor
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">
                            Driving traffic is only the first step — converting that traffic is where real growth happens.
                            Most websites lose the majority of their visitors due to friction, unclear messaging, or poor user experience.
                        </p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            We combine data, psychology, and experimentation to:                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Identify conversion barriers", "Improve user journeys", "Increase actions that matter"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#4f7fff] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#4f7fff] transition-all shadow-lg">
                            Get a free CRO audit now
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. FEATURE: ACTIONABLE INSIGHTS ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">
                            From User Behaviour to Smarter Decisions
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            We don’t rely on assumptions — we rely on evidence.
                            As a CRO-focused agency in Mumbai, we analyze real user interactions through analytics, heatmaps, and session recordings to uncover exactly where and why users drop off — and how to fix it.

                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Higher Conversion Rates", "Improved Return on Ad Spend", "Lower Cost Per Acquisition", "Enhanced User Experience", "Continuous Performance Improvement"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#4f7fff] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-[#4f7fff] text-white font-bold px-8 py-4 rounded-md hover:bg-black transition-all shadow-lg">
                            Talk to our CRO Expert Now
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full"
                    >
                        {/* Main A/B test data visual */}
                        <img
                            src={IMG.sec4Main}
                            className="absolute top-0 right-0 w-[90%] z-10 rounded-2xl shadow-xl object-cover"
                            style={{ height: "420px" }}
                            alt="A/B Test Results"
                        />
                        {/* Floating stats card */}
                        <motion.img
                            animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }}
                            src={IMG.sec4Float}
                            className="absolute bottom-10 left-[-5%] w-[52%] z-20 shadow-2xl rounded-xl bg-white object-cover"
                            style={{ height: "130px" }}
                            alt="Conversion Stats"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. ACCORDION / FAQ SECTION ════ */}
            <section className="py-24 px-6 bg-[#f0f4ff]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[600px] w-full"
                    >
                        {/* Top-left: team at whiteboard */}
                        <img
                            src={IMG.sec5TopLeft}
                            className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl object-cover"
                            style={{ height: "250px" }}
                            alt="CRO Strategy Session"
                        />
                        {/* Mid-right floating: team collaboration */}
                        <motion.img
                            animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src={IMG.sec5MidRight}
                            className="absolute top-[25%] right-[-5%] w-[58%] z-20 rounded-2xl shadow-2xl object-cover"
                            style={{ height: "200px" }}
                            alt="Team Collaboration"
                        />
                        {/* Bottom floating: conversion graph */}
                        <motion.img
                            animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }}
                            src={IMG.sec5BotLeft}
                            className="absolute bottom-0 left-[8%] w-[72%] z-30 shadow-2xl bg-white rounded-2xl object-cover"
                            style={{ height: "170px" }}
                            alt="Conversion Graph"
                        />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">
                            Built for Brands That Want More from Their Traffic
                        </h2>
                        <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">
                            Whether you're running paid campaigns or scaling organically, CRO ensures you’re getting maximum return from every visitor.
                            We optimise your digital experience so more users take action — consistently.
                        </p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                    >
                                        <span className={`font-bold text-lg ${openFaq === index ? 'text-[#4f7fff]' : 'text-black'}`}>
                                            {faq.title}
                                        </span>
                                        {openFaq === index
                                            ? <ChevronUp className="text-[#4f7fff]" />
                                            : <ChevronDown className="text-gray-400" />
                                        }
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-6 text-gray-500 text-[15px]"
                                            >
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
            <section className="py-24 px-6 bg-gradient-to-r from-indigo-900 to-blue-700 text-white text-center">
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="font-lora text-4xl lg:text-5xl mb-6">
                        An Optimisation System That Continuously Improves
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-gray-300 text-lg">
                        CRO isn’t a one-time fix — it’s an ongoing process.
                        We build a structured experimentation system that continuously tests, learns, and improves your conversion performance over time.                    </motion.p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-blue-600/50">
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#7eb3ff] mb-2">3X+</h3>
                        <p className="text-gray-300 text-lg">Average conversion lift for our clients!</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#7eb3ff] mb-2">400%</h3>
                        <p className="text-gray-300 text-lg">ROI from CRO Programmes</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#7eb3ff] mb-2">5000+</h3>
                        <p className="text-gray-300 text-lg">A/B tests run across client funnels!</p>
                    </div>
                </div>
            </section>

            {/* ════ 7. VIDEO BANNER ════ */}
            <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: `url('${IMG.videoBg}')` }}
                ></div>
                <a
                    href="https://www.youtube.com/watch?v=zfMHTO__b6M"
                    target="_blank" rel="noreferrer"
                    className="relative z-10 w-24 h-24 bg-[#4f7fff] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(79,127,255,0.5)]"
                >
                    <Play size={40} className="fill-white text-white ml-2" />
                </a>
            </section>

            {/* ════ 8. TESTIMONIALS ════ */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                            Testimonials That Make Us <span className="italic text-[#4f7fff]">Blush</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Hear from brands that increased conversions and unlocked more revenue through a smarter optimisation approach.                        </p>
                    </div>
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
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">Get more from your existing traffic with Ibraine</h2>
                    <p className="text-gray-600 text-lg mb-10">
                        Partner with Ibraine, the CRO experts, to unlock the full revenue potential of your website. Our
                        data-driven optimisation strategies will increase your conversion rate, reduce drop-offs, and
                        maximise return from every visitor.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#4f7fff] transition-all shadow-lg">Call Now</button> */}
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Case Studies</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM SECTION ════ */}
            <ContactSection
                headingLine1="Let's Talk with"
                headingLine2="Experienced"
                headingHighlight="CRO"
                headingLine3="Consultant"
            />

        </main>
    );
};

export default CROOptimization;