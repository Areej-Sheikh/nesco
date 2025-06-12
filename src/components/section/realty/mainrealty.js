"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

// Import all Realty components
import RealtyHero from "./RealtyHero";
import RealtyIntro from "./RealtyIntro";
import RealtySpaces from "./RealtySpaces";
import RealtyCollaboration from "./RealtyCollaboration";
import RealtyStats from "./RealtyStats";
import RealtyInitiative from "./RealtyInitiative";
import RealtyAmenities from "./RealtyAmenities";
import RealtyProfile from "./RealtyProfile";
import RealtyEnquiries from "./RealtyEnquiries";

function MainRealty() {
  const [activeSlide, setActiveSlide] = useState(0);

  const Children = [
    {
      comp: <RealtyHero />,
      classCss: "section",
    },
    {
      comp: <RealtyIntro />,
      classCss: "section",
    },
    {
      comp: <RealtySpaces />,
      classCss: "section",
    },
    {
      comp: <RealtyCollaboration />,
      classCss: "section",
    },
    {
      comp: <RealtyStats />,
      classCss: "section",
    },
    {
      comp: <RealtyInitiative />,
      classCss: "section",
    },
    {
      comp: <RealtyAmenities />,
      classCss: "section",
    },
    {
      comp: <RealtyProfile />,
      classCss: "section",
    },
    {
      comp: <RealtyEnquiries />,
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper activeSlide={activeSlide}>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainRealty;