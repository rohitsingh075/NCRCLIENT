import React from "react";
import { motion } from "framer-motion";

const ActivitiesSection = () => {
  const videos = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/example1",
      title: "Discussion on Digital Marketing",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/example2",
      title: "Classroom Learning",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/example3",
      title: "Campus View",
    },
  ];

  const testimonials = [
    {
      text: "Great school with supportive teachers!",
      name: "Amit Sharma",
      role: "Parent",
    },
    {
      text: "I love the campus and activities.",
      name: "Priya Singh",
      role: "Student",
    },
    {
      text: "Excellent learning environment.",
      name: "Ravi Kumar",
      role: "Teacher",
    },
  ];

  return (
    <section className="py-12 bg-white text-center">
      {/* Section Heading */}
      <motion.h2
        className="text-2xl font-bold mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        Activities @{" "}
        <span className="text-red-700">North Central Railway College</span>
      </motion.h2>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-2">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <iframe
              className="w-full h-full"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-col sm:flex-row justify-center gap-4 px-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition w-full sm:w-auto">
          Load More...
        </button>
        <a
          href="https://www.youtube.com/@YourChannel"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-700 transition flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M10 15l5.19-3L10 9v6zm12-3c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z" />
          </svg>
          Subscribe
        </a>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="mt-16 px-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-red-700 mb-10">
          Voices of Our Community
        </h2>
        <p className="text-center font-bold text-base sm:text-xl text-gray-900 mb-8">
          Discover what parents, teachers, and students say about their journey
          with North Central Railway College.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <p className="italic text-gray-800 text-sm sm:text-base">
                {testimonial.text}
              </p>
              <div className="mt-4 text-center">
                <p className="text-red-700 font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ActivitiesSection;
