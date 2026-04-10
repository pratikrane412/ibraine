import React from 'react';
// I have removed the space at the end of the path below
import ContactHero from '../../components/Contactpage/ContactHero/ContactHero'; 
import ContactSection from '../../components/Contactpage/ContactSection/ContactSection';
import MapSection from '../../components/Contactpage/MapSection/MapSection';
import FAQSection from '../../components/Contactpage/FAQSection/FAQSection';
import SocialFollow from '../../components/Contactpage/SocialFollow/SocialFollow';


const Contactpage = () => {
    return (
     <main className="w-full">
       <ContactHero /> 
       <ContactSection/>
       <MapSection/>
       <FAQSection/>
       <SocialFollow/>
     </main>
    );
};

export default Contactpage;