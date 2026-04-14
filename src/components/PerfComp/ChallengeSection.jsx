import React from 'react';

const ChallengeSection = () => (
    <section className="py-24 px-6 bg-[#0B0C10] text-white text-center relative z-10">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[48px] leading-tight mb-8 font-medium">
                Join Our 90-Day Challenge to <br /> <span className="text-[#F58220]">Reach 1000 Customers.</span>
            </h2>
            <p className="text-slate-400 text-sm mb-12 max-w-lg mx-auto opacity-80 leading-relaxed italic">
                At iBraine, we take a methodical and data-driven approach that delivers measurable success, not just empty promises.
            </p>
            <button className="bg-[#F58220] text-white px-10 py-3.5 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:scale-110 transition-transform shadow-2xl shadow-orange-900/40">
                Start driving conversions now
            </button>
        </div>
    </section>
);

export default ChallengeSection;