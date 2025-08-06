"use client";
import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { AiFillForward } from "react-icons/ai";
import Image from "next/image";

const imagesUp = [
  //PCS
  "/assets/hero-imgs/img-slide-up/pcs-01.png",
  "/assets/hero-imgs/img-slide-up/pcs-02.png",
  "/assets/hero-imgs/img-slide-up/pcs-03.png",
  //"/assets/hero-imgs/img-slide-up/pcs-04.png",
  //CRS
  "/assets/hero-imgs/img-slide-up/crs-01.png",
  "/assets/hero-imgs/img-slide-up/crs-02.png",
  "/assets/hero-imgs/img-slide-up/crs-03.png",
  "/assets/hero-imgs/img-slide-up/crs-04.png",
  //"/assets/hero-imgs/img-slide-up/crs-05.png",
  //BCS
  "/assets/hero-imgs/img-slide-up/bcs-01.png",
  "/assets/hero-imgs/img-slide-up/bcs-02.png",
  "/assets/hero-imgs/img-slide-up/bcs-03.png",
  //"/assets/hero-imgs/img-slide-up/bcs-04.png",
];

const imagesDown = [
  //PRM
  "/assets/hero-imgs/img-slide-down/prm-01.png",
  "/assets/hero-imgs/img-slide-down/project-01.png",
  "/assets/hero-imgs/img-slide-down/prm-02.png",
  "/assets/hero-imgs/img-slide-down/project-02.png",
  "/assets/hero-imgs/img-slide-down/prm-03.png",
  "/assets/hero-imgs/img-slide-down/project-03.png",
  "/assets/hero-imgs/img-slide-down/prm-04.png",
  "/assets/hero-imgs/img-slide-down/project-04.png",
  "/assets/hero-imgs/img-slide-down/prm-05.png",
  "/assets/hero-imgs/img-slide-down/project-05.png",
];

const Hero = () => {
  // const fadeAndTranslateUp = {
  //     animate: {
  //       y: ["0%", "-100%", "0%"], // Di chuyển từ giữa, lên trên, rồi quay lại
  //       opacity: [1, 0, 1], // Biến mất dần khi ra khỏi biên trên
  //     },
  //     transition: {
  //       duration: 6,
  //       repeat: Infinity,
  //       ease: "linear",
  //     },
  //   };

  // const fadeAndTranslateDown = {
  //     animate: {
  //       y: ["0%", "100%", "0%"], // Di chuyển từ giữa, xuống dưới, rồi quay lại
  //       opacity: [1, 0, 1], // Biến mất dần khi ra khỏi biên dưới
  //     },
  //     transition: {
  //       duration: 6,
  //       repeat: Infinity,
  //       ease: "linear",
  //     },
  // };

  const fadeUp = {
    initial: { opacity: 1, y: 100 },
    animate: {
      //opacity: [1, 0], // Biến mất dần
      y: ["0%", "-100%"],
    },
    transition: {
      duration: 20, // Thời gian một vòng chuyển động
      repeat: Infinity,
      ease: "linear",
    },
  };

  const fadeDown = {
    initial: { opacity: 1, y: -100 },
    animate: {
      //opacity: [1, 0], // Biến mất dần
      y: ["0%", "100%"],
    },
    transition: {
      duration: 20, // Thời gian một vòng chuyển động
      repeat: Infinity,
      ease: "linear",
    },
  };

  return (
    <motion.div
      id="Home"
      className="flex justify-between items-center h-screen p-4 bg-gradient-to-r from-[#f5f5f9] to-[#e1e2f7]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <div className="w-1/2 justify-start  items-start flex flex-col">
        <motion.h1
          className="font-bold text-black ml-16"
          style={{ fontSize: "4rem" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          Hi everyone, welcome <br />
          to <span className="text-red-600">my Portfolio page</span>!
        </motion.h1>
        <motion.h2
          className="font-medium text-gray-500 mt-2 ml-16"
          style={{ fontSize: "2.5rem" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Let’s visit around to know more <br />
          about me!
        </motion.h2>
        <motion.button
          className="bg-red-600 flex justify-between items-center text-center text-xl space-x-3 text-white font-semibold py-3 px-5 mt-6 ml-16"
          style={{ borderRadius: "24px" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            scale: 1.01,
            color: "#E6212B",
            backgroundColor: "white",
            border: "1px solid #E6212B",
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          name="Explore"
        >
          <p>Explore</p>
          <AiFillForward />
        </motion.button>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 w-full h-screen overflow-hidden relative">
          {/* {images?.map((src, index) => (
                <motion.div
                    key={index}
                    className="relative w-full h-full flex justify-center items-center overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                    layout
                >
                    <motion.img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="absolute w-full h-full object-cover"
                    {...(index % 2 === 0 ? moveUpFade : moveDownFade)}
                    layout
                    // Cột 1: Lên trên, Cột 2: Xuống dưới
                    />
                </motion.div>
                ))} */}

          {/* Column 1 */}
          <div className="relative flex flex-col space-y-4">
            {Array(10)
              .fill(imagesUp)
              .flat()
              .map((src, index) => (
                <motion.div
                  key={`col1-${index}`}
                  variants={fadeUp} // Animation fade và tịnh tiến lên trên
                  initial="initial"
                  animate="animate"
                  transition={fadeUp.transition}
                  className="w-full h-1/3 overflow-hidden relative"
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-contain border border-gray-600 rounded-2xl"
                  />
                </motion.div>
              ))}
          </div>

          {/* Column 2 */}
          <div className="relative flex flex-col space-y-4">
            {Array(10)
              .fill(imagesDown)
              .flat()
              .map((src, index) => (
                <motion.div
                  key={`col2-${index}`}
                  variants={fadeDown} // Animation fade và tịnh tiến xuống dưới
                  initial="initial"
                  animate="animate"
                  transition={fadeDown.transition}
                  className="w-full h-1/3 overflow-hidden relative"
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-contain border border-gray-600 rounded-2xl"
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
