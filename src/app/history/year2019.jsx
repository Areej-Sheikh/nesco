// components/historyYears/Year2019.js
"use client";
import { React, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import XVIII from "@/assests/history/XVIII.jpg";

// const Year2019 = () => {
//   const [year2019InView, setYear2019InView] = React.useState(false);

//   const { ref: year2019Observer } = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//     onChange: (inView) => setYear2019InView(inView),
//   });

//   return (
//     <motion.div
//       ref={year2019Observer}
//       initial={{ opacity: 0, y: 50 }}
//       animate={year2019InView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="year2019 flex flex-col relative md:flex-row md:bottom-[40vh] lg:bottom-[110vh] p-auto"
//       data-year="2019"
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={year2019InView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="imgDiv w-fit flex relative z-10 left-[5%]"
//       >
//         <Image
//           src={XVIII}
//           alt="Mid Image"
//           width={700}
//           height={500}
//           className="m-auto"
//         />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={year2019InView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="rightDiv bg-sky-500 sm:w-[50%] md:w-[65%] lg:w-[10%] flex relative right-[9%] lg:top-[30vh] md:top-[5vh] flex-grow"
//       >
//         <div className="yearDiv flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-left h-fit sm:top-10 md:top-[10vh] lg:top-1/3 p-6">
//           <p className="sm:text-6xl md:text-6xl lg:text-9xl p-2 text-white font-branding-bold">
//             2019
//           </p>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={year2019InView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="bottomContent flex relative sm:h-fit md:h-fit lg:h-fit sm:top-[55%] md:top-[50%]  lg:top-[70%] md:right-10 lg:left-[8%] text-right h-fit"
//         >
//           <p className="sm:text-md md:text-lg lg:text-2xl text-white">
//             Launched Nesco IT Park,
//             <br /> Tower 04 (11.20 lakh sq. ft. area licensed <br /> to
//             Marquee MNC clients)
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

const Year2019 = () => {
  const [Year2019InView, setYear2019InView] = useState(false);
  const { ref: Year2019Observer } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    onChange: (inView) => setYear2019InView(inView),
  });

  return (
    <motion.div
      ref={Year2019Observer}
      className="Year2019 mt-[14vh] flex flex-col sm:flex-col p-6 "
      initial={{ opacity: 0, x: 50 }}
      animate={Year2019InView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      data-year="2019"
    >
      <div className="container flex flex-col sm:flex-col md:flex-row lg:flex-row relative m-auto mt-4 mb-4  p-4">
        <motion.div
          className="imgDiv flex relative md:left-[15vh] lg:left-[15vh] z-20 sm:mt-6  right-0 flex-col sm:w-full md:w-[60%] lg:w-[50%] "
          initial={{ opacity: 0, x: 50 }}
          animate={Year2019InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Image
            src={XVIII}
            alt="Historic Event"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={Year2019InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="leftDiv flex flex-col sm:w-full md:w-[50%] lg:w-[50%] relative "
        >
          <div className="contentDiv flex flex-col relative gap-10 bg-cyan-400 md:top-[10vh] lg:top-[25vh] p-12 sm:left-0 md:left-[15%] lg:left-[0vh] lg:h-[60vh]">
            {/* Year Heading */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={Year2019InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" h-fit w-fit relative text-6xl md:text-8xl font-branding-bold lg:text-9xl text-white  sm:left-0 md:left-1/4 lg:left-1/2  sm:top-0 lg:top-[20vh]  m-2"
            >
              2019
            </motion.p>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={Year2019InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="bottomText flex relative sm:w-full md:w-[70%]  sm:left-0 md:left-1/3 lg:left-1/4 lg:top-[20vh]   p-2"
            >
              <p className="text-sm sm:text-lg md:text-lg lg:text-xl text-white font-poppins">
                Launched Nesco IT Park, Tower 04 (11.20 lakh sq. ft. area
                licensed <br /> to Marquee MNC clients)
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
      </div>
    </motion.div>
  );
};

export default Year2019;
