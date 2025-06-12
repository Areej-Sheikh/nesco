"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import buildingsImage from "@/assests/nesco-business-page/nesco-reality-elements/1.jpg";
// Import the Nesco Realty logo
import realtyLogo from "@/assests/nesco-business-page/nesco-reality-elements/2.png";

function RealtyHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={buildingsImage}
          alt="Nesco Realty Modern Buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Logo positioned in top right */}
      <div className="absolute bottom-8 sm:right-[-200px] right-[-80px] px-4 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-70 z-20 flex items-center rounded-full w-[180px] sm:w-[320px] md:w-[500px]">
        <Image
          src={realtyLogo}
          alt="nesco realty Logo"
          width={210}
          height={60}
          className="object-contain mr-auto ml-2 sm:ml-6"
        />
      </div>
    </section>
  );
}

export default RealtyHero;