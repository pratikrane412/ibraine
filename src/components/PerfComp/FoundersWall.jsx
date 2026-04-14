const FoundersWall = () => (
  <section className="py-32 px-6 bg-white relative z-10">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-[32px] md:text-[54px] text-center mb-24 font-medium italic opacity-80">Loved by Founders.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
            {n: "Mukta Talani", r: "Radiant Health", t: "Professional and dedicated team. Results in record time.", i: "https://brandwitty.com/media/2023/09/testimonial2.png"},
            {n: "Rohini Hans", r: "Thread Stories", t: "Talent and passion define their work. Exceeded expectations.", i: "https://brandwitty.com/media/2023/09/testimonial13.png"},
            {n: "Girish More", r: "CEO", t: "The best performance marketing agency in the city.", i: "https://brandwitty.com/media/2023/09/testimonial11.png"}
        ].map((t, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-[#fdfdfd] border border-slate-50 shadow-sm flex flex-col justify-between">
            <p className="text-sm text-slate-500 mb-10 leading-relaxed italic">"{t.t}"</p>
            <div className="flex items-center gap-4">
                <img src={t.i} className="w-10 h-10 rounded-full object-cover grayscale" />
                <div>
                    <h5 className="font-sans font-bold text-[11px] uppercase tracking-widest text-slate-800">{t.n}</h5>
                    <p className="text-label text-slate-300 tracking-widest mt-0.5">{t.r}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FoundersWall;