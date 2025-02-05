import React from "react";
import GoalImage from "@/assests/Home/goal.png";
import Image from "next/image";

export default function Goal() {
  return (
    <section className="w-full bg-white">
      <div className="grid md:grid-cols-2 gap-8 py-14 items-center w-[81%] mx-auto ">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={GoalImage}
            alt="Illustration of a person with a flag standing on a light bulb"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl ">
              <span className="text-[#1e3a8a] font-branding font-bold">
                One goal. 8 decades.
              </span>
              <br />
              <span className="text-[#1e3a8a] mt-4">
                Infinite possibilities
              </span>
            </h1>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              In 1939, we set out on our goal to make India stand out on the
              world map.
            </h2>
            <p className="text-gray-700 text-lg text-justify tracking-wider leading-relaxed">
              From designing and manufacturing engineering solutions, the Nesco
              Group has diversified into multiple industries including
              Exhibitions, Real Estate, Hospitality, Events and Entertainment.
              Our inspirational growth over the last eight decades only shows
              how a vision can empower limitless possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
