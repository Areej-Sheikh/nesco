"use client";
import React from "react";
import { IoEllipseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Year1952 = () => {
  const [year1952InView, setYear1952InView] = React.useState(false);

  const { ref: year1952Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear1952InView(inView),
  });

  return (
    <motion.div
      ref={year1952Observer}
      className="1952Div mt-[3%] w-fit relative p-4 ml-auto  h-fit flex flex-col md:flex-row justify-center items-center  transition-all ease-in-out duration-300 hover:translate-y-1   "
      data-year="1952"
      initial={{ opacity: 0, y: 50 }}
      animate={year1952InView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="contentDiv p-4 sm:p-6 md:p-8 m-2 flex flex-col items-left relative h-fit"
        initial={{ opacity: 0, x: -100 }}
        animate={year1952InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        {[
          "Empress Iron Works Ltd / Acme Mfg Co",
          "Ltd / Khandelwal Udyog Ltd / Glass",
          "Lined Equipment Co Ltd / Indian Furnace",
          "Co Ltd / Ceramics Mfg Co / Mapara",
          "Parekh Ltd / Electric Instruments Mfg",
          "Co Ltd / Agro Precision Co Ltd / Millars",
          "Construction Machinery Ltd",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="bg-blue-700 m-2 p-2 sm:p-3 md:p-4 text-lg sm:text-xl md:text-2xl text-white font-poppins rounded-md max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={year1952InView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="iconDiv ml-auto flex items-center justify-center relative w-fit"
        initial={{ opacity: 0, x: 100 }}
        animate={year1952InView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <IoEllipseOutline
          className="w-[80px] h-[80px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
          color="cyan"
          strokeWidth={1}
        />
        <span className="absolute text-blue-600 text-center w-fit flex flex-col items-center">
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={year1952InView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            1952
          </motion.p>
          <motion.p
            className="w-60 sm:w-72 md:w-80 lg:w-96 p-2 sm:p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={year1952InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            By this time, SEC was taking over & reviving the fortunes of
            several struggling companies to build an engineering powerhouse.
          </motion.p>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Year1952;