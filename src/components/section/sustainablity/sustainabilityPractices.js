import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import practicesIcon from "@/assests/sustainability/practicesIcon.png";
import practicesIcon1 from "@/assests/sustainability/51.png";
import practicesIcon2 from "@/assests/sustainability/50.png";
import practicesIcon3 from "@/assests/sustainability/49.png";
import practicesIcon4 from "@/assests/sustainability/48.png";
import practicesIcon5 from "@/assests/sustainability/47.png";
import practicesIcon6 from "@/assests/sustainability/44.png";
import { MentorModal } from "@/components/common/cards/Cards";

function SustainabilityPractices() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      image1: practicesIcon1,
      title: "Energy and Greenhouse Gas Emissions",
      link: "",
      color: "#81e1aa",
      description:
        "Energy and its efficient usage along with a healthy renewables mix is essential to offset potentially higher operational costs and associated GHG emissions. Real estate operations significantly contribute to the overall GHG emissions and increase climate vulnerability and we consume 100% renewable energy for our operations. Nesco has adopted green building practices for IT Parks to help reduce emissions and support our customers in addressing their impacts. We provide customers of IT Parks and the Bombay Exhibition Center access to green power and encourage its adoption. The Company is also developing strategies to reduce energy use and GHG emissions across all its businesses to unlock new business opportunities.",
    },
    {
      image1: practicesIcon2,
      title: "Water and Waste Management",
      link: "",
      color: "#0DD3CF",
      description:
        "Efficient water and waste management is crucial for optimizing resource use and minimizing environmental impact. Compliance with various regulations is essential for seamless business operations and maintaining Nesco's reputation and social license to operate within the communities it serves. Besides meeting compliance requirements, unchecked water consumption can strain local water availability, impacting both Nesco's operations and community needs. At Nesco's Goregaon facilities, which involve multiple stakeholders beyond direct control, streamlined waste management protocols ensure strict compliance. There's a strong emphasis on waste segregation awareness and recycling, with efforts underway to expand organic waste composting. Nesco is actively reducing water consumption through initiatives such as rainwater harvesting, Sewage Treatment Plants (STP), and IoT-enabled water meters for enhanced monitoring and efficiency. As we expand our infrastructure footprint, we're updating our water balance to ensure sustainable usage. By embracing water-saving technologies and responsible practices, Nesco aims to safeguard resources and reinforce its commitment to environmental stewardship.",
    },
    {
      image1: practicesIcon3,
      title: "Customer Centricity, Operational Excellence and Innovation",
      link: "",
      color: "#E9C701",
      description:
        "Customer satisfaction is a central focus across Nesco's diverse businesses, guiding both client-facing and operational teams. We invest in innovative technologies to enhance customer experience and operational efficiency. Nesco continually refines its systems and governance to maximize satisfaction, actively engaging with customers to address concerns and maintain operational agility. Through sustainable practices and the integration of new technologies, including digital solutions, we aim to elevate user experiences across all stakeholder interactions, driving improved profitability and long-term success.",
    },
    {
      image1: practicesIcon4,
      title: "Human Capital Management",
      link: "",
      color: "#9081DF",
      description:
        "Effectively managing a diverse workforce is crucial for enhancing resilience and productivity at Nesco. Key priorities include fair compensation, robust learning opportunities, career development, and fostering an inclusive workplace culture. With a substantial reliance on contractual labour across our operations, Nesco acknowledges and addresses compliance and operational risks. We have implemented rigorous processes to mitigate labour-related risks, ensuring comprehensive compliance measures for both our direct workforce and third-party contractual providers",
    },
    {
      image1: practicesIcon5,
      title: "Sustainable Supply Chain Management",
      link: "",
      color: "#B78A67",
      description:
        "Supply chain disruptions can significantly impact Nesco's operations. Neglecting ethical and sustainable sourcing practices risks non-compliance with LEED certification requirements, amplifying supplier-specific and overall supply chain risks. Nesco is committed to enhancing supply chain sustainability to bolster operational resilience, realize cost efficiencies, and cultivate enduring supplier partnerships. Our businesses prioritize sourcing from marginalized and vulnerable communities where possible, emphasizing local engagement. A comprehensive Supplier Code of Conduct outlines Nesco's expectations for ESG standards, regulatory compliance, and ethical conduct, reinforcing our commitment to responsible sourcing practices.",
    },
    {
      image1: practicesIcon6,
      title: "Health Safety and Well-being",
      link: "",
      color: "#F09583",
      description:
        "Ensuring the health and safety of employees, contractors, and visitors is paramount across all Nesco operations. Our commitment extends to creating a safe environment not only for our workforce but also for occupiers, their guests, and event attendees at our facilities. Adhering to stringent safety regulations and implementing proactive measures for hazard prevention and response are crucial to mitigating risks associated with accidents, injuries, and potential liability. Nesco invests in robust infrastructure, safety systems, and comprehensive training programs for employees and contractors alike. We prioritize safety awareness through clear signage and continuous training for outsourced personnel involved in visitor engagement. By upholding rigorous safety standards, Nesco ensures a secure environment for all stakeholders, reinforcing trust and safeguarding our reputation.",
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
    <div className="goal-section1 flex flex-col justify-center items-center mt-0 lg:mt-10">
      <div className="my-12 text-center relative w-[90%]">
        <div className="mb-14">
          <h1 className="text-3xl font-branding-semibold">
            {" "}
            Integrated Sustainability{" "}
          </h1>
          <h1 className="text-3xl font-branding-semibold">
            Practices for a Resilient Future
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center ">
          {cardData.map((data, index) => (
            <div className="flex flex-col justify-between items-center">
              <div
                className="border-2 relative z-10 cursor-pointer"
                style={{ borderColor: data.color }}
                onClick={() => openModal(data)}
              >
                <Image
                  className="h-64 w-64 py-12 px-12"
                  src={data.image1}
                  alt={data.title}
                />
                <FaArrowRight
                  className={`text-4xl text-white rounded-full p-1 absolute -bottom-4 -right-4 z-20`}
                  style={{ backgroundColor: data.color }}
                />
              </div>
              <p className="text-xl font-branding-semibold w-[57%] h-[80%] mt-5">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <MentorModal
          isOpen={isModalOpen}
          onClose={closeModal}
          data={selectedCard}
        />
      )}
    </div>
  );
}

export default SustainabilityPractices;
