import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const PerfContactForm = () => (
    <section className="py-32 px-6 bg-[#fafafa] relative overflow-hidden relative z-10">
        {/* Image 5: Background Graphic */}
        <img src="https://brandwitty.com/media/2023/07/dcdc70.png" className="absolute bottom-[-10%] left-[-5%] w-[450px] opacity-[0.03] pointer-events-none grayscale" alt="" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
                <h2 className="text-[32px] md:text-[54px] font-medium leading-tight mb-8">
                    Talk with <br /> Performance <span className="italic text-slate-300">Consultants.</span>
                </h2>
                <p className="text-slate-400 text-sm italic font-medium tracking-wide mb-10">+91 9819 032 791</p>
                <div className="w-12 h-0.5 bg-[#F58220] rounded-full" />
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-sm border border-slate-100 relative z-10">
                <form className="space-y-10">
                    <input placeholder="Name" className="w-full border-b border-slate-100 py-3 outline-none text-[13px] font-medium focus:border-[#0072BC] transition-colors bg-transparent font-sans" />
                    <input placeholder="Work Email" className="w-full border-b border-slate-100 py-3 outline-none text-[13px] font-medium focus:border-[#0072BC] transition-colors bg-transparent font-sans" />
                    <textarea rows="3" placeholder="Describe your conversion goals" className="w-full border-b border-slate-100 py-3 outline-none text-[13px] font-medium focus:border-[#0072BC] transition-colors bg-transparent resize-none font-sans" />
                    <button className="w-full bg-[#111111] text-white py-4 rounded-xl font-sans font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#0072BC] transition-all flex items-center justify-center gap-3">
                        Launch Inquiry <FiArrowRight />
                    </button>
                </form>
            </div>
        </div>
    </section>
);
export default PerfContactForm;