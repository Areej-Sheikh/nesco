import React from "react";
import bannerImage from "@/assests/leadership/image.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";

function SocialEducation() {
  const title = "Powering Education";

  const SliderData = [
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      image: bannerImage,
    },
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      image: bannerImage,
    },
    {
      title1: "Sardar Patel Memorial",
      title2: "and Trust, Karamsad, Gujarat.",
      link: "",
      image: bannerImage,
    },
  ];

  return (
    <div>
      <SocialBanner1 SliderData={SliderData} title={title} />
    </div>
  );
}

export default SocialEducation;
