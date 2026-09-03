import React from 'react';
import CaseStudiesHero from '../../components/CaseStudiespage/CaseStudiesHero/CaseStudiesHero'; 
import CaseStudiesGrid from '../../components/CaseStudiespage/CaseStudiesGrid/CaseStudiesGrid'; 
import GrowthElements from '../../components/CaseStudiespage/GrowthElements/GrowthElements'; 
import MethodologySection from '../../components/CaseStudiespage/MethodologySection/MethodologySection';
import ChallengesSection from '../../components/CaseStudiespage/ChallengesSection/ChallengesSection';
import TestimonialSection from '../../components/CaseStudiespage/TestimonialSection/TestimonialSection';
import ContactInput from '../../components/CaseStudiespage/ContactInput/ContactInput';

const CaseStudiespage = () => {
    return (
      <main >
        <CaseStudiesHero />
        <CaseStudiesGrid />
        <GrowthElements/>
        <MethodologySection/>
        <ChallengesSection/>
        <TestimonialSection/>
        <ContactInput/>
      </main>
    );
};

export default CaseStudiespage;