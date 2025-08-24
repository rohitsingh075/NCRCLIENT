import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import academicImage from "../../assets/academic.jpeg";
import holisticImage from "../../assets/holistic.jpg";
import characterImage from "../../assets/character.jpg";
import communityImage from "../../assets/community.jpg";
import innovationImage from "../../assets/innovation.jpg";
import environmentImage from "../../assets/environment.jpg";

const OurGoals = () => {
  const goals = [
    {
      id: 1,
      title: "Academic Excellence",
      description:
        "We aim to provide a robust academic curriculum that challenges students to think critically, solve problems, and develop a love for lifelong learning. Our focus is on nurturing intellectual curiosity and achieving high academic standards.",
      image: academicImage,
    },
    {
      id: 2,
      title: "Holistic Development",
      description:
        "Beyond academics, we emphasize the importance of physical, emotional, and social development. Through extracurricular activities, sports, and arts, we ensure that students grow into well-rounded individuals.",
      image: holisticImage,
    },
    {
      id: 3,
      title: "Character Building",
      description:
        "Integrity, respect, and empathy are at the core of our values. We aim to instill these qualities in our students, helping them become ethical and responsible citizens.",
      image: characterImage,
    },
    {
      id: 4,
      title: "Community Engagement",
      description:
        "We encourage students to actively participate in community service and social initiatives. By doing so, they learn the importance of giving back and making a positive impact on the world around them.",
      image: communityImage,
    },
    {
      id: 5,
      title: "Innovation and Creativity",
      description:
        "Our goal is to foster an environment where students can explore their creativity and think innovatively. We support them in pursuing their passions and developing skills that prepare them for the future.",
      image: innovationImage,
    },
    {
      id: 6,
      title: "Environmental Awareness",
      description:
        "We aim to instill a sense of responsibility towards the environment in our students. Through eco-friendly initiatives and awareness programs, we encourage them to contribute to a sustainable future.",
      image: environmentImage,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-red-700 font-bold mb-6 text-center"
          >
            Our Aspirations for Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-700 text-lg leading-relaxed mb-16 text-center max-w-3xl mx-auto"
          >
            At North Central Railway College, we strive to create an environment
            that fosters growth, learning, and excellence. Our goals are
            designed to ensure that every student reaches their full potential
            while becoming responsible and compassionate members of society.
          </motion.p>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                    <h2 className="text-white text-2xl font-bold drop-shadow-lg">
                      {goal.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-red-700 mb-3">
                    {goal.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
<br />
<br />
<br />
<br />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OurGoals;
