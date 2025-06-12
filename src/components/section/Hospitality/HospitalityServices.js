import React from "react";
import Image from "next/image";

// Import service images
import weddingImage from "@/assests/nesco-business-page/nesco-food-elements/21.jpg";
import exhibitionsImage from "@/assests/nesco-business-page/nesco-food-elements/22.jpg";
import cateringImage from "@/assests/nesco-business-page/nesco-food-elements/23.jpg";

function HospitalityServices() {
  const services = [
    {
      title: "Weddings & Social Celebrations",
      image: weddingImage,
      alt: "Wedding and celebration catering services"
    },
    {
      title: "Exhibitions",
      image: exhibitionsImage,
      alt: "Exhibition catering services"
    },
    {
      title: "Outdoor Catering",
      image: cateringImage,
      alt: "Outdoor catering services"
    }
  ];

  return (
    <section className="w-full h-screen bg-[#0e129f] flex flex-col overflow-hidden">
      <div className="w-full flex-1 px-[5%] grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col h-[90%]">
            <div className="relative w-full flex-1 overflow-hidden">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
              />
            </div>
            <p
              className="text-center w-full py-4 italic text-white"
              style={{ fontFamily: "TimesNewRoman" }}
            >
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HospitalityServices;