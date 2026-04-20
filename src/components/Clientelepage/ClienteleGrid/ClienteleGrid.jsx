import React from 'react';
import { motion } from 'framer-motion';

const CLIENT_DATA = [
  { name: "11 Plus Center", src: "/client/11 plus center Logo.png", bg: "#EAF4FF" },
  { name: "AFC", src: "/client/AFC Logo.png", bg: "#FFF1F2" },
  { name: "Artigenius", src: "/client/Artigenius Logo.png", bg: "#F0FDF4" },
  { name: "Bilablng", src: "/client/billabong logo.jpg", bg: "#EFF6FF" },
  { name: "Bluehost", src: "/client/Bluehost Logo.png", bg: "#FFF7ED" },
  { name: "Bragpacker", src: "/client/bragpacker logo.png", bg: "#FDF2F8" },
  { name: "Choupette", src: "/client/Choupette Logo.jpg", bg: "#ECFEFF" },
  { name: "Cloud Dhobi", src: "/client/Cloud Dhobi Logo.jpg", bg: "#F0F9FF" },
  { name: "DLOK", src: "/client/DLOK Logo High Res.png", bg: "#F7FEE7" },
  { name: "Elevation Interior", src: "/client/Elevation Interior logo.png", bg: "#F0FDFA" },
  { name: "Finzard", src: "/client/Finzard Logo.png", bg: "#FEF3C7" },
  { name: "Garware", src: "/client/Garware Logo.png", bg: "#EEF2FF" },
  { name: "Great White", src: "/client/Great White Logo.png", bg: "#FCE7F3" },
  { name: "Hamza", src: "/client/Hamza Logo 1 1.png", bg: "#E0F2FE" },
  { name: "Headphone Zone", src: "/client/Headphone Zone Logo.png", bg: "#FFF7ED" },
  { name: "House of Khichdi", src: "/client/House Of Khichdi Logo.jpeg", bg: "#E0F2F1" },
  { name: "HUL", src: "/client/HUL Logo.jpg", bg: "#F3E8FF" },
  { name: "Laumiere", src: "/client/Laumiere Logo.png", bg: "#FEF9C3" },
  { name: "Live Pages", src: "/client/logo.png", bg: "#ECFCCB" },
  { name: "Lullabies", src: "/client/Lullabies Logo.png", bg: "#E0F7FA" },
  { name: "Livessentials", src: "/client/luvessentials logo.jpg", bg: "#F1F5F9" },
  { name: "Magma", src: "/client/Magma Logo.png", bg: "#FDF2F8" },
  { name: "Medicate ", src: "/client/Meditac Kits Logo.png", bg: "#FFF1F2" },
  { name: "Meetime", src: "/client/meetime logo.jpg", bg: "#F0FDFA" },
  { name: "Obesity Care", src: "/client/Obersity Care Logo.png", bg: "#EFF6FF" },
  { name: "Papita", src: "/client/Papita Logo.jpg", bg: "#FFF7ED" },
  { name: "Portxray", src: "/client/Portxray logo.jpg", bg: "#F0F9FF" },
  { name: "Rental Cars UAE", src: "/client/Rental Cars UAE logo.png", bg: "#F5F3FF" },
  { name: "Shop CJ", src: "/client/SHOP-CJ-Logo.png", bg: "#FEF3C7" },
  { name: "Sunnex", src: "/client/sunnex logo.jpg", bg: "#E0F2FE" },
  { name: "Thorny Affairs", src: "/client/Thorny Affairs Logo.png", bg: "#ECFEFF" },
  { name: "Treat Resort", src: "/client/Treat Resort logo.png", bg: "#F0FDF4" },
  { name: "Truck Suspension", src: "/client/Truck Suspension Logo.jpg", bg: "#FFF7ED" },
  { name: "Bottoms Love", src: "/client/Bottoms Love Logo.webp", bg: "#F0FDFA" },
  { name: "Emrik Cakes", src: "/client/Emrik Cakes Logo.webp", bg: "#FEF3C7" },
  { name: "Futurz4x4", src: "/client/Futurz4x4 Logo.webp", bg: "#E0F2FE" }
];


const ClienteleGrid = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Responsive Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {CLIENT_DATA.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 6) * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{ backgroundColor: client.bg }}
              className="group relative h-32 md:h-40 flex items-center justify-center p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Image with Greyscale Hover effect */}
              <img
                src={client.src}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-90 group-hover:scale-100"
              />

              {/* Tooltip on hover */}
              <div className="absolute bottom-2 translate-y-full group-hover:translate-y-0 transition-transform bg-black/80 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                {client.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClienteleGrid;