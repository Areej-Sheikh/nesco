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
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Logo positioned in top right - size unchanged */}
      <div
        className="absolute bottom-8 md:right-[-200px] right-[0px] px-4 sm:px-8 py-1 sm:py-2 bg-white bg-opacity-70 z-20 flex items-center w-[250px] sm:w-[380px] md:w-[600px] sm:flex overflow-hidden rounded-l-[5rem]"
        // style={{ borderRadius: "5rem" }}
      >
        {/* Fixed-size container for the logo */}
        <div className="w-[180px] sm:w-[340px] md:w-[540px] relative flex items-center justify-start overflow-hidden">
          <Image
            src={realtyLogo}
            alt="Nesco Realty Logo"
            width={210}
            height={60}
            className="object-contain scale-[1.65] sm:scale-[1.8] md:scale-[1.95] transform-gpu md:ml-[5rem]"
            // style={{ marginLeft: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RealtyHero;
