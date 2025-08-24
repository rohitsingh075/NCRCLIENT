import React from "react";
import { motion } from "framer-motion";

const SchoolCommittee = () => {
  const members = [
    {
      role: "Patron",
      name: "General Manager",
      details: "North Central Railway, Prayagraj",
      equivalent: "Equivalent to the Secretary to the Govt. of India",
    },
    {
      role: "Patron",
      name: "Chief Personnel Officer",
      details: "North Central Railway, Prayagraj",
      equivalent: "Equivalent to the Joint Secretary to the Govt. of India",
    },
    {
      role: "Patron",
      name: "DRM/NCR/PRYJ",
      equivalent: "Equivalent to the Joint Secretary of India",
    },
    {
      role: "Chairman",
      name: "ADRM/NCR/PRYJ",
      equivalent: "Equivalent to the Joint Secretary of India",
    },
    {
      role: "Secretary",
      name: "Sr. DPO/NCR/PRYJ",
      equivalent: "Equivalent to the Joint Deputy Secretary of India",
    },
  ];

  const subMembers = [
    "Sr. Divisional Finance Manager / NCR / PRYJ",
    "Sr. Divisional Section Engg. / NCR / PRYJ",
    "Principal / NCR College / Tundla",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          School Management Committee (SMC)
        </motion.h2>
        <p className="text-gray-700 mb-12 text-lg">
          Composition of the <span className="font-semibold">School Management Committee</span> of{" "}
          <span className="font-semibold">NCR College, Tundla</span>.
        </p>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {m.role}:{" "}
                <span className="text-gray-900">{m.name}</span>
              </h3>
              {m.details && (
                <p className="text-gray-600 text-sm mt-1">{m.details}</p>
              )}
              <p className="text-gray-700 mt-2 italic">{m.equivalent}</p>
            </motion.div>
          ))}
        </div>

        {/* Sub Members */}
        <motion.div
          className="mt-14 bg-white p-6 rounded-xl shadow border border-gray-200 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-red-700 mb-4">
            Other Members
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {subMembers.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolCommittee;
