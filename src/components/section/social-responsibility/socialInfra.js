import React, { useState } from "react";

import bannerImage from "@/assests/social/12.png";
import SocialBanner1 from "@/components/common/SocialBanner/SocialBanner";
import Cards from "@/components/common/cards/Cards";

function SocialInfra() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const title = "Powering Infrastructure";

  const SliderData = [
    {
      title1: "Water Supply System",
      title2: "Karamsad",
      link: "",
      image: bannerImage,
      description: "Details about the water supply system in Karamsad.",
    },
    {
      title1: "Water Supply System",
      title2: "Karamsad",
      link: "",
      image: bannerImage,
    },
    {
      title1: "Water Supply System",
      title2: "Karamsad",
      link: "",
      image: bannerImage,
    },
  ];

 const openModal = (data) => {
  setSelectedCard(data);
  setIsModalOpen(true);
 };

 const closeModal = () => {
  setSelectedCard(false);
  setIsModalOpen(null);
 };

  return (
    <section className="goal-section1" id="infra">
      <SocialBanner1 SliderData={SliderData} title={title}
      onReadMore={openModal}
      isModalOpen={isModalOpen}
      selectedCard={selectedCard}
      closeModal={closeModal} />
     
    </section>
  );
}

export default SocialInfra;
