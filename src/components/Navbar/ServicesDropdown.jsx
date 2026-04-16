import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3, Search, TrendingUp, Users, Share2, Mail,
  Layout, Monitor, Code, PieChart, MousePointerClick,
  PenTool, Palette, Video, ChevronRight
} from 'lucide-react';

const ServicesDropdown = () => {
  const sections = [
    {
      title: "Marketing Solutions",
      items: [
        { name: "Performance Marketing", slug: "performance-marketing", desc: "ROI focused data-driven strategies", icon: <TrendingUp />, tag: "", iconBg: "bg-emerald-50 text-emerald-600" },
        { name: "SEM Experts", slug: "sem-experts", desc: "Search, Display, Shopping, Native", icon: <Search />, iconBg: "bg-orange-50 text-orange-600" },
        { name: "SEO Services", slug: "seo-services", desc: "Rank organic in SERP", icon: <BarChart3 />, iconBg: "bg-yellow-50 text-yellow-600" },
        { name: "Social Media", slug: "social-media-marketing", desc: "Building viral communities", icon: <Users />, iconBg: "bg-blue-50 text-blue-600" },
      ]
    },
    {
      title: "Website Solutions",
      items: [
        { name: "Website Design", slug: "website-design", desc: "Clean builds that establish trust", icon: <Layout />, iconBg: "bg-rose-50 text-rose-600" },
        { name: "UX/UI Design", slug: "ui-ux", desc: "Digital user experiences", icon: <Monitor />, iconBg: "bg-slate-50 text-slate-600" },
        { name: "GTM Integration", slug: "gtm-integration", desc: "Marketing tag deployment", icon: <Code />, iconBg: "bg-purple-50 text-purple-600" },
        { name: "CRO Optimization", slug: "cro", desc: "Highest level of conversions", icon: <MousePointerClick />, iconBg: "bg-stone-100 text-stone-600" },
      ]
    },
    {
      title: "Creative Solutions",
      items: [
        { name: "Content Writing", slug: "content-writing", desc: "Improve conversions with copy", icon: <PenTool />, iconBg: "bg-red-50 text-red-600" },
        { name: "Graphic Design", slug: "graphic-design", desc: "Establish distinct style", icon: <Palette />, iconBg: "bg-sky-50 text-sky-600" },
        { name: "Video Production", slug: "reels-videos-photos", desc: "Visual storytelling for products", icon: <Video />, tag: "", iconBg: "bg-slate-100 text-slate-600" },
      ]
    }
  ];

  return (
    <div className="w-[95vw] max-w-[1150px] bg-white shadow-[0_35px_70px_-15px_rgba(0,0,0,0.2)] rounded-2xl p-10 grid grid-cols-3 gap-10 border border-slate-100 font-lora">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-6">
          <h4 className="font-bold text-slate-900 text-[14px] uppercase tracking-widest italic opacity-60 border-b border-slate-50 pb-3">
            {section.title}
          </h4>
          <div className="space-y-1">
            {section.items.map((item, i) => (
              <Link
                to={`/services/${item.slug}`}
                key={i}
                className="flex items-start gap-4 group p-3 rounded-xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100"
              >
                <div className={`w-9 h-9 ${item.iconBg} rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffb400] group-hover:text-white`}>
                  {React.cloneElement(item.icon, { size: 18, strokeWidth: 2.2 })}
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 text-[15px] group-hover:text-[#ffb400] transition-colors">
                      {item.name}
                    </span>
                    {item.tag && (
                      <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-sm uppercase ${item.tag === '' ? 'bg-[#fff4d6] text-[#ffb400]' : 'bg-indigo-50 text-indigo-500'}`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-slate-400 leading-snug font-medium mt-0.5 group-hover:text-slate-600">
                    {item.desc}
                  </p>
                </div>
                <ChevronRight size={14} className="text-slate-200 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDropdown;