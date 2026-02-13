import React from "react";

const alumniData = [
  {
    id: 1,
    name: "Ankit Verma",
    stream: "Science Stream",
    year: "Batch of 2019",
    current: "Pursuing B.Tech (CSE)",
  },
  {
    id: 2,
    name: "Riya Sharma",
    stream: "Commerce Stream",
    year: "Batch of 2020",
    current: "B.Com (Hons)",
  },
  {
    id: 3,
    name: "Aditya Singh",
    stream: "Humanities",
    year: "Batch of 2018",
    current: "Civil Services Aspirant",
  },
  {
    id: 4,
    name: "Neha Gupta",
    stream: "Science Stream",
    year: "Batch of 2021",
    current: "Medical Aspirant",
  },
];

const AlumniSection = () => {
  return (
    <section className="relative py-20  bg-[#ffffff] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
            Our Alumni
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2">
            Our Students, Our Pride
          </h2>
          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            Our alumni continue to excel in academics, competitive exams,
            and professional careers, carrying forward the legacy of excellence.
          </p>
        </div>

        {/* Alumni Cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible scrollbar-hide">

          {alumniData.map((alumni) => (
            <div
              key={alumni.id}
              className="group min-w-[280px] lg:min-w-0 bg-[#020617]
                         border border-white/10 rounded-2xl
                         shadow-lg transition-all duration-300
                         hover:-translate-y-2 hover:shadow-red-500/20"
            >
              <div className="relative p-6 text-center">

                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br
                                from-red-600/10 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition" />

                {/* Initial Badge */}
                <div className="relative z-10 w-14 h-14 mx-auto mb-4
                                flex items-center justify-center
                                rounded-full bg-red-600/20 text-red-400
                                font-bold text-xl">
                  {alumni.name.charAt(0)}
                </div>

                <h3 className="relative z-10 text-lg font-semibold text-white">
                  {alumni.name}
                </h3>

                <p className="relative z-10 text-sm text-gray-400 mt-1">
                  {alumni.stream}
                </p>

                <p className="relative z-10 text-xs text-gray-500 mt-1">
                  {alumni.year}
                </p>

                <div className="relative z-10 mt-4 px-3 py-2 rounded-md
                                bg-white/5 border border-white/10">
                  <p className="text-sm font-medium text-red-400">
                    {alumni.current}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
