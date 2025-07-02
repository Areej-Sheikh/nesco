import React from "react";
import Image from "next/image";

// Import the pattern/decoration image
import decorativePattern from "@/assests/nesco-business-page/nesco-events/73.jpg";

function EventDisplay() {
  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white relative">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-[120%] h-[120%] sm:w-[130%] sm:h-[130%] md:w-[140%] md:h-[140%] relative">
          <Image
            src={decorativePattern}
            alt="Rangilo Re - Decorative Event Pattern"
            fill
            className="object-contain"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default EventDisplay;
