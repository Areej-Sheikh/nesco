"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import XIX from "@/assests/history/XIX.png";
import XX from "@/assests/history/XX.jpg";
import XXI from "@/assests/history/XXI.png";

const Year2023 = () => {
  const [year2023InView, setYear2023InView] = React.useState(false);

  const { ref: year2023Observer } = useInView({
    threshold: 0.01,
    triggerOnce: true,
    onChange: (inView) => setYear2023InView(inView),
  });

  return (
    <>
      {/* Section 1 */}
      <motion.div
        ref={year2023Observer}
        initial={{ opacity: 0, y: 50 }}
        animate={year2023InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="year2023 flex flex-col relative md:flex-row md:bottom-[20vh] lg:bottom-[60vh] p-auto"
        data-year="2023"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={year2023InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="imgDiv w-fit flex relative z-10 left-[5%]"
        >
          <Image
            src={XIX}
            alt="Mid Image"
            width={700}
            height={500}
            className="m-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={year2023InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rightDiv bg-sky-500 sm:w-[50%] md:w-[50%] lg:w-[10%] flex relative right-[9%] lg:top-[30vh] md:top-[5vh] flex-grow"
        >
          <div className="yearDiv flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-left h-fit sm:top-10 md:top-1/4 lg:top-1/3 p-6">
            <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
              2023
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={year2023InView ? { opacity: 1, x: 0 } : {}}            transition={{ duration: 0.8, delay: 0.2 }}
            className="bottomContent flex relative sm:h-fit md:h-fit lg:h-[30%] sm:top-[55%] md:top-[55%] lg:top-[70%] md:right-8 lg:left-[27%] lg:w-48 text-left h-fit"
          >
            <p className="sm:text-md md:text-lg lg:text-2xl text-white">
              Recognition as one of the Top 10 Brands in Real Estate
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        ref={year2023Observer}
        initial={{ opacity: 0, y: 50 }}
        animate={year2023InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="year2023 flex flex-col relative md:bottom-[10vh] lg:bottom-[2%]"
        data-year="2023"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={year2023InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="contentDiv bg-[#001F9C] flex relative w-[50%] left-[8%] md:top-[5vh] lg:top-[20vh] text-left p-4 sm:h-[50vh] md:h-[50vh] lg:h-[60vh]"
        >
          <div className="yearDiv flex relative sm:top-[15vh] md:top-[15vh] lg:top-[27vh] left-2 w-fit h-fit">
            <p className="sm:text-4xl md:text-7xl lg:text-8xl text-blue-400">
              2023
            </p>
          </div>

          <div className="textDiv flex relative w-fit h-fit md:top-[30vh] lg:top-[45vh] sm:right-[40%] md:right-[40%] lg:right-[26%] p-2">
            <p className="sm:text:md md:text-lg lg:text-xl text-white">
              Bombay Exhibition Centre (BEC) awarded for support extended to
              Intimasia 2023
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={year2023InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="imgDiv relative flex sm:left-[40%] md:left-[40%] lg:left-1/3 z-10 bottom-[50vh]"
        >
          <Image
            src={XX}
            alt="Historical Image"
            width={700}
            height={500}
            className="md:w-[50%] lg:w-[40%] h-auto object-cover relative"
          />
        </motion.div>
      </motion.div>

      <motion.div
        ref={year2023Observer}
        initial={{ opacity: 0, y: 50 }}
        animate={year2023InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="year2023 flex flex-col relative md:flex-row md:bottom-[20vh] lg:bottom-[3%] p-auto"
        data-year="2023"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={year2023InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="imgDiv w-fit flex relative z-10 left-[6%]"
        >
          <Image
            src={XXI}
            alt="Mid Image"
            width={700}
            height={500}
            className="m-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={year2023InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rightDiv bg-sky-500 sm:w-[50%] md:w-[65%] lg:w-[10%] flex relative right-[9%] lg:top-[30vh] md:top-[5vh] flex-grow"
        >
          <div className="yearDiv flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-left h-fit sm:top-10 md:top-1/4 lg:top-1/3 p-6">
            <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
              2023
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={year2023InView ? { opacity: 1, x: 0 } : {}}           transition={{ duration: 0.6, delay: 0.1 }}
            className="bottomContent  flex relative sm:h-fit md:h-fit lg:h-fit sm:top-[55%] md:top-[55%] lg:top-[70%] md:right-8 lg:left-[25%] lg:w-72 text-left h-fit"
          >
            <p className="sm:text-md md:text-lg lg:text-2xl text-white">
              Food Connoisseurs India Awards – Best Customer Experience in Food
              Court
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};


export default Year2023;