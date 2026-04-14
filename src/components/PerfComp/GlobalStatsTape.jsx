import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiActivity } from 'react-icons/fi';

const GlobalStatsTape = () => {
    const stats = [
        {
            l: "Spend Managed",
            v: "₹ 46.5Cr+",
            i: <FiActivity />,
            desc: "Annualized ad volume"
        },
        {
            l: "Average ROAS",
            v: "3.31x",
            i: <FiTarget />,
            desc: "Across all active accounts"
        },
        {
            l: "Generated Revenue",
            v: "₹ 154Cr+",
            i: <FiTrendingUp />,
            desc: "Last 12 months impact"
        }
    ];

    return (
        <section className="py-24 px-6 border-y border-slate-100 mt-20 relative z-10 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-12 md:gap-0">

                {stats.map((s, i) => (
                    <React.Fragment key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="flex-1 flex flex-col items-center md:items-start group px-4 md:px-8"
                        >
                            {/* Technical Label (Jakarta) */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-[#0072BC] group-hover:text-[#F58220] transition-colors duration-500">
                                    {React.cloneElement(s.i, { size: 18, strokeWidth: 1.5 })}
                                </div>
                                <span className="text-[10px] font-sans font-extrabold uppercase tracking-[0.4em] text-slate-400">
                                    {s.l}
                                </span>
                            </div>

                            {/* Massive Value (Lora) */}
                            <h4 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tighter mb-4">
                                {s.v}
                            </h4>

                            {/* Small context line */}
                            <p className="text-[11px] font-sans font-medium text-slate-300 uppercase tracking-widest italic">
                                {s.desc}
                            </p>
                        </motion.div>

                        {/* Vertical Separator for Desktop */}
                        {i < stats.length - 1 && (
                            <div className="hidden md:block w-px h-auto bg-slate-100 self-stretch" />
                        )}
                    </React.Fragment>
                ))}

            </div>

            {/* Subtle "Live" Pulsing Marker to fill whitespace */}
            {/* <div className="absolute bottom-6 right-10 flex items-center gap-3 opacity-30">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em]">Real-time Tracking Active</span>
            </div> */}
        </section>
    );
};

export default GlobalStatsTape;