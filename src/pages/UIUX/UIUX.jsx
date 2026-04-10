import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Star, MousePointer2, CheckCircle2,
    Palette, Smartphone, Zap, MessageSquare, Headphones,
    Globe, Layout
} from 'lucide-react';

const UIUX = () => {
    const containerRef = useRef(null);

    // 1. MAGNETIC BUTTON LOGIC
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePos({ x: clientX, y: clientY });
    };

    // 2. SCROLL REVEAL VARIANTS
    const revealVariant = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    const signatureServices = [
        {
            icon: <Palette size={28} />,
            title: "UI Design Systems",
            desc: "Reusable components, spacing rules, and visual consistency for faster product updates.",
            color: "hover:bg-[#fff1f1] border-red-50",
            iconBg: "bg-red-100 text-red-600"
        },
        {
            icon: <Layout size={28} />,
            title: "UX Research and Flows",
            desc: "User interviews, journey mapping, and clear task flows built around real behavior.",
            color: "hover:bg-[#f1f7ff] border-blue-50",
            iconBg: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Smartphone size={28} />,
            title: "App and Web UX",
            desc: "Responsive, accessible interfaces designed to reduce drop-offs and improve completion rates.",
            color: "hover:bg-[#f1fff4] border-green-50",
            iconBg: "bg-green-100 text-green-600"
        }
    ];

    const processSteps = [
        { number: "01", title: "Product and User Audit", text: "We review your current screens, analytics, and user behavior to identify usability blockers and missed opportunities." },
        { number: "02", title: "Wireframes and Journey Mapping", text: "We plan user journeys and page structure first, so every screen has a clear purpose before visual design starts." },
        { number: "03", title: "High-Fidelity UI Design", text: "We design polished, brand-aligned interfaces with clear hierarchy, accessibility checks, and interaction states." },
        { number: "04", title: "Prototype, Test, and Handoff", text: "You get clickable prototypes, developer-ready specs, and QA notes to make implementation smoother and faster." }
    ];

    const impactStats = [
        { value: "2.1x", label: "average lift in key conversion actions" },
        { value: "37%", label: "drop in user friction across core journeys" },
        { value: "4-6 weeks", label: "typical timeline for UI/UX redesign delivery" }
    ];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full bg-[#f5f3ef] text-[#1a1a1a] font-sans selection:bg-[#f9b91b] overflow-hidden relative"
        >
            {/* ════ PREMIUM TEXTURE OVERLAY ════ */}
            <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03]" style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

            {/* ════ 1. HERO SECTION (Dynamic Parallax) ════ */}
            <section className="relative min-h-screen flex items-center px-6 pt-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <motion.div
                        initial="hidden" animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                        className="lg:col-span-7 z-10"
                    >
                        <motion.div variants={revealVariant} className="flex items-center gap-2 mb-8">
                            <motion.span
                                animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="text-[#f9b91b]"
                            >
                                <Star size={24} fill="currentColor" />
                            </motion.span>
                            <span className="font-bold text-xs uppercase tracking-[0.3em] opacity-60">UI/UX Design for Growing Products</span>
                        </motion.div>

                        <motion.h1 variants={revealVariant} className="text-6xl md:text-[100px] font-black leading-[0.85] mb-12 tracking-tighter">
                            We design <br />
                            <span className="flex items-center gap-4">
                                iconic <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="w-24 h-12 md:w-40 md:h-20 border-[3px] border-black rounded-full flex items-center justify-center overflow-hidden bg-white shadow-xl"
                                >
                                    <motion.div
                                        animate={{ x: [-20, 20, -20] }} transition={{ duration: 3, repeat: Infinity }}
                                        className="w-1/2 h-full bg-[#39a14f] rounded-full blur-sm"
                                    />
                                </motion.div> &
                            </span>
                            practical <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-[#f9b91b]">digital experiences</span>
                        </motion.h1>

                        <motion.p variants={revealVariant} className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed">
                            We combine research, UX logic, and clear visual systems to create interfaces people understand quickly and enjoy using.
                        </motion.p>

                        <motion.button
                            variants={revealVariant}
                            whileHover={{ scale: 1.05, x: 10 }}
                            className="bg-[#f9b91b] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_50px_-10px_rgba(249,185,27,0.4)] flex items-center gap-3 group transition-colors hover:bg-black"
                        >
                            Book a UI/UX Discovery Call <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* 3D PARALLAX SHAPES */}
                    <div className="lg:col-span-5 relative h-[600px] flex items-center justify-center">
                        <ParallaxShape delay={0} mouse={mousePos} strength={20} className="absolute top-0 right-0 z-30">
                            <div className="w-64 h-64 bg-[#ff7a45] rounded-full flex flex-col items-center justify-center p-8 shadow-2xl border-4 border-white">
                                <MousePointer2 size={48} className="mb-2" />
                                <h3 className="text-3xl font-black text-center leading-none uppercase">UX <br /> Research</h3>
                            </div>
                        </ParallaxShape>

                        <ParallaxShape delay={0.2} mouse={mousePos} strength={-30} className="absolute bottom-20 right-20 z-20">
                            <div className="w-60 h-60 bg-[#ffc842] rounded-full rounded-tr-none flex flex-col items-center justify-center p-6 shadow-xl border-4 border-white">
                                <Smartphone size={40} className="mb-2" />
                                <h3 className="text-2xl font-black text-center leading-none uppercase">Product <br /> Design</h3>
                            </div>
                        </ParallaxShape>

                        <ParallaxShape delay={0.4} mouse={mousePos} strength={40} className="absolute bottom-0 left-0 z-10">
                            <div className="w-56 h-56 bg-[#39a14f] rounded-3xl flex flex-col items-center justify-center p-6 shadow-xl text-white border-4 border-white rotate-[-5deg]">
                                <Palette size={40} className="mb-2" />
                                <h3 className="text-4xl font-black text-center leading-none uppercase italic">UI/UX</h3>
                            </div>
                        </ParallaxShape>
                    </div>
                </div>
            </section>

            {/* ════ 2. TILTED MARQUEE (High Speed) ════ */}
            <div className="bg-black py-10 rotate-[-1.5deg] scale-105 overflow-hidden flex whitespace-nowrap z-40 relative border-y-4 border-[#f9b91b]">
                {[1, 2].map((i) => (
                    <motion.div
                        key={i} animate={{ x: [0, -2000] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-20 text-white text-5xl font-black uppercase tracking-tighter pr-20 italic"
                    >
                        <span>Usability-First Interfaces</span> <Star className="text-[#f9b91b]" fill="currentColor" />
                        <span>Clear User Flows</span> <Zap className="text-[#f9b91b]" fill="currentColor" />
                        <span>Conversion-Focused Decisions</span> <Globe className="text-[#f9b91b]" />
                        <span>Developer-Ready Design</span> <CheckCircle2 className="text-[#f9b91b]" />
                    </motion.div>
                ))}
            </div>

            {/* ════ 3. INTRO SECTION (Text Scramble Effect) ════ */}
            <section className="py-32 px-6 text-center">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    variants={revealVariant} className="max-w-5xl mx-auto"
                >
                    <span className="bg-[#f9b91b] px-6 py-2 rounded-full text-xs font-black uppercase text-white mb-8 inline-block shadow-lg">Our DNA</span>
                    <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9]">Thoughtful UX design that feels <span className="italic underline decoration-[#f9b91b]">natural</span> and drives action.</h2>
                    <p className="text-2xl text-gray-400 leading-relaxed font-medium">
                        We do more than visual polish. Every screen, interaction, and content block is designed to help users decide faster and complete key actions with confidence.
                    </p>
                </motion.div>
            </section>

            {/* ════ 4. SERVICES SHOWCASE (Hover Tilt) ════ */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* LEFT SIDE: Text & Cards */}
                        <div className="lg:col-span-5 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-6xl md:text-[80px] font-black leading-[0.9] tracking-tighter mb-4">
                                    Signature <br />
                                    <span className="text-[#f9b91b]">Capabilities.</span>
                                </h2>
                                <div className="w-20 h-2 bg-black rounded-full mb-10" />
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                                className="space-y-4"
                            >
                                {signatureServices.map((service) => (
                                    <ExpertiseCard
                                        key={service.title}
                                        icon={service.icon}
                                        title={service.title}
                                        desc={service.desc}
                                        color={service.color}
                                        iconBg={service.iconBg}
                                    />
                                ))}
                            </motion.div>
                        </div>

                        {/* RIGHT SIDE: Visual Showcase (Fixed stretched image) */}
                        <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative w-full max-w-[550px] aspect-square"
                            >
                                {/* Main Portfolio Circle */}
                                <div className="w-full h-full rounded-[4rem] overflow-hidden border-[12px] border-[#f5f3ef] shadow-2xl relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000"
                                        alt="UI/UX portfolio preview"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                        <p className="text-white text-2xl font-black italic">Fintech onboarding redesign with 34% better form completion.</p>
                                    </div>
                                </div>

                                {/* Rotating "View All" Badge */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#f9b91b] rounded-full p-1 shadow-2xl z-20 border-8 border-white hidden md:flex items-center justify-center"
                                >
                                    <div className="text-center text-white font-black leading-none">
                                        <p className="text-xs uppercase tracking-widest">Case</p>
                                        <p className="text-xl">STUDIES</p>
                                    </div>
                                </motion.div>

                                {/* Floating Abstract Element */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-black rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12">
                                    <Star size={40} fill="#f9b91b" className="text-[#f9b91b]" />
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ════ 5. PROCESS + IMPACT SECTION ════ */}
            <section className="py-28 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
                    <div className="lg:col-span-5">
                        <h3 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
                            A practical process that turns complex journeys into clear experiences.
                        </h3>
                        <p className="text-xl text-gray-600 max-w-xl">
                            Your team gets clear checkpoints, fast feedback loops, and design decisions tied to measurable product goals.
                        </p>

                        <div className="mt-12 space-y-4">
                            {impactStats.map((item) => (
                                <div key={item.label} className="bg-white border border-black/5 rounded-3xl p-6 shadow-sm">
                                    <p className="text-4xl font-black text-[#f9b91b] mb-1">{item.value}</p>
                                    <p className="text-gray-600 font-semibold">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid gap-4">
                        {processSteps.map((step) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                className="bg-white rounded-[2rem] p-8 border border-black/10 hover:border-[#f9b91b]/40 transition-colors"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl shrink-0">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 className="text-3xl font-black mb-2">{step.title}</h4>
                                        <p className="text-gray-600 text-lg leading-relaxed">{step.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 6. CONTACT FORM (Self-Drawing Arrow) ════ */}
            <section className="py-40 px-6 bg-black text-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <Headphones size={60} className="text-[#39a14f] mb-10" />
                        <h2 className="text-6xl md:text-8xl font-black mb-10 leading-tight">
                            Ready to improve your <br /> <span className="text-[#f9b91b]">UI/UX</span> experience?
                        </h2>
                        <p className="text-2xl text-gray-400 mb-12">Share your current product challenge and we will map a focused UX plan tailored to your users, business goals, and delivery timeline.</p>

                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center">
                                <MessageSquare size={32} />
                            </div>
                            <div>
                                <p className="opacity-50 font-bold uppercase text-xs">Direct Support</p>
                                <p className="text-2xl font-black">+91 9892 854 892</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Animated SVG Arrow */}
                        <motion.svg
                            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                            className="absolute -top-16 -left-16 hidden lg:block" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#f9b91b" strokeWidth="2"
                        >
                            <path d="M10 10 Q50 10 70 80 M70 80 L60 70 M70 80 L80 70" />
                        </motion.svg>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                            className="bg-white p-12 rounded-[4rem] text-black shadow-2xl"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input placeholder="Name" className="w-full bg-gray-50 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                    <input placeholder="Email" className="w-full bg-gray-50 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                </div>
                                <input placeholder="Phone" className="w-full bg-gray-50 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <textarea placeholder="Message" rows="4" className="w-full bg-gray-50 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold resize-none" />
                                <button className="w-full bg-[#f9b91b] text-white py-6 rounded-2xl font-black uppercase text-lg hover:bg-black transition-colors shadow-xl">
                                    Send Project Brief
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

// HELPER: PARALLAX COMPONENT
const ParallaxShape = ({ children, mouse, strength, className, delay }) => {
    const halfWidth = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    const halfHeight = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
    const x = (mouse.x - halfWidth) / strength;
    const y = (mouse.y - halfHeight) / strength;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, x, y }}
            transition={{ delay, duration: 0.8, type: "spring", stiffness: 50 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ExpertiseCard = ({ icon, title, desc, color, iconBg }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
        }}
        whileHover={{ x: 15 }}
        className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all cursor-pointer group ${color} bg-white`}
    >
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${iconBg}`}>
            {icon}
        </div>
        <div>
            <h4 className="text-2xl font-black leading-none mb-1">{title}</h4>
            <p className="text-gray-400 font-medium">{desc}</p>
        </div>
        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowRight size={20} />
            </div>
        </div>
    </motion.div>
);

export default UIUX;