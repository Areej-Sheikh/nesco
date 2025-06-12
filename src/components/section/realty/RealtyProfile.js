import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/nesco-reality-elements/18.jpg";

function RealtyProfile() {
  return (
    <section className="w-full h-screen overflow-hidden bg-[#f9f9f9] flex items-center">
      <div className="px-[5%] w-full h-full flex items-center">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="flex-[2] pr-0 md:pr-12 mb-8 md:mb-0">
            <h3 
              className="text-[2rem] md:text-[2.2rem] font-bold mb-2"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dharmesh Joshi
            </h3>
            <p 
              className="text-[1.1rem] text-[#666] mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Sr. General Manager - Special Projects
            </p>
            <p 
              className="text-[1.2rem] font-bold mb-5"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: Action is better than Words. Quit talking and lets start Doing!
            </p>
            <p 
              className="text-[1rem] leading-[1.8]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Dharmesh is a multifaceted professional with good understanding of various industries. With techno-commercial experience and working with top management, enables him to add value in Corporate Strategy & Infrastructure projects. Dharmesh is very passionate about whatever he does. Currently handling Special Projects, he is involved in Nesco's various Divisions. Dharmesh enjoys reading, music and spending his time with family.
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative h-[350px] md:h-[450px] w-full">
            <Image
              src={profileImage}
              alt="Dharmesh Joshi"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealtyProfile;