import React from "react";
import "./about.css";
import Navbar from "@/components/layout/navbar/Navbar";

const page = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="imgcontainer relative">
        <img
          src="https://images.pexels.com/photos/7889239/pexels-photo-7889239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about"
          className="img w-full"
        />
        <div className="sideBox bg-violet-900  sm:w-[80%] md:w-[350px] lg:w-[400px] z-50 absolute top-1/2 left-[15vh] transform -translate-x-1/2 -translate-y-1/2 py-10 pr-0 pl-10 opacity-85 flex justify-center items-center flex-wrap ">
          <p className="text-white sm:text-xl md:text-2xl font-branding-medium ">
            To be constantly
          </p>

          <p className="text-blue-300 text-xl sm:text-2xl md:text-3xl font-branding-medium">
            {" "}
            dynamic is growth.
          </p>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-branding-medium">
            To be constantly
          </p>
          <p className="text-blue-300 text-xl sm:text-2xl md:text-3xl  font-branding-medium">
            learning is wisdom
          </p>
        </div>
      </div>

      <div className="text flex flex-col md:flex-row">
        <div className="leftText md:w-1/2 px-2 md:px-16 py-8">
          <p class="text-blue-800 text-3xl md:text-6xl  font-branding-semibold px-[20%] py-[40%]">
            Businesses
            <br /> evolve,so do <br /> mindsets. Only <br />
            beliefs remains <br /> unchanged.
          </p>
        </div>

        <div className="rightText  px-4 md:px-16 py-8 text flex flex-row  md:flex-col"> 
          <p class="text-gray-700 text-base md:text-2xl font-branding-medium p-4 text-justify ">
            With business verticals as varied as exhibitions, events,
            hospitality, MICE, and realty, our steady expansion augments our
            growth as we watch several new ideas find form.
            <br />
            <br />
            With the continued expansion of the Bombay Exhibition Center, there
            is now a versatile solution for any trade fair. The BEC is already
            India’s largest exhibition venue in the private sector, hosting all
            the Messe’s as well as organizers from across the globe.
            <br />
            <br /> Nesco Realty carved a new benchmark with its premium IT Park.
            A self-sustained facility, the Park is laid out over several million
            square feet. It accommodates the world’s leading multinationals such
            as HSBC, KPMG, PWC, MSCI, BlackRock, and several others. The
            division is now looking to offer maxi-
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
