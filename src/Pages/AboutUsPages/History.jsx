import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import historyImage from "../../assets/ncrimage6.jpg"; 
import { motion } from "framer-motion";

const History = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <img
          src={historyImage}
          alt="NCR College"
          className="absolute inset-0 w-full h-full object-fit brightness-45"
        />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold drop-shadow-lg"
          >
            The Legacy of North Central Railway College
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg max-w-3xl mx-auto text-gray-200"
          >
            Established in 1882, NCR College has been shaping young minds for
            over a century with excellence, inclusivity, and vision.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left: Image */}
          <motion.img
            src={historyImage}
            alt="School History"
            className="rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-red-700 mb-4">
              A Journey Through Time
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded during the colonial era, North Central Railway College
              began as a school for the children of railway employees. Over the
              decades, it evolved into a beacon of learning for students from
              diverse backgrounds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From humble classrooms to modern smart facilities, NCR College has
              always embraced growth while holding on to its values of
              discipline, integrity, and academic excellence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to nurture young learners, empowering them to
              achieve success in academics, leadership, and life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-red-50 mb-12"
          >
            Key Milestones
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                year: "1882",
                desc: "School established to educate children of railway employees.",
              },
              {
                year: "1950",
                desc: "Expanded facilities and welcomed students from all communities.",
              },
              {
                year: "2023",
                desc: "Introduced smart classrooms, labs, and modern infrastructure.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 transform transition"
              >
                <h3 className="text-4xl font-bold text-slate-900 mb-3">
                  {milestone.year}
                </h3>
                <p className="text-gray-600">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-red-700 mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Excellence",
                desc: "Striving for the highest standards in academics and character.",
              },
              {
                title: "Inclusivity",
                desc: "Welcoming students from all backgrounds with equal opportunity.",
              },
              {
                title: "Innovation",
                desc: "Blending tradition with modern learning methodologies.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 rounded-xl bg-gray-50 border border-gray-300 shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-gray-700 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      
      <Footer />
    </>
  );
};

export default History;
