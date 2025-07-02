import React from "react";
import Image from "next/image";

// Import service background image
import microphoneImg from "@/assests/nesco-business-page/nesco-events/70.jpg";

function EventServices() {
  return (
    <div className="relative w-full lg:h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={microphoneImg}
          alt="Professional microphone setup"
          fill
          className="object-cover"
          // priority
          // sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text content overlay */}
      <div className="relative z-10 h-full flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-0">
        <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl text-white">
          <h2
            className="text-[2rem] leading-tight sm:text-[2.5rem] sm:leading-tight md:text-[3.5rem] md:leading-tight lg:text-[6rem] lg:leading-tight font-bold mb-4 sm:mb-5 md:mb-6"
            style={{ fontFamily: "BrandingSemibold" }}
          >
            Where Every
            <br />
            Detail
            <br />
            Matters
          </h2>
        </div>
      </div>
    </div>
  );
}

export default EventServices;
