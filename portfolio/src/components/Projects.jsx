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
      name="projects"
      className="w-full min-h-screen bg-gray-900 text-gray-300 px-6 py-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map(({ id, title, img, desc, github, demo }) => (
            <div
              key={id}
              className="bg-gray-800 rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 duration-300"
            >
              <img
                src={img}
                alt={title}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-52">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400 mt-2 flex-grow">{desc}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-700 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition duration-300 text-sm font-medium"
                  >
                    Code
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-500 transition duration-300 text-sm font-medium"
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
