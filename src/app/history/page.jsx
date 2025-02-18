import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import Image from "next/image";
import top from "@/assests/history/top.png";
import mid from "@/assests/history/mid.png";
import historyOne from "@/assests/history/historyOne.png";
import historyTwo from "@/assests/history/historyTwo.png";

const page = () => {
  const years = [
    1939, 1952, 1956, 1957, 1958, 1960, 1962, 1964, 1966, 1986, 1992, 2001,
    2013, 2017, 2019, 2023,
  ];
  return (
    <div className="historyDiv  max-w-full m-2 flex flex-col-2">
      <Navbar />
      <div className="sideProgress flex flex-col-1 mt-[10%] bg-cyan-300 ml-2 w-[10%] p-2 m-2 ">
        <ul className="bg-red-500 w-full text-center p-2 ">
          {years.map((year, index) => (
            <li key={index}>{year}</li>
          ))}
        </ul>
      </div>

      <div className="rightSectionContainer w-full mt-[11%] m-2">
        <div className="upperDiv  w-full flex flex-col p-5 m-2 mb-3 relative h-auto">
          <Image
            src={top}
            alt="Top Image"
            width={1500}
            height={300}
            className="w-full h-auto"
          />
          <div
            className="sideContentDiv rounded-lg  bg-sky-500 text-justify p-8 
                absolute bottom-[0%] right-5 w-[90%] sm:w-[40%] md:w-[50%] lg:w-[60%] 
                 z-50 transition-all ease-in-out duration-300 hover:-translate-y-1 hover:bg-gray-600"
          >
            <p className="lg:text-6xl sm:text-2xl font-branding-medium p-2 text-white text-left">
              Every journey begins with a single step. Introducing the man
              behind the legacy.
            </p>
            <br></br>
            <br></br>
            <p className="font-branding-medium p-2 lg:text-2xl sm:text-md md: text-md">
              {" "}
              Shri. J. V. Patel, or Jethabhai as he was fondly called, grew up
              in an India that was not industrially advanced. The lack of
              external inspiration only dared him to dream big and become an
              engineer. This self-made entrepreneur led projects that
              transformed and strengthened the backbone of the changed Indian
              industry.
            </p>
            <br></br>
            <br></br>
            <p className="font-branding-medium p-2 lg:text-2xl sm:text-md md: text-md">
              The Standard Engineering Company was in fact founded on his belief
              in ‘indigenous’ growth. He also took several sick companies under
              his wing, which is why he was often known as the ‘Doctor of Sick
              Units’. He eventually became a full-time philanthropist,
              supporting multiple social and educational initiatives.
            </p>
          </div>
        </div>

        <div
          className="bottomContentDiv w-fit  text-gray-500 bottom-1 p-4 pt-6  transition-all ease-in-out duration-300
          hover:translate-y-1 m-auto mt-6 flex flex-col md:flex-row  relative "
        >
          <div className="imgDiv w-fit justify-left z-50 ">
            <Image
              src={historyOne}
              alt="Mid Image"
              width={300}
              height={200}
              className=" h-fit  rounded-lg m-4  "
            />
          </div>
          <div className="textDiv flex flex-col  m-2 items-center justify-center">
            <p className=" md:text-2xl lg:text-4xl font-branding-semibold text-center p-2">
              ‘Your right is in action, never to its fruits, let not the fruits
              of action be your motive.’{" "}
            </p>
            <p className="text-md font-branding-semibold text-center p-2">
              The Bhagavad Gita, Chapter it, verse 47. A verse that was Shri.
              J.V. Patel's guiding statement in life.
            </p>
          </div>
        </div>

        <div className="1939Div mt-[5%] relative p-4  h-fit flex flex-col md:flex-row justify-evenly border-2 border-dotted m-4 shadow-md rounded-lg transition-all ease-in-out duration-300
          hover:translate-y-1  ">
          <div className="contentDiv  p-4 m-2 flex flex-col  text-center relative  ">
            <p className="text-md md:text-2xl  text-gray-400 w-96 text-center  h-fit p-3 font-branding-semibold">
              The founder, Shri. J.V. Patel manifests <br></br> his vision as
              the Standard Engineering Company (SEC).
            </p>

            <div className="imgDiv   h-fit w-auto flex m-4  justify-center ">
              <Image
                src={historyTwo}
                alt="Mid Image"
                width={300}
                height={200}
                className=" h-fit  rounded-lg m-4  "
              />
            </div>

            <div className="yearDiv text-center text-8xl h-fit w-auto p-2">
              <p className="text-gray-500"> 1939</p>
            </div>
          </div>

          <div className="imgDiv flex w-[61%] ">
            <Image
              src={mid}
              alt="Mid Image"
              width={800}
              height={300}
              className=" h-auto w-auto rounded-lg m-4   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
