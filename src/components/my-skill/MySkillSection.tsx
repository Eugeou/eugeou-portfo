import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const MySkillsSection = () => {

    const mySkill_ref = useRef<HTMLDivElement>(null);
    const isInMySkillSectionView = useInView(mySkill_ref, { once: true });
    
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
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
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

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center items-center mt-10 w-full px-10 space-x-10">
                    <motion.div layout 
                        whileHover={{ scale: 1.1 }}
                        className="flex justify-center items-center bg-[#f4dcdd] rounded-3xl space-x-4 p-4 ">
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
                </motion.div>

                <div className="flex justify-between items-start mt-20 w-full">
                    <motion.div className=" h-16 w-1/5 bg-[url('/assets/rec.png')] bg-no-repeat bg-contain flex justify-start items-center px-4"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h3 className="text-white text-center font-bold">FRAMEWORKS & LIBS</h3>
                    </motion.div>
                </div>

                <motion.div
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
                </motion.div>

            </div>
        </motion.div>
    )
}

export default MySkillsSection;