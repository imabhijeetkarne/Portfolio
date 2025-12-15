import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";

const Skills = () => {
  const skills = [
  { id: 1, name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { id: 2, name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { id: 3, name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { id: 4, name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
  { id: 5, name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
  { id: 6, name: "Express.js", icon: <FaNodeJs size={40} className="text-white" /> },
  { id: 7, name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { id: 8, name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { id: 9, name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
  { id: 10, name: "Git", icon: <SiGit size={40} className="text-red-500" /> },
  { id: 11, name: "GitHub", icon: <SiGithub size={40} className="text-gray-300" /> },
  
];


  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gray-900 text-gray-300 px-6 py-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Skills</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-md shadow-cyan-500/20 py-8 hover:scale-105 hover:shadow-cyan-400/40 transition duration-300"
            >
              {icon}
              <p className="mt-4 text-lg font-medium">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
