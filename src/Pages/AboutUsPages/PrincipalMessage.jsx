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
      <div className="pt-2 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-4xl font-bold mb-3 italic "> Principal's Message</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            {/* Left Section: Principal's Photo */}
            <div className="bg-red-700 -mt-12   mx-auto  rounded-lg shadow-xl overflow-hidden border-1 border-black">
              <img
                src={PrincipalPhoto} // Replace with the actual photo path
                alt="Principal"
                className="rounded-lg shadow-lg object-fit h-96  "
              />
            </div>

            {/* Right Section: Principal's Message */}
            <div className="italic">
              <p className="text-gray-700 font-bold text-lg leading-relaxed mb-3">
                Dear Students, Parents, and Well-Wishers,
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-3">
                It is with immense pride and joy that I welcome you to North Central Railway College, a beacon of excellence in education since 1882. Our institution has always been committed to nurturing young minds and shaping them into responsible, compassionate, and confident individuals who are ready to face the challenges of the modern world.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed ">
                At North Central Railway College, we believe in the holistic development of our students. Along with academic excellence, we emphasize the importance of character building, creativity, and critical thinking. Thank you for being a part of this incredible journey. Let us work together to create a brighter future for our students and our community.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-8 font-bold">
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