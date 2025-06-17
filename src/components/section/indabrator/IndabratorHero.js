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
            alt="Nesco Foods Gourmet Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Logo positioned in top right */}
        <div className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-70 z-20 flex items-center rounded-full w-[180px] sm:w-[320px] md:w-[500px]">
          <Image
            src={indabratorLogo}
            alt="Nesco Foods Logo"
            width={210}
            height={60}
            className="object-contain mr-auto ml-2 sm:ml-6"
          />
        </div>
      </section>
    );
}

export default IndabratorHero;