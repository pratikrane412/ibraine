import React from 'react';
import { motion } from 'framer-motion';

const SEOServicesGrid = () => {
    const services = [
        {
            icon: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
            title: "SEO for Start-ups",
            desc: "Custom roadmaps designed for rapid scaling. We build unshakeable authority through high-intent keyword clusters and technical foundations.",
            delay: 0.1
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/595/595067.png",
            title: "Penalty Removal",
            desc: "Algorithmic hits or manual actions—we perform surgical technical audits to recover your traffic and restore your standing with Google.",
            delay: 0.3
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/1257/1257385.png",
            title: "SEO for Local",
            desc: "Dominate the local map pack. We optimize your GMB profile and local citations to ensure you are the first choice in your neighborhood.",
            delay: 0.2
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/1162/1162499.png",
            title: "E-Commerce SEO",
            desc: "Turn product pages into high-converting revenue assets. We implement advanced schema markup and technical site architecture for stores.",
            delay: 0.4
        }
    ];

    return (
        <section className="relative w-full py-24 md:py-44 bg-white overflow-hidden font-lora selection:bg-[#FFED4E]">

            {/* ════ 1. THE EDITORIAL BACKGROUND SYSTEM ════ */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                {/* Massive Background Watermark (Fills the "Blank" space) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-slate-900/[0.01] uppercase tracking-tighter">
                    Discover
                </div>

                {/* Yellow Puzzle - Placed as per design */}
                <motion.img
                    animate={{ y: [0, -15, 0], rotate: [15, 20, 15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    src="https://brandwitty.com/media/2023/07/SEO-Agency-Shape-2-300x294.webp"
                    className="absolute top-10 right-[-30px] w-64 md:w-80 opacity-100 hidden lg:block"
                />
                {/* Blue Puzzle - Replicated with CSS filter */}
                <motion.img
                    animate={{ y: [0, 20, 0], rotate: [-15, -20, -15] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    src="https://brandwitty.com/media/2023/07/SEO-Agency-Shape-2-300x294.webp"
                    className="absolute bottom-[-50px] left-[-50px] w-56 md:w-64 opacity-100 hidden lg:block hue-rotate-[200deg]"
                />

                {/* Pulsing Interaction Point */}
                <div className="absolute left-[8%] bottom-[20%] w-2 h-2 bg-[#26D07C] rounded-full">
                    <div className="w-full h-full bg-[#26D07C] rounded-full animate-ping" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* ════ 2. LEFT SIDE: HEADLINE AREA ════ */}
                    <div className="lg:col-span-6 pt-10">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-[44px] md:text-[78px] leading-[0.9] tracking-tighter text-slate-900 font-medium">
                                Let's <span className="relative inline-block z-10 italic">
                                    Discover
                                    {/* Draw-in yellow underline */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        className="absolute left-0 bottom-2 h-4 bg-[#FFED4E]/40 -z-10 rounded-full"
                                    />
                                </span> <br />
                                all our <br />
                                <span className="text-[#0072BC]">SEO services</span>
                            </h2>

                            <p className="mt-12 text-slate-400 text-lg md:text-xl max-w-sm italic leading-tight opacity-60">
                                We don't just "do SEO." We engineer digital moats that protect your business revenue.
                            </p>
                        </motion.div>
                    </div>

                    {/* ════ 3. RIGHT SIDE: THE STAGGERED SYSTEM ════ */}
                    <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                        {/* COLUMN A (Starts High) */}
                        <div className="space-y-6">
                            <ServiceCard data={services[0]} />
                            <ServiceCard data={services[1]} />
                        </div>

                        {/* COLUMN B (Starts Low - creates the floating stagger) */}
                        <div className="space-y-6 mt-16 md:mt-32">
                            <ServiceCard data={services[2]} />
                            <ServiceCard data={services[3]} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

// THE REFINED CARD COMPONENT
const ServiceCard = ({ data }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: data.delay }}
        whileHover={{
            y: -12,
            rotateX: 2,
            rotateY: -2,
            transition: { duration: 0.3 }
        }}
        className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-50 flex flex-col items-start min-h-[400px] group transition-all duration-500 relative overflow-hidden"
    >
        {/* Subtle Numbering in background */}
        <div className="absolute top-10 right-10 text-4xl font-black text-slate-100 group-hover:text-[#FFED4E]/20 transition-colors italic select-none">
            0{Math.floor(data.delay * 10)}
        </div>

        {/* Icon Container */}
        <div className="mb-10 w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all duration-500 border border-slate-50">
            <img src={data.icon} alt="" className="w-10 h-10 object-contain" />
        </div>

        {/* Text content - Professional Scale */}
        <h4 className="text-2xl font-bold mb-4 text-[#1a1a1a] tracking-tight group-hover:text-[#0072BC] transition-colors">
            {data.title}
        </h4>
        <p className="font-sans text-[13px] text-slate-400 italic font-medium leading-relaxed mb-10 group-hover:text-slate-600 transition-colors">
            {data.desc}
        </p>

        {/* The Technical Line Arrow */}
        <div className="mt-auto opacity-30 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
            <svg width="45" height="15" viewBox="0 0 45 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.5H44M44 7.5L37.5 1M44 7.5L37.5 14" stroke="#0072BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </motion.div>
);

export default SEOServicesGrid;