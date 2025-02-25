// components/historyYears/Year2016.js
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyXIV from "@/assests/history/historyXIV.png";

const Year2016 = () => {
  const [year2016InView, setYear2016InView] = React.useState(false);

  const { ref: year2016Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear2016InView(inView),
  });

  return (
    <motion.div
      ref={year2016Observer}
      initial={{ opacity: 0, y: 50 }}
      animate={year2016InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="year2016 flex flex-col relative"
      data-year="2016"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year2016InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="imgDiv flex relative left-[8%] z-10 lg:bottom-[10vh]"
      >
        <Image
          src={historyXIV}
          alt="Historical Image"
          width={700}
          height={500}
          className="md:w-[50%] lg:w-[50%] h-auto object-cover relative"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year2016InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="contentDiv flex relative bg-sky-500 md:w-[45%] lg:w-[35%] left-1/2 text-left md:bottom-[50vh] lg:bottom-[80vh] md:h-[60vh] lg:h-[80vh]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year2016InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="yearDiv flex relative md:left-[25%] lg:left-[30%] md:top-1/4 lg:top-1/3 h-fit"
        >
          <p className="md:text-6xl lg:text-8xl text-white font-branding-bold">
            2016
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={year2016InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="textDiv flex relative w-fit h-fit md:top-[25vh] lg:top-[50vh] right-6"
        >
          <p className="md:text-lg lg:text-xl text-white">
            The beginning of<br></br> Nesco Foods. Mumbai gains one<br></br>{" "}
            of the largest and most hygienic food<br></br> production
            centers in the non-flight<br></br> category, serving<br></br>{" "}
            50,000 meals per<br></br> day.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Year2016;