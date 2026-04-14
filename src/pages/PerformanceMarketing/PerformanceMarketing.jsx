import React from 'react';
import PerfHero from '../../components/PerfComp/PerfHero';
import ShowcaseDashboard from '../../components/PerfComp/ShowcaseDashboard';
import GlobalStatsTape from '../../components/PerfComp/GlobalStatsTape';
import CampaignBentoGrid from '../../components/PerfComp/CampaignBentoGrid';
import ChallengeSection from '../../components/PerfComp/ChallengeSection';
import SmartScalingBlock from '../../components/PerfComp/SmartScalingBlock';
import CreativeExcellence from '../../components/PerfComp/CreativeExcellence';
import AnalyticsReporting from '../../components/PerfComp/AnalyticsReporting';
import FoundersWall from '../../components/PerfComp/FoundersWall';



const PerformanceMarketing = () => {
   return (
      <main className="w-full bg-[#fdfdfd] overflow-hidden selection:bg-[#F58220] selection:text-white">
         {/* ════ PREMIUM STYLE OVERRIDES ════ */}
         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        :root {
            --brand-blue: #0072BC;
            --brand-orange: #F58220;
        }

        body, main { font-family: 'Lora', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        .editorial-grid {
            background-image: linear-gradient(to right, #80808012 1px, transparent 1px);
            background-size: 20% 100%;
        }

        .text-label { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.4em; }
      `}</style>

         {/* Persistent Background Texture */}
         <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 editorial-grid opacity-60" />
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
         </div>

         <div className="relative z-10">
            <PerfHero />
            <ShowcaseDashboard />
            <GlobalStatsTape />
            <CampaignBentoGrid />
            <ChallengeSection />
            <SmartScalingBlock />
            <CreativeExcellence />
            <AnalyticsReporting />
            <FoundersWall />

         </div>
         

      </main>
   );
};

export default PerformanceMarketing;