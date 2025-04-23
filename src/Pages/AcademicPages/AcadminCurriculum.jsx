import React from "react";
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
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
            Academic Curriculum
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumData.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-4">
                  {item.class}
                </h2>
                {item.subjects.map((subject, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-lg font-semibold text-red-600 mb-2">
                      {subject.name}
                    </h3>
                    <h4 className="text-black font-bold">Chapters:</h4>
                    <ul className="list-disc list-inside text-black space-y-1">
                      {subject.chapters.map((chapter, chapterIdx) => (
                        <li key={chapterIdx}>{chapter}</li>
                      ))}
                    </ul>
                    <h4 className="text-gray-700 font-medium mt-2">
                      Prescribed Books:
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {subject.books.map((book, bookIdx) => (
                        <li key={bookIdx}>{book}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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