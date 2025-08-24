import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import visionImage from "../../assets/vision2.jpg";
import missionImage from "../../assets/mission2.jpg";
import frontBanner from "../../assets/front-vm2.jpg";

const VissionAndMission = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[60vh]">
        <img
          src={frontBanner}
          alt="Vision & Mission Banner"
          className="w-full h-full brightness-40 object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Our Vision & Mission
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-16 max-w-3xl mx-auto"
          >
            At North Central Railway College, our vision is to provide the best
            education and foster the overall development of students. We aim to
            create a nurturing environment where students can excel academically,
            socially, and morally, preparing them to face the challenges of the
            modern world with confidence and integrity.
          </motion.p>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden text-gray-900"
            >
              <img
                src={visionImage}
                alt="Vision"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🌟</span> Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a leading institution that empowers students to achieve
                  their full potential and contribute positively to society. We
                  envision a future where every student is equipped with the
                  knowledge, skills, and values needed to succeed in life.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden text-gray-900"
            >
              <img
                src={missionImage}
                alt="Mission"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-4 flex items-center">
                  <span className="mr-2">🎯</span> Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality education that fosters academic excellence,
                  character development, and lifelong learning. We are committed
                  to nurturing creativity, critical thinking, and a sense of
                  responsibility among our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />

      {/* College Oath Section */}
      <section className="bg-opacity-50 bg-gradient-to-r from-red-300 via-red-100 to-red-400 text-black py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
           <h2 className="text-4xl font-bold mb-8">
            College Oath
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg leading-relaxed max-w-3xl mx-auto"
          >
            “मैं प्रतिज्ञा करता हूँ कि  
            <br />मैं अपने देश की अखंडता को ध्यान में रखते हुए,  
            राष्ट्र की सेवा करूँगा और विद्यालय प्रशासन के नियमों एवं  
            कानूनों का पालन करूँगा।  
            <br />मैं उन्नति के पथ पर चलकर एक आदर्श नागरिक बनूँगा।”  
            <br /><br />
            <span className="font-bold text-yellow-800">जय हिन्द! जय हिन्द!! जय हिन्द!!!</span>
          </motion.p>
        </div>
      </section>
<br /><br /><br /><br /><br /><br /><br /><br />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default VissionAndMission;
