import React from 'react';
import SEOHero from '../../components/SEO/SEOHero';
import WhyChooseSEO from '../../components/SEO/WhyChooseSEO';
import SEOStatsTape from '../../components/SEO/SEOStatsTape';
import SEOServicesGrid from '../../components/SEO/SEOServicesGrid';

import SEOMegaGrid from '../../components/SEO/SEOMegaGrid';

const SEOServices = () => {
   return (
      <main className="w-full bg-white selection:bg-[#F58220] selection:text-white">
         <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
        
        /* Global Editorial Reset */
        body, main, h1, h2, h3, h4, p, span, input, button, textarea { 
            font-family: 'Lora', serif !important; 
        }

        .text-step-h1 { font-size: clamp(2.2rem, 4vw, 3.8rem); line-height: 1.1; font-weight: 500; }
        .text-step-h2 { font-size: clamp(1.8rem, 3vw, 2.6rem); line-height: 1.2; font-weight: 500; }
        
        .marker-line { position: relative; display: inline-block; z-index: 1; }
        .marker-line::after { 
            content: ""; position: absolute; left: 0; bottom: 6px; width: 100%; height: 8px; 
            background: #FFED4E; z-index: -1; opacity: 0.6;
        }

        /* Technical background grid */
        .bg-technical-grid {
          background-image: linear-gradient(to right, #f3f4f6 1px, transparent 1px);
          background-size: 25% 100%;
        }
      `}</style>

         <div className="relative z-10 bg-technical-grid">
            <SEOHero />
            <SEOMegaGrid />
            <WhyChooseSEO />
            <SEOStatsTape />
            <SEOServicesGrid />
            
         </div>

        
      </main>
   );
};

export default SEOServices;