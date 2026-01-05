import SlidedownCard from "@/components/common/slidedownCard/SlidedownCard";
import React from "react";
import WorldImage from "@/assests/contact/33.png";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  const data = [
    {
      title: "Bombay Exhibition Center",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "022 66450123",
        contact: "contact@bombayexhibitioncenter.in",
      },
    },
    {
      title: "Nesco Events",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "+91 99099 44444",
        contact: "events@nesco.co.in",
      },
    },
    {
      title: "Nesco Foods",
      description: {
        address1: "Nesco Centre, Hall No. 1",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "022 66450123",
        contact: "foods@nesco.in",
      },
    },
    {
      title: "Nesco Realty",
      description: {
        address1: "Nesco Centre, Hall No. 3",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "022 66450123",
        contact: "contact@nescoreality.in",
      },
    },
    {
      title: "Indabrator",
      description: {
        address1: "Indabrator, Nesco Limited",
        address2: "Western Express Highway",
        city: "Goregaon (East) Mumbai 400063",
        phone1: "+91 99099 44443",
        contact: "Machines: indabrator.sales@nesco.in | Spares: indabrator.spares@nesco.in",
      },
    },
  ];

  return (
    <div className="bg-[#0A2B72] w-full xl:py-36 py-20 flex flex-col justify-between items-center relative overflow-hidden">
      <div className="absolute z-0 w-full h-full lg:top-0 md:top-[20%] top-[25%]">
        <Image
          src={WorldImage}
          alt="World Image"
          className="w-[90%] object-cover mx-auto "
        />
      </div>
      <div>
        <h1 className="font-branding-medium text-white text-6xl z-10 relative">
          Contact Us
        </h1>
      </div>
      <div className="w-full flex flex-col md:items-center mt-32 z-10 relative">
        <SlidedownCard data={data} />
      </div>
    </div>
  );
}

export default Contact;
