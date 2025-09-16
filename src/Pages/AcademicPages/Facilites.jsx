import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ncclogo from "../../assets/nccLogo.jpg";
import scoutlogo from "../../assets/scoutLogo.jpg";
import libraryImg from "../../assets/library_img.jpg";
import ComputerLab from "../../assets/comp_lab.jpg";
import physicsLabImg from "../../assets/phy_lab.jpg";
import ChemistryLab from "../../assets/chem_lab.jpg";
import playground from "../../assets/playground.jpg";
import bioLab from "../../assets/bio_lab.jpg";
import RoWater from "../../assets/roWater.png";
import basketballCourt from "../../assets/Basketcourt.jpg";


const facilitiesData = [
  {
    name: "NCC",
    description:
      "The school provides National Cadet Corps (NCC) training to instill discipline, leadership, and patriotism among students. It prepares them for a bright future in defense and other fields.",
    image: ncclogo,
  },
  {
    name: "Scout and Guide",
    description:
      "The Scout and Guide program encourages teamwork, leadership, and community service. Students learn essential life skills and values through various activities and camps.",
    image: scoutlogo,
  },
  {
    name: "Computer Lab",
    description:
      "Our state-of-the-art computer lab is equipped with modern systems and high-speed internet to provide students with hands-on experience in technology and programming.",
    image: ComputerLab,
  },
  {
    name: "Library",
    description:
      "The school library houses a vast collection of books, journals, and digital resources. It provides a quiet and conducive environment for reading and research.",
    image: libraryImg,
  },
  {
    name: "Physics Lab",
    description:
      "The physics lab is well-equipped with modern apparatus to help students understand and experiment with the principles of physics.",
    image: physicsLabImg,
  },
  {
    name: "Chemistry Lab",
    description:
      "Our chemistry lab is designed to provide students with hands-on experience in chemical experiments, fostering a deeper understanding of the subject.",
    image: ChemistryLab,
  },
  {
    name: "Biology Lab",
    description:
      "The biology lab is equipped with microscopes, specimens, and models to help students explore the wonders of life sciences.",
    image: bioLab,
  },
  {
    name: "School Field",
    description:
      "The school field is a spacious area for outdoor activities, sports, and events. It promotes physical fitness and teamwork among students.",
    image: playground,
  },
  {
    name: "RO Water Plant",
    description:
      "The school has an RO water plant to ensure clean and safe drinking water for students and staff.",
    image: RoWater,
  },
  {
    name: "Basketball Court",
    description:
      "The basketball court provides students with an opportunity to engage in sports and develop their physical and mental fitness.",
    image: basketballCourt,
  },
];

const Facilities = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-3 tracking-wide">
            School Facilities
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Our school offers a wide range of facilities to support the holistic development of our students.
          </p>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilitiesData.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
              >
                {/* Facility Image */}
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-fill transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Facility Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    {facility.name}
                  </h2>
                  <p className="text-gray-600 text-base flex-grow">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Facilities;
