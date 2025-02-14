import React from "react";
// import "./Overview.css";
import Navbar from "@/components/layout/navbar/Navbar";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import Pagewrapper from "@/components/layout/pagewrapper";
import OverviewEvolve from "./OverviewEvolve";
import OverviewBanner from "./OverviewBanner";

const MainOverview = () => {
  const Children = [
    {
      comp: <OverviewBanner />,
      classCss: "section",
    },
    {
      comp: <OverviewEvolve />,
      classCss: "section",
    },
  ];

  return (
    <Pagewrapper>
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
};

export default MainOverview;

// <div className="about">
//   <Navbar />
//   <div className="imgcontainer relative">
//     <img
//       src="https://images.pexels.com/photos/7889239/pexels-photo-7889239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//       alt="about"
//       className="img w-full"
//     />
//   </div>

//   <div className="text flex flex-col md:flex-row">
//     <div className="leftText md:w-1/2 px-2 md:px-16 py-8">
//       <p class="text-blue-800 text-3xl md:text-6xl  font-branding-semibold px-[20%] py-[40%]">
//         Businesses
//         <br /> evolve,so do <br /> mindsets. Only <br />
//         beliefs remains <br /> unchanged.
//       </p>
//     </div>

//     <div className="rightText  px-4 md:px-16 py-8 text flex">
//       <p class="text-gray-700 text-base md:text-2xl font-branding-medium p-4  ">
//         With business verticals as varied as exhibitions, events,
//         hospitality, MICE, and realty, our steady expansion augments our
//         growth as we watch several new ideas find form.
//         <br />
//         <br />
//         With the continued expansion of the Bombay Exhibition Center, there
//         is now a versatile solution for any trade fair. The BEC is already
//         India’s largest exhibition venue in the private sector, hosting all
//         the Messe’s as well as organizers from across the globe.
//         <br />
//         <br /> Nesco Realty carved a new benchmark with its premium IT Park.
//         A self-sustained facility, the Park is laid out over several million
//         square feet. It accommodates the world’s leading multinationals such
//         as HSBC, KPMG, PWC, MSCI, BlackRock, and several others. The
//         division is now looking to offer maxi-
//       </p>
//     </div>
//   </div>
// </div>
