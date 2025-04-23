import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
// import principalPhoto from "../../assets/principalPhoto.jpg"; // Replace with the actual photo path
import PrincipalPhoto from "../../assets/principal.jpg"; // Replace with the actual photo path

const PrincipalMessage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-red-600 text-lg font-bold uppercase mb-2">Principal's Message</h2>
          <h1 className="text-4xl font-bold mb-6">A Message from Our Principal</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section: Principal's Photo */}
            <div className="bg-red-700 -mt-60 scale-90  mx-auto  rounded-lg shadow-xl overflow-hidden border-1 border-black">
              <img
                src={PrincipalPhoto} // Replace with the actual photo path
                alt="Principal"
                className="rounded-lg shadow-lg object-fit  ]"
              />
            </div>

            {/* Right Section: Principal's Message */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Dear Students, Parents, and Well-Wishers,
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                It is with immense pride and joy that I welcome you to North Central Railway College, a beacon of excellence in education since 1882. Our institution has always been committed to nurturing young minds and shaping them into responsible, compassionate, and confident individuals who are ready to face the challenges of the modern world.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At NCR College, we believe in the holistic development of our students. Along with academic excellence, we emphasize the importance of character building, creativity, and critical thinking. Our dedicated faculty, state-of-the-art facilities, and vibrant learning environment ensure that every student receives the best possible education and opportunities to grow.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                As we move forward, our vision is to continue fostering a culture of innovation, inclusivity, and excellence. Together, let us strive to make NCR College a place where dreams take flight, and every student achieves their full potential.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Thank you for being a part of this incredible journey. Let us work together to create a brighter future for our students and our community.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-6 font-bold">
                Warm regards,<br />
                <span className="text-red-600">M.P Sonkar</span><br />
                Principal, North Central Railway College
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

export default PrincipalMessage;