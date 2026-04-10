import React from "react";

import ClienteleHero from "../../components/Clientelepage/ClienteleHero/ClienteleHero";
import ClienteleGrid from "../../components/Clientelepage/ClienteleGrid/ClienteleGrid";
import ClienteleCTA from "../../components/Clientelepage/ClienteleCTA/ClienteleCTA";

const Clientelepage = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <ClienteleHero />
      <ClienteleGrid />
      <ClienteleCTA/>
    </main>
  );
};

export default Clientelepage;