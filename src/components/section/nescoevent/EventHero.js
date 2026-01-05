"use client";
import React from "react";
import Image from "next/image";

// Import hero background image (using one from the nesco-events folder)
import eventBackground from "@/assests/nesco-business-page/nesco-events/68.jpg";
import nescoEventsLogo from "@/assests/nesco-business-page/nesco-events/69.png";

function EventHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={eventBackground}
          alt="Nesco Events Concert Crowd"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>



      {/* Logo Container - unified style */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white bg-opacity-70 z-20 flex items-center w-[480px] h-[200px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[350px] h-[180px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={nescoEventsLogo}
            alt="Nesco Events Logo"
            width={350}
            height={180}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default EventHero;
