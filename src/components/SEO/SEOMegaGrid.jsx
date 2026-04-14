import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const SEOIntroSection = () => {
    const cards = [
        {
            title: "Sustainable Growth",
            desc: "Our SEO services ensures long-term results, driving steady organic traffic for MSMEs and startups without continuous ad spending.",
            icon: "https://brandwitty.com/media/2023/08/growth.png"
        },
        {
            title: "Boosted Brand Visibility",
            desc: "Enhance brand credibility with top search engine rankings, making your startup more trustworthy and authoritative.",
            icon: "https://brandwitty.com/media/2023/08/performance-boost.png"
        },
        {
            title: "Cost-Effective Marketing",
            desc: "SEO offers a budget-friendly digital marketing option, providing higher ROI and better conversions than traditional methods.",
            icon: "https://brandwitty.com/media/2023/08/market-share.png"
        }
    ];

    return (
        <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden font-lora">

            {/* ════ THE "LIVELY" BLUE DOT (Matches your image) ════ */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute left-10 top-[45%] w-2.5 h-2.5 bg-blue-500 rounded-full hidden xl:block"
            />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* ════ UPPER CONTENT GRID ════ */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 items-start">

                    {/* Left Headline */}
                    <div className="lg:col-span-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[40px] md:text-[62px] leading-[1.1] tracking-tight text-slate-900 font-medium"
                        >
                            Best SEO Company <br />
                            <span className="relative inline-block">
                                in Mumbai
                                {/* DRAWING MARKER ANIMATION */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute -bottom-1 left-0 h-4 bg-[#FFED4E]/30 -z-10"
                                />
                            </span>
                        </motion.h2>
                    </div>

                    {/* Right Description */}
                    <div className="lg:col-span-6 lg:pt-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="font-sans text-slate-500 text-sm md:text-base leading-relaxed italic font-medium"
                        >
                            Discover the Power of SEO with Brandwitty – Your Trusted <strong className="text-slate-900 font-bold">SEO Company in Mumbai</strong> providing end-to-end SEO Service globally to elevate your online presence with our top-notch SEO strategies. We’re not just an SEO company; we’re growth partners. Let’s skyrocket your success together!
                        </motion.p>
                    </div>
                </div>

                {/* ════ THREE CARDS GRID ════ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            whileHover={{ y: -12 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-start group cursor-default h-full"
                        >
                            {/* Colorful Graphic Icon */}
                            <div className="mb-10 w-16 h-16 flex items-center justify-center">
                                <motion.img
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h4 className="text-xl font-bold mb-5 text-slate-800 tracking-tight leading-none group-hover:text-[#0072BC] transition-colors">
                                {card.title}
                            </h4>

                            <p className="font-sans text-[13px] text-slate-400 leading-relaxed font-medium italic mb-10 group-hover:text-slate-500 transition-colors">
                                {card.desc}
                            </p>

                            <div className="mt-auto">
                                <FiArrowRight
                                    size={28}
                                    className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-2 transition-all duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Horizontal Interaction Bar (Optional 21st Dev touch) */}
            <div className="mt-24 max-w-7xl mx-auto px-10 flex justify-between items-center opacity-10">
                <div className="h-px w-24 bg-slate-400" />
                <span className="text-[10px] font-sans font-black uppercase tracking-[0.6em]">Premium Search Infrastructure</span>
                <div className="h-px w-24 bg-slate-400" />
            </div>
        </section>
    );
};

export default SEOIntroSection;