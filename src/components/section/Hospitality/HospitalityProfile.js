import React from "react";
import Image from "next/image";

// Import profile image
import profileImage from "@/assests/nesco-business-page/nesco-food-elements/30.jpg";

function HospitalityProfile() {
  return (
    <div className="w-full lg:min-h-screen bg-white py-8 lg:py-12">
      <div className="w-[90%] mx-auto lg:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[5vh] lg:gap-[3vw]">
          {/* Text Content - Left side */}
          <div className="w-full lg:w-[50%] xl:w-[45%] space-y-[2vh]">
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Saurav Banerjee
            </h3>
            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#666]"
              style={{ fontFamily: "BrandingMedium" }}
            >
              Corporate Executive Chef
            </p>

            <p
              className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold leading-tight"
              style={{ fontFamily: "BrandingSemibold" }}
            >
              Belief: For me the team comes first and commitment to hard work is
              our tool to achieve any goal.
            </p>

            <div className="space-y-[2vh]">
              <p
                className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-justify"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Chef Saurav Banerjee is our Corporate Executive Chef. He has a
                rich background spanning across diverse cuisines and experience
                in renowned kitchens. An alumnus of the Oberoi, Chef Saurav
                started restaurants and a long and very successful stint with
                "The Oberoi Group of Hotels". He is passionate about creating
                unique culinary experiences and is dedicated to inspiring our
                team towards culinary excellence. He has served one and many
                distinguished guests from the highest echelons of all walks of
                life.
              </p>
              <p
                className="text-[clamp(1rem,2.2vw,1.6rem)] leading-relaxed text-justify"
                style={{ fontFamily: "BrandingMedium" }}
              >
                Chef Banerjee is excited to showcase high levels of creativity
                and expertise for our guests and take our gastronomy to the next
                level.
              </p>
            </div>
          </div>

          {/* Image Container - Right side */}
          <div className="w-full lg:w-[45%] xl:w-[50%] relative h-[60vh] sm:h-[70vh] lg:h-[75vh] flex items-center justify-end">
            <div className="relative h-[400px] sm:h-[500px] lg:h-full w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={profileImage}
                alt="Saurav Banerjee"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalityProfile;
