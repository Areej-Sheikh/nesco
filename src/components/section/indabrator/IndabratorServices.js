import React from "react";
import Image from "next/image";

// Import service images
import shotBlastingImg from "@/assests/nesco-business-page/Indabrator-Elements/52.jpg";
import airPollutionImg from "@/assests/nesco-business-page/Indabrator-Elements/53.jpg";
import sparesImg from "@/assests/nesco-business-page/Indabrator-Elements/54.jpg";
import abrasivesImg from "@/assests/nesco-business-page/Indabrator-Elements/55.jpg";
import omImg from "@/assests/nesco-business-page/Indabrator-Elements/56.jpg";
import amcImg from "@/assests/nesco-business-page/Indabrator-Elements/57.jpg";
import paintingImg from "@/assests/nesco-business-page/Indabrator-Elements/58.jpg";

function IndabratorServices() {
  const services = [
    {
      title: "Shot-Blasting Machines",
      image: shotBlastingImg,
      alt: "Shot-Blasting Machine"
    },
    {
      title: "Air Pollution Control Systems",
      image: airPollutionImg,
      alt: "Air Pollution Control System"
    },
    {
      title: "Spares",
      image: sparesImg,
      alt: "Indabrator Spares"
    },
    {
      title: "Abrasives",
      image: abrasivesImg,
      alt: "Industrial Abrasives"
    },
    {
      title: "O & M",
      image: omImg,
      alt: "Operations & Maintenance"
    },
    {
      title: "AMC",
      image: amcImg,
      alt: "Annual Maintenance Contract"
    },
    {
      title: "Painting Systems",
      image: paintingImg,
      alt: "Industrial Painting Systems"
    }
  ];

  return (
    <section className="w-full h-screen bg-[#0e129f] flex flex-col overflow-hidden">
      <div className="w-full flex-1 px-[5%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 py-12 mt-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-[190px] sm:h-[230px] md:h-[250px] mb-3 overflow-hidden rounded-md">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all"></div>
            </div>
            <p
              className="text-center w-full py-2 text-white text-[1rem] md:text-[1rem]"
              style={{ fontFamily: "BrandingRegular" }}
            >
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndabratorServices;