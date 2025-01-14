import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";

const jobs = [
    "HTML5/CSS3",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "React Native",
    "TailwindCSS",
    "Ant Design",
];

const languageCards = [
    {
        id: "html",
        title: "HTML",
        bgColor: "#f4dcdd",
        imgSrc: "/assets/html.png",
        description: "HTML (HyperText Markup Language) is the standard markup language used to create web pages. It defines the structure and content of web pages using a series of elements and tags.",
    },
    {
        id: "css",
        title: "CSS",
        bgColor: "#d1d5db",
        imgSrc: "/assets/css.png",
        description: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in HTML or XML. It is a cornerstone technology of the WWW, alongside HTML and JavaScript",
    },
    {
        id: "js",
        title: "JavaScript",
        bgColor: "#d1d5db",
        imgSrc: "/assets/js.png",
        description: "JavaScript is a scripting or programming language that enables you to create dynamically updating content, control multimedia,... and much more on web pages. It is a single-threaded, synchronous language widely used in web development.",
    },
    {
        id: "ts",
        title: "TypeScript",
        bgColor: "#d1d5db",
        imgSrc: "/assets/ts.png",
        description: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling around types, static type checking, and more. It is a superset of JavaScript",
    },
    {
        id: "c++",
        title: "C++",
        bgColor: "#d1d5db",
        imgSrc: "/assets/c++.png",
        description: "C++ is a general-purpose programming language that is a superset of the C programming language. It was created by Bjarne Stroustrup at Bell Laboratories in the 1970s",
    },

];

const frameworkCards = [
    {
        id: "react",
        title: "React",
        bgColor: "#d1d5db",
        imgSrc: "/assets/reactjs.png",
        description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    },
    {
        id: "reactnative",
        title: "React Native",
        bgColor: "#d1d5db",
        imgSrc: "/assets/reactjs.png",
        description: "React Native is a framework for building native apps using React. It allows developers to create cross-platform apps using a single codebase.",
    },
    {
        id: "next",
        title: "Next.Js",
        bgColor: "#d1d5db",
        imgSrc: "/assets/nextjs.png",
        description: "Next.js is a React framework for building web applications. It provides a fast and scalable way to build universal web applications with React.",
    },
    {
        id: "tailwind",
        title: "Tailwind",
        bgColor: "#d1d5db",
        imgSrc: "/assets/tw.png",
        description: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides a set of pre-defined classes that can be used to style HTML elements.",
    },
    {
        id: "antd",
        title: "Ant Design",
        bgColor: "#d1d5db",
        imgSrc: "/assets/antd.png",
        description: "Ant Design is a design system for enterprise-level products. It provides a set of pre-designed components that can be used to build user interfaces.",
    },
];
    

const MySkillsSection = () => {

    const mySkill_ref = useRef<HTMLDivElement>(null);
    const isInMySkillSectionView = useInView(mySkill_ref, { once: true });

    const [selectedLangCard, setSelectedLangCard] = useState<string | null>(null);

    const [selectedFrameworkCard, setSelectedFrameworkCard] = useState<string | null>(null);
    
    return (
        <motion.div
            id="MySkills"
            ref={mySkill_ref}
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: isInMySkillSectionView ? 1 : 0, y: isInMySkillSectionView ? 0 : 500 }}
            transition={{ duration: 0.9 }}
            layout
            className="flex flex-col items-center h-screen bg-gradient-to-r from-[#f5f5f9] to-[#e1e2f7]">
            <div className="relative bg-red-500 text-white py-3 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-300 to-blue-500 opacity-25"></div>

                {/* Scrolling Text */}
                <motion.div
                    className="flex space-x-8 items-center"
                    initial={{ translateX: 0 }}
                    animate={{ translateX: '50%' }}
                    transition={{
                    repeat: Infinity,
                    duration: 35,
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

            <div className="flex flex-col items-center h-screen py-4 w-full">
                <motion.h2 
                    initial={{ opacity: 0, y: 500 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-red-600 font-bold mt-5 text-3xl p-3 border-b-4 border-b-red-600 "
                    >
                        MY SKILLS
                </motion.h2>

                <div className="flex justify-between items-start mt-10 w-full">

                    <motion.div className=" h-16 w-1/5 bg-[url('/assets/rec.png')] bg-no-repeat bg-contain flex justify-start items-center px-4"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-white text-center font-bold">LANGUAGES</h3>
                    </motion.div>
                </div>
                
                {/* Language Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    layout
                    className="flex justify-center items-center mt-10 w-full px-10 space-x-10"
                    >
                    {languageCards.map((card) => (
                        <motion.div
                            key={card.id}
                            layout
                            onClick={() => setSelectedLangCard(selectedLangCard === card.id ? null : card.id)}
                            whileHover={{ scale: selectedLangCard ? 1 : 1.1 }}
                            animate={
                                selectedLangCard === card.id
                                ? { rotateY: 360,  opacity: 1, zIndex: 10 }
                                : selectedLangCard
                                ? { opacity: 0, scale: 0.5, zIndex: 0 }
                                : { opacity: 1, scale: 1, zIndex: 1 }
                            }
                            transition={{ duration: 0.8 }}
                            className={`flex justify-center items-center rounded-3xl space-x-4 p-4`}
                            style={{
                                backgroundColor: card.bgColor,
                                width: selectedLangCard === card.id ? "80%" : "auto",
                            }}
                        >
                        <AnimatePresence>
                            {selectedLangCard === card.id ? (
                            <motion.div
                                key="description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <p className="font-semibold text-3xl">{card.title}</p>
                                <p className="text-lg mt-4">{card.description}</p>
                            </motion.div>
                            ) : (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center items-center space-x-4"
                            >
                                <Image src={card.imgSrc} alt={card.title} width={40} height={40} />
                                <p className="font-semibold text-2xl">{card.title}</p>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
                </motion.div>


                {/* <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center items-center mt-10 w-full px-10 space-x-10">
                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-[#f4dcdd] rounded-3xl space-x-4 p-4 "
                    >
                        <Image src="/assets/html.png" alt="HTML5" width={40} height={40} />
                        <p className="font-semibold text-2xl">HTML</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-300 rounded-3xl space-x-4 p-4 ">
                        <Image src="/assets/css.png" alt="CSS" width={40} height={40} />
                        <p className="font-semibold text-2xl">CSS</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-300 rounded-3xl space-x-4 p-4 ">
                        <Image src="/assets/js.png" alt="JS" width={40} height={40} />
                        <p className="font-semibold text-2xl">JavaScript</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-300 rounded-3xl space-x-4 p-4 ">
                        <Image src="/assets/ts.png" alt="TS" width={40} height={40} className=" rounded-lg" />
                        <p className="font-semibold text-2xl">TypeScript</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-300 rounded-3xl space-x-4 p-4 ">
                        <Image src="/assets/c++.png" alt="C++" width={40} height={40} className=" rounded-lg" />
                        <p className="font-semibold text-2xl">C/C++</p>
                    </motion.div>
                </motion.div> */}

                <motion.div className="flex justify-between items-start mt-20 w-full" layout>
                    <motion.div className=" h-16 w-1/5 bg-[url('/assets/rec.png')] bg-no-repeat bg-contain flex justify-start items-center px-4"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-white text-center font-bold">FRAMEWORKS & LIBS</h3>
                    </motion.div>
                </motion.div>

                {/* Framework Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    layout
                    className="flex justify-center items-center mt-10 w-full px-10 space-x-10"
                    >
                    {frameworkCards.map((card) => (
                        <motion.div
                            key={card.id}
                            layout
                            onClick={() => setSelectedFrameworkCard(selectedFrameworkCard === card.id ? null : card.id)}
                            whileHover={{ scale: selectedFrameworkCard ? 1 : 1.1 }}
                            animate={
                                selectedFrameworkCard === card.id
                                ? { rotateY: 360,  opacity: 1, zIndex: 10 }
                                : selectedFrameworkCard
                                ? { opacity: 0, scale: 0.5, zIndex: 0 }
                                : { opacity: 1, scale: 1, zIndex: 1 }
                            }
                            transition={{ duration: 0.8 }}
                            className={`flex justify-center items-center rounded-3xl space-x-4 p-4`}
                            style={{
                                backgroundColor: card.bgColor,
                                width: selectedFrameworkCard === card.id ? "80%" : "auto",
                            }}
                        >
                        <AnimatePresence>
                            {selectedFrameworkCard === card.id ? (
                            <motion.div
                                key="description"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <p className="font-semibold text-3xl">{card.title}</p>
                                <p className="text-lg mt-4">{card.description}</p>
                            </motion.div>
                            ) : (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center items-center space-x-4"
                            >
                                <Image src={card.imgSrc} alt={card.title} width={40} height={40} />
                                <p className="font-semibold text-2xl">{card.title}</p>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center items-center mt-20 w-full px-10 space-x-10">
                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-[#f4dcdd] rounded-3xl space-x-4 p-4 ">
                        <motion.div animate = {{rotate: 360}} transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: "linear",
                            }}>
                            <Image src="/assets/reactjs.png" alt="ReactJS" width={40} height={40} />
                        </motion.div>
                        <p className="font-semibold text-2xl">ReactJs</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-200 rounded-3xl space-x-4 p-4 ">
                        <motion.div animate = {{rotate: 360}} transition={{
                            repeat: Infinity,
                            duration: 5,
                            ease: "linear",
                            }}>
                            <Image src="/assets/reactjs.png" alt="ReactNative" width={40} height={40} />
                        </motion.div>
                        <p className="font-semibold text-2xl">React Native</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-300 rounded-3xl space-x-4 p-4 ">
                        <Image src="/assets/nextjs.png" alt="NextJs" width={40} height={40} className=" rounded-lg" />
                        <p className="font-semibold text-2xl">NextJs</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-300 rounded-3xl space-x-4 p-4 ">
                        <Image src="/assets/tw.png" alt="Tw" width={40} height={40} className=" rounded-lg" />
                        <p className="font-semibold text-2xl">Tailwind</p>
                    </motion.div>

                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-gray-300 rounded-3xl space-x-4 p-4 ">
                        <Image src="/assets/antd.png" alt="Antd" width={40} height={40} className=" rounded-lg" />
                        <p className="font-semibold text-2xl">Antd</p>
                    </motion.div>
                </motion.div> */}

            </div>
        </motion.div>
    )
}

export default MySkillsSection;