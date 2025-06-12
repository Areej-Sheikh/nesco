import React from "react";
import Image from "next/image";

// Import amenity icons
import parkingIcon from "@/assests/nesco-business-page/nesco-reality-elements/11.jpg";
import shoppingIcon from "@/assests/nesco-business-page/nesco-reality-elements/12.jpg";
import foodIcon from "@/assests/nesco-business-page/nesco-reality-elements/13.jpg";
import greenIcon from "@/assests/nesco-business-page/nesco-reality-elements/14.jpg";
import transportIcon from "@/assests/nesco-business-page/nesco-reality-elements/15.jpg";
import entertainmentIcon from "@/assests/nesco-business-page/nesco-reality-elements/16.jpg";
import sportsIcon from "@/assests/nesco-business-page/nesco-reality-elements/17.jpg";

function RealtyAmenities() {
  const amenities = [
    {
      icon: parkingIcon,
      title: "Ample Parking Space",
      description: "at any given time"
    },
    {
      icon: shoppingIcon,
      title: "Simplified Living",
      description: "with onsite shopping stores"
    },
    {
      icon: foodIcon,
      title: "Versatile Food & Beverage",
      description: "options, including open air cafes & food courts"
    },
    {
      icon: greenIcon,
      title: "Lush Open Spaces",
      description: "with over 5,000 trees"
    },
    {
      icon: transportIcon,
      title: "Transportation",
      description: "services available"
    },
    {
      icon: entertainmentIcon,
      title: "Prime Entertainment",
      description: "in proximity"
    },
    {
      icon: sportsIcon,
      title: "Unwind",
      description: "at Futsal Turf & Golfing Greens"
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col overflow-hidden bg-white">
      <h2 
        className="text-[2rem] font-bold px-[5%] pt-12 pb-8"
        style={{ fontFamily: "BrandingSemibold" }}
      >
        Amenities
      </h2>
      
      <div className="w-full flex-1 px-[5%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] mb-4">
              <Image
                src={amenity.icon}
                alt={amenity.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 
              className="text-[1rem] md:text-[1.2rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {amenity.title}
            </h3>
            <p 
              className="text-[0.8rem] md:text-[0.9rem] text-gray-600"
              style={{ fontFamily: "BrandingRegular" }}
            >
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RealtyAmenities;