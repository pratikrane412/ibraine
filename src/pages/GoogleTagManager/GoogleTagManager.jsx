import React from 'react';
import { motion } from 'framer-motion';
import {
    Play, ArrowRight, CheckCircle2, Star,
    ShieldCheck, Zap, BarChart3,
    MousePointer2, Settings, Code2, MessageSquare,
    Headphones, Globe, Sparkles, Target, Layers3, TimerReset, ChevronRight
} from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const metrics = [
    { value: '300+', label: 'Containers audited and optimized' },
    { value: '42%', label: 'Average improvement in event quality' },
    { value: '2.4x', label: 'Faster deployment compared to hardcoding' },
    { value: '99.7%', label: 'Tag firing reliability across key flows' }
];

const processSteps = [
    {
        title: 'Tracking Architecture Blueprint',
        description: 'We map KPIs, touchpoints, and conversion goals into a clear event architecture that aligns with business outcomes.'
    },
    {
        title: 'Container Setup and Governance',
        description: 'From naming conventions to workspace governance, we build a scalable GTM foundation your team can confidently manage.'
    },
    {
        title: 'Event, Pixel, and Data Layer Implementation',
        description: 'We deploy high-priority tags with precision and design robust data layer contracts for marketing and analytics teams.'
    },
    {
        title: 'QA, UAT, and Performance Monitoring',
        description: 'Using preview mode, debug tools, and cross-browser validation, we verify every trigger and continuously monitor quality.'
    }
];

const faqs = [
    {
        question: 'Can GTM improve marketing performance?',
        answer: 'Yes. GTM itself does not create demand, but it unlocks reliable attribution and event data so campaigns can be optimized with confidence.'
    },
    {
        question: 'Will you migrate from existing tracking setup?',
        answer: 'Absolutely. We handle migration from hardcoded scripts or legacy containers with rollback-safe deployment and event parity checks.'
    },
    {
        question: 'Do you support ecommerce tracking?',
        answer: 'Yes, we implement advanced ecommerce events including product views, add-to-cart, checkout steps, and purchase validation.'
    }
];

const GoogleTagManager = () => {
    return (
        <div className="w-full bg-[#fdfdfb] text-[#1a1a1a] font-sans overflow-hidden selection:bg-[#f9b91b]">

            {/* ════ 1. HERO SECTION (FIXED VISIBILITY) ════ */}
            <section className="relative pt-32 pb-10 px-6 min-h-[85vh] flex flex-col items-center justify-center text-center">
                {/* Playful Floating Decorations from Video */}
                <div className="absolute top-20 left-[15%] opacity-30 rotate-12 text-2xl font-serif italic">/</div>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-40 right-[20%] opacity-20 text-[#f9b91b]"><Star size={30} fill="currentColor" /></motion.div>
                <div className="absolute bottom-40 right-[15%] font-bold opacity-10 text-4xl">7</div>
                <div className="absolute top-60 left-[10%] w-5 h-5 border-2 border-black rounded-full opacity-20" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-[85px] font-black leading-[0.95] tracking-tight mb-10"
                    >
                        Easily manage <span className="bg-[#fff1f1] px-4 rounded-xl">tags and tracking</span> <br /> at your fingertips.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        Google Tag Manager is a terrific tool for company owners and marketing teams to assess website performance, identify well-performing sections, pinpoint underperforming areas, and gather valuable user experience data from real customers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-wrap justify-center items-center gap-8 mb-20"
                    >
                        <button className="bg-[#f9b91b] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_-10px_rgba(249,185,27,0.4)] hover:scale-105 transition-all">
                            Get Started
                        </button>
                        <button className="flex items-center gap-3 font-bold group">
                            <div className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-[#f9b91b] group-hover:text-white group-hover:border-[#f9b91b] transition-all">
                                <Play size={20} fill="currentColor" />
                            </div>
                            <span className="border-b-2 border-black pb-0.5 group-hover:text-[#f9b91b] transition-colors">Watch Intro Video</span>
                        </button>
                    </motion.div>
                </div>

                {/* Hero Dashboard (Faux UI Mockup) */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto relative w-full px-4"
                >
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#f9b91b] rounded-full z-[-1] hidden lg:block" />
                    <div className="bg-white rounded-[3.5rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-100 p-6 md:p-12 overflow-hidden">
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="h-8 w-40 bg-gray-50 rounded-full" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            <div className="md:col-span-4 text-left space-y-8">
                                <div className="space-y-3">
                                    <div className="h-4 w-3/4 bg-gray-100 rounded" />
                                    <div className="h-4 w-1/2 bg-gray-50 rounded" />
                                </div>
                                <div className="bg-blue-50 p-8 rounded-[2rem] relative shadow-inner">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full mb-4 shadow-lg flex items-center justify-center text-white"><BarChart3 size={20} /></div>
                                    <div className="h-3 w-1/2 bg-blue-200 rounded-full" />
                                </div>
                            </div>
                            <div className="md:col-span-8 bg-gray-50/50 rounded-[3rem] p-10 flex flex-col items-center justify-center border border-dashed border-gray-200 min-h-[300px]">
                                <div className="flex gap-4 items-end h-32 mb-8">
                                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                            className="w-6 bg-[#f9b91b] rounded-t-lg"
                                        />
                                    ))}
                                </div>
                                <p className="font-black text-3xl uppercase tracking-[0.4em] opacity-10 select-none">Progress Stats</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-20 text-4xl opacity-10 font-black">X</div>
                </motion.div>
            </section>

            {/* ════ 2. FEATURE SECTION: Eliminate Coding ════ */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <span className="text-[#f9b91b] font-bold uppercase text-[10px] tracking-[0.5em] mb-6 block">Get Google Tag Manager Implemented</span>
                        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.95]">
                            <span className="bg-[#e2f7f1] px-2 rounded-md">Eliminate</span> complicated coding using GTM Services
                        </h2>
                        <p className="text-gray-500 text-xl leading-relaxed mb-12">
                            Brandwitty provides skilled Google Tag Manager services, including fresh account setup and migration from existing web analytics. As early adopters, we've successfully migrated multiple customer websites to GTM, enabling faster tracking tag installation.
                        </p>
                        <button className="bg-[#f9b91b] text-white px-10 py-5 rounded-xl font-bold shadow-lg hover:bg-black transition-all">
                            Learn More
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                        className="bg-indigo-600 rounded-[5rem] aspect-square flex items-center justify-center p-12 relative overflow-hidden"
                    >
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl relative z-10 w-full max-w-md transform transition-transform hover:rotate-2">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600"><Settings size={30} /></div>
                                <div className="h-4 w-40 bg-gray-100 rounded-full" />
                            </div>
                            <div className="space-y-4">
                                <div className="h-3 w-full bg-gray-50 rounded-full" />
                                <div className="h-3 w-full bg-gray-50 rounded-full" />
                                <div className="h-3 w-2/3 bg-gray-50 rounded-full" />
                            </div>
                            <div className="mt-10 flex gap-4">
                                <div className="w-10 h-10 bg-indigo-600 rounded-full" />
                                <div className="w-10 h-10 bg-[#f9b91b] rounded-full shadow-lg" />
                            </div>
                        </div>
                        {/* Decorative floating icons */}
                        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-10 w-16 h-16 bg-emerald-400 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12"><CheckCircle2 size={30} /></motion.div>
                        <motion.div animate={{ y: [15, -10, 15] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-20 left-10 w-16 h-16 bg-[#f9b91b] rounded-2xl flex items-center justify-center text-white -rotate-12 shadow-xl"><Zap size={30} /></motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ════ 3. BENEFITS STRIP (3 Columns) ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-[75px] font-black mb-8 leading-none tracking-tighter">The <span className="bg-[#f3e8ff] px-3 rounded-2xl italic">benefits</span> of Google Tag Manager</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium italic mb-20">"It's one tool to manage tags on the whole website. This means you can dive into details to dig out the most benefits."</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-gray-50 rounded-[4rem] overflow-hidden bg-gray-50/20 shadow-sm">
                        {[
                            { title: "Simplified tag management", icon: <MousePointer2 /> },
                            { title: "Faster deployment of tracking codes and scripts", icon: <Zap /> },
                            { title: "Enhanced data accuracy", icon: <ShieldCheck /> }
                        ].map((item, i) => (
                            <div key={i} className={`p-16 text-center bg-white hover:bg-[#f9b91b] hover:text-white transition-all duration-500 group ${i !== 2 ? 'md:border-r border-gray-100' : ''}`}>
                                <div className="w-24 h-24 bg-gray-50 rounded-[2rem] mx-auto flex items-center justify-center mb-10 group-hover:bg-white/20 group-hover:text-white transition-all">
                                    {React.cloneElement(item.icon, { size: 40 })}
                                </div>
                                <h3 className="text-2xl font-black leading-tight max-w-[240px] mx-auto transition-all">{item.title}</h3>
                                <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight size={32} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 pb-28 bg-white">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {metrics.map((metric) => (
                        <motion.div
                            key={metric.label}
                            variants={fadeInUp}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                            className="bg-[#fffdf6] border border-[#f3e8c2] rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <p className="text-4xl font-black text-[#1a1a1a] mb-3">{metric.value}</p>
                            <p className="text-gray-600 leading-relaxed">{metric.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ════ 4. LOGO INTEGRATIONS GRID ════ */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <span className="text-[#f9b91b] font-bold uppercase text-[10px] tracking-[0.5em] mb-4 block">Effortlessly implement tags of multiple tools</span>
                    <h2 className="text-4xl md:text-7xl font-black mb-24 leading-tight">Tags can be <span className="bg-[#fffbeb] border-b-8 border-[#f9b91b]">easily</span> <br /> implemented through Google Tag Manager</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
                        {[
                            { name: "Facebook", logo: "https://cdn-icons-png.flaticon.com/512/124/124010.png" },
                            { name: "Google Ads", logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png" },
                            { name: "Pinterest", logo: "https://cdn-icons-png.flaticon.com/512/145/145808.png" },
                            { name: "Hotjar", logo: "https://cdn.iconscout.com/icon/free/png-256/free-hotjar-3521487-2944928.png" },
                            { name: "Analytics", logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png" },
                            { name: "LinkedIn", logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
                            { name: "Quora", logo: "https://cdn-icons-png.flaticon.com/512/145/145811.png" },
                            { name: "Shopify", logo: "https://cdn-icons-png.flaticon.com/512/825/825582.png" }
                        ].map((brand, i) => (
                            <motion.div
                                whileHover={{ scale: 1.1, y: -10 }}
                                key={i} className="flex flex-col items-center gap-4"
                            >
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center p-7 border border-gray-50 hover:border-[#f9b91b] transition-all">
                                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-28 px-6 bg-gradient-to-b from-[#fff7e6] via-[#fffdf8] to-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-black text-white text-xs tracking-[0.3em] uppercase px-5 py-2 mb-6">
                            <Sparkles size={14} /> Why teams choose us
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black leading-[0.95] mb-8">
                            A conversion-first GTM system built for
                            <span className="bg-[#f9b91b] text-white px-3 rounded-xl ml-2 inline-block">clarity</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                            We don't just install tags. We architect a measurement framework that helps founders, marketers, and analysts move faster with trustworthy data and actionable insights.
                        </p>
                        <div className="space-y-5">
                            {[
                                { icon: <Target size={20} />, text: 'Business-aligned event taxonomy and conversion mapping' },
                                { icon: <Layers3 size={20} />, text: 'Server-side and client-side tagging strategy support' },
                                { icon: <TimerReset size={20} />, text: 'Rapid QA cycles with documentation for in-house teams' }
                            ].map((point) => (
                                <motion.div
                                    key={point.text}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45 }}
                                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100"
                                >
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#f9b91b]/15 text-[#f9b91b] flex items-center justify-center">{point.icon}</div>
                                    <p className="text-gray-700 font-medium leading-relaxed">{point.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-10 shadow-[0_35px_80px_-40px_rgba(0,0,0,0.25)]"
                    >
                        <h3 className="text-2xl md:text-3xl font-black mb-8">Our implementation process</h3>
                        <div className="space-y-6">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: index * 0.08 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-9 h-9 rounded-full bg-black text-white text-sm font-black flex items-center justify-center mt-1">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg mb-1">{step.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <button className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#f9b91b]">
                            Book a strategy call <ChevronRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. TESTIMONIALS (Circular Headshots) ════ */}
            <section className="py-40 px-6 bg-white relative">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="bg-[#f9b91b]/10 w-24 h-24 rounded-full mx-auto flex items-center justify-center text-[#f9b91b] text-4xl font-black mb-12 shadow-sm">66</div>
                    <h2 className="text-4xl md:text-[70px] font-black mb-20 leading-none">Check what our <br /> <span className="bg-[#e0f2fe] px-2 rounded-2xl">clients</span> say about us.</h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="bg-[#fdfdfb] p-16 md:p-24 rounded-[5rem] border border-gray-100 shadow-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-10"><MessageSquare size={100} /></div>
                        <p className="text-2xl md:text-3xl font-medium text-gray-600 mb-12 leading-relaxed italic relative z-10">
                            "This has given us a clearer picture of our online performance. Thanks! We now have a better grasp of our data, enabling us to optimize our digital strategies effectively."
                        </p>
                        <div className="space-y-1 relative z-10">
                            <h4 className="text-3xl font-black italic">Naren Waghela</h4>
                            <p className="text-[#f9b91b] font-bold text-lg tracking-widest uppercase">FusionKraaft - Founder</p>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Headshots exactly as seen in video */}
                <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden">
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-20 w-20 h-20 bg-gray-100 rounded-full border-4 border-white shadow-xl overflow-hidden"><img src="https://i.pravatar.cc/100?u=1" alt="" /></motion.div>
                    <motion.div animate={{ y: [20, -10, 20] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-1/4 left-[15%] w-24 h-24 bg-gray-100 rounded-full border-4 border-white shadow-xl overflow-hidden"><img src="https://i.pravatar.cc/100?u=2" alt="" /></motion.div>
                    <motion.div animate={{ y: [-10, 20, -10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/3 right-[10%] w-28 h-28 bg-gray-100 rounded-full border-4 border-white shadow-xl overflow-hidden"><img src="https://i.pravatar.cc/100?u=3" alt="" /></motion.div>
                    <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute bottom-1/3 right-[20%] w-16 h-16 bg-gray-100 rounded-full border-4 border-white shadow-xl overflow-hidden"><img src="https://i.pravatar.cc/100?u=4" alt="" /></motion.div>
                </div>
            </section>

            <section className="py-26 px-6 bg-[#f9fafb]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-6xl font-black mb-5">Frequently asked questions</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Everything you need to know before partnering with us for GTM implementation and analytics growth.
                        </p>
                    </div>
                    <div className="space-y-5">
                        {faqs.map((faq) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45 }}
                                className="rounded-3xl border border-gray-200 bg-white p-7 md:p-8"
                            >
                                <h3 className="text-xl md:text-2xl font-black mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 6. CONSULTANT CONTACT SECTION ════ */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-10"><Headphones size={32} /></div>
                        <h2 className="text-4xl md:text-[85px] font-black mb-10 leading-[0.9]">Let's talk with <br /> experienced <br /> <span className="border-b-8 border-orange-100">Web Analytics</span> <br /> Consultant</h2>
                        <p className="text-xl text-gray-400 max-w-md font-medium mb-8">Our team of experts is here to help! Fill out the form, and let's start the journey towards achieving your digital goals.</p>
                        <ul className="space-y-3 text-gray-600 font-medium">
                            <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#f9b91b]" /> Customized tracking blueprint in 3-5 business days</li>
                            <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#f9b91b]" /> Dedicated analytics specialist for onboarding</li>
                            <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#f9b91b]" /> Post-launch QA and optimization support</li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Brand Witty Hand-drawn Arrow */}
                        <div className="absolute -top-16 left-10 hidden lg:block">
                            <p className="font-serif italic text-sm mb-2 opacity-50">Fill the <br /> form</p>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="black" strokeWidth="1.5">
                                <path d="M10 10 Q30 10 40 50 M40 50 L30 40 M40 50 L50 40" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="bg-white p-14 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-50">
                            <form className="space-y-6">
                                <input type="text" placeholder="Your name" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <input type="email" placeholder="Your email" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <input type="text" placeholder="Your phone" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold resize-none"></textarea>
                                <button className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#f9b91b] transition-all shadow-xl">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default GoogleTagManager;