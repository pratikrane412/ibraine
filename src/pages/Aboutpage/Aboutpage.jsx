import React from 'react';

import AboutHero from '../../components/Aboutpage/AboutHero/AboutHero';
import FounderSection from "../../components/Aboutpage/FounderSection/FounderSection";
import ClientStats from "../../components/Aboutpage/ClientStats/OurStory";
import AgencyCommitment from "../../components/Aboutpage/AgencyCommitment/AgencyCommitment";
// import CustomerInsights from "../../components/Aboutpage/Customer Insights/CustomerInsights";
// import StartupSection from "../../components/Aboutpage/StartupSection/StartupSection";
import TeamSection from "../../components/Aboutpage/TeamSection/TeamSection";
// import GrowthStories from "../../components/Aboutpage/GrowthStories/GrowthStories";

const Aboutpage = () => {
  return (
    <main className="w-full">
   
      <AboutHero />
      <FounderSection/>
      <ClientStats/>
      <AgencyCommitment/>
      {/* <CustomerInsights/>
      <StartupSection/> */}
      {/* <GrowthStories/> */}
      <TeamSection/>

    </main>
  );
};

export default Aboutpage;