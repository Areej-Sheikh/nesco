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



      {/* Logo Container - unified style */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white bg-opacity-70 z-20 flex items-center w-[520px] h-[182px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[234px] h-[130px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={indabratorLogo}
            alt="Indabrator Logo"
            width={234}
            height={130}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default IndabratorHero;
