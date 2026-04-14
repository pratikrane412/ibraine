import React from 'react';
import SMHero from '../../components/Social/SMHero';
import SMGreatBrands from '../../components/Social/SMGreatBrands';
import SMWhyImportant from '../../components/Social/SMImportance';
import SMSuccessStories from '../../components/Social/SMSuccessStories';
import SMCTA from '../../components/Social/SMGrowthCTA';

const SocialMediaMarketing = () => {
    return (
        <main className="w-full bg-white selection:bg-[#F58220] selection:text-white">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body, main { font-family: 'Lora', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .text-label { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.4em; }
        .marker-yellow { position: relative; display: inline-block; z-index: 1; }
        .marker-yellow::after { content: ""; position: absolute; left: 0; bottom: 4px; width: 100%; height: 10px; background: #FFED4E; z-index: -1; opacity: 0.6; }
      `}</style>

            {/* Persistent Vertical Grid Lines */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:20%_100%]" />
            </div>

            <div className="relative z-10">
                <SMHero />
                <SMGreatBrands />
                <SMWhyImportant />
                <SMSuccessStories />
                <SMCTA />
            </div>

            
        </main>
    );
};

export default SocialMediaMarketing;