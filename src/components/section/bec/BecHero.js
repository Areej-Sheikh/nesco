import React from "react";
import Image from "next/image";

// Import just the one hero background image
import businessMeeting from "@/assests/nesco-business-page/bec-elements/32.jpg";
// Import the BEC logo
import becLogo from "@/assests/nesco-business-page/bec-elements/31.png";

function BecHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={businessMeeting}
          alt="BEC Business Meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>



      {/* Logo Container - unified style */}
      <div className="absolute bottom-8 right-0 px-8 py-2 bg-white bg-opacity-70 z-20 flex items-center w-[520px] h-[182px] overflow-hidden rounded-l-[5rem]">
        <div className="w-[234px] h-[130px] relative flex items-center justify-center overflow-hidden">
          <Image
            src={becLogo}
            alt="Bombay Exhibition Center Logo"
            width={234}
            height={130}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default BecHero;
