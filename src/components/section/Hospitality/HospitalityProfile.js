import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/nesco-food-elements/30.jpg";

function HospitalityProfile() {
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
              Saurav Banerjee
            </h3>
            <p 
              className="text-[1.1rem] text-[#666] mb-6"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Corporate Executive Chef
            </p>
            <p 
              className="text-[1.2rem] font-bold mb-5"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: For me the team comes first and commitment to hard work is our tool to achieve any goal.
            </p>
            <p 
              className="text-[1rem] leading-[1.8]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Chef Saurav Banerjee is our Corporate Executive Chef. He has a rich background spanning across diverse cuisines and experience in renowned kitchens. An alumnus of the Oberoi, Chef Saurav started restaurants and a long and very successful stint with "The Oberoi Group of Hotels". He is passionate about creating unique culinary experiences and is dedicated to inspiring our team towards culinary excellence. He has served one and all with utmost dignity, looking after the culinary notations of all walks of life.
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-1 relative h-[350px] md:h-[450px] w-full">
            <Image
              src={profileImage}
              alt="Saurav Banerjee"
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

export default HospitalityProfile;