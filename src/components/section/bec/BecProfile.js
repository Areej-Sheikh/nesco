import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/bec-elements/49.jpg";

function BecProfile() {
  return (
    <div className="w-full lg:h-screen flex items-center bg-white px-[2vw] lg:px-[5vw] mt-10 lg:mt-0">
      <div className="w-full max-w-[95vw] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[5vh] lg:gap-[3vw]">
          {/* Text Content */}
          <div className="w-full lg:w-[50%] xl:w-[45%] space-y-[2vh]">
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Harsh Mukherjee
            </h3>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Assistant Vice President - Sales
            </p>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: Actually, I can
            </p>
            <p
              className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-justify"
              style={{ fontFamily: "BrandingMedium" }}
            >
              For over 25 years, Harsh Mukherjee has been both a marketing
              leader and mentor. Harsh is analytical about task completion and
              delivering value to customers. He began his career in the
              publications industry. His fondness for the written word exists to
              this day as he enjoys reading the latest in current affairs and
              science and technology.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-[45%] xl:w-[50%] relative">
            <div className="aspect-[3/4] lg:aspect-[100%] w-full max-w-[60vh] mx-auto lg:mx-0 lg:ml-auto">
              <Image
                src={profileImage}
                alt="Harsh Mukherjee"
                fill
                className="object-contain rounded-lg shadow-lg"
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecProfile;
