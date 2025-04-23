import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const StudentGuidelines = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-red-600 text-lg font-bold uppercase mb-2">Student Guidelines</h2>
          <h1 className="text-4xl font-bold mb-6">Rules and Regulations for Students</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At North Central Railway College, we believe that discipline and respect for rules are essential for creating a positive and productive learning environment. All students are expected to adhere to the following guidelines to ensure the smooth functioning of the institution and to foster mutual respect and understanding.
          </p>

          <div className="space-y-6">
            {/* Rule 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">1. Attendance and Punctuality</h3>
              <p className="text-gray-600">
                Students must attend school regularly and arrive on time. A minimum attendance of 75% is mandatory to be eligible for examinations. Late arrivals and absenteeism without prior notice will not be tolerated.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">2. Uniform and Appearance</h3>
              <p className="text-gray-600">
                Students are required to wear the prescribed school uniform and maintain a neat and tidy appearance. Any deviation from the dress code will result in disciplinary action.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">3. Respect for Teachers and Peers</h3>
              <p className="text-gray-600">
                Students must show respect to teachers, staff, and fellow students at all times. Bullying, harassment, or any form of disrespectful behavior will not be tolerated.
              </p>
            </div>

            {/* Rule 4 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">4. Use of School Property</h3>
              <p className="text-gray-600">
                Students must handle school property with care. Any damage to school property, whether intentional or accidental, must be reported immediately, and the cost of repairs will be borne by the student responsible.
              </p>
            </div>

            {/* Rule 5 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">5. Prohibited Items</h3>
              <p className="text-gray-600">
                Students are strictly prohibited from bringing mobile phones, electronic gadgets, or any other unauthorized items to school. Violation of this rule will result in confiscation of the item and further disciplinary action.
              </p>
            </div>

            {/* Rule 6 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">6. Academic Integrity</h3>
              <p className="text-gray-600">
                Students must maintain academic honesty and integrity. Cheating, plagiarism, or any other form of academic misconduct will result in severe consequences.
              </p>
            </div>

            {/* Rule 7 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">7. Participation in Activities</h3>
              <p className="text-gray-600">
                Students are encouraged to actively participate in co-curricular and extracurricular activities. Such participation is essential for holistic development and will be considered during evaluations.
              </p>
            </div>

            {/* Rule 8 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">8. Health and Hygiene</h3>
              <p className="text-gray-600">
                Students must maintain personal hygiene and cleanliness. They are also expected to keep the school premises clean and dispose of waste responsibly.
              </p>
            </div>

            {/* Rule 9 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">9. Safety and Security</h3>
              <p className="text-gray-600">
                Students must follow all safety rules and guidelines. Any unsafe behavior or actions that endanger others will result in strict disciplinary measures.
              </p>
            </div>

            {/* Rule 10 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">10. Communication with Parents</h3>
              <p className="text-gray-600">
                Parents are encouraged to maintain regular communication with the school. Students must ensure that all notices and circulars are delivered to their parents promptly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default StudentGuidelines;