import Banner from "@/components/common/MainBanner/Banner";
import React from "react";
import BannerImage from "@/assests/mainBanner/image.png";
import BannerImage1 from "@/assests/mainBanner/image1.png";
import BannerImage3 from "@/assests/mainBanner/image3.png";
import BannerImage4 from "@/assests/mainBanner/image4.png";
import BannerImage5 from "@/assests/mainBanner/image5.png";

function HomeBanner() {
  // slider data
  const SliderData = [
    {
      image: BannerImage,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage1,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage3,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage4,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
    {
      image: BannerImage5,
      title: "Believe",
      subtitle1: "The possibilities",
      subtitle2: "are endless",
      description1: "Welcome to",
      description2: "Nesco",
    },
  ];

  return (
    <div>
      <Banner SliderData={SliderData} />
    </div>
  );
}

export default HomeBanner;
