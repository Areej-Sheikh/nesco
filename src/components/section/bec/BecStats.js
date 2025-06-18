import React from "react";
import Image from "next/image";

// Import stat icons
import spaceIcon from "@/assests/nesco-business-page/bec-elements/37.png";
import visitorsIcon from "@/assests/nesco-business-page/bec-elements/38.png";
import hostIcon from "@/assests/nesco-business-page/bec-elements/39.png";

function BecStats() {
  const stats = [
    {
      icon: spaceIcon,
      value: "60k",
      label: "Sq.m of space",
    },
    {
      icon: visitorsIcon,
      value: "20mn",
      label: "visitors a year",
    },
    {
      icon: hostIcon,
      value: "#1 Host",
      label: "for most exhibitions in India",
    },
  ];

return (
    <section className="w-full h-screen flex items-center justify-center bg-[#fab62a]">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            {/* Responsive image size - larger on desktop */}
            <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] mb-6">
              <Image
                src={stat.icon}
                alt={`${stat.label} icon`}
                width={360}
                height={360}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 
              className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {stat.value}
            </h3>
            <p 
              className="text-center text-[0.9rem] sm:text-[1rem]"
              style={{ fontFamily: "BrandingRegular" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BecStats;