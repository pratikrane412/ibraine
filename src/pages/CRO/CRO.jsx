import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle2, ChevronDown, ChevronUp, Headphones } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// ─── All CRO-themed images from Unsplash (reliable, no auth required) ───
const IMG = {
    // Hero section
    heroMain: "/images/cro1_converted.png",   // analytics dashboard on laptop
    heroCard1: "/images/cro2_converted.png", // charts / graphs card
    heroCard2: "/images/cro3_converted.png", // metrics screen
    heroROI: "/images/cro4_converted.png",  // ROI growth

    // Floating decoration shapes (keep original)
    shape1: "https://brandwitty.com/media/2023/07/digital-ads-software-shape-1.webp",
    shape2: "https://brandwitty.com/media/2023/07/digital-ads-software-shape-2.webp",

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
    videoBg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=80",
};

const CROOptimization = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            title: "Analyze user behavior & heatmaps",
            content: "We use advanced heatmaps, session recordings, and scroll maps to understand exactly how your visitors interact with your pages — identifying friction points and drop-off zones that kill conversions."
        },
        {
            title: "A/B test high-impact elements",
            content: "From headlines and CTAs to layouts and form designs, we rigorously A/B test every hypothesis to find winning variations backed by statistically significant data — not guesswork."
        },
        {
            title: "Optimize landing page copy & design",
            content: "We craft persuasive, benefit-led copy paired with conversion-focused design that guides visitors through a seamless journey — removing distractions and building trust at every step."
        },
        {
            title: "Streamline your conversion funnel",
            content: "We audit your entire funnel — from ad click to thank-you page — identifying leaks and implementing targeted fixes so more of your existing traffic turns into paying customers."
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
                            We turn your existing traffic into{" "}
                            <span className="relative inline-block z-10">
                                more revenue
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#4f7fff]/40 -z-10 rounded-sm"></span>
                            </span>{" "}
                            without spending more on ads.
                        </motion.h1>

                        <motion.p
                            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                            className="text-gray-600 text-[18px] mb-8 leading-relaxed"
                        >
                            Conversion Rate Optimisation (CRO) is the most cost-effective way to grow your business.
                            Instead of paying for more clicks, we help you convert the visitors you already have —
                            using data-driven testing, behavioural analysis, and persuasive design.
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
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Brands Whose Conversions We've Transformed</h2>
                    <p className="text-gray-500 mb-12 text-lg">Diverse industries. Tested strategies. Measurable uplift. Your growth, our mission. Join us now.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {brandLogos.map((logo, index) => (
                            <img key={index} src={logo} alt="Brand Logo" className="w-32 md:w-40 object-contain hover:scale-110 transition-transform" />
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
                            Maximise conversions across landing pages, funnels, checkout flows, and mobile.
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">
                            Getting traffic to your site is only half the battle. The real challenge is converting those visitors into
                            leads, sign-ups, and customers. Most businesses lose up to 97% of their traffic without ever knowing why.
                        </p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            CRO gives you clear answers. Through structured testing and user research, we identify exactly what's
                            stopping your visitors from converting — and we fix it, fast.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Certified CRO Specialists", "Data-Backed Testing Process", "Transparent Reporting & Insights"].map((item, i) => (
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
                            We turn visitor data into conversion-boosting decisions
                        </h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
                            As a leading <b>CRO agency in Mumbai</b>, we dig deep into your analytics, heatmaps, and user recordings to
                            understand real behaviour. We don't rely on assumptions — every test we run is grounded in evidence.
                            With 10+ years of optimisation expertise, our team consistently delivers higher conversion rates and lower
                            cost-per-acquisition for brands across industries.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Higher Conversion Rates Immediately", "Lower Cost Per Acquisition", "Data-Driven A/B Testing", "Improved User Experience", "Fully Customised to Your Funnel"].map((item, i) => (
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
                            Conversion Rate Optimisation Company in Mumbai
                        </h2>
                        <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">
                            Supercharge your revenue with our expert CRO services! Stop wasting ad spend on traffic that doesn't
                            convert — attract, engage, and persuade your visitors to take action. Let's make your website work
                            harder. Contact us now!
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
                        We are a Conversion Rate Optimisation Agency
                    </motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-gray-300 text-lg">
                        Experience revenue-driven CRO services with one of the <b>best conversion rate optimisation agencies in Mumbai</b>!
                        We begin with in-depth funnel analysis, hypothesis building, and systematic testing.
                    </motion.p>
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
                            What people <span className="italic text-[#4f7fff]">say</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Hear from clients who turned low-converting websites into growth engines through our data-driven CRO approach.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Aman Chowdary",
                                role: "Luxulo - Founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial2.png",
                                text: "The CRO audit they ran on our site was eye-opening. We had no idea why visitors were dropping off at checkout. Within 6 weeks of testing, our checkout conversion rate jumped by 47%. Incredible results!"
                            },
                            {
                                name: "Salman Khan",
                                role: "RewardPort - Business Head",
                                img: "https://brandwitty.com/media/2023/09/testimonial13.png",
                                text: "After years of pouring budget into paid ads with diminishing returns, CRO was the unlock we needed. The team identified two critical friction points on our landing page we'd completely overlooked. ROI has been outstanding."
                            },
                            {
                                name: "Rahul Pandey",
                                role: "Synk Salon - Founder",
                                img: "https://brandwitty.com/media/2023/09/testimonial11.png",
                                text: "The A/B testing process was thorough, transparent, and genuinely educational. They didn't just fix our pages — they taught us how to think about conversion. Our lead volume doubled in 3 months. Thank you, team!"
                            }
                        ].map((review, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-[#f0f4ff] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <img src={review.img} alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-[#4f7fff] shadow-md" />
                                        <div>
                                            <h4 className="font-bold text-lg text-[#1a162d] leading-tight">{review.name}</h4>
                                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">{review.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-[16px] leading-relaxed italic">"{review.text}"</p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-200/50">
                                    <div className="flex text-[#4f7fff] gap-1 text-sm">
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
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">Get more from your existing traffic with Ibraine</h2>
                    <p className="text-gray-600 text-lg mb-10">
                        Partner with Ibraine, the CRO experts, to unlock the full revenue potential of your website. Our
                        data-driven optimisation strategies will increase your conversion rate, reduce drop-offs, and
                        maximise return from every visitor.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#4f7fff] transition-all shadow-lg">Call Now</button>
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Case Studies</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM SECTION ════ */}
            <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">
                {/* Puzzle decoration */}
                <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 text-blue-500">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z" />
                        </svg>
                    </div>
                </div>
                <div className="absolute top-4 left-[45%] w-6 h-6 bg-blue-500 rounded-full opacity-80 hidden lg:block"></div>
                <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-indigo-400 rounded-full opacity-60 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* LEFT */}
                    <div className="space-y-8">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-400 shadow-sm">
                            <Headphones size={24} />
                        </div>
                        <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                            Let's Talk with <br />
                            Experienced <br />
                            <span className="text-[#4f7fff]">CRO</span> <br />
                            Consultant
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Ready to stop leaving money on the table? Our CRO team is ready to audit your funnel, identify
                            conversion blockers, and build a roadmap to higher revenue from your existing traffic.
                        </p>
                        <div className="pt-4">
                            <p className="text-[#4f7fff] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p>
                            <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                                <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                                +91 9892 854 892
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
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-blue-400 transition-colors shadow-sm" />
                                <input type="email" placeholder="Your email"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-blue-400 transition-colors shadow-sm" />
                                <input type="tel" placeholder="Your phone"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-blue-400 transition-colors shadow-sm" />
                                <textarea placeholder="Tell us about your conversion challenges..." rows="5"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-blue-400 transition-colors shadow-sm resize-none"></textarea>
                                <button className="w-full sm:w-auto border-2 border-[#4f7fff] text-[#4f7fff] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#4f7fff] hover:text-white transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                                Let's Boost Your <span className="text-[#1a162d] font-black">Conversion Rate!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default CROOptimization;