import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ncclogo from "../../assets/nccLogo.jpg";
import scoutlogo from "../../assets/scoutLogo.jpg";


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
    image: "/path-to-images/computer-lab.jpg",
  },
  {
    name: "Library",
    description:
      "The school library houses a vast collection of books, journals, and digital resources. It provides a quiet and conducive environment for reading and research.",
    image: "/path-to-images/library.jpg",
  },
  {
    name: "Physics Lab",
    description:
      "The physics lab is well-equipped with modern apparatus to help students understand and experiment with the principles of physics.",
    image: "/path-to-images/physics-lab.jpg",
  },
  {
    name: "Chemistry Lab",
    description:
      "Our chemistry lab is designed to provide students with hands-on experience in chemical experiments, fostering a deeper understanding of the subject.",
    image: "/path-to-images/chemistry-lab.jpg",
  },
  {
    name: "Biology Lab",
    description:
      "The biology lab is equipped with microscopes, specimens, and models to help students explore the wonders of life sciences.",
    image: "/path-to-images/biology-lab.jpg",
  },
  {
    name: "School Field",
    description:
      "The school field is a spacious area for outdoor activities, sports, and events. It promotes physical fitness and teamwork among students.",
    image: "/path-to-images/school-field.jpg",
  },
  {
    name: "RO Water Plant",
    description:
      "The school has an RO water plant to ensure clean and safe drinking water for students and staff.",
    image: "/path-to-images/ro-water-plant.jpg",
  },
  {
    name: "Basketball Court",
    description:
      "The basketball court provides students with an opportunity to engage in sports and develop their physical and mental fitness.",
    image: "/path-to-images/basketball-court.jpg",
  },
];

const Facilities = () => {
  return (
    <>
      <Navbar />


      <div className="min-h-screen bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-4xl font-extrabold text-center text-white mb-6 ">
            School Facilities
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 gap-y-18">
            {facilitiesData.map((facility, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-58 my-4 object-contain "
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-red-600 mb-4">
                    {facility.name}
                  </h2>
                  <p className="text-gray-800 text-lg">{facility.description}</p>
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