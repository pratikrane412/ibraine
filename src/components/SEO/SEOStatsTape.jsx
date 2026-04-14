import React from 'react';

const SEOStatsTape = () => (
    <section className="py-20 px-6 border-y border-slate-50 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
                { v: "170+", l: "Successful SEO Campaigns", c: "text-[#0072BC]" },
                { v: "2000+", l: "Keywords Ranked on Page #1", c: "text-[#F58220]" },
                { v: "Min. 3 MTH", l: "Average Time to See Results", c: "text-red-500" }
            ].map((s, i) => (
                <div key={i} className="text-center md:text-left relative">
                    <p className={`${s.c} text-4xl lg:text-5xl font-medium mb-3 tracking-tighter`}>{s.v}</p>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{s.l}</p>
                </div>
            ))}
        </div>
    </section>
);
export default SEOStatsTape;