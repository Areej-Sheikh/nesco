// components/historyYears/Year1992.js
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import historyEleven from "@/assests/history/historyEleven.png";
import historyXII from "@/assests/history/historyXII.jpg";

const Year1992 = () => {
  const [year1992InView, setYear1992InView] = React.useState(false);

  const { ref: year1992Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1992InView(inView),
  });

  return (
    <motion.div
      ref={year1992Observer}
      initial={{ opacity: 0, y: 50 }}
      animate={year1992InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="year1992 relative flex flex-col mt-[5%]"
      data-year="1992"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={year1992InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="imgDiv flex relative z-10 top-10 left-1/3"
      >
        <Image
          src={historyXII}
          alt="Historical Image"
          width={800}
          height={500}
          className="w-full md:w-[60%] lg:w-[50%] h-auto object-cover relative"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={year1992InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="contentDiv bg-blue-900 flex flex-col relative sm:w-[30%] md:w-[60%] lg:w-[40%] sm:bottom-[10vh] md:bottom-[15vh] lg:bottom-[20vh] sm:left-[5%] md:left-[5%] lg:left-[10%] gap-2 p-4 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="yearDiv flex w-fit h-fit mt-48 bottom-6"
        >
          <p className="text-8xl text-blue-500">1992</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="iconDiv flex w-fit"
        >
          <Image
            src={historyEleven}
            alt="Historical Image"
            width={300}
            height={200}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={year1992InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text relative flex flex-wrap mt-2 text-white p-2"
        >
          <p className="text-xl leading-relaxed">
            The 200,000 square feet Bombay Exhibition Center<br></br>
            develops into the largest center<br></br>
            for exhibitions in the private sector in India.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Year1992;