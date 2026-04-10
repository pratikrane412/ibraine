import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Video, Star, Play, Camera,
    Film, Scissors, Mic, MonitorPlay,
    ArrowRight, Headphones, MessageSquare, Zap, Trophy, Clapperboard, Sparkles, CheckCircle2
} from 'lucide-react';

const VideoProduction = () => {
    const [selectedArchetype, setSelectedArchetype] = useState("Founder Story");
    const [selectedStyle, setSelectedStyle] = useState("Docu-Cinematic");
    const [selectedDuration, setSelectedDuration] = useState("45 sec");

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const pulseRec = {
        animate: {
            opacity: [1, 0, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
    };

    const awardHighlights = [
        { title: "Best Brand Film Concept", by: "Creative Media Awards 2025", icon: <Trophy size={20} /> },
        { title: "Top Social Video Campaign", by: "Digital Growth Honors", icon: <Sparkles size={20} /> },
        { title: "Production Partner of the Year", by: "Mumbai Marketing Guild", icon: <Clapperboard size={20} /> }
    ];

    const productionStats = [
        { value: "320+", label: "Videos Produced" },
        { value: "97%", label: "On-time Delivery Rate" },
        { value: "11M+", label: "Total Organic Views" },
        { value: "4.9/5", label: "Average Client Rating" }
    ];

    const processSteps = [
        { title: "Discovery Call", sub: "We map goals, audience and platform intent before scripting starts." },
        { title: "Script & Shot Design", sub: "Creative strategy, storyboard and shot list built for conversions." },
        { title: "Shoot Day Execution", sub: "High-efficiency production with pro direction and continuity control." },
        { title: "Edit, Grade & Scale", sub: "Post-production refinement, ad versions and channel-ready exports." }
    ];

    const testimonials = [
        {
            quote: "The team transformed our product story into a sharp, emotional film that lifted engagement by 3.2x in six weeks.",
            name: "Rhea Malhotra",
            role: "Marketing Lead, FinEdge"
        },
        {
            quote: "From scripting to final cut, the process was seamless. We now have a complete video funnel that actually converts.",
            name: "Amit Khanna",
            role: "Founder, Vistaro Labs"
        }
    ];

    const sceneComposer = {
        archetypes: ["Founder Story", "Product Reveal", "Customer Transformation", "Event Energy"],
        styles: ["Docu-Cinematic", "High-Impact Ads", "Luxury Minimal", "Street Raw"],
        durations: ["30 sec", "45 sec", "60 sec"]
    };

    const archetypeStory = {
        "Founder Story": {
            act1: "Cold open with a personal turning-point moment.",
            act2: "Cut to pressure, setbacks and behind-the-scenes grit.",
            act3: "Resolve with vision, team and measurable momentum."
        },
        "Product Reveal": {
            act1: "Open on the pain and daily friction users face.",
            act2: "Reveal product in action with proof-heavy closeups.",
            act3: "End with transformation and a clear call-to-action."
        },
        "Customer Transformation": {
            act1: "Introduce the customer before the breakthrough.",
            act2: "Show implementation journey with candid moments.",
            act3: "Land with results, confidence and social proof."
        },
        "Event Energy": {
            act1: "Start with anticipation, setup and pre-event pulse.",
            act2: "Immerse in crowd reactions and key stage moments.",
            act3: "Close on highlight montage with urgency for next edition."
        }
    };

    const styleDirection = {
        "Docu-Cinematic": "Natural light, handheld movement, authentic interviews.",
        "High-Impact Ads": "Fast cuts, kinetic text, aggressive hook rhythm.",
        "Luxury Minimal": "Controlled camera motion, clean frames, intentional silence.",
        "Street Raw": "Grit textures, fast whip pans and urban ambience."
    };

    const durationBlueprint = {
        "30 sec": "3s hook / 18s story / 9s CTA",
        "45 sec": "5s hook / 27s story / 13s CTA",
        "60 sec": "7s hook / 36s story / 17s CTA"
    };

    const composedStoryboard = useMemo(() => {
        const base = archetypeStory[selectedArchetype];
        return {
            title: `${selectedArchetype} - ${selectedStyle}`,
            pacing: durationBlueprint[selectedDuration],
            directorNote: styleDirection[selectedStyle],
            acts: [
                { label: "ACT I / HOOK", line: base.act1 },
                { label: "ACT II / BUILD", line: base.act2 },
                { label: "ACT III / PAYOFF", line: base.act3 }
            ]
        };
    }, [selectedArchetype, selectedStyle, selectedDuration]);

    return (
        <div className="w-full bg-[#fdfdfb] text-[#1a1a1a] font-sans overflow-hidden selection:bg-[#f9b91b] selection:text-white">

            {/* ════ 1. HERO SECTION (Viewfinder Style) ════ */}
            <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
                {/* Viewfinder Corners Decoration */}
                <div className="absolute top-24 left-10 w-20 h-20 border-t-4 border-l-4 border-black/10 hidden md:block" />
                <div className="absolute bottom-24 right-10 w-20 h-20 border-b-4 border-r-4 border-black/10 hidden md:block" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:col-span-7 relative z-10">
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                            <motion.div variants={pulseRec} className="w-3 h-3 bg-red-600 rounded-full" />
                            <span className="text-black font-black text-xs uppercase tracking-[0.3em]">Live Recording / Services</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-[100px] font-black leading-[0.85] mb-10 tracking-tighter">
                            We tell <br />
                            <span className="flex items-center gap-4 italic font-serif">
                                your <div className="w-24 h-12 md:w-40 md:h-20 border-2 border-black rounded-full flex items-center justify-center overflow-hidden bg-white shadow-xl">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }}
                                        className="w-full h-full bg-[#f9b91b] rounded-full scale-75"
                                    />
                                </div>
                            </span>
                            story through <br />
                            the lens.
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                            Top-tier <span className="text-black font-bold">video production agency in Mumbai</span>. We blend cinematic quality with storytelling that actually connects.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
                            <button className="bg-[#f9b91b] text-white px-10 py-5 rounded-xl font-black text-lg shadow-[0_20px_50px_-10px_rgba(249,185,27,0.4)] hover:bg-black transition-all group flex items-center gap-3">
                                Action! Start Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Hero Visual (The Videographer Image) */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}
                            className="relative w-full max-w-md aspect-[4/5] bg-gray-200 rounded-[4rem] border-[12px] border-white shadow-2xl overflow-hidden"
                        >
                            <img
                                src="https://brandwitty.com/media/2023/09/we-build-trust-764x1024.png" // REPLACE WITH YOUR IMAGE PATH
                                alt="Videographer"
                                className="w-full h-full object-cover"
                            />

                            {/* Viewfinder UI Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none opacity-40">
                                <div className="flex justify-between items-start font-mono text-[10px] font-bold">
                                    <p>ISO 400</p>
                                    <p>1/1000 f2.8</p>
                                </div>
                                <div className="flex justify-center border-2 border-white/30 rounded-full w-24 h-24 mx-auto items-center">
                                    <div className="w-1 h-1 bg-white rounded-full" />
                                </div>
                                <div className="flex justify-between items-end font-mono text-[10px] font-bold">
                                    <p>4K 60FPS</p>
                                    <p>00:42:09:15</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Lens Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-2xl z-20 border-8 border-white"
                        >
                            <Film size={40} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [20, -10, 20] }} transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-10 -left-10 w-24 h-24 bg-[#50d473] rounded-3xl flex items-center justify-center text-white shadow-2xl z-20 border-4 border-white rotate-12"
                        >
                            <Play size={32} fill="white" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════ 2. CONTINUOUS MARQUEE (The Reel) ════ */}
            <div className="bg-[#1a1a1a] py-8 rotate-[-1deg] scale-105 overflow-hidden flex whitespace-nowrap z-40 relative">
                {[1, 2].map((loop) => (
                    <motion.div
                        key={loop} animate={{ x: [0, -1000] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-16 text-white text-4xl font-black uppercase italic tracking-tighter pr-16"
                    >
                        <span>Cinematic Visuals</span> <Star className="text-[#f9b91b]" fill="currentColor" />
                        <span>Viral Content</span> <Video className="text-[#f9b91b]" />
                        <span>Action!</span> <Camera className="text-[#f9b91b]" />
                        <span>Color Grading</span> <MonitorPlay className="text-[#f9b91b]" />
                    </motion.div>
                ))}
            </div>

            {/* ════ 2.5 AWARDS + PROOF BAR ════ */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeInUp}
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12"
                    >
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] font-black text-[#f9b91b] mb-3">Award-Winning Direction</p>
                            <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                                Crafted like cinema.<br />Built for performance.
                            </h3>
                        </div>
                        <p className="text-gray-500 max-w-xl text-lg leading-relaxed font-medium">
                            We combine story psychology, premium production and platform-first editing so your videos look beautiful and move business metrics.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
                    >
                        {awardHighlights.map((award, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ y: -8, scale: 1.01 }}
                                className="bg-[#fdf7e8] border border-[#f9b91b]/25 rounded-3xl p-7 flex items-start gap-4 shadow-sm"
                            >
                                <div className="w-11 h-11 rounded-2xl bg-[#f9b91b] text-white flex items-center justify-center shrink-0 shadow-md">
                                    {award.icon}
                                </div>
                                <div>
                                    <h4 className="font-black text-xl tracking-tight mb-1">{award.title}</h4>
                                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{award.by}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {productionStats.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03 }}
                                className="bg-black text-white rounded-3xl p-8 text-center"
                            >
                                <p className="text-4xl md:text-5xl font-black mb-2">{item.value}</p>
                                <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-bold">{item.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════ 3. WHY CHOOSE US GRID ════ */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-24">
                        <span className="bg-[#f9b91b] px-5 py-1.5 rounded-full text-xs font-black uppercase text-white mb-6 inline-block shadow-lg">Our DNA</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Your Production <br /> Partners for <span className="underline decoration-[#f9b91b] decoration-8 underline-offset-8 italic">Impact</span>.</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Scriptwriting", sub: "Architecting the perfect story structure.", icon: <Play /> },
                            { title: "Cinematography", sub: "Using light and shadow to evoke emotion.", icon: <Camera /> },
                            { title: "Post-Production", sub: "The magic where everything comes to life.", icon: <Scissors /> }
                        ].map((item, i) => (
                            <motion.div
                                whileHover={{ y: -10 }} key={i}
                                className="bg-white p-12 rounded-[3.5rem] text-center border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center text-black mb-8 mx-auto group-hover:bg-[#f9b91b] group-hover:text-white transition-all shadow-inner">
                                    {React.cloneElement(item.icon, { size: 36 })}
                                </div>
                                <h3 className="text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-400 font-medium leading-relaxed">{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 4. SPLIT SERVICES (Video Specializations) ════ */}
            <section className="py-24 px-6 bg-white rounded-t-[5rem]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">
                            High-Octane <br /> Video for <br /> <span className="text-[#f9b91b]">Modern Brands.</span>
                        </h2>
                        <p className="text-gray-500 text-xl mb-12 leading-relaxed font-medium">
                            Whether it's a 15-second TikTok ad or a full-scale corporate documentary, we bring the same level of obsession to every frame.
                        </p>
                        <button className="bg-black text-white px-10 py-5 rounded-2xl font-black flex items-center gap-4 hover:bg-[#f9b91b] transition-all shadow-2xl group">
                            View Strategy <Zap size={20} className="group-hover:fill-white" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "Brand Stories", desc: "Show, don't just tell.", color: "bg-orange-50", icon: <Film className="text-orange-500" /> },
                            { title: "Product Videos", desc: "High-spec studio quality.", color: "bg-blue-50", icon: <MonitorPlay className="text-blue-500" /> },
                            { title: "Event Coverage", desc: "Capturing the energy.", color: "bg-emerald-50", icon: <Play className="text-emerald-500" /> },
                            { title: "Audio Mastery", desc: "Crystal clear soundscapes.", color: "bg-purple-50", icon: <Mic className="text-purple-500" /> }
                        ].map((srv, i) => (
                            <motion.div
                                key={i} whileHover={{ x: 15 }}
                                className={`${srv.color} p-8 rounded-[2.5rem] flex gap-6 items-center border border-transparent hover:border-black/5 cursor-pointer shadow-sm group`}
                            >
                                <div className="bg-white p-5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">{srv.icon}</div>
                                <div>
                                    <h4 className="font-black text-2xl mb-1">{srv.title}</h4>
                                    <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.2em]">{srv.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ 4.5 PRODUCTION PROCESS TIMELINE ════ */}
            <section className="py-28 px-6 bg-[#101010] text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeInUp}
                        className="text-center mb-14"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs uppercase tracking-[0.22em] font-black mb-6">
                            <MessageSquare size={14} /> Transparent Workflow
                        </span>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                            From brief to final cut,<br />every step is measurable.
                        </h3>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-7 relative overflow-hidden"
                            >
                                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#f9b91b]/20 blur-xl" />
                                <p className="text-6xl font-black text-white/15 mb-4">0{i + 1}</p>
                                <h4 className="text-2xl font-black mb-3">{step.title}</h4>
                                <p className="text-sm text-white/75 leading-relaxed">{step.sub}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════ 4.6 CLIENT VOICES ════ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={fadeInLeft}
                        className="lg:col-span-4 bg-[#f9b91b] text-white rounded-[3rem] p-10 md:p-12"
                    >
                        <p className="text-xs uppercase tracking-[0.28em] font-black mb-5">Client Voices</p>
                        <h3 className="text-4xl md:text-5xl font-black leading-[0.95] mb-6">
                            Proof that creative can perform.
                        </h3>
                        <p className="text-white/85 font-medium leading-relaxed">
                            Performance-first storytelling designed for founders and marketing teams that care about both quality and ROI.
                        </p>
                        <div className="mt-8 flex items-center gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} size={18} fill="currentColor" />
                            ))}
                            <span className="text-sm font-black uppercase tracking-wider ml-2">Trusted by growth teams</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={staggerContainer}
                        className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {testimonials.map((item, i) => (
                            <motion.article
                                key={i}
                                variants={fadeInRight}
                                whileHover={{ y: -8 }}
                                className="bg-[#f8f8f8] rounded-[2rem] p-8 border border-gray-100 shadow-sm"
                            >
                                <p className="text-2xl leading-[1] mb-5 text-[#f9b91b]">"</p>
                                <p className="text-gray-600 leading-relaxed font-medium mb-7">{item.quote}</p>
                                <div className="pt-5 border-t border-gray-200">
                                    <p className="font-black text-lg">{item.name}</p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">{item.role}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════ 4.8 LIVE SCENE COMPOSER ════ */}
            <section className="py-24 px-6 bg-[#0f0f0f] text-white relative overflow-hidden">
                <div className="absolute -top-20 -right-10 w-72 h-72 bg-[#f9b91b]/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-24 -left-12 w-80 h-80 bg-[#50d473]/15 blur-3xl rounded-full" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInLeft}
                        className="lg:col-span-5"
                    >
                        <p className="text-xs uppercase tracking-[0.28em] font-black text-[#f9b91b] mb-4">Director's Playground</p>
                        <h3 className="text-4xl md:text-6xl font-black leading-[0.92] tracking-tight mb-6">
                            Compose a campaign
                            <br />
                            scene by scene.
                        </h3>
                        <p className="text-white/75 text-lg leading-relaxed font-medium">
                            This is not a generic calculator. Choose narrative archetype, visual style and runtime to generate a live 3-act storyboard with director notes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInRight}
                        className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-black mb-3">Archetype</p>
                                <div className="flex flex-wrap gap-2">
                                    {sceneComposer.archetypes.map((archetype) => (
                                        <button
                                            key={archetype}
                                            onClick={() => setSelectedArchetype(archetype)}
                                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedArchetype === archetype
                                                ? "bg-[#f9b91b] text-black"
                                                : "bg-white/10 text-white hover:bg-white/20"}`}
                                        >
                                            {archetype}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-black mb-3">Style</p>
                                <div className="flex flex-wrap gap-2">
                                    {sceneComposer.styles.map((style) => (
                                        <button
                                            key={style}
                                            onClick={() => setSelectedStyle(style)}
                                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedStyle === style
                                                ? "bg-[#50d473] text-black"
                                                : "bg-white/10 text-white hover:bg-white/20"}`}
                                        >
                                            {style}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-black mb-3">Duration</p>
                                <div className="flex flex-wrap gap-2">
                                    {sceneComposer.durations.map((duration) => (
                                        <button
                                            key={duration}
                                            onClick={() => setSelectedDuration(duration)}
                                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedDuration === duration
                                                ? "bg-white text-black"
                                                : "bg-white/10 text-white hover:bg-white/20"}`}
                                        >
                                            {duration}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/50 border border-white/10 rounded-3xl p-6">
                            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                                <p className="text-xs uppercase tracking-[0.22em] text-[#f9b91b] font-black">Live Storyboard</p>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-white/55 font-bold">Agency Brain in Real Time</span>
                            </div>

                            <h4 className="text-2xl md:text-3xl font-black mb-3">{composedStoryboard.title}</h4>
                            <p className="text-sm text-white/70 mb-6">
                                <span className="text-white font-black">Pacing Blueprint:</span> {composedStoryboard.pacing}
                            </p>

                            <div className="space-y-3 mb-6">
                                {composedStoryboard.acts.map((act) => (
                                    <div key={act.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#50d473] font-black mb-1">{act.label}</p>
                                        <p className="text-white/85 font-medium">{act.line}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl bg-[#f9b91b]/10 border border-[#f9b91b]/25 p-4">
                                <p className="text-[11px] uppercase tracking-[0.2em] text-[#f9b91b] font-black mb-1">Director Note</p>
                                <p className="text-white/85 font-medium">{composedStoryboard.directorNote}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ════ 5. CONTACT SECTION (Production Consultant) ════ */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <Headphones size={60} className="text-[#50d473] mb-10" />
                        <h2 className="text-5xl md:text-[90px] font-black mb-10 leading-[0.85] tracking-tighter">
                            Ready to <br /> <span className="border-b-[12px] border-[#f9b91b]/30 italic">Direct</span> <br /> Your Success?
                        </h2>
                        <p className="text-gray-400 text-xl max-w-md font-bold uppercase tracking-widest">Connect with our head of production today.</p>
                        <ul className="mt-10 space-y-4">
                            {[
                                "Dedicated strategist from day one",
                                "Platform-specific edits and ad cutdowns",
                                "Fast turnaround with quality control"
                            ].map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-3 text-gray-600 font-semibold"
                                >
                                    <CheckCircle2 size={18} className="text-[#50d473] shrink-0" />
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
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

                        <div className="bg-white p-14 rounded-[4rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50">
                            <form className="space-y-6">
                                <input type="text" placeholder="Project Name" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <input type="email" placeholder="Work Email" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold" />
                                <textarea placeholder="Tell us about the video scope..." rows="4" className="w-full bg-[#f8f8f8] p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#f9b91b] font-bold resize-none"></textarea>
                                <button className="w-full bg-[#f9b91b] text-white py-6 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-black transition-all shadow-xl">
                                    Book Discovery Call
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default VideoProduction;