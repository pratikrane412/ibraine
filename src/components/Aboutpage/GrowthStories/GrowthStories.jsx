import React from 'react';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';

const GrowthStories = () => {
  const stories = [
    {
      title: "Crafting Success for Alphonso Mangoes",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Claro Clinic's Journey to Success",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "From Instagram to E-commerce: A Triumph of Footwear Brand Expansion",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600",
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 px-6 lg:px-24 bg-white overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto reveal-active">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="reveal-item">
            <h2 className="font-lora text-4xl lg:text-[54px] leading-tight text-[#1a162d]">
              Real <span className="text-marker">Results</span>, Real <span className="text-marker">Clients</span>, Real <br className="hidden lg:block" />
              <span className="text-marker">Growth Stories</span>
            </h2>
          </div>

          <button className="reveal-item delay-1 bg-[#ffb400] hover:bg-black text-white px-8 py-3 rounded-md font-bold flex items-center gap-2 transition-all shadow-md group">
            View All 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- CAROUSEL / GRID CONTAINER --- */}
        <div className="relative group">
          
          {/* Navigation Arrows (Absolute Sides) */}
          <button className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all hidden lg:flex">
            <ArrowLeft size={20} />
          </button>
          
          <button className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all hidden lg:flex">
            <ArrowRight size={20} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-[25px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal-item delay-${index + 1}`}
              >
                {/* Story Image */}
                <div className="h-64 lg:h-72 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col items-center text-center">
                  <h3 className="font-poppins font-bold text-[#1a162d] text-lg lg:text-xl leading-snug mb-8 min-h-[60px]">
                    {story.title}
                  </h3>
                  
                  <button className="group border border-[#ffb400] text-[#ffb400] px-8 py-2.5 rounded-md font-bold text-sm hover:bg-[#ffb400] hover:text-white transition-all">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GrowthStories;