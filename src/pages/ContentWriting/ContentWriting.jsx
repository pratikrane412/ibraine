import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, CheckCircle2, PhoneCall, ChevronDown, ChevronUp
} from 'lucide-react';
import { Headphones, Puzzle } from 'lucide-react';

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

const ContentWriting = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [current, setCurrent] = useState(0);
    const go = (n) => setCurrent(Math.max(0, Math.min(n, MAX)));

    const faqs = [
        { title: "Research-led topic planning", content: "We identify high-impact topics based on audience behavior, industry trends, and search demand — ensuring every piece has a clear purpose." },
        { title: "SEO-focused content writing", content: "Our content is structured and optimized to rank — while staying natural, engaging, and valuable to readers." },
        { title: "Voice and messaging alignment", content: "We establish a consistent tone and communication style so your brand feels cohesive across every touchpoint." },
        { title: "Strategic content planning", content: "We create long-term content plans, editorial calendars, and topic clusters designed to attract, nurture, and convert your audience." }
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
                <motion.img animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-1.webp" className="absolute top-32 left-[5%] w-16 hidden lg:block opacity-50" />
                <motion.img animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }} src="https://brandwitty.com/media/2023/07/digital-ads-software-shape-2.webp" className="absolute bottom-20 left-[45%] w-12 hidden lg:block opacity-50" />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
                    <div className="lg:w-1/2">
                        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-lora text-[42px] lg:text-[60px] leading-[1.15] mb-6 font-medium text-black">
                            Strategic Content{" "}
                            <span className="relative inline-block z-10">
                                Built to Attract,
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#6366f1]/40 -z-10 rounded-sm"></span>
                            </span>{" "}
                            Engage, and Convert
                        </motion.h1>

                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-gray-600 text-[18px] mb-8 leading-relaxed">
                            Content today isn’t just about writing — it’s about influence.
                            We create SEO-led, insight-driven content that positions your brand in front of the right audience and turns attention into measurable business growth.                        </motion.p>

                        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row items-center gap-5 mb-6">
                            <button className="bg-[#6366f1] text-white font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg w-full sm:w-auto">
                                Talk to our Content Expert Now
                            </button>
                            <button className="flex items-center justify-center gap-3 border border-gray-300 text-black px-8 py-4 rounded-md font-bold bg-white hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto">
                                <Play size={20} className="fill-black" /> Watch a Demo
                            </button>
                        </motion.div>
                        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.5 }} className="text-gray-500 text-[15px]">
                            We can have your first batch of content ready within days — not weeks.
                        </motion.p>
                    </div>

                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-1/2 relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0">
                        <img src="https://img.freepik.com/free-vector/content-writer-concept-illustration_114360-4215.jpg" className="absolute right-0 top-0 w-[85%] object-contain z-10" alt="Content Writing Hero" />
                        <motion.img animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/19.png" className="absolute left-[-10%] top-[20%] w-[60%] z-20 shadow-2xl rounded-xl" alt="Stats" />
                        <motion.img animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/images.png" className="absolute left-[10%] bottom-[10%] w-[45%] z-30 shadow-2xl rounded-xl" alt="Graph" />
                        <motion.img animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ duration: 6, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Return-on-Investment-1-1.png" className="absolute right-[-5%] bottom-[5%] w-[40%] z-20" alt="ROI" />
                    </motion.div>
                </div>
            </section>

            {/* ════ 2. BRANDS SLIDER ════ */}
            <section className="py-20 px-6 border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-lora text-3xl md:text-4xl font-bold mb-4">Content That Builds Visibility and Authority Across Industries</h2>
                    <p className="text-gray-500 mb-12 text-lg">From emerging brands to established businesses, our content strategies consistently deliver stronger search presence, deeper engagement, and lasting brand impact.</p>
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

            {/* ════ 3. FEATURE: AMPLIFY YOUR BRAND VOICE ════ */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[500px] w-full">
                        <img src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-687.jpg" className="absolute bottom-0 left-0 w-[80%] rounded-2xl shadow-xl z-10" alt="Content Writing" />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Home-5-SEO-Audit-Image.png" className="absolute top-0 right-0 w-[65%] z-20 rounded-2xl shadow-2xl" alt="SEO Audit" />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6">Make Every Word Work Towards Growth</h2>
                        <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">In a digital-first world, content is often your first impression — and your biggest differentiator.
                            If your messaging isn’t clear, relevant, and consistent, you’re losing both attention and opportunity.</p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">We combine SEO strategy, audience insight, and brand storytelling to:</p>
                        <ul className="space-y-4 mb-10">
                            {["Attract high-intent traffic", "Build credibility and trust", "Convert readers into customers"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#6366f1] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-black text-white font-bold px-8 py-4 rounded-md hover:bg-[#6366f1] hover:text-white transition-all shadow-lg">Get a free content consultation</button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. FEATURE: WORDS THAT CONVERT ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-6"> From Content Creation to Content Systems</h2>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">We don’t just write — we build structured content ecosystems designed for long-term performance.</p>
                        <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">As a content-focused digital agency, we align every piece with your business goals, audience behavior, and search demand — ensuring your content delivers consistent value over time.</p>

                        <ul className="space-y-4 mb-10">
                            {["Improved Organic Visibility", "Stronger Audience Engagement", "Higher Search Rankings", "Clear and Consistent Messaging", "Content That Drives Conversions"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[18px] text-black font-medium">
                                    <CheckCircle2 className="text-[#6366f1] shrink-0" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-[#6366f1] text-white font-bold px-8 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Talk to our Content Expert Now</button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full">
                        <img src="https://img.freepik.com/free-vector/content-marketing-concept-illustration_114360-2457.jpg" className="absolute top-0 right-0 w-[90%] z-10" alt="Content Marketing" />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 5, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Stats.svg" className="absolute bottom-10 left-[-5%] w-[60%] z-20 shadow-2xl rounded-xl bg-white" alt="Stats Tool" />
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. ACCORDION / FAQ SECTION ════ */}
            <section className="py-24 px-6 bg-[#f0f4ff]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 relative h-[600px] w-full">
                        <img src="https://img.freepik.com/free-vector/copywriter-concept-illustration_114360-7009.jpg" className="absolute top-0 left-0 w-[70%] z-10 rounded-2xl shadow-xl" alt="Copywriter" />
                        <motion.img animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/case-1.png" className="absolute top-[20%] right-[-5%] w-[60%] z-20 rounded-2xl shadow-2xl" alt="Case" />
                        <motion.img animate={{ y: [15, -15, 15] }} transition={{ duration: 4, repeat: Infinity }} src="https://brandwitty.com/media/2023/08/Stats2.svg" className="absolute bottom-0 left-[10%] w-[70%] z-30 shadow-2xl bg-white rounded-2xl" alt="Stats2" />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:w-1/2">
                        <h2 className="font-lora text-4xl lg:text-[46px] leading-[1.2] text-black mb-4">Designed for Brands That Want to Stand Out with Clarity</h2>
                        <p className="text-gray-600 text-[18px] mb-10 leading-relaxed">Whether it’s website copy, blogs, or campaigns, we create content that communicates with purpose and performs across platforms — helping your brand stay relevant and impactful.</p>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                                    <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                                        <span className={`font-bold text-lg ${openFaq === index ? 'text-[#6366f1]' : 'text-black'}`}>{faq.title}</span>
                                        {openFaq === index ? <ChevronUp className="text-[#6366f1]" /> : <ChevronDown className="text-gray-400" />}
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
            <section className="py-24 px-6 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white text-center">
                <div className="max-w-5xl mx-auto mb-16">
                    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-lora text-4xl lg:text-5xl mb-6">A Smarter Approach to Content Creation</motion.h2>
                    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-gray-300 text-lg">Every piece we create is backed by research, guided by strategy, and refined for performance.
                        This ensures your content doesn’t just exist — it contributes to real business growth.</motion.p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-indigo-600/50">
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#a5b4fc] mb-2">10,000+</h3>
                        <p className="text-gray-300 text-lg">Articles & Blogs published!</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#a5b4fc] mb-2">300%</h3>
                        <p className="text-gray-300 text-lg">Average organic traffic growth</p>
                    </div>
                    <div className="pt-6 md:pt-0">
                        <h3 className="font-bold text-5xl lg:text-6xl text-[#a5b4fc] mb-2">500+</h3>
                        <p className="text-gray-300 text-lg">Happy clients across industries!</p>
                    </div>
                </div>
            </section>

            {/* ════ 7. VIDEO BANNER ════ */}
            <section className="h-[400px] w-full relative flex items-center justify-center bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <a href="https://www.youtube.com/watch?v=zfMHTO__b6M" target="_blank" rel="noreferrer" className="relative z-10 w-24 h-24 bg-[#6366f1] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                    <Play size={40} className="fill-white text-white ml-2" />
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
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
                    <h2 className="font-lora text-4xl lg:text-5xl mb-6 text-black">Voices of Brands That Grew with Better Content</h2>
                    <p className="text-gray-600 text-lg mb-10">Discover how businesses improved their visibility, engagement, and messaging through a more strategic content approach.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* <button className="bg-black text-white font-bold px-10 py-4 rounded-md hover:bg-[#6366f1] hover:text-white transition-all shadow-lg">Call Now</button> */}
                        <button className="border-2 border-black text-black font-bold px-10 py-4 rounded-md hover:bg-black hover:text-white transition-all shadow-lg">Case Studies</button>
                    </div>
                </motion.div>
            </section>

            {/* ════ 10. CONTACT FORM SECTION ════ */}
            <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-lora">

                {/* Blue Puzzle Piece (Top Right) */}
                <div className="absolute top-10 right-10 lg:right-32 rotate-12 opacity-90 hidden md:block animate-floating">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 text-indigo-400">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3c0-1.1-.9-2-2-2s-2 .9-2 2H7c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3c0 1.1.9 2 2 2s2-.9 2-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2z" />
                        </svg>
                    </div>
                </div>

                {/* Floating Dots */}
                <div className="absolute top-4 left-[45%] w-6 h-6 bg-indigo-400 rounded-full opacity-80 hidden lg:block"></div>
                <div className="absolute right-[10%] top-1/2 w-3 h-3 bg-purple-400 rounded-full opacity-60 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 reveal-active">

                    {/* --- LEFT SIDE: TEXT CONTENT --- */}
                    <div className="space-y-8 reveal-item">
                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-400 shadow-sm">
                            <Headphones size={24} />
                        </div>

                        <h2 className="font-lora text-4xl lg:text-6xl leading-tight text-[#1a162d]">
                            Let's Talk with <br />
                            Experienced <br />
                            <span className="text-marker">Content Writing</span> <br />
                            Consultants
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed max-w-md font-light">
                            Ready to elevate your brand's voice and content strategy? Our team of expert writers and strategists is here to help! Fill out the form, and let's start crafting content that truly connects.
                        </p>

                        <div className="pt-4">
                            {/* <p className="text-[#6366f1] font-bold text-sm uppercase tracking-widest mb-2">Urgent?</p> */}
                            <p className="text-[#1a162d] text-xl lg:text-2xl font-black">
                                <span className="text-gray-400 font-medium text-sm mr-2 italic">Call us</span>
                                <a href="tel:+919892854892" className="hover:underline">
                                    +91 9892 854 892
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: FORM --- */}
                    <div className="relative reveal-item delay-1">

                        <div className="absolute -top-16 -left-16 hidden xl:block pointer-events-none">
                            <p className="font-serif italic text-gray-400 text-sm mb-1 -rotate-12">Fill the form</p>
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="2" className="opacity-40">
                                <path d="M10,10 Q50,10 50,60 T90,90" strokeLinecap="round" />
                                <path d="M85,90 L95,95 L95,85" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className="bg-[#fcfcfc] p-8 lg:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-50">
                            <form className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-indigo-400 transition-colors shadow-sm"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-indigo-400 transition-colors shadow-sm"
                                />
                                <input
                                    type="tel"
                                    placeholder="Your phone"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-indigo-400 transition-colors shadow-sm"
                                />
                                <textarea
                                    placeholder="Tell us about your content needs..."
                                    rows="5"
                                    className="w-full bg-white border border-gray-100 p-4 rounded-xl outline-none focus:border-indigo-400 transition-colors shadow-sm resize-none"
                                ></textarea>

                                <button className="w-full sm:w-auto border-2 border-[#6366f1] text-[#6366f1] px-10 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#6366f1] hover:text-white transition-all duration-300">
                                    Send Message
                                </button>
                            </form>

                            <p className="text-center mt-10 text-[13px] text-gray-400 font-medium">
                                Let's Build Your <span className="text-[#1a162d] font-black">Content Authority!</span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default ContentWriting;
