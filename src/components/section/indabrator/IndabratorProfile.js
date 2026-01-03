import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/Indabrator-Elements/65.jpg";

function IndabratorProfile() {
  return (
    <div className="w-full lg:min-h-screen bg-white py-8 lg:py-12">
      <div className="w-[90%] mx-auto lg:mt-20">
        {/* Main heading */}
        <h2
          className="text-[2rem] xs:text-[2.4rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold leading-[1.1] sm:leading-[1.15] mb-4 sm:mb-6 text-left"
          style={{ fontFamily: "BrandingSemibold" }}
        >
          Meet the people who make it possible.
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image container - Left side */}
          <div className="w-full lg:w-[40%]">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={profileImage}
                alt="Dr. Pawan Kumar Singh"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          {/* Text content - Right side */}
          <div className="w-full lg:w-[60%]">
            <h3
              className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold mb-4 text-left"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Dr Pawan Kumar Singh
            </h3>
            <p
              className="text-[1.5rem] sm:text-[1.7rem] md:text-[1.9rem] lg:text-[2rem] text-[#666] mb-6 text-left"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Vice-President- Sales & Operations
            </p>
            <div className="mb-6">
              <p
                className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] font-bold mb-2 text-left"
                style={{ fontFamily: "BrandingSemibold" }}
              >
                Belief: <span className="font-normal">"Shape the sustainable future by creating unprecedented value and opportunity for our customers, employees, investors, and ecosystem partners."</span>
              </p>
            </div>
            <div className="space-y-10">
              <p
                className="text-[0.95rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] leading-[1.6] sm:leading-[1.65] md:leading-[2] text-gray-800 text-left"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Dr. Pawan Kumar Singh is heading the Indabrator division as Vice-President- Sales & Operations. In his role, he oversees and leads Nesco's Manufacturing unit (Indabrator), with responsibilities spanning across Sales and Operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndabratorProfile;
