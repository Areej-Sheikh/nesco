import React from "react";
import Image from "next/image";

// Import unit images
import factoryImg from "@/assests/nesco-business-page/Indabrator-Elements/59.jpg";
import unit1Img from "@/assests/nesco-business-page/Indabrator-Elements/60.jpg";
import unit2Img from "@/assests/nesco-business-page/Indabrator-Elements/61.jpg";

function IndabratorUnits() {
  return (
    <section className="w-full h-screen bg-white flex flex-col overflow-hidden">
      <div className="w-full py-8 px-[5%]">
        <h2 
          className="text-[2rem] md:text-[2.2rem] font-bold"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Our Manufacturing Units
        </h2>
      </div>
      
      {/* Factory Image */}
      <div className="relative w-full h-[250px] md:h-[300px] mb-8">
        <Image
          src={factoryImg}
          alt="Indabrator Factory"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Units Description */}
      <div className="w-full flex-1 px-[5%] flex flex-col md:flex-row gap-6">
        {/* Unit 1 */}
        <div className="md:w-1/2 p-4 bg-gray-50 rounded-md flex flex-col h-[300px] md:h-auto">
          <div className="flex items-center mb-4">
            <h3 
              className="text-[1.4rem] font-bold"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Works1
            </h3>
            <span className="text-sm text-gray-500 ml-2">Vataman, Gujarat</span>
          </div>
          
          <p 
            className="text-[0.95rem] leading-relaxed flex-grow"
            style={{ fontFamily: "BrandingRegular" }}
          >
            The Vataman units are situated within 31 acres of green expanses. At this location, over 1500 skilled workers are engaged in manufacturing of shot-blasting machines and other equipment.
            <br /><br />
            The unit produces numerous shot blasting, painting and air pollution control equipments every year. The R&D Centre facilitates in creating customized solutions for all applications.
          </p>
        </div>
        
        {/* Unit 2 */}
        <div className="md:w-1/2 p-4 bg-gray-50 rounded-md flex flex-col h-[300px] md:h-auto">
          <div className="flex items-center mb-4">
            <h3 
              className="text-[1.4rem] font-bold"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Works2
            </h3>
            <span className="text-sm text-gray-500 ml-2">Karamsad, Gujarat</span>
          </div>
          
          <p 
            className="text-[0.95rem] leading-relaxed flex-grow"
            style={{ fontFamily: "BrandingRegular" }}
          >
            The Indabrator foundry and abrasives plant is located within 60 acres of land in Karamsad, Gujarat. Located at the of Indra Project manufacturing complex, this facility houses well-equipped testing facilities and physical and chemical tests laboratories.
            <br /><br />
            The state-of-the-art alloy iron foundry enables the production of high-density abrasives with mounted shot testing chambers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndabratorUnits;