import React from 'react';
import { motion } from 'framer-motion';

const SMCTA = () => (
    <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto bg-[#0c0d12] rounded-[4rem] min-h-[500px] flex flex-col lg:flex-row items-center overflow-hidden shadow-2xl">
            <div className="w-full lg:w-1/2 p-12 md:p-24 text-white relative z-10">
                <h2 className="text-4xl md:text-6xl mb-8 leading-tight tracking-tight">Want to grow your <br /> <span className="italic text-[#F58220]">business?</span></h2>
                <p className="text-slate-400 text-lg mb-12 opacity-80 italic max-w-sm">We are Mumbai's top hub for performance-focused social media engineering.</p>
                <button className="bg-[#F58220] text-white px-12 py-5 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:scale-110 transition-transform shadow-xl shadow-orange-900/40">Contact Us Now</button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-end h-[500px]">
                <motion.div initial={{ y: 300 }} whileInView={{ y: 0 }} transition={{ type: "spring", stiffness: 40 }} className="relative h-[450px]">
                    {/* CSS Based Phone Framework */}
                    <div className="w-72 h-[500px] bg-slate-900 rounded-t-[3.5rem] border-x-[10px] border-t-[10px] border-slate-800 shadow-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" className="w-full h-full object-cover grayscale brightness-125" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0072BC]/20 to-transparent" />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);
export default SMCTA;