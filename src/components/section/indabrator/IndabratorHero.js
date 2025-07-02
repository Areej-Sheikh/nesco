"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import weldingImage from "@/assests/nesco-business-page/Indabrator-Elements/51.jpg";
// Import the Indabrator logo
import indabratorLogo from "@/assests/nesco-business-page/Indabrator-Elements/50.png";

function IndabratorHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute bottom-8 md:right-[-200px] right-[0px] px-4 sm:px-8 py-1 sm:py-2 bg-white bg-opacity-70 z-20 flex items-center w-[250px] sm:w-[380px] md:w-[600px] sm:flex overflow-hidden rounded-l-[5rem]">
        <div className="w-[180px] sm:w-[340px] md:w-[540px] relative flex items-center justify-start overflow-hidden">
          <Image
            src={indabratorLogo}
            alt="Nesco Realty Logo"
            width={210}
            height={60}
            className="object-contain scale-[1.5] md:scale-[1.8] lg:scale-[1.8] transform-gpu md:ml-[5rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default IndabratorHero;
