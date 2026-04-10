import React from 'react';
import { 
  BarChart3, Search, TrendingUp, Users, Share2, Mail, 
  Layout, Monitor, Code, PieChart, MousePointerClick, 
  PenTool, Palette, Video 
} from 'lucide-react';

const ServicesDropdown = () => {
  const sections = [
    {
      title: "Marketing Solutions",
      items: [
        { name: "Performance Marketing", desc: "Driving results through data-driven strategies", icon: <TrendingUp />, tag: "HOT", iconBg: "bg-emerald-50 text-emerald-600" },
        { name: "SEM Experts", desc: "Search, Display, Shopping, Native...", icon: <Search />, iconBg: "bg-orange-50 text-orange-600" },
        { name: "SEO Services", desc: "Rank your website in SERP", icon: <BarChart3 />, iconBg: "bg-yellow-50 text-yellow-600" },
        { name: "Social Media", desc: "See and be seen with social media", icon: <Users />, iconBg: "bg-blue-50 text-blue-600" },
        { name: "Influencer Marketing", desc: "Reinforces your brand's reputation", icon: <Share2 />, iconBg: "bg-lime-50 text-lime-600" },
        { name: "Email Marketing", desc: "Emails used to generate leads/sales", icon: <Mail />, iconBg: "bg-zinc-100 text-zinc-600" },
      ]
    },
    {
      title: "Website Solutions",
      items: [
        { name: "Website Design", desc: "Website builds trust & stands out", icon: <Layout />, iconBg: "bg-rose-50 text-rose-600" },
        { name: "UX/UI Design", desc: "Enhancing user experiences", icon: <Monitor />, iconBg: "bg-slate-50 text-slate-600" },
        { name: "GTM Integration", desc: "Manage & deploy marketing tags easily", icon: <Code />, iconBg: "bg-purple-50 text-purple-600" },
        { name: "Analytics Audit", desc: "Website analytics for better grasp", icon: <PieChart />, iconBg: "bg-amber-50 text-amber-600" },
        { name: "CRO", desc: "Achieve the highest level of conversions", icon: <MousePointerClick />, iconBg: "bg-stone-100 text-stone-600" },
      ]
    },
    {
      title: "Creative Solutions",
      items: [
        { name: "Content Writing", desc: "Improve conversions, and generate leads", icon: <PenTool />, iconBg: "bg-red-50 text-red-600" },
        { name: "Graphic Design", desc: "Establish distinct tone & style", icon: <Palette />, iconBg: "bg-sky-50 text-sky-600" },
        { name: "Reels/Videos/Photos", desc: "Help consumers understand product", icon: <Video />, tag: "NEW", iconBg: "bg-slate-100 text-slate-600" },
      ]
    }
  ];

  return (
    <div className="absolute top-full left-0 w-screen max-w-[1200px] bg-white shadow-2xl border-t border-gray-100 p-10 grid grid-cols-3 gap-12 z-[2000] animate-fade-in-down rounded-b-2xl">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-8">
          <h4 className="font-poppins font-black text-black text-lg border-b border-gray-100 pb-4">
            {section.title}
          </h4>
          <div className="space-y-6">
            {section.items.map((item, i) => (
              <a href="#" key={i} className="flex items-start gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all">
                <div className={`w-10 h-10 ${item.iconBg} rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110`}>
                  {React.cloneElement(item.icon, { size: 20, strokeWidth: 2 })}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-poppins font-bold text-gray-900 text-sm group-hover:text-brand-yellow">
                      {item.name}
                    </span>
                    {item.tag && (
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase ${item.tag === 'HOT' ? 'bg-pink-100 text-pink-500' : 'bg-pink-100 text-pink-500'}`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="font-poppins text-xs text-gray-400 mt-1 leading-tight group-hover:text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDropdown;