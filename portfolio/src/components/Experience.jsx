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
    <div className="w-full min-h-screen bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          Experience
        </h2>

        {experiences.map(({ id, role, company, duration, desc }) => (
          <div
            key={id}
            className="bg-gray-800 border-l-4 border-cyan-400 p-6 rounded-r-xl shadow-md shadow-cyan-500/20 mb-6"
          >
            <h3 className="text-2xl font-semibold text-white">{role}</h3>
            <p className="text-cyan-400">{company}</p>
            <p className="text-sm text-gray-400 italic">{duration}</p>

            {/* Show each point on next line */}
            <ul className="mt-4 list-disc list-inside space-y-2">
              {desc.map((point, index) => (
                <li key={index} className="text-gray-300">
                  {point}
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
