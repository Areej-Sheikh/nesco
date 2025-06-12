import React from "react";

function RealtyIntro() {
  return (
    <section className="w-full h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left column - Main heading */}
      <div className="md:w-1/2 w-full p-[5%] flex flex-col justify-center">
        <h1 
          className="text-[2.5rem] md:text-[3rem] font-bold leading-tight mb-6"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          The future of construction.
          <br />
          Unbeatable quality, unbeatable value.
        </h1>
      </div>
      
      {/* Right column - Description */}
      <div className="md:w-1/2 w-full p-[5%] bg-gray-50 flex flex-col justify-center">
        <p 
          className="text-[1rem] md:text-[1.1rem] mb-5 leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          A robust real-estate provider, Nesco Realty uses the latest building technology and delivery mechanisms to create workspaces, homes and assembly spaces.
        </p>
        <p 
          className="text-[1rem] md:text-[1.1rem] leading-relaxed"
          style={{ fontFamily: "BrandingRegular" }}
        >
          Keeping abreast with new technology, the brand weaves world-class amenities and sustainability provisions into every project, with meticulous attention to detail. Customized to urban lifestyles, the brand metamorphoses ingenious design into structures of practicality and utility.
        </p>
      </div>
    </section>
  );
}

export default RealtyIntro;