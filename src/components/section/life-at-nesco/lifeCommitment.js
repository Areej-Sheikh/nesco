import React from "react";
import CommitmentImage from "@/assests/careers/commitment.png";
import Image from "next/image";

function LifeCommitment() {
  return (
    <section className="goal-section1 header_color_black w-full lg:h-screen bg-secondary flex items-center overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 w-[90%] mx-auto items-center mt-10">

        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[440px]">
          <Image
            src={CommitmentImage}
            alt="Three people discuss about their work"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <h2
            style={{ fontFamily: "BrandingSemibold" }}
            className="text-[#1e3a8a] text-2xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Our Commitment
          </h2>

          <div className="space-y-4">
            <p className="text-lg md:text-[23px] text-justify font-branding-medium leading-relaxed">
              At Nesco, our mission is to enhance and enrich lives through every
              product, service, and experience we create. This commitment
              extends to our employees as well, where we provide meaningful work
              and foster personal growth.
            </p>

            <p className="text-lg md:text-[23px] text-justify font-branding-medium leading-relaxed">
              Inspired by our founder, J.V. Patel, who established scholarships
              for the children of factory workers, we prioritize social
              responsibility and encourage a sense of purpose in every team
              member. Join us, and be part of a legacy dedicated to making a
              difference.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default LifeCommitment;
