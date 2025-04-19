import React, { useState } from "react";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const notices = [
    {
      title: "Holiday Notice",
      date: "April 18, 2025",
      content: "School will remain closed on 20th April for Ram Navami.",
    },
    {
      title: "Exam Schedule",
      date: "April 15, 2025",
      content: "Mid-term exam schedule is available under Academics.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-blue-600">NCR College</h1>
          <div className="md:hidden">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#academics" className="hover:text-blue-500">Academics</a></li>
            <li><a href="#faculty" className="hover:text-blue-500">Faculty</a></li>
            <li><a href="#notices" className="hover:text-blue-500">Notices</a></li>
          </ul>
        </nav>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
            <li><a href="#home" className="block hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="block hover:text-blue-500">About</a></li>
            <li><a href="#academics" className="block hover:text-blue-500">Academics</a></li>
            <li><a href="#faculty" className="block hover:text-blue-500">Faculty</a></li>
            <li><a href="#notices" className="block hover:text-blue-500">Notices</a></li>
          </ul>
        )}
      </header>

      {/* Home Section */}
      <section id="home" className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">Welcome to NCR College</h2>
        <p className="text-lg sm:text-xl text-gray-700">
          Your gateway to quality education, growth, and excellence.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">About the School</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            North Central Railway College, Tundla, is committed to academic excellence and holistic development. With a rich legacy and experienced faculty, we provide a nurturing environment for students to grow and excel in all spheres.
          </p>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">Academics</h2>
          <p className="text-gray-700 mb-2 text-base sm:text-lg">
            We follow the CBSE curriculum with a focus on conceptual clarity and practical knowledge.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Class-wise syllabus available in PDF format</li>
            <li>Subject-wise curriculum and structure</li>
            <li>Dedicated sections for board exam resources</li>
          </ul>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-4">Faculty & Staff</h2>
          <p className="text-gray-700 mb-2 text-base sm:text-lg">
            Our faculty are well-qualified, experienced, and passionate about teaching:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Dr. A.K. Verma – Principal</li>
            <li>Mrs. Neha Singh – Vice Principal</li>
            <li>Mr. S. Kumar – Senior Mathematics Teacher</li>
            <li>Ms. Priya Sharma – English Department Head</li>
          </ul>
        </div>
      </section>

      {/* Notices Section */}
      <section id="notices" className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-blue-700 mb-6">Notices & Announcements</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {notices.map((notice, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="text-lg font-bold text-gray-800">{notice.title}</h3>
                <p className="text-sm text-gray-500">{notice.date}</p>
                <p className="text-gray-700 mt-1">{notice.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NCR College, Tundla. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
