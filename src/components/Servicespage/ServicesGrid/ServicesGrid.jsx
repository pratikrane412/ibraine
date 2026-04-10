import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, Users, Layout, Palette, Megaphone, 
  Handshake, Monitor, PenTool, Code, Search, Mail, Camera, Radio, MoveRight 
} from 'lucide-react';

const ServicesGrid = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Marketing Solutions', 'Website Solutions', 'Creative Solutions'];

  const services = [
    { title: "Performance Marketing", desc: "Target the right people for your brand. Harness the full potential of Paid Ads & encourage your audience to convert.", cat: "Marketing Solutions", icon: <TrendingUp /> },
    { title: "SEO Services", desc: "Increase the quality of your website & ROI with top-rated SEO. Drive organic success and results with proven strategies.", cat: "Marketing Solutions", icon: <BarChart3 />, isSpecial: true },
    { title: "Social Media Marketing", desc: "Build your brand image, connect with your audience & increase sales. Reach your audience at the right time.", cat: "Marketing Solutions", icon: <Users /> },
    { title: "Website Development", desc: "Portray your brand aesthetics on the web. Our team builds high-performance, responsive websites.", cat: "Website Solutions", icon: <Layout /> },
    { title: "Graphic Design", desc: "Visually communicate your brand. Innovating designs that speak louder than words.", cat: "Creative Solutions", icon: <Palette /> },
    { title: "Branding / Awareness", desc: "Branding and awareness are two critical components for any successful business.", cat: "Marketing Solutions", icon: <Megaphone /> },
    { title: "Influencer Marketing", desc: "Influencers promote products or brands to their engaged audiences, leveraging their credibility.", cat: "Marketing Solutions", icon: <Handshake /> },
    { title: "UX / UI Design", desc: "UX/UI design blends user experience and visual appeal, resulting in intuitive digital products.", cat: "Website Solutions", icon: <Monitor /> },
    { title: "Content Writing", desc: "Content writing involves crafting engaging and informative text for various mediums like websites.", cat: "Creative Solutions", icon: <PenTool /> },
    { title: "GTM Integration", desc: "GTM streamlines the management of tracking codes, scripts, and tags, simplifying data gathering.", cat: "Website Solutions", icon: <Code /> },
    { title: "Analytics Audit", desc: "Identify potential issues, optimize tracking configurations, and ensure your data provides insights.", cat: "Website Solutions", icon: <Search /> },
    { title: "CRO", desc: "Analyze user behavior, test different elements, and make data-driven adjustments to improve conversions.", cat: "Website Solutions", icon: <TrendingUp /> },
    { title: "Email Marketing", desc: "Targeted strategies involving sending messages and promotional content to a group of people.", cat: "Marketing Solutions", icon: <Mail /> },
    { title: "Photo / Reels / Videos", desc: "Capturing high-quality images and creating engaging short videos for social media impact.", cat: "Creative Solutions", icon: <Camera /> },
    { title: "Public Relations (PR)", desc: "PR is a strategic communication approach that shapes and maintains a positive reputation.", cat: "Marketing Solutions", icon: <Radio /> },
  ];

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.cat === filter);

  return (
    <section className="py-20 lg:py-32 px-6 bg-[#fcfcfc] overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto text-center reveal-active">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-bold tracking-[0.2em] px-5 py-2 rounded-full uppercase mb-6 reveal-item">
            What we offer
          </span>
          <h2 className="font-lora text-5xl lg:text-7xl text-[#1a162d] mb-6 reveal-item">
            Our <span className="text-brand-yellow">Services</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto reveal-item delay-1">
            Comprehensive digital marketing solutions tailored to grow your brand and maximize ROI.
          </p>
        </div>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 reveal-item delay-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                filter === cat 
                ? 'bg-[#123976] text-white border-[#123976] shadow-lg' 
                : 'bg-white text-blue-900 border-gray-100 hover:border-blue-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.title}
              className={`bg-white p-10 lg:p-12 rounded-[2.5rem] text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-start reveal-item ${
                service.isSpecial 
                ? 'border-2 border-brand-yellow shadow-md' 
                : 'border border-gray-50 shadow-sm'
              }`}
              style={{ animationDelay: `${(index % 3) * 0.2}s` }}
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.isSpecial ? 'bg-[#123976] text-white' : 'bg-blue-50 text-blue-600'}`}>
                {service.icon}
              </div>

              <h3 className="font-lora text-2xl text-[#1a162d] font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <button className={`font-bold text-sm flex items-center gap-2 group transition-colors ${service.isSpecial ? 'text-brand-yellow' : 'text-[#123976]'}`}>
                Learn More 
                <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;