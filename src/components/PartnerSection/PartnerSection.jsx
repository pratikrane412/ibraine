import React from 'react';

const PartnerSection = () => {
  const row1 = [
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E" },
    { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/FF7A59", color: "#FF7A59" },
    { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar/4285F4", color: "#4285F4" },
    { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/FF4A00", color: "#FF4A00" },
    { name: "Word", icon: "https://cdn.simpleicons.org/microsoftword/2B579A", color: "#2B579A" },
    { name: "YouTube", icon: "https://cdn.simpleicons.org/youtube/FF0000", color: "#FF0000" },
    { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/7B68EE", color: "#7B68EE" },
    { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853", color: "#34A853" },
  ];

  const row2 = [
    { name: "Airtable", icon: "https://cdn.simpleicons.org/airtable/18BFFF", color: "#18BFFF" },
    { name: "Miro", icon: "https://cdn.simpleicons.org/miro/050038", color: "#050038" },
    { name: "Google Drive", icon: "https://cdn.simpleicons.org/googledrive/4285F4", color: "#4285F4" },
    { name: "PowerPoint", icon: "https://cdn.simpleicons.org/microsoftpowerpoint/B7472A", color: "#B7472A" },
    { name: "Calendly", icon: "https://cdn.simpleicons.org/calendly/006BFF", color: "#006BFF" },
    { name: "Adobe", icon: "https://cdn.simpleicons.org/adobe/FF0000", color: "#FF0000" },
    { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06B66", color: "#F06B66" },
    { name: "Invision", icon: "https://cdn.simpleicons.org/invision/FF3366", color: "#FF3366" },
  ];

  return (
    <section className="py-16 bg-[#f4f4f4] overflow-hidden relative">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee 55s linear infinite reverse;
          }
          .pause-on-hover:hover .animate-marquee,
          .pause-on-hover:hover .animate-marquee-reverse {
            animation-play-state: paused;
          }
          .mask-fade {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
          
          /* The Magic: Black & White to Color transition */
          .logo-card img {
            filter: grayscale(100%);
            opacity: 0.6;
            transition: all 0.4s ease;
          }
          .logo-card:hover img {
            filter: grayscale(0%);
            opacity: 1;
            transform: scale(1.1);
          }
          .logo-card:hover {
            border-color: var(--hover-color);
            box-shadow: 0 10px 30px -10px var(--hover-shadow);
            transform: translateY(-4px);
            background: white;
          }
        `}
      </style>

      {/* Headline */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="font-lora font-medium text-[32px] md:text-[48px] leading-[1.2] text-slate-900 mb-6 tracking-tight">
          With just a few clicks, <span className="text-indigo-600 italic">iBraine</span> integrates with your existing systems.
        </h2>
      </div>

      <div className="flex flex-col gap-8 pause-on-hover mask-fade">
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-6 px-3">
            {[...row1, ...row1].map((item, idx) => (
              <div 
                key={idx} 
                className="logo-card flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-100 transition-all duration-300 cursor-pointer min-w-[200px]"
                style={{ 
                  '--hover-color': item.color + '40', // 40 is hex for transparency
                  '--hover-shadow': item.color + '30' 
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                   <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                </div>
                <span className="font-jakarta font-semibold text-slate-700 text-[15px] tracking-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-6 px-3">
            {[...row2, ...row2].map((item, idx) => (
              <div 
                key={idx} 
                className="logo-card flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-slate-100 transition-all duration-300 cursor-pointer min-w-[200px]"
                style={{ 
                  '--hover-color': item.color + '40',
                  '--hover-shadow': item.color + '30' 
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                   <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                </div>
                <span className="font-jakarta font-semibold text-slate-700 text-[15px] tracking-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;