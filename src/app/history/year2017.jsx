// components/historyYears/Year2017.js

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyXV from "@/assests/history/historyXV.png";
import XVI from "@/assests/history/XVI.png";
import XVII from "@/assests/history/XVII.png";

const Year2017 = () => {
  const [year2017InView, setYear2017InView] = React.useState(false);

  const { ref: year2017Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear2017InView(inView),
  });

  return (
    <>
      {/* Section 1 */}
      <motion.div
        ref={year2017Observer}
        initial={{ opacity: 0, y: 50 }}
        animate={year2017InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="year2017 flex flex-col relative z-30 md:bottom-[40vh] lg:bottom-[70vh]"
        data-year="2017"
      >
        <div className="contentDiv bg-[#001F9C] flex relative w-[50%] left-[8%] md:top-[5vh] lg:top-[20vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]">
          <div className="yearDiv flex relative sm:top-[15vh] md:top-[15vh] lg:top-[27vh] md:left-2 lg:left-4 w-fit h-fit">
            <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
              2017
            </p>
          </div>
          <div className="textDiv  flex relative sm:w-full md:w-full lg:w-[40vh] z-50 h-fit md:top-[27vh] lg:top-[45vh] sm:right-[40%] md:right-[40%] lg:right-[27%] p-2">
            <p className="sm:text-md md:text-lg lg:text-xl text-white">
              Nesco Events comes to life, delighting patrons with intellectual
              properties, exhibitions, and private events.
            </p>
          </div>
        </div>
        <div className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[35vh]">
          <Image
            src={historyXV}
            alt="Historical Image"
            width={600}
            height={500}
            className="md:w-[50%] lg:w-[40%] h-auto object-cover relative"
          />
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year2017InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="year2017 flex flex-col relative z-40 md:bottom-[40vh] lg:bottom-[70vh]"
        data-year="2017"
      >
        <div className="imgDiv flex relative left-[8%] z-10 lg:bottom-[10vh]">
          <Image
            src={XVI}
            alt="Historical Image"
            width={700}
            height={500}
            className="md:w-[50%] lg:w-[50%] h-auto object-cover relative"
          />
        </div>
        <div className="contentDiv flex relative bg-sky-500 md:w-[45%] lg:w-[45%] left-1/2 text-left md:bottom-[25vh] lg:bottom-[98vh] md:h-[35vh] lg:h-[60vh]">
          <div className="yearDiv flex relative md:left-1/2 lg:left-[50%] md:top-[20%] lg:top-1/4 h-fit">
            <p className="md:text-6xl lg:text-9xl text-white font-branding-bold">
              2017
            </p>
          </div>
          <div className="textDiv flex relative md:w-48 lg:w-72 h-fit md:top-1/2 lg:top-[40vh] lg:left-[15%]">
            <p className="md:text-lg lg:text-xl text-white text-justify">
              Rangilo Re, started in 2017, has become one of the top Navratri
              destinations of Mumbai.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year2017InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="year2017 flex flex-col relative md:bottom-[50vh] lg:bottom-[120vh] z-50"
        data-year="2017"
      >
        <div className="contentDiv bg-[#001F9C] flex relative w-[50%] left-[8%] md:top-[25vh] lg:top-[60vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]">
          <div className="yearDiv flex relative sm:top-[15vh] md:top-[15vh] lg:top-[27vh] left-2 w-fit h-fit">
            <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
              2017
            </p>
          </div>
          <div className="textDiv flex relative w-fit h-fit md:top-[30vh] lg:top-[45vh] sm:right-[40%] md:right-[40%] lg:right-[26%] p-2">
            <p className="sm:text-md md:text-lg lg:text-xl text-white">
              Added a premium lounge/bar “Dress Circle” towards the end of the
              year in Nesco Centre.
            </p>
          </div>
        </div>
        <div className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[35vh]">
          <Image
            src={XVII}
            alt="Historical Image"
            width={700}
            height={500}
            className="md:w-[50%] lg:w-[40%] h-auto object-cover relative"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Year2017;