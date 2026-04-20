import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCheckCircle, FiInstagram, FiFacebook, FiTwitter, FiZap } from 'react-icons/fi';

const CreativeExcellence = () => {
    const { scrollYProgress } = useScroll();

    // Parallax movement for floating icons to add "liveliness"
    const iconY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const iconY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

    const creativePillars = [
        {
            title: "Psychology-Led Design",
            desc: "We build visuals based on consumer behavior patterns to trigger immediate action."
        },
        {
            title: "High-Conversion UX",
            desc: "Clean, lightning-fast landing page designs that eliminate friction in the buyer journey."
        },
        {
            title: "Performance Video",
            desc: "Thumb-stopping short-form content designed specifically for social feed dominance."
        },
        {
            title: "Continuous A/B Testing",
            desc: "Our designers work with our math team to iterate on creatives that win the click."
        }
    ];

    return (
        <section className="py-24 md:py-44 px-6 bg-white relative z-10 overflow-hidden font-lora">

            {/* ════ SECTION DECOR ════ */}
            <div className="absolute top-20 left-10 text-[10vw] font-black text-slate-900/[0.01] pointer-events-none uppercase tracking-tighter select-none">
                Excellence
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                {/* ════ LEFT SIDE: THE VISUAL COMPOSITION ════ */}
                <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center lg:justify-start">

                    {/* Main Image Layer (Hand with Phone) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 w-full max-w-md drop-shadow-[0_50px_80px_rgba(0,0,0,0.12)]"
                    >
                        <img
                            src="https://ibraine.com/media/2023/08/website-hand-1.png"
                            className="w-full h-auto transform lg:rotate-[-2deg]"
                            alt="Marketing Excellence Mockup"
                        />

                        {/* Floating Interaction Icons (The "Lively" part) */}
                        <motion.div
                            style={{ y: iconY1 }}
                            className="absolute -top-10 right-0 p-4 bg-white rounded-2xl shadow-xl text-pink-500 border border-slate-50"
                        >
                            <FiInstagram size={28} />
                        </motion.div>

                        <motion.div
                            style={{ y: iconY2 }}
                            className="absolute top-1/2 -left-12 p-4 bg-white rounded-2xl shadow-xl text-[#0072BC] border border-slate-50"
                        >
                            <FiFacebook size={28} />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-20 right-[-20px] p-4 bg-[#F58220] rounded-2xl shadow-xl text-white"
                        >
                            <FiZap size={24} />
                        </motion.div>
                    </motion.div>

                    {/* Mesh Glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#F58220]/5 blur-[120px] rounded-full -z-10" />
                </div>

                {/* ════ RIGHT SIDE: EDITORIAL CONTENT ════ */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-[10px] font-sans font-extrabold uppercase tracking-[0.4em] text-slate-400">Creative Production</span>
                            <div className="h-px flex-grow bg-slate-100" />
                        </div>

                        <h2 className="text-[38px] md:text-[62px] leading-[1] text-slate-900 font-medium mb-10 tracking-tighter">
                            Profit-Boosting <br />
                            <span className="italic relative z-10 text-[#0072BC]">
                                Creatives.
                                <span className="absolute left-0 bottom-2 w-full h-3 bg-[#FFED4E]/40 -z-10" />
                            </span>
                        </h2>

                        <p className="text-slate-500 text-base md:text-lg leading-relaxed italic mb-14 max-w-xl opacity-80">
                            Our exclusive crew of designers and video creators transform performance marketing
                            campaigns into conversion-driven, attention-grabbing, and profit-making assets.
                            We bridge the gap between "Art" and "Math."
                        </p>

                        {/* Creative Pillars Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-16">
                            {creativePillars.map((pillar, i) => (
                                <div key={i} className="group">
                                    <div className="flex items-center gap-3 mb-3 text-[#0072BC]">
                                        <FiCheckCircle size={16} />
                                        <h4 className="font-bold text-slate-800 text-[15px] uppercase tracking-widest">{pillar.title}</h4>
                                    </div>
                                    <p className="text-[13px] text-slate-400 leading-relaxed group-hover:text-slate-600 transition-colors">
                                        {pillar.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center gap-4 text-[10px] font-sans font-black uppercase tracking-[0.4em] text-[#0072BC] hover:text-[#F58220] transition-all border-b-2 border-slate-100 pb-2 hover:border-[#F58220] group">
                            Start Creative Audit
                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                →
                            </motion.span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Subtle "Platform Integration" Line at bottom */}
            <div className="mt-20 flex justify-center items-center gap-8 opacity-20 hidden md:flex">
                {["Meta Ads", "Google Display", "TikTok Ads", "YouTube Shorts"].map((p, i) => (
                    <span key={i} className="text-[9px] font-sans font-bold uppercase tracking-[0.5em]">{p}</span>
                ))}
            </div>
        </section>
    );
};

export default CreativeExcellence;