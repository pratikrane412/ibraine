import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../../components/Aboutpage/AboutHero/AboutHero';
import FounderSection from "../../components/Aboutpage/FounderSection/FounderSection";
import ClientStats from "../../components/Aboutpage/ClientStats/OurStory";
import AgencyCommitment from "../../components/Aboutpage/AgencyCommitment/AgencyCommitment";
import TeamSection from "../../components/Aboutpage/TeamSection/TeamSection";

// Animation variant sliding down from top for Hero
const heroVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' } 
  }
};

// Animation variant sliding up for scroll-triggered sections
const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const Aboutpage = () => {
  return (
    <main className="w-full bg-white font-sans antialiased text-slate-900 selection:bg-[#F58220] selection:text-white">
      {/* Appears immediately on page load from top */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <AboutHero />
      </motion.div>

      {/* Appears when scrolled into view right at the end of the previous component */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
      >
        <FounderSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
      >
        <ClientStats />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
      >
        <AgencyCommitment />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={scrollVariants}
      >
        <TeamSection />
      </motion.div>
    </main>
  );
};

export default Aboutpage;