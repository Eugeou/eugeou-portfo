"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-[#E6212B] to-[#801218] p-4 w-full fixed top-0 z-10"
    > 
      <motion.div
        initial = {{ opacity: 0, x: -100 }}
        animate = {{ opacity: 1, x: 0 }}
        transition = {{ duration: 0.9 }}
      >
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer ml-2"
          onClick={() => window.scrollTo(0, 0)}
        />
      </motion.div>

      <motion.div
        initial = {{ opacity: 0, x: 100 }}
        animate = {{ opacity: 1, x: 0 }}
        transition = {{ duration: 0.9 }}
        layout
        className="flex justify-between items-center w-1/2 px-2"
        >
          <motion.ul
            className="flex justify-between items-center w-full"
            layout
          >
            <motion.li className="cursor-pointer text-white font-semibold p-2 px-5"
              whileHover = {{ scale: 1.05, backgroundColor: "#fff", color: "#E6212B", borderRadius: "20px" }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </motion.li>

            <motion.li className="cursor-pointer text-white font-semibold p-2 px-5"
              whileHover = {{ scale: 1.05, backgroundColor: "#fff", color: "#E6212B", borderRadius: "20px" }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo(0, 0)}
            >
              About me
            </motion.li>

            <motion.li className="cursor-pointer text-white font-semibold p-2 px-5"
              whileHover = {{ scale: 1.05, backgroundColor: "#fff", color: "#E6212B", borderRadius: "20px" }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo(0, 0)}
            >
              My Skills
            </motion.li>

            <motion.li className="cursor-pointer text-white font-semibold p-2 px-5"
              whileHover = {{ scale: 1.05, backgroundColor: "#fff", color: "#E6212B", borderRadius: "20px" }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Experience
            </motion.li>

            <motion.li className="cursor-pointer text-white font-semibold p-2 px-5"
              whileHover = {{ scale: 1.05, backgroundColor: "#fff", color: "#E6212B", borderRadius: "20px" }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Projects
            </motion.li>

            <motion.li className="cursor-pointer text-white font-semibold p-2 px-5"
              whileHover = {{ scale: 1.05, backgroundColor: "#fff", color: "#E6212B", borderRadius: "20px" }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact me
            </motion.li>




          </motion.ul>


        </motion.div>
    </header>
  );
};

export default Header;