import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import Image from "next/image";
import top from "@/assests/history/top.png";
import mid from "@/assests/history/mid.png";
import historyOne from "@/assests/history/historyOne.png";
import historyTwo from "@/assests/history/historyTwo.png";
import historyThree from "@/assests/history/historyThree.png";
import historyFour from "@/assests/history/historyFour.png";
import historyFive from "@/assests/history/historyFive.png";
import historySix from "@/assests/history/historySix.png";
import historyEight from "@/assests/history/historyEight.png";
import historyNine from "@/assests/history/historyNine.png";
import historyTen from "@/assests/history/historyTen.png";
import historyEleven from "@/assests/history/historyEleven.png";
import nescoLogo from "@/assests/history/nescoLogo.png";
import historySeven from "@/assests/history/historySeven.jpg";
import historyXII from "@/assests/history/historyXII.jpg";
import { IoEllipseOutline } from "react-icons/io5";

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

        <div className="year1939Div mt-[3%] w-full relative p-4 items-center h-fit flex flex-col md:flex-row-reverse m-4 rounded-lg transition-all  ease-in-out duration-300 hover:translate-y-1 ">
          <div className="iconDiv h-fit w-fit mt-4 m-6 flex-1 relative">
            <Image
              src={mid}
              alt="Top Image"
              width={1000}
              height={500}
              className="h-auto"
              priority
            />
            <div className="year absolute  z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row w-fit m-2">
              <p className="text-[100px] text-white font-branding-bold  ">19</p>
              <p className="text-[100px] text-cyan-400 font-branding-bold  ">
                39
              </p>
            </div>
          </div>

          <div className="year1939Div flex-1 flex flex-col  justify-center items-center relative h-fit p-2 ">
            <div className="rightContent  text-left w-fit p-4 ">
              <Image
                src={historyTwo}
                alt="Top Image"
                width={300}
                height={300}
                className="h-auto"
                priority
              />
              <p className="text-left text-gray-600 mt-6 sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-xs">
                The founder, Shri. J.V. Patel manifests his vision as the
                Standard Engineering Company (SEC).
              </p>
            </div>
          </div>
        </div>

        <div
          className="1952Div mt-[3%] w-fit relative p-4   h-fit flex flex-col md:flex-row justify-center items-center  rounded-lg transition-all ease-in-out duration-300
          hover:translate-y-1 m-auto  "
        >
          <div className="contentDiv  p-8 m-2  flex flex-col  text-center relative  h-fit ">
            <p className="bg-blue-700 m-2 p-2 text-2xl text-white font-poppins rounded-md">
              Empress Iron Works Ltd/ Acme Mfg Co
            </p>
            <p className="bg-blue-700 m-2 p-2 text-2xl text-white font-poppins rounded-md">
              LTd / Khandelwal Udyog Ltd/ Glass
            </p>
            <p className="bg-blue-700 m-2 p-2 text-2xl text-white font-poppins rounded-md">
              Lined Equipment Co Ltd/ Indian Furnace
            </p>
            <p className="bg-blue-700 m-2 p-2 text-2xl text-white font-poppins rounded-md">
              Co Ltd / Ceramics Mfg Co/ Mapara
            </p>
            <p className="bg-blue-700 m-2 p-2 text-2xl text-white font-poppins rounded-md">
              Parekh Ltd/ Electric Instruments Mfg
            </p>
            <p className="bg-blue-700 m-2 p-2 text-2xl text-white font-poppins rounded-md">
              Co Ltd / Agro Precision Co Ltd/ Millars
            </p>
            <p className="bg-blue-700 m-2 p-2 text-2xl text-white font-poppins rounded-md">
              Construction Machinery Ltd
            </p>
          </div>

          <div className="iconDiv ml-auto flex items-center justify-center  relative  w-fit">
            <IoEllipseOutline size={600} color="cyan" strokeWidth={1} />
            <span className="absolute text-blue-600 text-xl text-center  w-fit">
              <p className="text-8xl">1952</p>
              <p className="w-72 p-4">
                By this time, SEC was taking over & reviving the fortunes of
                several struggling companies to build an engineering powerhouse.
              </p>
            </span>
          </div>
        </div>

        <div
          className="1956Div mt-[3%] w-full  relative p-4 items-center  h-fit flex flex-col md:flex-row   m-4  rounded-lg transition-all ease-in-out duration-300
          hover:translate-y-1 gap-10 "
        >
          <div className="iconDiv ml-auto flex items-center justify-center  relative h-fit w-fit mt-4 m-6">
            <Image
              src={historyThree}
              alt="Top Image"
              width={350}
              height={350}
              className="w-auto h-auto"
            />
          </div>

          <div className="contentDiv  p-8 m-2 justify-evenly flex flex-col relative bg-blue-900 h-fit w-full  ">
            <p className="text-6xl text-left ml-2 p-2 text-white">
              New Standard Engineering <br></br> Company Ltd
            </p>
            <div className="content flex flex-row relative top-4 w-fit m-2 p-2 gap-2 bg-white rounded-md">
              <div className="div1  flex p-2 items-center">
                <p className="text-4xl text-gray-400">1956</p>
              </div>
              <div className="div2  flex p-2 text-xl text-cyan-800 ">
                <p>
                  The acquisition of Burjorji Pestonji & Son <br></br>{" "}
                  re-christens the company as the New Standard Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="year1957Div mt-[3%] w-full relative p-4 items-center h-fit flex flex-col md:flex-row-reverse m-4 rounded-lg transition-all  ease-in-out duration-300 hover:translate-y-1 ">
          <div className="iconDiv h-fit w-fit mt-4 m-6 flex-1 relative">
            <Image
              src={historyFour}
              alt="Top Image"
              width={1000}
              height={500}
              className="h-auto"
              priority
            />
            <div className="year absolute  z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row w-fit m-2">
              <p className="text-[100px] text-white font-branding-bold  ">19</p>
              <p className="text-[100px] text-cyan-400 font-branding-bold  ">
                57
              </p>
            </div>
          </div>

          <div className="contentDiv flex-1 flex flex-col  justify-center items-center relative h-fit p-2">
            <div className="rightContent  text-left w-fit p-4 ">
              <p className="text-right text-gray-600  sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-xs">
                New Standard Engineering collaborates with B&S Massey Ltd to
                become the first manufacturer in India for forging hammers &
                presses.
              </p>
            </div>
          </div>
        </div>

        <div className="year1958 mt-16 flex flex-col gap-2 relative items-center justify-center w-fit m-auto ">
          <div className="topDiv  flex relative items-center justify-center m-4 border-b-2 border-cyan-300 w-full">
            <p className="text-[80px] text-cyan-400">1958</p>
          </div>
          <div className="bottomDiv  m-4 flex ">
            <p className="sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-xs text-center text-gray-400">
              The Company launches its public issue, which is quickly
              oversubscribed.
            </p>
          </div>
        </div>

        <div className=" year1960 relative mt-16 flex flex-col md:flex-row items-center  p-6 rounded-lg overflow-hidden ml-[5%]">
          <div className="bg-[#001F9C] text-white flex-1 p-6 relative w-full md:w-[40%] h-full">
            <h2 className="text-5xl font-bold text-blue-300">1960</h2>
            <Image
              src={historyFive}
              alt="Icon"
              width={580}
              height={280}
              className="mt-4"
            />
            <p className="mt-4 text-lg leading-relaxed max-w-sm">
              Sumant Patel founds the Gujarat Machinery Manufacturers Ltd, which
              later becomes GMM Pfaudler Ltd.
            </p>
          </div>

          <div className="absolute md:relative md:w-[60%] top-16 md:top-10 right-2 z-10">
            <Image
              src={historySix}
              alt="Historic Event"
              width={600}
              height={500}
              className=""
            />
          </div>
        </div>

        <div className="year1962 flex flex-col relative md:flex-row  mt-[15%] p-auto ">
          <div className="imgDiv  w-fit flex relative z-10 left-[5%]">
            <Image
              src={historySeven}
              alt="Mid Image"
              width={700}
              height={500}
              className=" m-auto  "
            />
          </div>
          <div className="rightDiv bg-[#001F9C] sm:w-[50%] md:w-[50%] lg:w-[20%] flex relative right-[9%] lg:top-[30vh] md:top-[10vh] flex-grow ">
            <div className="yearDiv  flex flex-col relative w-auto sm:left-[40%] md:left-[40%] lg:left-[60%] text-right h-fit sm:top-10 md:top-10 lg:top-1/3 p-6 ">
              <p className="sm:text-6xl md:text-6xl lg:text-8xl p-2 text-white font-branding-bold">
                1962
              </p>
            </div>

            <div className="bottomContent flex  relative   sm:h-fit md:h-fit lg:h-[30%] sm:top-[55%] md:top-[35%] lg:top-[70%] right-10 text-right  ">
              <p className=" sm:text-md md:text-md lg:text-xl text-cyan-500">
                The New Standard Engineering Company is known to have the
                largest foundry in the private sector, making specialised
                castings for the company's forging equipment product line.
              </p>
            </div>
          </div>
        </div>

        <div className="year1964 flex flex-col relative md:flex-row  mt-[25%] p-auto ">
          <div className="contentDiv flex  relative bg-cyan-400 h-auto m-2 left-[5%] w-[50%] ">
            <div className="yearDiv flex flex-col relative  h-fit sm:top-1/2 md:top-[80%] lg:top-1/3 sm:left-3 md:left-[10%] lg:left-[5%]  ">
              <p className="sm:text-2xl md:text-6xl lg:text-8xl text-blue-800 font-branding-bold">
                1964
              </p>
            </div>

            <div className="textDiv relative flex m-2 p-2  w-fit h-fit sm:top-10 md:top-10 lg:top-[60%] sm:right-12 md:right-1/3  lg:right-[20%]">
              <p className="sm:text-md md:text-lg lg:text-2xl text-white">
                Indabrator is born, on the basis<br></br> of a joint venture
                signed with Wheelabrator Corporation, USA<br></br> for the
                manufacturing of shot-blasting equipment in India.
              </p>
            </div>
          </div>

          <div className="imgDiv  w-fit flex relative z-10 top-[6vh] right-[5%] ">
            <Image
              src={historyEight}
              alt="Mid Image"
              width={700}
              height={400}
              className=" m-auto h-auto  "
            />
          </div>
        </div>

        <div className="year1966 flex flex-col relative md:flex-row  mt-[15%] p-auto ">
          <div className="imgDiv  w-fit flex relative z-10 left-[5%]">
            <Image
              src={historyNine}
              alt="Mid Image"
              width={700}
              height={500}
              className=" m-auto  "
            />
          </div>
          <div className="rightDiv bg-cyan-500 sm:w-[50%] md:w-[50%] lg:w-[5%]  flex  relative right-[9%] lg:top-[30vh] md:top-[10vh] flex-grow z-20 gap-0 ">
            <div className="yearDiv  flex flex-col relative w-auto sm:left-[10%] md:left-[6%] lg:left-[4%] text-left h-fit sm:top-10 md:top-10 lg:top-1/3 p-6 ">
              <p className="sm:text-6xl md:text-6xl lg:text-8xl p-2 text-blue-800 font-branding-bold">
                1966
              </p>
            </div>

            <div className="bottomContent flex  relative sm:h-fit md:h-fit lg:h-[20%] sm:top-[55%] md:top-[37%] lg:top-[70%] sm:right-1/2 md:right-[40%] lg:right-1/4 text-left  p-2 ">
              <p className=" sm:text-md md:text-md lg:text-2xl text-white">
                The New Standard Engineering Company builds India's first
                antenna for space communication, strengthening its decade-long
                association with the Department of Atomic Energy.
              </p>
            </div>
          </div>
        </div>

        <div className="year1986 relative w-full flex justify-center items-center py-10 mt-[25%]">
          <div className="absolute top-0 left-[5%] w-[80%] h-[20vh] md:h-[25vh] lg:h-[50vh] bg-blue-900 z-0 "></div>

          <div className="relative z-10 w-[90%] md:w-[70%]">
            <Image
              src={historyTen}
              alt="Historical Image"
              width={900}
              height={500}
              className="w-full h-auto object-cover"
            />

            <div className="absolute top-1/3 right-[10%] bg-white p-6 shadow-lg w-[50%] md:w-[35%]">
              <p className="text-gray-700 text-3xl font-semibold">1986</p>
              <p className="text-gray-600 mt-2">
                New Standard Engineering diversifies into realty and the Group
                welcomes a new sector.
              </p>
            </div>
          </div>
        </div>

        <div className="year1992crelative flex flex-col  mt-[5%]">
          <div className="imgDiv flex relative z-10 top-10 left-1/3 ">
            <Image
              src={historyXII}
              alt="Historical Image"
              width={800}
              height={500}
              className=" w-full md:w-[60%] lg:w-[50%] h-auto object-cover relative z-10"
            />
          </div>
          <div className="contentDiv bg-blue-900  flex flex-col relative sm:w-[30%] md:w-[60%] lg:w-[40%] sm:bottom-[10vh] md:bottom-[15vh] lg:bottom-[20vh]  sm:left-[5%] md:left-[5%] lg:left-[10%] gap-2 p-4  ">
            <div className="yearDiv flex relative w-fit h-fit mt-48 bottom-6 ">
              <p className="text-8xl text-blue-500">1992</p>
            </div>
            <div className="iconDiv flex relative w-fit">
              <Image
                src={historyEleven}
                alt="Historical Image"
                width={300}
                height={200}
                className="  object-cover"
              />
            </div>
            <div className="text relative flex  mt-2 text-white">
              <p className="text-xl">
                The 200,000 square feet Bombay Exhibition Center<br></br>{" "}
                develops into the largest center<br></br> for exhibitions in the
                private sector in India.
              </p>
            </div>
          </div>
        </div>

        <div className="year2001 flex flex-col relative mt-[5%] bg-gray-200 justify-center  ">
          <div className="imgDiv flex relative md:left-[3%] lg:left-[10%]">
          <Image
              src={nescoLogo}
              alt="Historical Image"
              width={600}
              height={300}
              className=" md:w-[50%] lg:w-[30%] h-auto object-cover relative"
            />
          </div>
          <div className="contentDiv flex flex-col sm:left-[40%] md:left-[55%] bg-yellow-100 w-fit relative p-2 bottom-[20vh]">
            <div className="yearDiv flex relative">
              <p>2001</p>
            </div>
            <div className="textDiv flex relative">
              <p>The Company rebrands <br></br> itself as Nesco Limited <br></br> in light of further diversification <br></br> and business verticals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
