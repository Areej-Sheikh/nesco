import React from "react";

function IndabratorIntro() {
  return (
    <section className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading */}
      <div className="md:w-1/2 w-full p-[5%] flex flex-col justify-center">
        <h1 
          className="text-[2.5rem] md:text-[3rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          A pioneer of dreams that will engineer tomorrow.
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-1/2 w-full p-[5%] bg-gray-50 flex flex-col justify-center">
        <p 
          className="text-[1rem] md:text-[1.1rem] mb-5 leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          Indabrator is an ideal service provider in the engineering segment. The company believes in a single-window solution for all surface-preparation needs. This includes machines, spares and abrasives.
        </p>
        <p 
          className="text-[1rem] md:text-[1.1rem] leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          Indabrator's leadership is defined by its total immersion across the value chain with its own foundry and state-of-the-art manufacturing unit.
        </p>
      </div>
    </section>
  );
}

export default IndabratorIntro;