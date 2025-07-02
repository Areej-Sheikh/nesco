import React from "react";
import Image from "next/image";

// Import display image
import displayImage from "@/assests/nesco-business-page/bec-elements/36.jpg";

function BecDisplay() {
  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden bg-white">
      <div className="w-full h-full relative">
        <Image
          src={displayImage}
          alt="Exhibition Floor Display"
          fill
          className="object-cover w-full"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          quality={100}
        />
      </div>
    </div>
  );
}

export default BecDisplay;
