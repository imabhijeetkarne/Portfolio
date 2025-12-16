import React from "react";
import project1 from "../assets/img/Project1.png"; 
import project2 from "../assets/img/Project2.png";
import project3 from "../assets/img/Project3.png";  

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Marketplace",
      img: project1,
      desc: "Developed a full-stack web application replicating Airbnb’s core functionalities.",
      github: "https://github.com/imabhijeetkarne/Airbnb",
      demo: "https://airbnb-001p.onrender.com/",
    },

    {
      id: 2,
      title: "Learning Management System",
      img: project2,
      desc: "A web platform for managing courses, learning content, and user progress..",
      github: "https://github.com/imabhijeetkarne/LMS",
      demo: "https://virtualcourse-tf1z.onrender.com/",
    },

    {
      id: 3,
      title: "Chatly | ChatApp",
      img: project3,
      desc: "A real-time messaging app for instant one-to-one communication..",
      github: "https://github.com/imabhijeetkarne/Chatly-Chat-App",
      demo: "https://chatly-8ka9.onrender.com/login",
    },
  ];

  return (
    <div
      id="projects"
      name="projects"
      className="w-full min-h-screen bg-gray-900 text-gray-300 px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8 sm:mb-12 relative inline-block mx-auto">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full mt-2"></span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map(({ id, title, img, desc, github, demo }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-48 sm:h-52 md:h-48 lg:h-52 xl:h-56 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow">{desc}</p>
                <div className="flex flex-wrap gap-3 mt-auto pt-2">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-700/80 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-sm font-medium flex-1 sm:flex-none text-center"
                  >
                    Code
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-500 transition-all duration-300 text-sm font-medium flex-1 sm:flex-none text-center"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
