import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Developer Intern",
      company: "Numetry Technologies",
      duration: "Jan 2025 - July 2025",
      desc: [
        "Built and deployed full-stack web applications using the MERN stack.",
        "Implemented authentication and authorization using JWT.",
        "Designed and developed RESTful APIs with Express.js.",
        "Managed MongoDB databases with CRUD operations.",
        "Worked on responsive UI design using React and Tailwind CSS.",
      ],
    },
  ];

  return (
    <div id="experience" className="w-full min-h-screen bg-gray-900 text-gray-300 px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-6 sm:mb-8 relative inline-block mx-auto">
          Experience
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full mt-2"></span>
        </h2>

        {experiences.map(({ id, role, company, duration, desc }) => (
          <div
            key={id}
            className="bg-gray-800 border-l-4 border-cyan-400 p-5 sm:p-6 rounded-r-lg sm:rounded-r-xl shadow-md shadow-cyan-500/20 mb-5 sm:mb-6 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1 mb-3 sm:mb-4">
              <p className="text-cyan-400 text-base sm:text-lg">{company}</p>
              <p className="text-xs sm:text-sm text-gray-400 italic">{duration}</p>
            </div>

            {/* Show each point on next line */}
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
              {desc.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan-400 mr-2 mt-1">•</span>
                  <span className="text-gray-300 text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
