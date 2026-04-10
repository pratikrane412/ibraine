import React from 'react';
import { motion } from 'framer-motion';
import {
    PenTool, Star, CheckCircle2, Zap,
    Search, Clock, DollarSign, MessageSquare,
    Quote, Headphones, ArrowRight, FileText,
    Globe, Briefcase, Sparkles, LineChart, ShieldCheck
} from 'lucide-react';

const ContentWriting = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const float = {
        animate: {
            y: [0, -15, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const statCards = [
        { value: "9+", label: "Years of content expertise", icon: <Globe /> },
        { value: "1200+", label: "Long-form assets delivered", icon: <FileText /> },
        { value: "4.8/5", label: "Average client satisfaction", icon: <Star /> },
        { value: "38%", label: "Avg. organic traffic growth", icon: <LineChart /> }
    ];

    const processSteps = [
        {
            title: "Audience & Intent Mapping",
            description: "We decode your audience, business model, and search intent to define the right messaging angle before writing starts."
        },
        {
            title: "Content Strategy Blueprint",
            description: "Our team creates a clear roadmap with pillar pages, cluster topics, funnel stages, and measurable KPIs."
        },
        {
            title: "Conversion-focused Writing",
            description: "From landing pages to blogs, we craft persuasive and helpful content that improves trust, readability, and action."
        },
        {
            title: "SEO, QA & Optimization",
            description: "Every asset goes through SEO checks, human edits, and readability polishing so your content performs consistently."
        }
    ];

    const useCases = [
        {
            title: "Website & Landing Pages",
            desc: "Clear, compelling website copy that explains your offer fast and turns traffic into leads."
        },
        {
            title: "SEO Blog Ecosystems",
            desc: "Topic clusters that grow organic visibility and establish thought leadership in your niche."
        },
        {
            title: "Brand Story & Messaging",
            desc: "Positioning narratives, tone frameworks, and brand stories that create recall and emotional connection."
        },
        {
            title: "Product & Ecommerce Copy",
            desc: "Benefit-first copy for product pages, category pages, and ad creatives to improve sales conversion."
        }
    ];

    const faqs = [
        {
            q: "How quickly can your team deliver content?",
            a: "Typical timelines range from 3-7 working days depending on depth, research needs, and revision rounds."
        },
        {
            q: "Do you write SEO content and website copy both?",
            a: "Yes. We handle SEO blogs, landing pages, web copy, product descriptions, email sequences, and social copy."
        },
        {
            q: "Can you align with our brand tone of voice?",
            a: "Absolutely. We first create a tone guide and writing framework so every output sounds like your brand."
        }
    ];

    return (
        <div className="w-full bg-[#fdfdfb] text-[#1a1a1a] font-sans overflow-hidden selection:bg-[#f9b91b] selection:text-white">

            <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />

            {/* ════ 1. HERO SECTION ════ */}
            <section className="relative pt-32 pb-20 px-6 min-h-[85vh] flex items-center z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 mb-6 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm"
                        >
                            <Sparkles size={16} className="text-[#f9b91b]" />
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">Award-winning content studio</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-[80px] font-black leading-[0.95] tracking-tight mb-10">
                            We at <br />
                            <span className="text-[#f9b91b]">Ibraine</span> <br />
                            build brands with <br />
                            words that create <br />
                            <motion.span
                                className="italic relative inline-block"
                            >
                                impact.
                                <motion.div
                                    initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 1, duration: 0.8 }}
                                    className="absolute -bottom-2 left-0 h-2 bg-[#f9b91b] rounded-full"
                                />
                            </motion.span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
                            Ibraine is a leading <span className="font-bold text-black italic">content writing agency in Mumbai</span> helping growth-stage brands and enterprises scale visibility, trust, and conversions with strategic storytelling.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="bg-[#f9b91b] text-white px-10 py-5 rounded-xl font-black text-lg shadow-[0_20px_40px_-10px_rgba(249,185,27,0.4)] hover:bg-black transition-all group"
                            >
                                Let's write your growth story
                            </motion.button>
                            <button className="px-8 py-5 rounded-xl border border-black/10 bg-white hover:bg-black hover:text-white transition-all font-bold">
                                View case studies
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Illustration */}
                    <motion.div {...float} className="relative flex justify-center items-center h-[500px]">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}
                            className="relative z-20 w-full max-w-md"
                        >
                            <img
                                src="https://img.freepik.com/free-vector/creative-writing-concept-illustration_114360-8157.jpg"
                                alt="Content Writing"
                                className="w-full h-full object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                        {/* Floating Abstract Shapes */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-10 right-10 opacity-20"><Star size={48} /></motion.div>
                        <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-100 rounded-full blur-3xl opacity-50" />
                    </motion.div>
                </div>
            </section>

            {/* ════ 1B. METRICS SECTION ════ */}
            <section className="pb-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.2)]"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#f9b91b]/15 text-[#f9b91b] flex items-center justify-center mb-5">
                                {React.cloneElement(item.icon, { size: 22 })}
                            </div>
                            <p className="text-4xl font-black tracking-tight mb-2">{item.value}</p>
                            <p className="text-gray-500 font-medium">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ════ 2. INFINITE LOGO MARQUEE ════ */}
            <section className="py-16 bg-white border-y border-gray-100 overflow-hidden flex whitespace-nowrap">
                {[1, 2].map((loop) => (
                    <motion.div
                        key={loop} animate={{ x: [0, -1000] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-24 pr-24 opacity-60 grayscale hover:grayscale-0 transition-all"
                    >
                        {['Craftsvilla', 'tripXOXO', 'Medisynth', 'ZKTEco', 'VIVANDA', 'CRAFTSVILLA'].map((brand, i) => (
                            <span key={i} className="text-xl md:text-2xl font-black tracking-tighter uppercase">{brand}</span>
                        ))}
                    </motion.div>
                ))}
            </section>

            {/* ════ 3. THE 6 REASONS GRID (Staggered Reveal) ════ */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            <span className="text-[#f9b91b]">6 Reasons</span> to Choose Ibraine as <br /> Your Content Writing Agency
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        {[
                            { title: "High-Quality Content", desc: "Our content writing services focus on delivering top-notch, well-researched, and engaging content.", icon: <Star /> },
                            { title: "Diverse Genre Expertise", desc: "Our team excels in crafting content across a wide range of genres, including blog articles and web copy.", icon: <Briefcase /> },
                            { title: "Customized Solutions", desc: "Every business is unique. Our content services are tailored to suit your specific needs and goals.", icon: <Zap /> },
                            { title: "SEO Optimization", desc: "We incorporate proven SEO strategies into our writing to boost your online visibility.", icon: <Search /> },
                            { title: "Quick Turnaround", desc: "Our efficient content creation process allows us to deliver high-quality content within agreed timelines.", icon: <Clock /> },
                            { title: "Competitive Pricing", desc: "Quality content need not break the bank. Our content writing services are priced competitively.", icon: <DollarSign /> }
                        ].map((item, i) => (
                            <motion.div
                                variants={fadeInUp} whileHover={{ y: -10 }} key={i}
                                className="flex flex-col items-center text-center group bg-white p-8 rounded-[2rem] border border-transparent hover:border-gray-50 hover:shadow-xl transition-all"
                            >
                                <div className="w-20 h-20 rounded-full bg-[#f9b91b]/10 flex items-center justify-center text-[#f9b91b] mb-8 group-hover:bg-[#f9b91b] group-hover:text-white transition-all shadow-sm">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed max-w-xs">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════ 3B. HOW WE WORK ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mb-14"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">Our Process</span>
                        <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight">
                            A sharp process behind every high-performing content asset.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Great writing is not accidental. We follow a strategic process that combines insight, creativity, and measurable growth outcomes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="rounded-[2rem] border border-gray-100 bg-[#fcfcfb] p-8 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-black text-white font-black flex items-center justify-center shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black mb-2">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 4. STRATEGY STRIP ════ */}
            <section className="bg-[#f9b91b] py-24 px-6 text-center overflow-hidden">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <span className="text-white/80 font-bold uppercase text-xs tracking-widest mb-4 block">We Begin With Strategy</span>
                    <h2 className="text-4xl md:text-[70px] font-black leading-[1.1] text-white tracking-tighter">
                        Our content writing services contribute to the brand's overall digital success.
                    </h2>
                </motion.div>
            </section>

            {/* ════ 5. DRIVING GROWTH (Slide In Illustration) ════ */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1 flex justify-center"
                    >
                        <img
                            src="https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_23-2149151515.jpg"
                            className="w-full max-w-md mix-blend-multiply transition-transform hover:scale-105 duration-700" alt="Growth"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-50 rounded-full z-[-1] blur-3xl opacity-50" />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em] mb-4 block uppercase">Content Writing Services in Mumbai</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Driving Growth with our Content Writing Services</h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-xl">
                            Experience digital triumph with our <span className="text-black font-bold">content writing agency in Mumbai.</span> We craft compelling, data-driven content that elevates your brand and drives exceptional results.
                        </p>
                        <button className="flex items-center gap-3 font-black uppercase text-sm border-b-2 border-black pb-1 hover:text-[#f9b91b] hover:border-[#f9b91b] transition-all group">
                            Ready to Stand Out? <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* ════ 5B. USE CASES ════ */}
            <section className="py-28 px-6 bg-[#151515] text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                            What we write to help <span className="text-[#f9b91b]">brands win.</span>
                        </h2>
                        <p className="text-white/70 text-lg max-w-3xl">
                            Our writers build full-funnel content systems: from discovery-stage SEO assets to high-conversion sales pages and retention-focused email narratives.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -8 }}
                                className="border border-white/10 rounded-[2rem] p-8 bg-white/5"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle2 className="text-[#f9b91b]" size={22} />
                                    <h3 className="text-2xl font-black">{item.title}</h3>
                                </div>
                                <p className="text-white/70 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 6. YOUR STORY OUR WORDS ════ */}
            <section className="py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.span variants={fadeInUp} className="text-[#ff4081] font-bold uppercase text-xs tracking-widest mb-4 block">Connect With Your Audience</motion.span>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-7xl font-black mb-8 leading-tight">Your Story, <br /> <span className="text-[#f9b91b]">Our Words</span></motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-500 text-xl leading-relaxed max-w-md">
                            Let our words become the storytellers of your brand, painting vivid narratives that resonate with your audience.
                        </motion.p>
                    </motion.div>
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-6">
                            {[1, 2, 3, 4].map(i => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10, rotate: i % 2 === 0 ? 3 : -3 }}
                                    className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 flex items-center justify-center text-[#f9b91b] cursor-pointer"
                                >
                                    <FileText size={48} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ════ 7. TESTIMONIALS (Centered Dark Theme) ════ */}
            <section className="py-32 px-6 bg-[#1a1a1a] text-white">
                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <Quote size={80} className="text-[#f9b91b]/20 mx-auto mb-10" />
                    <h2 className="text-3xl font-black mb-16 italic tracking-tight opacity-50 uppercase">Check what these clients have to say.</h2>

                    <div className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-md shadow-2xl">
                        <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-12 italic">
                            "The content delivered by Ibraine gave our brand a distinct voice and clear positioning. We saw better engagement, stronger trust, and consistent inbound leads."
                        </p>
                        <div className="space-y-1">
                            <h4 className="text-2xl font-black text-[#f9b91b]">Heena Santani</h4>
                            <p className="text-white/40 font-bold uppercase text-xs tracking-widest">Zeeba Tales - Founder</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ════ 7B. TRUST + FAQ ════ */}
            <section className="py-28 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#f7f7f5] rounded-[2rem] p-10 border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck className="text-[#39a14f]" />
                            <h3 className="text-3xl font-black">Why teams trust us</h3>
                        </div>
                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>We combine human creativity with strategic rigor, so every piece of content carries brand voice and business intent.</p>
                            <p>Our editorial process includes structure checks, factual validation, and conversion-focused CTA placement.</p>
                            <p>From startup founders to enterprise marketing teams, clients partner with us for consistency and measurable outcomes.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl md:text-4xl font-black mb-4">Frequently asked questions</h3>
                        {faqs.map((item, i) => (
                            <motion.div
                                key={item.q}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm"
                            >
                                <h4 className="font-black text-lg mb-2">{item.q}</h4>
                                <p className="text-gray-500 leading-relaxed">{item.a}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════ 8. CONTACT SECTION (With Drawing Arrow) ════ */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <Headphones size={60} className="text-[#39a14f] mb-8" />
                        <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9]">Let's talk with experienced <br /> <span className="border-b-8 border-orange-100">Content Strategists</span></h2>
                        <p className="text-xl text-gray-500 max-w-md font-bold">Ready to scale your online visibility and authority? Our team is ready to craft your next winning content engine.</p>
                        <div className="mt-8 space-y-3 text-gray-500 font-semibold">
                            <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#39a14f]" /> Strategy call in under 24 hours</p>
                            <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#39a14f]" /> Custom roadmap for your business goals</p>
                            <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#39a14f]" /> SEO + conversion writing specialists</p>
                        </div>
                    </motion.div>

                    <div className="relative">
                        {/* Animated Self-Drawing Arrow */}
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

                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="bg-white p-12 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50"
                        >
                            <form className="space-y-6">
                                <input type="text" placeholder="Your name" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <input type="email" placeholder="Your email" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <input type="text" placeholder="Your phone" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold resize-none"></textarea>
                                <motion.button
                                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                    className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#f9b91b] transition-all shadow-xl"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContentWriting;