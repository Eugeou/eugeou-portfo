import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaInfoCircle, FaGraduationCap, FaBullseye, FaSmile } from "react-icons/fa";

import Image from "next/image";
import { BiUser } from "react-icons/bi";

const tabs = [
    {
      id: 0,
      label: "Personal Info",
      icon: <BiUser />,
      content: "Hi guys, my name is Nguyen Hoang Minh Quan. I'm an under-graduated student of The University of Information Technology. And I also known as a Frontend Developer.",
    },
    {
      id: 1,
      label: "Education",
      icon: <FaGraduationCap />,
      content: "I am currently pursuing a Bachelor's degree in Information Technology. My focus is on Web Development and Software Engineering.",
    },
    {
      id: 2,
      label: "Objective",
      icon: <FaBullseye />,
      content: "Diligent and motivated individual with a foundation in frontend development, seeking an internship to apply skills in UI programming. Eager to gain hands-on experience, contribute to a skilled team, and deepen expertise in building reliable, scalable solutions. ",
    },
    {
      id: 3,
      label: "My Hobby",
      icon: <FaSmile />,
      content: "I enjoy coding, playing games, watching cartoons, and exploring new technologies in my free time.",
    },
];

const jobs = [
    "Frontend Engineer",
    "UI/UX Designer",
    "Software Engineer",
    "Frontend Developer",
];
  
  

const AboutMe = () => {

    const [activeTab, setActiveTab] = useState(0);
    const about_ref = useRef<HTMLDivElement>(null);
    const isInHeroView = useInView(about_ref, { once: true });

    return (
        <motion.div
            ref={about_ref}
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: isInHeroView ? 1 : 0, y: isInHeroView ? 0 : 500 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center h-screen">
            <div className="relative bg-red-500 text-white py-4 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-300 to-blue-500 opacity-25"></div>

                {/* Scrolling Text */}
                <motion.div
                    className="flex space-x-8 items-center"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                    }}
                >
                    {Array(4)
                    .fill(jobs)
                    .flat()
                    .map((job, index) => (
                        <div
                        key={index}
                        className="flex items-center space-x-8 text-lg font-semibold ml-4"
                        >
                        <span className="text-nowrap">{job}</span>
                        <span className="text-2xl">&rarr;</span>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="flex flex-col items-center h-screen p-4 px-10">
                <motion.h2 
                    initial={{ opacity: 0, y: 500 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-red-600 font-bold mt-10 text-3xl p-3 border-b-4 border-b-red-600 ">ABOUT ME</motion.h2>
                <div className="flex justify-between items-start mt-20 w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <Image 
                            src="/assets/avatar.png" alt="Avatar" width={450} height={450}  
                        />
                    </motion.div>
                    <motion.div className="p-3 border-2 border-red-600 rounded-3xl w-5/7 h-[450px] ml-12 flex flex-col justify-center items-center"
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.5 }}
                    >
                        {/* Tabs */}
                        <div className="flex space-x-6 border border-red-500 p-2" style={{borderRadius: "50px"}}>
                            {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center cursor-pointer border rounded-full px-4 py-2 transition-all duration-300 ${
                                activeTab === tab.id
                                    ? "bg-blue-600 text-white border-transparent"
                                    : "bg-white text-red-500 border-red-500"
                                }`}
                            >
                                {/* Circle Icon */}
                                <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-colors duration-300 ${
                                    activeTab === tab.id ? "bg-white text-blue-700" : "bg-red-500 text-white"
                                }`}
                                >
                                {tab.icon}
                                </div>
                                {/* Tab Label */}
                                <p className="font-semibold text-lg">{tab.label}</p>
                            </div>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8 w-full h-[300px] max-w-2xl border border-gray-300 rounded-lg p-4 bg-gray-200">
                            <AnimatePresence mode="wait">
                            {tabs.map(
                                (tab) =>
                                activeTab === tab.id && (
                                    <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-lg text-gray-700 flex flex-col"
                                    >
                                    {tab.content}
                                    </motion.div>
                                )
                            )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div> 
        </motion.div>
    );
}

export default AboutMe;