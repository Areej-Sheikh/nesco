import React from "react";

function EventIntro() {
  return (
    <div className="w-[90%] lg:min-h-screen bg-white flex flex-col md:flex-row mx-auto md:gap-14">
      {/* Left column - Main heading */}
      <div className="md:w-[50%] w-full flex flex-col justify-center py-8 md:py-12">
        <h1
          className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold leading-[1.1] sm:leading-[1.15] mb-4 sm:mb-6 text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Curating extravagant and breath taking experiences from concept to execution
        </h1>
      </div>

      {/* Right column - Description */}
      <div className="md:w-[50%] w-full py-8 md:py-12 bg-white flex flex-col justify-center">
        <p
          className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800 text-justify"
          style={{ fontFamily: "BrandingMedium" }}
        >
          We specialize in designing and delivering extraordinary experiences tailored to your vision. From the initial spark of an idea to the final, flawless execution, we handle every detail with precision, creativity, and a passion for excellence—turning once-in-a-lifetime moments into unforgettable realities.
        </p>
      </div>
    </div>
  );
}

export default EventIntro;
