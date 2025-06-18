import React from "react";
import Image from "next/image";

// Import display image
import factoryImg from "@/assests/nesco-business-page/Indabrator-Elements/59.jpg";

function HospitalityDisplay() {
  return (
    <section className="w-full h-screen overflow-hidden bg-white">
      <div className="w-full h-full relative">
        <Image
          src={factoryImg}
          alt="Authentic Indian cuisine display"
          fill
          className="object-cover w-full"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={100}
        />
      </div>
    </section>
  );
}

export default HospitalityDisplay;