import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react';
import { Headphones } from 'lucide-react';

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

const VideoProduction = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [current, setCurrent] = useState(0);
    const go = (n) => setCurrent(Math.max(0, Math.min(n, MAX)));

    const faqs = [
        { title: "Concept development & pre-production", content: "We define the creative direction, script, and storyboard — aligning your message with audience intent and platform requirements." },
        { title: "Professional filming & direction", content: "Our team captures high-quality visuals using advanced equipment, ensuring every frame reflects your brand identity and storytelling vision." },
        { title: "Post-production & editing", content: "We refine your video with editing, color grading, motion graphics, and sound design — delivering a polished, high-impact final output." },
        { title: "Distribution & performance strategy", content: "We optimise and adapt your videos for platforms such as social media, YouTube, and ads — maximising reach, engagement, and ROI." }
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
                {/* Decorative floating shapes */}
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-32 left-[5%] w-16 h-16 hidden lg:block opacity-20 rounded-full bg-[#e8c84a]" />
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-20 left-[45%] w-10 h-10 hidden lg:block opacity-20 rounded-full bg-[#e8c84a]" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="lg:w-1/2">
                        <motion.h1 initial="hidden" animate="visible" variants={fadeUp}
                            className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
                            High-Impact <span className="relative inline-block z-10">
                                Video Content
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#e8c84a]/60 -z-10 rounded-sm"></span>
                            </span> Designed to Capture Attention and Drive Action
                        </motion.h1>

                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
                            className="text-black-300 text-[18px] mb-8 leading-relaxed">
                            Video isn’t just content — it’s influence at scale.
                            We create strategy-led, performance-driven videos that combine storytelling, production quality, and audience insight to help your brand stand out and deliver measurable results.                        </motion.p>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                            <button className="bg-[#e8c84a] text-black font-bold px-8 py-4 rounded-md hover:bg-white hover:text-black transition-all shadow-lg w-full sm:w-auto">
                                Talk to our Video Expert Now
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-500 text-black px-8 py-4 rounded-md font-bold bg-transparent hover:bg-white/10 transition-all shadow-sm w-full sm:w-auto">
                                <Play size={20} className="fill-white" /> Watch Our Showreel
                            </button>
                        </motion.div>
                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }}
                            className="text-black-400 text-[15px]">
                            From concept to final cut — we deliver videos that convert viewers into customers.
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=700&auto=format&fit=crop"
                            className="absolute right-0 top-0 w-[85%] object-cover z-10 rounded-2xl shadow-2xl"
                            alt="Video Production Studio"
                        />
                        <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?w=400&auto=format&fit=crop"
                            className="absolute left-[-10%] top-[20%] w-[60%] z-20 shadow-2xl rounded-xl object-cover"
                            alt="Camera Setup"
                        />
                        <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop"
                            className="absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl object-cover"
                            alt="Video Editing"
                        />
                        <motion.img animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=300&auto=format&fit=crop"
                            className="absolute right-[-5%] bottom-[5%] w-[40%] z-20 rounded-xl shadow-2xl object-cover"
                            alt="Director Clapperboard"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ════ 2. BRANDS SLIDER ════ */}
            <section className="py-20 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Stories That Don’t Just Get Viewed — They Create Impact</h2>
                    <p className="text-gray-500 mb-12 text-lg">Across industries, we’ve helped brands transform ideas into compelling visual narratives that engage audiences, build recall, and drive meaningful outcomes.</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
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

            {/* ════ 3. FEATURE: END-TO-END PRODUCTION ════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700&auto=format&fit=crop"
                            className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10 object-cover h-[380px]"
                            alt="Film Crew"
                        />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=500&auto=format&fit=crop"
                            className="absolute top-0 right-0 w-[65%] z-20 rounded-2xl shadow-2xl object-cover h-[300px]"
                            alt="Cinematic Lighting"
                        />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">Make Every Frame Work Towards Your Business Goals</h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">In a fast-scrolling digital world, attention is limited — and competition is endless.
                            Your video content needs to stop the scroll, communicate instantly, and leave a lasting impression.</p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">We combine creative storytelling, production expertise, and platform strategy to:</p>
                        <ul className="space-y-4 mb-10">
                            {["Capture attention within seconds", "Communicate your message clearly", "Drive engagement and conversions"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#e8c84a] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#e8c84a] hover:text-black transition-all shadow-lg">Get a free consultation now</button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. FEATURE: VIDEOS THAT CONVERT ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">From Concept to Final Cut — Built for Performance</h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">We don’t just produce videos — we build content systems designed to perform across platforms.</p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">As a video production-focused agency in Mumbai, we manage everything from ideation and scripting to filming, editing, and distribution — ensuring consistency, quality, and impact at every stage.</p>

                        <ul className="space-y-4 mb-10">
                            {["Higher Engagement Across Platforms", "Stronger Brand Recall", "Increased Viewer Retention", "Content Optimised for Conversions", "Scalable Video Content Strategy"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#e8c84a] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-[#e8c84a] text-black font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Talk to our Video Expert Now</button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=700&auto=format&fit=crop"
                            className="absolute top-0 right-0 w-[90%] z-10 rounded-2xl shadow-xl object-cover h-[400px]"
                            alt="Video Analytics"
                        />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&auto=format&fit=crop"
                            className="absolute bottom-10 left-[-5%] w-[60%] z-20 shadow-2xl rounded-xl bg-white object-cover h-[220px]"
                            alt="Video Performance Stats"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. ACCORDION / FAQ SECTION ════ */}
            <section className="py-24 px-6 bg-[#0d1f2d]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:w-1/2 relative h-[600px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop"
                            className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl object-cover h-[350px]"
                            alt="Film Production"
                        />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&auto=format&fit=crop"
                            className="absolute top-[20%] right-[-5%] w-[60%] z-20 rounded-2xl shadow-2xl object-cover h-[260px]"
                            alt="Behind the Scenes"
                        />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }}
                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop"
                            className="absolute bottom-0 left-[10%] w-[70%] z-30 shadow-2xl bg-white rounded-2xl object-cover h-[180px]"
                            alt="Video Editing Suite"
                        />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-white mb-4">Created for Brands That Want to Stand Out Visually</h2>
                        <p className="text-gray-300 text-[18px] mb-10 leading-relaxed">Whether it’s a brand film, ad creative, or short-form content, we craft videos that align with your positioning and resonate with your audience — helping your brand stay relevant and memorable.</p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-700 rounded-lg bg-[#162535] overflow-hidden shadow-sm">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                                        <span className={`font-bold text-lg ${openFaq === index ? 'text-[#e8c84a]' : 'text-white'}`}>{faq.title}</span>
                                        {openFaq === index ? <ChevronUp className="text-[#e8c84a]" /> : <ChevronDown className="text-gray-400" />}
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-6 text-gray-300 text-[15px]">
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
            <section className="py-24 px-6 bg-gradient-to-r from-[#e8c84a] to-[#f5a623] text-black text-center">
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="font-lora text-4xl lg:text-5xl mb-6 text-black">A Structured Approach to Video That Scales with Your Brand</motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-black/70 text-lg">Every video is backed by strategy, not guesswork.
                        We create repeatable frameworks that allow you to produce consistent, high-performing content as your brand grows.</motion.p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-black/20">
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-black mb-2">500+</h3>
                        <p className="text-black/70 text-lg">Videos produced and delivered!</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-black mb-2">300%</h3>
                        <p className="text-black/70 text-lg">Avg. increase in engagement</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-black mb-2">10M+</h3>
                        <p className="text-black/70 text-lg">Total views generated for clients!</p>
                    </div>
                </div>
            </section>

            {/* ════ 7. VIDEO BANNER ════ */}
            <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer"
                    className="relative z-10 w-24 h-24 bg-[#e8c84a] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(232,200,74,0.5)]">
                    <Play size={40} className="fill-black text-black ml-2" />
                </a>
            </section>

            {/* ════ 8. TESTIMONIALS ════ */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <h2 className="font-lora text-4xl lg:text-5xl mb-6 leading-tight">
                            Testimonials That Make Us <span className="italic text-[#e8c84a]">Blush</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Hear from brands that elevated their presence and performance through strategic video content.
                        </p>
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
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">Unlock the full power of your brand with stunning video content</h2>
                    <p className="text-gray-600 text-lg mb-10">Partner with our video production experts to bring your brand to life on screen. From scripting to distribution, we craft videos that captivate your audience and drive real business results.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#e8c84a] hover:text-black transition-all shadow-lg">Call Now</button> */}
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">View Portfolio</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM SECTION ════ */}
            <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

                {/* Decorative Clapperboard Icon (Top Right) */}
                <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-10 hidden md:block">
                    <svg viewBox="0 0 64 64" fill="#0d1f2d" className="w-24 h-24 lg:w-32 lg:h-32">
                        <rect x="4" y="16" width="56" height="44" rx="3" />
                        <rect x="4" y="4" width="56" height="16" rx="3" />
                        <line x1="16" y1="4" x2="20" y2="20" stroke="white" strokeWidth="3" />
                        <line x1="30" y1="4" x2="34" y2="20" stroke="white" strokeWidth="3" />
                        <line x1="44" y1="4" x2="48" y2="20" stroke="white" strokeWidth="3" />
                    </svg>
                </div>

                {/* Floating Dots */}
                <div className="absolute top-4 left-[45%] w-6 h-6 bg-[#e8c84a] rounded-full opacity-80 hidden lg:block"></div>
                <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-[#0d1f2d] rounded-full opacity-40 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                    {/* --- LEFT SIDE: TEXT CONTENT --- */}
                    <div className="space-y-8">
                        <div className="w-12 h-12 bg-[#e8c84a]/20 rounded-full flex items-center justify-center text-[#e8c84a] shadow-sm">
                            <Headphones size={24} />
                        </div>

                        <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                            Let's Talk with <br />
                            Our Experienced <br />
                            <span className="relative inline-block">
                                Video Production
                                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#e8c84a]/50 -z-10 rounded-sm"></span>
                            </span> <br />
                            Team
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Ready to bring your brand story to life on screen? Our creative team is here to help! Fill out the form and let's start crafting a video that drives results.
                        </p>

                        <div className="pt-4">
                            {/* <p className="text-[#e8c84a] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p> */}
                            <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                                <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                                <a href="tel:+919892854892" className="hover:underline">
                                    +91 9892 854 892
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: FORM --- */}
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
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm" />
                                <input type="email" placeholder="Your email"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm" />
                                <input type="tel" placeholder="Your phone"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm" />
                                <textarea placeholder="Tell us about your video project..." rows="5"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-[#e8c84a] transition-colors shadow-sm resize-none"></textarea>
                                <button className="w-full sm:w-auto border-2 border-[#e8c84a] text-[#b8970a] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#e8c84a] hover:text-black transition-all duration-300">
                                    Send Message
                                </button>
                            </form>

                            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                                Let's Tell Your <span className="text-[#1a162d] font-black">Brand Story!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default VideoProduction;
