import { BookOpen, Users, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const SchoolInfoCards = () => {
  const infoCards = [
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Best Educational Institute",
      subtitle: "Excellence in Learning",
      description:
        "Providing world-class education with innovative teaching methodologies and comprehensive academic programs.",
      iconBg: "bg-red-600",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Expert Faculty Team",
      subtitle: "Experienced Educators",
      description:
        "Our highly qualified and experienced faculty members are committed to nurturing every student's potential.",
      iconBg: "bg-indigo-600",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "100% Secure Learning",
      subtitle: "Safe Environment",
      description:
        "We provide a completely safe and secure learning environment with modern security systems and protocols.",
      iconBg: "bg-green-600",
    },
  ];

  const schoolDetails = {
    name: "North Central Railway College",
    address: "Tundla, Firozabad (UP) 283204",
    schoolCode: "62013",
    affiliationNo: "2180033",
    udiseNo: "09160300141",
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-gray-50">
      {/* Slim Banner Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 sm:py-10 px-3 sm:px-6 text-center text-white overflow-hidden rounded-b-2xl shadow-lg">
        {/* Decorative Floating Background */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-red-800 opacity-20 rounded-full blur-3xl -top-10 -left-10"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 sm:w-64 sm:h-64 bg-indigo-700 opacity-20 rounded-full blur-3xl bottom-0 right-0"
        />

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
          >
            {schoolDetails.name}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6"
          >
            <MapPin className="w-5 h-5 text-red-400 mr-2" />
            <p className="text-base sm:text-lg font-medium text-gray-200">
              {schoolDetails.address}
            </p>
          </motion.div>

          {/* School Details Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            <motion.div
              variants={item}
              className="bg-gray-800 p-3 sm:p-4 rounded-xl border border-gray-700 shadow-md"
            >
              <p className="text-xs text-red-400 uppercase tracking-wider font-semibold mb-1">
                School Code
              </p>
              <p className="text-lg sm:text-xl font-bold">{schoolDetails.schoolCode}</p>
            </motion.div>
            <motion.div
              variants={item}
              className="bg-gray-800 p-3 sm:p-4 rounded-xl border border-gray-700 shadow-md"
            >
              <p className="text-xs text-indigo-400 uppercase tracking-wider font-semibold mb-1">
                Affiliation No.
              </p>
              <p className="text-lg sm:text-xl font-bold">{schoolDetails.affiliationNo}</p>
            </motion.div>
            <motion.div
              variants={item}
              className="bg-gray-800 p-3 sm:p-4 rounded-xl border border-gray-700 shadow-md"
            >
              <p className="text-xs text-green-400 uppercase tracking-wider font-semibold mb-1">
                UDISE No.
              </p>
              <p className="text-lg sm:text-xl font-bold">{schoolDetails.udiseNo}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Info Cards Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10"
      >
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group"
          >
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${card.iconBg} rounded-xl mb-4 shadow-md`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-red-600 font-medium mb-4">{card.subtitle}</p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SchoolInfoCards;
