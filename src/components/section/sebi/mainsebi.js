"use client";
import Navbar from "@/components/layout/navbar/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import sebiImage from "@/assests/sebi/image.png";
import SebiDetails from "./sebiDetails";

function Mainsebi() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Image
          src={sebiImage}
          alt="Sebi Image"
          className="w-full object-cover mx-auto h-screen"
        />
      </div>
      <div className="mt-14 flex flex-wrap justify-center items-center mb-32">
        <SebiDetails />
      </div>
    </>
  );
}

export default Mainsebi;
