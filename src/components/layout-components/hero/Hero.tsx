"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FlipClock from "../../shared-components/flip-clock/flip-clock";

const Hero = () => {
  // const fadeUp = {
  //   initial: { opacity: 1, y: 100 },
  //   animate: {
  //     //opacity: [1, 0],
  //     y: ["0%", "-100%"],
  //   },
  //   transition: {
  //     duration: 20,
  //     repeat: Infinity,
  //     ease: "linear",
  //   },
  // };

  // const fadeDown = {
  //   initial: { opacity: 1, y: -100 },
  //   animate: {
  //     //opacity: [1, 0],
  //     y: ["0%", "100%"],
  //   },
  //   transition: {
  //     duration: 20,
  //     repeat: Infinity,
  //     ease: "linear",
  //   },
  // };

  return (
    <motion.div
      id="Home"
      className="flex justify-end items-center h-screen px-4 bg-gradient-to-r from-[#f5f5f9] to-[#e1e2f7] z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <div className="w-1/2 flex justify-center items-center h-40">
        <FlipClock
          width="500px"
          height="150px"
          padding="16px"
          borderRadius="20px"
          unitWidth="100px"
          unitHeight="110px"
          digitFontSize="3em"
          colonFontSize="3.4em"
          colonDotSize="10px"
          colonHeight="116px"
          opacity={0.4}
        />
      </div>
      <div className="w-1/2 justify-start items-start flex flex-col bg-[url('/assets/railways/border.png')] bg-cover bg-no-repeat bg-center bg-opacity-40 h-96 z-10 p-2 rounded-xl">
        {/*
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
        </motion.button> */}

        <div className="flex relative items-center justify-between bg-white w-full h-full rounded-sm bg-opacity-20">
          <>
            <Image
              src="/assets/railways/tall-barrier.png"
              alt="bg-hero"
              width={200}
              height={500}
              className="mb-24 -left-9 relative"
            />
          </>
          <div className="flex flex-col items-start justify-start absolute left-20 top-[70px] mt-2 rounded-xl">
            <motion.h1
              className="font-bold text-[#ff8c00] z-10 text-3xl bg-white px-2 pt-1 rounded-[4px]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              Hi guys, welcome <br />
              to <span className="text-red-600">my Portfolio</span>!
            </motion.h1>
            <motion.h2
              className="font-medium text-gray-500 mt-2 text-xl z-10 bg-white px-2 pb-2 rounded-[4px]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              This is my playground, try something new <br /> Also, I share or
              show my knowledge <br /> and experience here.
            </motion.h2>
          </div>
          <div className="relative overflow-hidden h-full">
            <Image
              src="/assets/gifs/railway-barrier.gif"
              alt="bg-hero"
              width={360}
              height={500}
              className="z-10 mb-20 rounded-xl"
            />
            <Image
              src="/assets/railways/barrier.png"
              alt="bg-hero"
              width={100}
              height={100}
              className="absolute -bottom-3 left-20 z-20"
            />
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 w-full h-screen overflow-hidden relative">
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
      </div> */}
    </motion.div>
  );
};

export default Hero;
