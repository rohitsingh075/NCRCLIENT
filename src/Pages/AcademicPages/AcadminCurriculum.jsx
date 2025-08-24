import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


const curriculumData = [
  {
    class: "Class 4",
    subjects: [
      {
        name: "English",
        chapters: ["Wake Up!", "Neha's Alarm Clock", "Noses", "The Little Fir Tree"],
        books: ["Marigold"],
      },
      {
        name: "Mathematics",
        chapters: ["Building with Bricks", "Long and Short", "A Trip to Bhopal", "Tick-Tick-Tick"],
        books: ["Math-Magic"],
      },
      {
        name: "EVS",
        chapters: ["Going to School", "Ear to Ear", "A Day with Nandu", "The Story of Amrita"],
        books: ["Looking Around"],
      },
    ],
  },
  {
    class: "Class 5",
    subjects: [
      {
        name: "English",
        chapters: ["Ice-Cream Man", "Wonderful Waste!", "Teamwork", "Flying Together"],
        books: ["Marigold"],
      },
      {
        name: "Mathematics",
        chapters: ["The Fish Tale", "Shapes and Angles", "How Many Squares?", "Parts and Wholes"],
        books: ["Math-Magic"],
      },
      {
        name: "EVS",
        chapters: ["Super Senses", "A Snake Charmer's Story", "From Tasting to Digesting", "Mangoes Round the Year"],
        books: ["Looking Around"],
      },
    ],
  },
  {
    class: "Class 6",
    subjects: [
      {
        name: "English",
        chapters: ["Who Did Patrick's Homework?", "A House, A Home", "The Kite", "The Quarrel"],
        books: ["Honeysuckle", "A Pact with the Sun"],
      },
      {
        name: "Mathematics",
        chapters: ["Knowing Our Numbers", "Whole Numbers", "Playing with Numbers", "Basic Geometrical Ideas"],
        books: ["Mathematics"],
      },
      {
        name: "Science",
        chapters: ["Food: Where Does It Come From?", "Components of Food", "Fibre to Fabric", "Sorting Materials into Groups"],
        books: ["Science"],
      },
    ],
  },
  {
    class: "Class 7",
    subjects: [
      {
        name: "English",
        chapters: ["Three Questions", "A Gift of Chappals", "The Squirrel", "The Rebel"],
        books: ["Honeycomb", "An Alien Hand"],
      },
      {
        name: "Mathematics",
        chapters: ["Integers", "Fractions and Decimals", "Data Handling", "Simple Equations"],
        books: ["Mathematics"],
      },
      {
        name: "Science",
        chapters: ["Nutrition in Plants", "Nutrition in Animals", "Fibre to Fabric", "Heat"],
        books: ["Science"],
      },
    ],
  },
  {
    class: "Class 8",
    subjects: [
      {
        name: "English",
        chapters: ["The Best Christmas Present in the World", "The Tsunami", "Glimpses of the Past", "Bepin Choudhury's Lapse of Memory"],
        books: ["Honeydew", "It So Happened"],
      },
      {
        name: "Mathematics",
        chapters: ["Rational Numbers", "Linear Equations in One Variable", "Understanding Quadrilaterals", "Data Handling"],
        books: ["Mathematics"],
      },
      {
        name: "Science",
        chapters: ["Crop Production and Management", "Microorganisms: Friend and Foe", "Synthetic Fibres and Plastics", "Materials: Metals and Non-Metals"],
        books: ["Science"],
      },
      {
        name: "Social Science",
        chapters: [
          "History: How, When and Where",
          "Geography: Resources",
          "Civics: The Indian Constitution",
        ],
        books: ["Our Pasts III", "Resources and Development", "Social and Political Life III"],
      },
    ],
  },
  {
    class: "Class 9",
    subjects: [
      {
        name: "English",
        chapters: ["The Fun They Had", "The Sound of Music", "The Little Girl", "A Truly Beautiful Mind"],
        books: ["Beehive", "Moments"],
      },
      {
        name: "Mathematics",
        chapters: ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables"],
        books: ["Mathematics"],
      },
      {
        name: "Science",
        chapters: ["Matter in Our Surroundings", "Is Matter Around Us Pure?", "Atoms and Molecules", "The Fundamental Unit of Life"],
        books: ["Science"],
      },
      {
        name: "Social Science",
        chapters: [
          "History: The French Revolution",
          "Geography: India - Size and Location",
          "Civics: What is Democracy? Why Democracy?",
          "Economics: The Story of Village Palampur",
        ],
        books: ["India and the Contemporary World I", "Contemporary India I", "Democratic Politics I", "Economics"],
      },
    ],
  },
  {
    class: "Class 10",
    subjects: [
      {
        name: "English",
        chapters: ["A Letter to God", "Nelson Mandela: Long Walk to Freedom", "Two Stories About Flying", "From the Diary of Anne Frank"],
        books: ["First Flight", "Footprints Without Feet"],
      },
      {
        name: "Mathematics",
        chapters: ["Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables", "Quadratic Equations"],
        books: ["Mathematics"],
      },
      {
        name: "Science",
        chapters: ["Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-Metals", "Life Processes"],
        books: ["Science"],
      },
      {
        name: "Social Science",
        chapters: [
          "History: The Rise of Nationalism in Europe",
          "Geography: Resources and Development",
          "Civics: Power Sharing",
          "Economics: Development",
        ],
        books: ["India and the Contemporary World II", "Contemporary India II", "Democratic Politics II", "Understanding Economic Development"],
      },
    ],
  },
  {
    class: "Class 11 (Science Stream)",
    subjects: [
      {
        name: "Physics",
        chapters: ["Physical World", "Units and Measurements", "Motion in a Straight Line", "Laws of Motion"],
        books: ["Physics Part I & II (NCERT)"],
      },
      {
        name: "Chemistry",
        chapters: ["Some Basic Concepts of Chemistry", "Structure of Atom", "Classification of Elements", "Chemical Bonding"],
        books: ["Chemistry Part I & II (NCERT)"],
      },
      {
        name: "Biology",
        chapters: ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom"],
        books: ["Biology (NCERT)"],
      },
      {
        name: "Mathematics",
        chapters: ["Sets", "Relations and Functions", "Trigonometric Functions", "Principle of Mathematical Induction"],
        books: ["Mathematics (NCERT)"],
      },
    ],
  },
  {
    class: "Class 11 (Commerce Stream)",
    subjects: [
      {
        name: "Accountancy",
        chapters: ["Introduction to Accounting", "Theory Base of Accounting", "Recording of Transactions"],
        books: ["Accountancy Part I & II (NCERT)"],
      },
      {
        name: "Business Studies",
        chapters: ["Nature and Purpose of Business", "Forms of Business Organisations", "Public, Private and Global Enterprises"],
        books: ["Business Studies (NCERT)"],
      },
      {
        name: "Economics",
        chapters: ["Introduction to Economics", "Collection of Data", "Organisation of Data", "Presentation of Data"],
        books: ["Statistics for Economics", "Indian Economic Development (NCERT)"],
      },
    ],
  },
  {
    class: "Class 11 (Arts Stream)",
    subjects: [
      {
        name: "History",
        chapters: ["From the Beginning of Time", "Writing and City Life", "An Empire Across Three Continents"],
        books: ["Themes in World History (NCERT)"],
      },
      {
        name: "Geography",
        chapters: ["Geography as a Discipline", "The Earth", "Landforms", "Climate"],
        books: ["Fundamentals of Physical Geography", "India: Physical Environment (NCERT)"],
      },
      {
        name: "Political Science",
        chapters: ["Constitution: Why and How?", "Rights in the Indian Constitution", "Election and Representation"],
        books: ["Indian Constitution at Work", "Political Theory (NCERT)"],
      },
    ],
  },
  // Add Class 12 data similarly
];

const AcademicCurriculum = () => {
  const [openClass, setOpenClass] = useState(null);

  const toggleClass = (index) => {
    setOpenClass(openClass === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-10 tracking-wide">
            Academic Curriculum
          </h1>

          <div className="space-y-6">
            {curriculumData.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                {/* Class Header */}
                <button
                  onClick={() => toggleClass(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    {item.class}
                  </h2>
                  <span className="text-gray-700 text-lg transition-transform duration-300 transform">
                    {openClass === index ? "▲" : "▼"}
                  </span>
                </button>

                {/* Subjects (Expandable Section) */}
                {openClass === index && (
                  <div className="px-6 pb-6 space-y-6 animate-fadeIn">
                    {item.subjects.map((subject, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md p-5 transition-transform hover:scale-[1.02]"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {subject.name}
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Chapters */}
                          <div>
                            <h4 className="text-gray-700 font-semibold mb-1">
                              Chapters:
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {subject.chapters.map((chapter, chapterIdx) => (
                                <li key={chapterIdx}>{chapter}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Books */}
                          <div>
                            <h4 className="text-gray-700 font-semibold mb-1">
                              Prescribed Books:
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {subject.books.map((book, bookIdx) => (
                                <li key={bookIdx}>{book}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AcademicCurriculum;