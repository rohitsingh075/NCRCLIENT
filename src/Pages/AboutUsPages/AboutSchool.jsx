import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, MonitorSmartphone, Trophy, Activity, Sparkles, UserCheck, MessageSquare, Smartphone, ShieldCheck, Droplets, Flame, Flag, Camera, Baby, Laptop, Database } from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import schoolImage from "../../assets/ncrimage1.jpg"; // Replace with actual image path

const AboutSchool = () => {
  const features = [
    { icon: BookOpen, text: "A peaceful and academically stimulating environment." },
    { icon: Users, text: "Restricted class strength for personalized attention." },
    { icon: Trophy, text: "Sports and physical education with opportunities for competitions, trophies, and medals." },
    { icon: Activity, text: "Activity-based learning methodology." },
    { icon: Sparkles, text: "Diverse range of co-curricular and extracurricular activities." },
    { icon: UserCheck, text: "Well-qualified and dedicated faculty and staff." },
    { icon: MessageSquare, text: "Regular parent–teacher interactions for holistic growth." },
    { icon: Droplets, text: "Provision of cold, filtered drinking water through R.O. system." },
    { icon: Flag, text: "Celebration of important festivals and national events." },
    { icon: Camera, text: "Enhanced security with CCTV surveillance." },
    { icon: Laptop, text: "Comprehensive computer education with the latest software for global competency." },,
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-gray-50">
        {/* About School Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1
            className="text-4xl md:text-5xl text-red-700 font-bold mb-10 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            North Central Railway College, Tundla
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Section: Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <img
                src={schoolImage}
                alt="School Building"
                className="rounded-2xl shadow-xl w-full h-[380px] object-cover"
              />
            </motion.div>

            {/* Right Section: Description */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Established in <span className="font-semibold">1882</span>, North Central Railway College has 
                been a center of academic excellence and holistic development for generations of students.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our state-of-the-art facilities include smart classrooms, advanced science laboratories, 
                and a library filled with rich resources. We aim to foster <span className="font-semibold">critical thinking, 
                creativity, and leadership qualities</span> in every learner.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With a blend of academics, co-curricular activities, and strong values, NCR College 
                continues to inspire students to grow into responsible global citizens.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 py-16 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Key Highlights
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Experienced Faculty",
                  desc: "Highly qualified teachers dedicated to nurturing the potential of every student.",
                },
                {
                  title: "Modern Infrastructure",
                  desc: "Smart classrooms, science labs, and a library for holistic learning.",
                },
                {
                  title: "Co-Curricular Excellence",
                  desc: "Sports, arts, and cultural programs to inspire creativity and teamwork.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-red-700 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Salient Features Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Salient Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <feature.icon className="w-8 h-8 text-red-700 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutSchool;
