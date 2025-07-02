import React from "react";
import Image from "next/image";

// Import display image
import factoryImg from "@/assests/nesco-business-page/Indabrator-Elements/59.jpg";

function HospitalityDisplay() {
  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden bg-white relative">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-full h-full relative">
          <Image
            src={factoryImg}
            alt="Authentic Indian cuisine display"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default HospitalityDisplay;
