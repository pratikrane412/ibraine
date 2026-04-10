import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const StartupSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`relative w-full py-20 lg:py-40 px-6 lg:px-24 bg-[#0a0f1d] overflow-hidden ${isVisible ? 'reveal-active' : ''}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="space-y-8 animate-fade-in-left">
          <h2 className="font-lora text-4xl lg:text-7xl leading-tight text-white reveal-item">
            Get the best <span className="italic text-[#3fb09a] font-normal">advice</span> for your business
          </h2>

          <p className="font-poppins text-[16px] lg:text-[18px] text-gray-400 leading-relaxed max-w-xl reveal-item delay-1">
            As the Internet continues to grow and evolve, reaching your target audience 
            becomes more challenging. However, we thrive on competition and use 
            ethical, proven techniques...
          </p>

          <div className="reveal-item delay-2">
            <button className="group border border-[#d1ae6d] text-[#d1ae6d] px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all hover:bg-[#d1ae6d] hover:text-white">
              Start Your Success Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: LAYERED GRAPHIC --- */}
        <div className="relative h-[500px] lg:h-[650px] flex items-center justify-center">
          
          {/* Background Decorative Bars (Left side of person) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 -rotate-12 opacity-50 z-0">
             <div className="w-24 lg:w-40 h-4 bg-white/20 rounded-full"></div>
             <div className="w-32 lg:w-56 h-4 bg-white/10 rounded-full"></div>
             <div className="w-24 lg:w-40 h-4 bg-white/20 rounded-full"></div>
          </div>

          {/* MAIN IMAGE (Person on Red BG) */}
          <div className="relative z-10 w-[80%] aspect-square lg:w-full max-w-[450px] rounded-[4rem] overflow-hidden border-4 border-white/5 shadow-2xl reveal-item">
             {/* Red Background */}
             <div className="absolute inset-0 bg-[#b91c1c]"></div>
             <img 
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
               alt="Successful Startup Founder" 
               className="relative z-10 w-full h-full object-cover mix-blend-normal"
             />
          </div>

          {/* FLOATING CARD 1: Earnings (Top Left) */}
          <div className="absolute top-0 left-0 lg:-left-10 z-20 animate-floating [animation-delay:0.5s]">
            <div className="bg-white p-5 rounded-3xl shadow-2xl min-w-[180px]">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] font-bold text-gray-400 uppercase">Your Earning</span>
                 <span className="text-[10px] font-bold text-green-500">+2.45%</span>
              </div>
              <h4 className="text-2xl font-black text-[#1a162d]">$60.1K</h4>
              <div className="flex items-end gap-1 h-12 mt-4">
                 {[40, 70, 50, 90, 60, 80].map((h, i) => (
                   <div key={i} style={{height: `${h}%`}} className="flex-1 bg-blue-100 rounded-t-sm"></div>
                 ))}
              </div>
            </div>
          </div>

          {/* FLOATING CARD 2: Spending (Top Right) */}
          <div className="absolute top-10 right-0 lg:-right-10 z-20 animate-floating">
            <div className="bg-white p-5 rounded-3xl shadow-2xl min-w-[180px]">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[10px] font-bold text-gray-400 uppercase">Spend this month</span>
                 <span className="text-[10px] font-bold text-orange-500">+7.45%</span>
              </div>
              <h4 className="text-2xl font-black text-[#1a162d]">$20.5K</h4>
              {/* Line Chart SVG */}
              <svg viewBox="0 0 100 40" className="mt-4 w-full h-12">
                <path d="M0,35 Q20,10 40,25 T80,5 T100,20" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Decorative Green Shapes (Bottom Right) */}
          <div className="absolute -bottom-10 -right-10 opacity-30 z-0">
             <div className="w-32 h-32 bg-[#3fb09a] rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartupSection;