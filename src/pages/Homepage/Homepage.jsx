import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import MarketingPlan from '../../components/MarketingPlan/MarketingPlan';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import StatsSection from '../../components/StatsSection/StatsSection';
// import CaseStudy from '../../components/CaseStudy/CaseStudy';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import StartSection from '../../components/StartSection/BlogSection';

const Homepage = () => {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <AboutSection />
      <MarketingPlan />
      <ServiceSection />
      <WhyChooseUs />
      <StatsSection />
      {/* <CaseStudy /> */}
      <TestimonialsSection />
      <StartSection />
    </main>
  );
};

export default Homepage;