import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiGit, SiGithub, SiRedux, SiBootstrap, SiPostman, SiMysql, SiSocketdotio, SiRender, SiVercel } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 3, name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
    { id: 4, name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
    { id: 5, name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
    { id: 6, name: "SQL", icon: <FaDatabase size={40} className="text-blue-600" /> },
    { id: 12, name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { id: 7, name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
    { id: 1, name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { id: 8, name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-600" /> },
    { id: 14, name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-500" /> },
    { id: 13, name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { id: 11, name: "Express.js", icon: <FaNodeJs size={40} className="text-white" /> },
    { id: 17, name: "MySQL", icon: <SiMysql size={40} className="text-blue-500" /> },
    { id: 10, name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
    { id: 18, name: "Socket.io", icon: <SiSocketdotio size={40} className="text-green-600" /> },
    { id: 15, name: "Git", icon: <SiGit size={40} className="text-red-500" /> },
    { id: 16, name: "GitHub", icon: <SiGithub size={40} className="text-gray-300" /> },
    { id: 9, name: "Postman", icon: <SiPostman size={40} className="text-orange-600" /> },
    { id: 20, name: "Render", icon: <SiRender size={40} className="text-cyan-500" /> },
    { id: 21, name: "Vercel", icon: <SiVercel size={40} className="text-white" /> },
    { id: 19, name: "Docker", icon: <FaDocker size={40} className="text-blue-400" /> }


  ];


  return (
    <div
      id="skills"
      name="skills"
      className="w-full min-h-screen bg-gray-900 text-gray-300 px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8 sm:mb-12 mx-auto">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {skills.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-gray-800/70 rounded-xl shadow-lg shadow-cyan-500/10 p-4 sm:p-6 border border-gray-700/50 hover:border-cyan-400/30 hover:scale-[1.03] hover:shadow-cyan-400/30 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                {React.cloneElement(icon, {
                  className: `${icon.props.className} w-8 h-8 sm:w-10 sm:h-10`,
                  size: undefined
                })}
              </div>
              <p className="text-sm sm:text-base font-medium text-gray-300">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
