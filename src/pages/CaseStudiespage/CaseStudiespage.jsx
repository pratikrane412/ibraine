import React from 'react';
import CaseStudiesHero from '../../components/CaseStudiespage/CaseStudiesHero/CaseStudiesHero'; 
import CaseStudiesGrid from '../../components/CaseStudiespage/CaseStudiesGrid/CaseStudiesGrid'; 
import GrowthElements from '../../components/CaseStudiespage/GrowthElements/GrowthElements'; 
import MethodologySection from '../../components/CaseStudiespage/MethodologySection/MethodologySection';
import ChallengesSection from '../../components/CaseStudiespage/ChallengesSection/ChallengesSection';
import TestimonialSection from '../../components/CaseStudiespage/TestimonialSection/TestimonialSection';
import ContactSection from '../../components/CaseStudiespage/ContactSection/ContactSection';

const CaseStudiespage = () => {
    return (
      <main className="w-full min-h-screen pt-24 bg-gray-50">
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <GrowthElements/>
        <MethodologySection/>
        <ChallengesSection/>
        <TestimonialSection/>
        <ContactSection/>
      </main>
    );
};

export default CaseStudiespage;