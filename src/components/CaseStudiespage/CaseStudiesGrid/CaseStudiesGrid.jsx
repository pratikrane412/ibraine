import React, { useEffect, useRef } from 'react';

const cases = [
  {
    id: 1,
    title: 'Transforming Home Interior Design With Houseome',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Crafting Success For Alphonso Mangoes',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: "Claro Clinic's Journey To Success",
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'From Instagram To E-Commerce: A Triumph Of Footwear Brand Expansion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: 'FC Goa Missed Call Marketing Campaign',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'Toyota Service Carnival SMS Marketing',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
  },
];

const CaseStudiesGrid = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ref.style.opacity = '1';
              ref.style.transform = 'translateY(0px)';
            }, i * 100);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cases.map((item, i) => (
          <div
            key={item.id}
            ref={el => (cardRefs.current[i] = el)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer"
            style={{
              height: '240px',
              opacity: 0,
              transform: 'translateY(40px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            {/* Background image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient overlay — always visible at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover overlay — extra dark */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

            {/* Title — bottom left */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3
                className="text-white font-bold text-[15px] leading-snug transition-transform duration-300 group-hover:-translate-y-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.title}
              </h3>
            </div>

            {/* Hover arrow — top right */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full w-9 h-9 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-14">
        <button
          className="bg-[#f5c800] hover:bg-[#e0b600] text-black font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
          style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.3px' }}
        >
          Call us to discuss your project
        </button>
      </div>

    </section>
  );
};

export default CaseStudiesGrid;