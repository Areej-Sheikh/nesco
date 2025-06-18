import React from "react";
import Image from "next/image";

// Import space images
import residentialImage from "@/assests/nesco-business-page/nesco-reality-elements/3.jpg";
import workspaceImage from "@/assests/nesco-business-page/nesco-reality-elements/4.jpg";
import assemblyImage from "@/assests/nesco-business-page/nesco-reality-elements/5.jpg";

function RealtySpaces() {
  const spaces = [
    {
      title: "Workspaces",
      image: residentialImage,
      alt: "Modern residential living space"
    },
    {
      title: "Residential Spaces",
      image: workspaceImage,
      alt: "Professional workspace environment"
    },
    {
      title: "Assembly Spaces",
      image: assemblyImage,
      alt: "Assembly and event spaces"
    }
  ];

  return (
    <section className="w-full h-screen bg-[#0e129f] flex flex-col overflow-hidden">
      {/* Title */}
      <div className="w-full py-8 px-[5%] flex justify-center items-center">
      </div>
      
      {/* Spaces Grid */}
      <div className="w-full flex-1 px-[5%] grid grid-cols-1 md:grid-cols-3 gap-4">
        {spaces.map((space, index) => (
          <div key={index} className="relative w-full h-full overflow-hidden">
            <Image
              src={space.image}
              alt={space.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/30 flex items-end">
              <p 
                className="text-white text-center w-full py-4 bg-blue-900/80 italic"
                style={{ fontFamily: "TimesNewRoman" }}
              >
                {space.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RealtySpaces;