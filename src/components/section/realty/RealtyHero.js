"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import buildingsImage from "@/assests/nesco-business-page/nesco-reality-elements/1.jpg";
// Import the Nesco Realty logo
import realtyLogo from "@/assests/nesco-business-page/nesco-reality-elements/2.png";

function RealtyHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={buildingsImage}
          alt="Nesco Realty Modern Buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>



      {/* Logo Container - unified style */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white bg-opacity-70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[350px] h-[180px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={realtyLogo}
            alt="Nesco Realty Logo"
            width={350}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default RealtyHero;
