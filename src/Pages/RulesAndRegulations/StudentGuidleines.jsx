import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import feeImage from "../../assets/ncrimage6.jpg";

const StudentGuidelines = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner Image */}
      <div>
        <img
          src={feeImage}
          alt="School Infrastructure Banner"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="pt-20 bg-gradient-to-b from-gray-700 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-red-500 text-lg font-bold uppercase mb-2 tracking-wider">
            Student Guidelines
          </h2>
          <h1 className="text-5xl text-white font-extrabold mb-6">
            Rules and Regulations for Students
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At North Central Railway College, we believe that discipline and
            respect for rules are essential for creating a positive and
            productive learning environment. All students are expected to
            adhere to the following guidelines to ensure the smooth functioning
            of the institution and to foster mutual respect and understanding.
          </p>

          <div className="space-y-6">
            {/* Rule Cards */}
            {[
              {
                title: "1. Attendance and Punctuality",
                content:
                  "Students must attend school regularly and arrive on time. A minimum attendance of 75% is mandatory to be eligible for examinations. Late arrivals and absenteeism without prior notice will not be tolerated.",
                icon: "⏰",
              },
              {
                title: "2. Uniform and Appearance",
                content:
                  "Students are required to wear the prescribed school uniform and maintain a neat and tidy appearance. Any deviation from the dress code will result in disciplinary action.",
                icon: "👔",
              },
              {
                title: "3. Respect for Teachers and Peers",
                content:
                  "Students must show respect to teachers, staff, and fellow students at all times. Bullying, harassment, or any form of disrespectful behavior will not be tolerated.",
                icon: "🤝",
              },
              {
                title: "4. Use of School Property",
                content:
                  "Students must handle school property with care. Any damage to school property, whether intentional or accidental, must be reported immediately, and the cost of repairs will be borne by the student responsible.",
                icon: "🏫",
              },
              {
                title: "5. Prohibited Items",
                content:
                  "Students are strictly prohibited from bringing mobile phones, electronic gadgets, or any other unauthorized items to school. Violation of this rule will result in confiscation of the item and further disciplinary action.",
                icon: "📵",
              },
              {
                title: "6. Academic Integrity",
                content:
                  "Students must maintain academic honesty and integrity. Cheating, plagiarism, or any other form of academic misconduct will result in severe consequences.",
                icon: "📚",
              },
              {
                title: "7. Participation in Activities",
                content:
                  "Students are encouraged to actively participate in co-curricular and extracurricular activities. Such participation is essential for holistic development and will be considered during evaluations.",
                icon: "🎨",
              },
              {
                title: "8. Health and Hygiene",
                content:
                  "Students must maintain personal hygiene and cleanliness. They are also expected to keep the school premises clean and dispose of waste responsibly.",
                icon: "🧼",
              },
              {
                title: "9. Safety and Security",
                content:
                  "Students must follow all safety rules and guidelines. Any unsafe behavior or actions that endanger others will result in strict disciplinary measures.",
                icon: "🛡️",
              },
              {
                title: "10. Communication with Parents",
                content:
                  "Parents are encouraged to maintain regular communication with the school. Students must ensure that all notices and circulars are delivered to their parents promptly.",
                icon: "📩",
              },
            ].map((rule, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg hover:bg-red-50 transition duration-300 flex items-start gap-x-4"
              >
                <div className="text-4xl text-red-500">{rule.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {rule.title}
                  </h3>
                  <p className="text-gray-600">{rule.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default StudentGuidelines;