"use client";
import React from "react";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import CareerBanner from "./careerBanner";
import CareerPassion from "./careerPassion";
import CareerCulture from "./CareerCulture";
import CareerCommitment from "./careerCommitment";
import CareerTeam from "./CareerTeam";
import CareerVoice from "./careerVoice";
import CareerJoin from "./careerJoin";

function MainCareers() {
  const Children = [
    {
      comp: <CareerBanner />,
      classCss: "section",
    },
    {
      comp: <CareerPassion />,
      classCss: "section header_purple mt-0 lg:mt-10",
    },
    {
      comp: <CareerCulture />,
      classCss: "section header_purple mt-0 lg:mt-10",
    },
    {
      comp: <CareerCommitment />,
      classCss: "section header_purple mt-0 lg:mt-10",
    },
    {
      comp: <CareerTeam />,
      classCss: "section header_purple mt-0 lg:mt-10",
    },
    {
      comp: <CareerVoice />,
      classCss: "section header_purple mt-0 lg:mt-10",
    },
    {
      comp: <CareerJoin />,
      classCss: "section header_purple mt-0 lg:mt-10",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default MainCareers;
