"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import weldingImage from "@/assests/nesco-business-page/Indabrator-Elements/51.jpg";
// Import the Indabrator logo
import indabratorLogo from "@/assests/nesco-business-page/Indabrator-Elements/50.png";

function IndabratorHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={weldingImage}
          alt="Industrial welding with sparks"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Logo positioned for all screen sizes */}
      <div className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-70 z-20 flex items-center rounded-full w-[180px] sm:w-[320px] md:w-[500px] hidden sm:flex">
              <Image
                src={indabratorLogo}
                alt="nesco realty Logo"
                width={210}
                height={60}
                className="object-contain mr-auto ml-2 sm:ml-6"
              />
     </div>
    </section>
  );
}

export default IndabratorHero;