import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                yoyo: Infinity,
                duration: 0.3
            }
        }
    };

    // Contact details
    const email = 'abhijeetkarne47@gmail.com';
    const phoneNumber = '9156139538'; // Your WhatsApp number without any symbols
    const whatsappUrl = `https://wa.me/91${phoneNumber}`; // Added 91 country code for India
    const emailUrl = `mailto:${email}`;
    const phoneUrl = `tel:${phoneNumber}`;

    return (
        <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 sm:px-6 py-12 sm:py-16">
            <motion.div
                className="text-center w-full max-w-4xl px-4 sm:px-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                        Hi, I'm <span className="text-blue-400">Abhijeet Karne</span>
                    </h1>

                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-10 sm:h-12 md:h-14 flex items-center justify-center">
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'MERN Stack Expert', 'Problem Solver'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                        I build exceptional digital experiences with modern web technologies.
                        Currently focused on creating responsive and user-friendly applications.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <motion.a
                            href="https://github.com/imabhijeetkarne"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-2xl sm:text-3xl p-2 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                            title="GitHub"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/feed/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 text-2xl sm:text-3xl p-2 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                            title="LinkedIn"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href={emailUrl}
                            className="text-gray-400 hover:text-red-400 text-2xl sm:text-3xl p-2 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                            title="Email"
                        >
                            <FaEnvelope />
                        </motion.a>
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-green-400 text-2xl sm:text-3xl p-2 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                            title="WhatsApp"
                        >
                            <FaWhatsapp />
                        </motion.a>
                        <motion.a
                            href={phoneUrl}
                            className="text-gray-400 hover:text-green-500 text-2xl sm:text-3xl p-2 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                            title="Call Me"
                        >
                            <FaPhone />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;