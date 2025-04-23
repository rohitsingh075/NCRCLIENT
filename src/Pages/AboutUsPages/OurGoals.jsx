import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const OurGoals = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-gray-50">
        {/* Goals Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-red-600 text-lg font-bold uppercase mb-2">Our Goals</h2>
          <h1 className="text-4xl font-bold mb-6">Our Aspirations for Excellence</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At North Central Railway College, we strive to create an environment that fosters growth, learning, and excellence. 
            Our goals are designed to ensure that every student reaches their full potential while becoming responsible and 
            compassionate members of society.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goal 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">1. Academic Excellence</h2>
              <p className="text-gray-600">
                We aim to provide a robust academic curriculum that challenges students to think critically, solve problems, 
                and develop a love for lifelong learning. Our focus is on nurturing intellectual curiosity and achieving high 
                academic standards.
              </p>
            </div>

            {/* Goal 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">2. Holistic Development</h2>
              <p className="text-gray-600">
                Beyond academics, we emphasize the importance of physical, emotional, and social development. Through extracurricular 
                activities, sports, and arts, we ensure that students grow into well-rounded individuals.
              </p>
            </div>

            {/* Goal 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">3. Character Building</h2>
              <p className="text-gray-600">
                Integrity, respect, and empathy are at the core of our values. We aim to instill these qualities in our students, 
                helping them become ethical and responsible citizens.
              </p>
            </div>

            {/* Goal 4 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">4. Community Engagement</h2>
              <p className="text-gray-600">
                We encourage students to actively participate in community service and social initiatives. By doing so, they learn 
                the importance of giving back and making a positive impact on the world around them.
              </p>
            </div>

            {/* Goal 5 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">5. Innovation and Creativity</h2>
              <p className="text-gray-600">
                Our goal is to foster an environment where students can explore their creativity and think innovatively. We support 
                them in pursuing their passions and developing skills that prepare them for the future.
              </p>
            </div>

            {/* Goal 6 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">6. Environmental Awareness</h2>
              <p className="text-gray-600">
                We aim to instill a sense of responsibility towards the environment in our students. Through eco-friendly initiatives 
                and awareness programs, we encourage them to contribute to a sustainable future.
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

export default OurGoals;