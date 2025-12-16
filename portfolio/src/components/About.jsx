import React from "react";
import profilePic from "../assets/img/Abhijeet Formal Photo.jpg"; // replace with your image in assets folder

const About = () => {
    return (
        
        <div
        id="about"
            name="about"
            className="w-full min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center px-4 py-8 sm:px-6 lg:py-12"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6">

                {/* Left Side - Image */}
                <div className="flex justify-center">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="rounded-2xl w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/30"
                    />
                </div>

                {/* Right Side - Text */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4 sm:mb-6">About Me</h2>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-400">
                        Hi, I’m <span className="text-white font-semibold">Abhijeet Karne</span>,
                        a passionate <span className="text-cyan-400">Full Stack Developer</span>&nbsp;
                        who loves building clean, modern, and user-friendly web applications.
                        I enjoy learning new technologies and constantly improving my skills.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-400 mt-4">
                        When I’m not coding, you’ll find me exploring new tools, contributing
                        to open-source, or working on personal projects that challenge me to
                        grow as a developer.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        {/* View Resume Button */}
                        <a
                            href="/ABHIJEET_KARNE_CV.pdf" // PDF inside public folder
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gray-300 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-400 hover:scale-105 transition duration-300 text-center"
                        >
                            View Resume
                        </a>

                        {/* Download Resume Button */}
                        <a
                            href="/ABHIJEET_KARNE_CV.pdf"
                            download="ABHIJEET_KARNE_CV.pdf"
                            className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-cyan-500 hover:scale-105 transition duration-300 text-center"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
