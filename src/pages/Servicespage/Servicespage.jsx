
import React from 'react';
import ServicesHero from '../../components/Servicespage/ServicesHero/ServicesHero'; 
import ServicesGrid from '../../components/Servicespage/ServicesGrid/ServicesGrid'; 
import ContactSection from '../../components/Servicespage/Contact Section/ContactSection';


const Servicespage = () => {
    return (
     <main className="w-full">
       {/* Ensure this tag is here! */}
       <ServicesHero /> 
       <ServicesGrid/>
       <ContactSection/>


     </main>
    );
};

export default Servicespage;