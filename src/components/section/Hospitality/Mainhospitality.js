"use client";
import React, { useState } from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";

// Import all Hospitality components
import HospitalityHero from "./HospitalityHero";
import HospitalityIntro from "./HospitalityIntro";
import HospitalityServices from "./HospitalityServices";
import HospitalityDisplay from "./HospitalityDisplay";
import HospitalityStats from "./HospitalityStats";
import HospitalityRoot from "./HospitalityRoot";
import HospitalityFacilities from "./HospitalityFacilities";
import HospitalityProfile from "./HospitalityProfile";

function MainHospitality() {
  const [activeSlide, setActiveSlide] = useState(0);

  const Children = [
    {
      comp: <HospitalityHero />,
      classCss: "section",
    },
    {
      comp: <HospitalityIntro />,
      classCss: "section",
    },
    {
      comp: <HospitalityServices />,
      classCss: "section",
    },
    {
      comp: <HospitalityDisplay />,
      classCss: "section",
    },
    {
      comp: <HospitalityStats />,
      classCss: "section",
    },
    {
      comp: <HospitalityRoot />,
      classCss: "section",
    },
    {
      comp: <HospitalityFacilities />,
      classCss: "section",
    },
    {
      comp: <HospitalityProfile />,
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper activeSlide={activeSlide}>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainHospitality;