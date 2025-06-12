import React from "react";
import Image from "next/image";

// Import amenity icons
import parkingIcon from "@/assests/nesco-business-page/bec-elements/41.jpg";
import spacesIcon from "@/assests/nesco-business-page/bec-elements/42.jpg";
import foodIcon from "@/assests/nesco-business-page/bec-elements/43.jpg";
import greenSpacesIcon from "@/assests/nesco-business-page/bec-elements/44.jpg";
import securityIcon from "@/assests/nesco-business-page/bec-elements/45.jpg";
import internetIcon from "@/assests/nesco-business-page/bec-elements/46.jpg";
import eventsIcon from "@/assests/nesco-business-page/bec-elements/48.jpg";
import transportIcon from "@/assests/nesco-business-page/bec-elements/47.jpg";

function BecAmenities() {
  const amenitiesList = [
    {
      icon: parkingIcon,
      name: "Ample Parking Space",
      desc: "for over 2,000 vehicles at any given time"
    },
    {
      icon: spacesIcon,
      name: "Spaces of Limitless Possibility",
      desc: "that evolve to suit your every need"
    },
    {
      icon: foodIcon,
      name: "Versatile Food & Beverage options",
      desc: "including open air cafes & food courts"
    },
    {
      icon: greenSpacesIcon,
      name: "Lush Open Spaces",
      desc: "with over 1,000 trees"
    },
    {
      icon: securityIcon,
      name: "Watchtowers & high level",
      desc: "professional security"
    },
    {
      icon: internetIcon,
      name: "24/7 Internet",
      desc: "state of the art technology services"
    },
    {
      icon: eventsIcon,
      name: "75 events a year",
      desc: "hosted at our facilities"
    },
    {
      icon: transportIcon,
      name: "Transportation services",
      desc: "available to and from the BEC"
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col overflow-hidden bg-white">
      {/* Section Title - Match Realty spacing */}
      <h2 
        className="text-[2rem] font-bold px-[5%] pt-12 pb-8"
        style={{ fontFamily: "BrandingSemibold" }}
      >
        Amenities
      </h2>
      
      {/* Amenities Grid - Match Realty spacing */}
      <div className="w-full flex-1 px-[5%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {amenitiesList.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-[60px] h-[60px] mb-4">
              <Image
                src={item.icon}
                alt={item.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 
              className="text-[1rem] md:text-[1.2rem] font-bold mb-2 text-[#fdc95d]"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              {item.name}
            </h3>
            <p 
              className="text-[0.8rem] md:text-[0.9rem] text-[#fdc95d]"
              style={{ fontFamily: "BrandingRegular" }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BecAmenities;