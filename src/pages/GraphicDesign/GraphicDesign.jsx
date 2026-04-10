import React from 'react';
import { motion } from 'framer-motion';
import {
    Palette, Star, MousePointer2, CheckCircle2,
    Zap, Smartphone, Layout, PenTool,
    ArrowRight, Headphones, Globe, Sparkles, Trophy, Layers, Brush, BadgeCheck
} from 'lucide-react';

const GraphicDesign = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const achievements = [
        { value: '250+', label: 'Brands transformed' },
        { value: '4.9/5', label: 'Client satisfaction rating' },
        { value: '24hr', label: 'First concept turnaround' },
        { value: '12+', label: 'Industries served globally' }
    ];

    const servicePillars = [
        {
            title: 'Brand Identity Systems',
            description: 'Build memorable, ownable identities with logo families, typography systems, and brand playbooks.',
            icon: <BadgeCheck className="text-emerald-500" />
        },
        {
            title: 'Campaign & Social Creatives',
            description: 'Drive clicks and engagement with high-performing creatives tailored to every platform.',
            icon: <Sparkles className="text-orange-500" />
        },
        {
            title: 'Packaging & Print',
            description: 'From shelf-impact packaging to premium brochures, we convert attention into trust.',
            icon: <Layers className="text-violet-500" />
        },
        {
            title: 'UI Visual Design',
            description: 'Clean, conversion-focused interfaces that blend visual depth with usability principles.',
            icon: <Brush className="text-blue-500" />
        }
    ];

    const processSteps = [
        { title: 'Discovery Workshop', copy: 'We map your audience, positioning, and goals before any pixel is designed.' },
        { title: 'Creative Direction', copy: 'Moodboards, visual territories, and concept routes align your brand voice with design style.' },
        { title: 'Execution & Iteration', copy: 'We produce high-quality assets with rapid feedback loops and strategic revision rounds.' },
        { title: 'Launch & Scale', copy: 'Final files, usage guidelines, and ongoing creative support keep your brand consistent.' }
    ];

    const creativeLabModes = [
        {
            mode: 'Quiet Luxury',
            insight: 'Minimal, high-trust visuals for premium brands with long buying cycles.',
            metric: '+31% landing page scroll depth',
            color: 'bg-[#f8f3ea]'
        },
        {
            mode: 'Bold Disruptor',
            insight: 'High-contrast composition and kinetic typography built for fast attention markets.',
            metric: '+44% social thumb-stop rate',
            color: 'bg-[#eef4ff]'
        },
        {
            mode: 'Human Story',
            insight: 'Emotion-first visuals that combine narrative photography with authentic copy.',
            metric: '+28% ad engagement',
            color: 'bg-[#eefaf3]'
        }
    ];

    const testimonials = [
        {
            name: 'Nikita Sharma',
            company: 'Velora Skincare',
            quote: 'Their visuals lifted our ad CTR by 38% in six weeks. Every design felt intentional and premium.',
            rating: 5
        },
        {
            name: 'Rohan Patel',
            company: 'Northbeam Interiors',
            quote: 'From logo to social kits, the team delivered consistency and polish that instantly elevated our brand.',
            rating: 5
        },
        {
            name: 'Sana Merchant',
            company: 'BrightLeaf Foods',
            quote: 'Fast, responsive, and creatively sharp. Our packaging redesign became our strongest sales asset.',
            rating: 5
        }
    ];

    return (
        <div className="w-full bg-[#fdfdfb] text-[#1a1a1a] font-sans overflow-hidden selection:bg-[#f9b91b] selection:text-white">

            {/* ════ 1. HERO SECTION (Brand Witty Layout) ════ */}
            <section className="relative pt-32 pb-24 px-6 min-h-[95vh] flex items-center bg-[#0f0f14] text-white overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full border border-white/10"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                    className="absolute -bottom-40 -right-32 w-[34rem] h-[34rem] rounded-full border border-[#f9b91b]/20"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(249,185,27,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(80,212,115,0.18),transparent_45%)]" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                            <span className="text-[#f9b91b] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                Graphic Design Services <Star size={16} fill="currentColor" />
                            </span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black leading-[0.86] mb-10 tracking-tight">
                            Not normal. <br />
                            <span className="flex items-center gap-3">
                                Just <div className="w-20 h-10 md:w-32 md:h-14 border-2 border-white rounded-full flex items-center justify-center overflow-hidden">
                                    <motion.div
                                        animate={{ x: [-20, 20, -20] }} transition={{ duration: 3, repeat: Infinity }}
                                        className="w-full h-full bg-[#39a14f] rounded-full scale-75"
                                    />
                                </div> &
                            </span>
                            magnetic visuals <br />
                            for bold brands
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/75 mb-10 max-w-lg leading-relaxed font-medium">
                            We build attention-first brand systems, ad creatives, and campaign worlds that feel instantly recognizable and impossible to scroll past.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="bg-[#f9b91b] text-white px-10 py-5 rounded-xl font-black text-lg shadow-[0_20px_40px_-10px_rgba(249,185,27,0.4)] hover:bg-black transition-all"
                            >
                                Get a free design consultation
                            </motion.button>
                            <button className="border border-white/40 hover:border-white px-8 py-5 rounded-xl font-bold tracking-wide hover:bg-white hover:text-black transition-all">
                                View creative portfolio
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Overlapping Floating Shapes Visual */}
                    <div className="relative h-[500px] flex items-center justify-center">
                        {/* Orange Circle (Web Design) */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-10 w-64 h-64 bg-[#ff7a45] rounded-full flex flex-col items-center justify-center p-8 shadow-2xl z-30 text-black"
                        >
                            <MousePointer2 size={40} className="mb-2" />
                            <h3 className="text-3xl font-black text-center leading-tight uppercase">Web <br /> Design</h3>
                        </motion.div>

                        {/* Yellow Circle (Social Media) */}
                        <motion.div
                            animate={{ x: [0, 20, 0], rotate: [0, -3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-20 right-20 w-56 h-56 bg-[#ffc842] rounded-full rounded-tr-none flex flex-col items-center justify-center p-6 shadow-xl z-20 text-black"
                        >
                            <Smartphone size={32} className="mb-2" />
                            <h3 className="text-2xl font-black text-center leading-tight uppercase">Social <br /> Media</h3>
                        </motion.div>

                        {/* Green Square (UIX Design) */}
                        <motion.div
                            animate={{ rotate: [-6, 6, -6], y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 left-20 w-48 h-48 bg-[#39a14f] rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl z-10 text-white"
                        >
                            <Palette size={32} className="mb-2" />
                            <h3 className="text-3xl font-black text-center leading-tight uppercase font-serif italic">UIX <br /> Design</h3>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="bg-[#f9b91b] py-4 overflow-hidden">
                <motion.div
                    animate={{ x: [0, -900] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    className="flex whitespace-nowrap gap-8 text-black text-xl font-black uppercase tracking-[0.2em]"
                >
                    {[
                        'Out of box design thinking',
                        'Creative systems not templates',
                        'Campaign-ready visual identity',
                        'Out of box design thinking',
                        'Creative systems not templates',
                        'Campaign-ready visual identity'
                    ].map((item, i) => (
                        <span key={i}>{item} ✦</span>
                    ))}
                </motion.div>
            </div>

            {/* ════ 2. ACHIEVEMENT STRIP ════ */}
            <section className="px-6 -mt-10 relative z-20">
                <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-[0_30px_80px_-35px_rgba(0,0,0,0.25)] border border-black/5 p-8 md:p-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-5xl font-black mb-2">{item.value}</p>
                                <p className="text-gray-500 font-semibold text-sm uppercase tracking-wide">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 2. CONTINUOUS LOGO MARQUEE (Ticker) ════ */}
            <div className="bg-black py-8 overflow-hidden flex whitespace-nowrap">
                {[1, 2].map((loop) => (
                    <motion.div
                        key={loop} animate={{ x: [0, -1000] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-10 text-white text-2xl font-black uppercase tracking-tighter pr-10"
                    >
                        <span>Start Your Project Today</span> <span className="text-[#f9b91b]"> — </span>
                        <span>Request A Quote</span> <span className="text-[#f9b91b]"> + </span>
                        <span>Join Our Creative Community</span> <span className="text-[#f9b91b]"> — </span>
                        <span>Discover Our Design Process</span> <span className="text-[#f9b91b]"> — </span>
                    </motion.div>
                ))}
            </div>

            {/* ════ 3. INTRO SECTION ════ */}
            <section className="py-24 px-6 text-center">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto">
                    <span className="bg-[#f9b91b] px-4 py-1 rounded-full text-xs font-bold uppercase text-white mb-6 inline-block">Intro</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Creative Graphic Design Company in Mumbai</h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
                        Brandwitty, a leading <span className="font-bold text-black italic">graphic design company in Mumbai</span>, blends art, psychology, and conversion strategy to create visuals that build trust and drive measurable growth.
                    </p>
                </motion.div>
            </section>

            {/* ════ 3.5 CREATIVE LAB (OUT-OF-THE-BOX) ════ */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[3rem] bg-[#131313] text-white p-8 md:p-12 lg:p-14 overflow-hidden relative"
                    >
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#f9b91b]/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#50d473]/15 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
                            <div className="max-w-3xl">
                                <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-[#f9b91b] mb-5">
                                    <Zap size={14} /> Creative Lab
                                </p>
                                <h3 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-5">
                                    Different brands need different visual physics.
                                </h3>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    Instead of forcing one style, we test and shape distinct creative directions that match your buyer behavior, category pressure, and content velocity.
                                </p>
                            </div>
                            <div className="bg-white/10 border border-white/15 rounded-2xl px-6 py-5">
                                <p className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold mb-1">Design Sprint Promise</p>
                                <p className="text-2xl font-black">3 concepts in 7 days</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-5 mb-10 relative z-10">
                            {creativeLabModes.map((item, i) => (
                                <motion.div
                                    key={item.mode}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.55 }}
                                    whileHover={{ y: -8, rotate: i === 1 ? 0 : i === 0 ? -1.2 : 1.2 }}
                                    className={`${item.color} text-black rounded-3xl p-7 shadow-lg`}
                                >
                                    <p className="text-xs uppercase tracking-[0.2em] font-black text-black/50 mb-3">Mode 0{i + 1}</p>
                                    <h4 className="text-3xl font-black mb-4">{item.mode}</h4>
                                    <p className="text-black/70 leading-relaxed mb-5">{item.insight}</p>
                                    <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] bg-black text-white px-3 py-2 rounded-full">
                                        <CheckCircle2 size={14} /> {item.metric}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            animate={{ x: [0, -760] }}
                            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                            className="flex whitespace-nowrap gap-8 text-white/80 text-sm md:text-base uppercase tracking-[0.25em] font-black border-y border-white/10 py-4"
                        >
                            {[
                                'No template thinking',
                                'Category-aware creativity',
                                'Visual systems that scale',
                                'Design + conversion mindset',
                                'Bold ideas backed by data',
                                'No template thinking',
                                'Category-aware creativity',
                                'Visual systems that scale',
                                'Design + conversion mindset',
                                'Bold ideas backed by data'
                            ].map((line, idx) => (
                                <span key={idx} className="inline-flex items-center gap-3">
                                    {line} <span className="text-[#f9b91b]">✦</span>
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ════ 4. VALUES GRID (Illustrations) ════ */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Creativity", sub: "Unleashing the Power of Imagination", img: "https://cdn-icons-png.flaticon.com/512/3067/3067451.png" },
                        { title: "Expertise", sub: "Crafting Designs with Precision and Skill", img: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png" },
                        { title: "Timely Delivery", sub: "On-Time, Every Time!", img: "https://cdn-icons-png.flaticon.com/512/2972/2972131.png" }
                    ].map((item, i) => (
                        <motion.div
                            whileHover={{ y: -10 }} key={i}
                            className="bg-white p-12 rounded-[2.5rem] text-center border border-gray-100 shadow-sm group hover:shadow-xl transition-all"
                        >
                            <h4 className="text-[#f9b91b] font-bold uppercase text-xs mb-4">{item.title}</h4>
                            <h3 className="text-2xl font-black mb-8 leading-tight h-16">{item.sub}</h3>
                            <img src={item.img} alt={item.title} className="w-40 h-40 mx-auto object-contain mb-10 grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-[#f9b91b] hover:border-[#f9b91b] transition-all">Get in touch now</button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ════ 5. SERVICES SPLIT SECTION ════ */}
            <section className="py-24 px-6 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                            Our Graphic Design <br /> Services Bring Your <br /> Vision to <span className="text-[#f9b91b] italic underline">Life</span>
                        </h2>
                        <p className="text-gray-500 text-xl mb-12 leading-relaxed font-medium">
                            As a best graphic design agency in Mumbai, our creative team offers diverse design and branding solutions for your company. Enjoy unlimited revisions!
                        </p>
                        <button className="bg-black text-white px-10 py-5 rounded-xl font-bold flex items-center gap-3 hover:bg-[#f9b91b] transition-all shadow-xl group">
                            Get Started Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {[
                            { title: "Expert Logo Design", color: "bg-red-50", icon: <Palette className="text-red-500" /> },
                            { title: "Stationery Design", color: "bg-blue-50", icon: <Layout className="text-blue-500" /> },
                            { title: "Social Media Designs", color: "bg-green-50", icon: <Smartphone className="text-green-500" /> },
                            { title: "Visual Storytelling", color: "bg-purple-50", icon: <PenTool className="text-purple-500" /> }
                        ].map((srv, i) => (
                            <motion.div
                                key={i} whileHover={{ x: 10 }}
                                className={`${srv.color} p-8 rounded-3xl flex gap-6 items-center border border-transparent hover:border-black/5 cursor-pointer shadow-sm`}
                            >
                                <div className="bg-white p-4 rounded-2xl shadow-sm">{srv.icon}</div>
                                <div>
                                    <h4 className="font-black text-2xl mb-1">{srv.title}</h4>
                                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Premium Design Service</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 6. AWARD WINNING PILLARS ════ */}
            <section className="py-24 px-6 bg-[#f7f7f3]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-14"
                    >
                        <span className="inline-flex items-center gap-2 text-xs font-black bg-black text-white px-4 py-2 rounded-full uppercase tracking-widest mb-5">
                            <Trophy size={14} /> Award-Winning Design Standards
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black leading-tight mb-4">What makes our work stand out</h3>
                        <p className="text-gray-500 max-w-3xl mx-auto text-lg">
                            Every project is crafted with strategy-first thinking, global design trends, and conversion-centric execution.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-7">
                        {servicePillars.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-5">
                                    {pillar.icon}
                                </div>
                                <h4 className="text-2xl font-black mb-3">{pillar.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 7. PROCESS TIMELINE ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div className="max-w-2xl">
                            <span className="text-[#f9b91b] font-black text-xs tracking-[0.2em] uppercase">Our Process</span>
                            <h3 className="text-4xl md:text-6xl font-black leading-tight mt-3">From idea to iconic visual system</h3>
                        </div>
                        <p className="text-gray-500 max-w-md font-medium">
                            A transparent process designed to keep your team aligned and your brand moving fast.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className="relative p-7 rounded-3xl border border-black/10 bg-gradient-to-b from-white to-[#fff8e8] overflow-hidden"
                            >
                                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40 mb-4">Step {i + 1}</div>
                                <h4 className="text-2xl font-black mb-3 leading-tight">{step.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{step.copy}</p>
                                <motion.div
                                    animate={{ x: [0, 20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                                    className="absolute -bottom-10 -right-8 w-24 h-24 rounded-full bg-[#f9b91b]/20"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 8. PORTFOLIO CTA BAR (Green) ════ */}
            <div className="bg-[#50d473] py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <h3 className="text-3xl font-black uppercase text-white tracking-tighter">Check out our latest work</h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-black text-white px-10 py-5 rounded-full font-black flex items-center gap-4 hover:bg-white hover:text-black transition-all shadow-2xl"
                    >
                        VIEW OUR PORTFOLIO <div className="bg-[#ff4081] rounded-full p-2"><ArrowRight size={18} className="text-white" /></div>
                    </motion.button>
                </div>
            </div>

            {/* ════ 9. TESTIMONIALS ════ */}
            <section className="py-24 px-6 bg-[#111111] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2 rounded-full uppercase tracking-[0.18em]">
                            <Globe size={14} /> Trusted by growing brands
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black mt-5 leading-tight">Clients love the creative impact</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8"
                            >
                                <div className="flex gap-1 mb-5">
                                    {[...Array(item.rating)].map((_, idx) => (
                                        <Star key={idx} className="w-4 h-4 text-[#f9b91b] fill-[#f9b91b]" />
                                    ))}
                                </div>
                                <p className="text-white/80 leading-relaxed mb-8">"{item.quote}"</p>
                                <div className="border-t border-white/10 pt-5">
                                    <p className="font-black text-xl">{item.name}</p>
                                    <p className="text-[#f9b91b] font-semibold">{item.company}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 10. CONTACT SECTION (Design Consultant) ════ */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <Headphones size={60} className="text-[#50d473] mb-10" />
                        <h2 className="text-4xl md:text-[85px] font-black mb-10 leading-[0.85] tracking-tighter">
                            Let's talk with <br /> <span className="border-b-8 border-orange-100 italic">experienced</span> <br /> Design Consultant
                        </h2>
                        <p className="text-gray-400 text-xl max-w-md font-black uppercase tracking-widest">Ready to take your brand to the top?</p>
                    </div>

                    <div className="relative">
                        {/* Hand Drawn Arrow Decoration */}
                        <div className="absolute -top-16 left-10 hidden lg:block">
                            <p className="font-serif italic text-sm mb-2 opacity-50">Fill the <br /> form</p>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="black" strokeWidth="2">
                                <motion.path
                                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }}
                                    d="M10 10 Q30 10 40 50 M40 50 L30 40 M40 50 L50 40"
                                    strokeLinecap="round" strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="bg-white p-14 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-50">
                            <form className="space-y-6">
                                <input type="text" placeholder="Your name" className="w-full bg-[#f8f8f8] p-5 rounded-xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <input type="email" placeholder="Your email" className="w-full bg-[#f8f8f8] p-5 rounded-xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-[#f8f8f8] p-5 rounded-xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold resize-none"></textarea>
                                <button className="w-full bg-black text-white py-6 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[#f9b91b] transition-all shadow-xl">
                                    Send Strategy Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════ 11. FAQ STRIP ════ */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto bg-black text-white rounded-[2.5rem] p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="max-w-xl">
                            <p className="text-[#f9b91b] font-black text-xs uppercase tracking-[0.18em] mb-3">Quick Answers</p>
                            <h3 className="text-3xl md:text-5xl font-black leading-tight mb-4">Frequently asked design questions</h3>
                            <p className="text-white/70 leading-relaxed">
                                Need something specific? We can customize timelines, team structure, and deliverables based on your business stage.
                            </p>
                        </div>
                        <div className="space-y-4 w-full max-w-2xl">
                            {[
                                'How quickly can you start a project?',
                                'Do you offer revision rounds?',
                                'Can you handle both social and branding design?'
                            ].map((faq, i) => (
                                <motion.div
                                    key={faq}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.08 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-between"
                                >
                                    <span className="font-semibold">{faq}</span>
                                    <ArrowRight size={18} className="text-[#f9b91b]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default GraphicDesign;