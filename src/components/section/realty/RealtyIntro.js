import React from "react";

function RealtyIntro() {
  return (
    <div className="w-[90%] lg:min-h-screen bg-white flex flex-col md:flex-row mx-auto md:gap-14">
      {/* Left column - Main heading with improved responsive text */}
      <div className="md:w-[50%] w-full flex flex-col justify-center py-8 md:py-12">
        <h1
          className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold leading-[1.1] sm:leading-[1.15] mb-4 sm:mb-6 text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          The future of construction. Unbeatable quality, unbeatable value.
        </h1>
      </div>

      {/* Right column - Description */}
      <div className="md:w-[50%] w-full py-8 md:py-12 bg-white flex flex-col justify-center">
        <div className="flex flex-col space-y-6 text-justify">
          <p
            className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800"
            style={{ fontFamily: "BrandingMedium" }}
          >
            A robust real-estate provider, Nesco Realty uses the latest building technology and delivery mechanisms to create workspaces, homes and assembly spaces.
          </p>
          <p
            className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800"
            style={{ fontFamily: "BrandingMedium" }}
          >
            Keeping abreast with new technology, the brand weaves world-class amenities and sustainability provisions into every project, with meticulous attention to detail. Customized to urban lifestyles, the brand metamorphoses ingenious design into structures of practicality and utility.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RealtyIntro;
