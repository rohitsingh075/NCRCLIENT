import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const StudentGuidelines = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Section Header */}
          <h2 className="text-gray-700 text-sm font-semibold uppercase mb-3 tracking-widest text-center">
            Student Guidelines
          </h2>
          <h1 className="text-4xl md:text-5xl text-red-600 font-extrabold mb-6 text-center">
            Rules and Regulations for Students
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            At North Central Railway College, discipline and respect for rules 
            are essential for creating a positive and productive learning environment. 
            Students are expected to adhere to the following guidelines to ensure 
            smooth functioning of the institution and foster mutual respect.
          </p>

          {/* Rules */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Attendance and Punctuality",
                content:
                  "Students must attend school regularly and arrive on time. A minimum attendance of 75% is mandatory to be eligible for examinations.",
                icon: "⏰",
              },
              {
                title: "Uniform and Appearance",
                content:
                  "Students must wear the prescribed uniform and maintain a neat appearance. Any deviation will result in disciplinary action.",
                icon: "👔",
              },
              {
                title: "Respect for Teachers and Peers",
                content:
                  "Respect for teachers, staff, and fellow students is mandatory. Bullying or harassment will not be tolerated.",
                icon: "🤝",
              },
              {
                title: "Use of School Property",
                content:
                  "Handle school property responsibly. Any damage must be reported and repaired at the student’s expense.",
                icon: "🏫",
              },
              {
                title: "Prohibited Items",
                content:
                  "Mobile phones, electronic gadgets, or unauthorized items are not allowed. Confiscated items will not be returned immediately.",
                icon: "📵",
              },
              {
                title: "Academic Integrity",
                content:
                  "Maintain honesty in academics. Cheating, plagiarism, or misconduct will lead to strict consequences.",
                icon: "📚",
              },
              {
                title: "Participation in Activities",
                content:
                  "Students are encouraged to participate in extracurricular activities, which are essential for holistic development.",
                icon: "🎨",
              },
              {
                title: "Health and Hygiene",
                content:
                  "Maintain personal hygiene and keep school premises clean. Waste should be disposed of responsibly.",
                icon: "🧼",
              },
              {
                title: "Safety and Security",
                content:
                  "Follow safety rules. Unsafe actions or endangering behavior will result in strict measures.",
                icon: "🛡️",
              },
              {
                title: "Communication with Parents",
                content:
                  "Ensure parents receive all notices promptly. Regular communication with school is encouraged.",
                icon: "📩",
              },
            ].map((rule, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-6 transition duration-300 flex items-start gap-x-5"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl shadow-sm">
                  {rule.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{rule.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<br /><br /><br /><br />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default StudentGuidelines;
