import React from "react";

function RealtyIntro() {
  return (
    <div className="w-[90%] lg:min-h-screen bg-white flex flex-col md:flex-row mx-auto md:gap-14">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[50%] w-full flex flex-col justify-center py-8 md:py-12">
        <h1
          className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight text-center md:text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          <span className="block">The future of</span>
          <span className="block">construction.</span>
          <span className="block mt-1 md:mt-2">Unbeatable </span>
          <span className="block"> quality, unbeatable</span>
          <span className="block">value.</span>
        </h1>
      </div>

      {/* Right column - Description */}
      <div className="md:w-[50%] w-full py-8 md:py-12 bg-white flex flex-col justify-center">
        <div className="flex flex-col space-y-6 text-justify">
          <p
            className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-relaxed"
            style={{ fontFamily: "BrandingMedium" }}
          >
            A robust real-estate provider, Nesco Realty uses the latest building
            technology and delivery mechanisms to create workspaces, homes and
            assembly spaces.
          </p>
          <p
            className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] leading-relaxed"
            style={{ fontFamily: "BrandingMedium" }}
          >
            Keeping abreast with new technology, the brand weaves world-class
            amenities and sustainability provisions into every project, with
            meticulous attention to detail. Customized to urban lifestyles, the
            brand metamorphoses ingenious design into structures of practicality
            and utility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RealtyIntro;
