"use client";
import React from "react";
import Image from "next/image";

// Import hero background image
import foodImage from "@/assests/nesco-business-page/nesco-food-elements/20.jpg";
// Import the Nesco Foods logo
import foodsLogo from "@/assests/nesco-business-page/nesco-food-elements/19.png";

function HospitalityHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={foodImage}
          alt="Nesco Foods Gourmet Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Logo positioned in top right - with reduced scaling */}
      <div
        className="absolute bottom-8 md:right-[-200px] right-[0px] px-4 sm:px-8 py-1 sm:py-2 bg-white bg-opacity-70 z-20 flex items-center w-[250px] sm:w-[380px] md:w-[600px] sm:flex overflow-hidden rounded-l-[5rem]"
        // style={{ borderRadius: "5rem" }}
      >
        {/* Fixed-size container for the logo */}
        <div className="w-[180px] sm:w-[340px] md:w-[540px] relative flex items-center justify-start overflow-hidden">
          <Image
            src={foodsLogo}
            alt="Nesco Realty Logo"
            width={210}
            height={60}
            className="object-contain scale-[1.2] md:scale-[1.9] lg:scale-[1.95] transform-gpu md:ml-[5rem]"
            // style={{ marginLeft: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalityHero;
