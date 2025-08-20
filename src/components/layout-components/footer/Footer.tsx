"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillCaretUp } from "react-icons/ai";
import { menuItems, sections } from "@/constants";

const Footer = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");

  const handleScroll = () => {
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-16 w-full bg-gradient-to-r from-[#f5f5f9] to-[#e1e2f7]" />
      <motion.footer
        id="Footer"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center bg-black bottom-0 z-10 w-full h-[450px] p-8"
      >
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Image src="/assets/logo.png" alt="Logo" width={60} height={60} />
              <p className="text-white text-2xl font-semibold ml-2">
                MY PORTFOLIO
              </p>
            </motion.div>

            <motion.div
              whileInView={{ rotate: 180 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={"/assets/empty-avatar.png"}
                alt="Avatar"
                width={300}
                height={300}
              />
            </motion.div>
          </div>

          <div className="w-1/2 h-full">
            <h2 className="font-semibold text-white px-4 py-4 border-b mb-2">
              EXPLORE
            </h2>
            <div className="flex items-start space-x-8  w-full h-full py-2 px-0">
              <motion.ul
                className="flex flex-col space-y-4 text-start"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
              >
                {menuItems.slice(0, 3).map((item) => (
                  <motion.li
                    key={item.id}
                    className={`cursor-pointer text-start font-semibold p-2 px-5 ${
                      activeSection === item.id ? "text-red-500" : "text-white"
                    }`}
                    onClick={() => {
                      const section = document.getElementById(item.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(item.id);
                      }
                    }}
                  >
                    {item.label}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.ul
                className="flex flex-col items-center space-y-4"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
              >
                {menuItems.slice(3, 6).map((item) => (
                  <motion.li
                    key={item.id}
                    className={`cursor-pointer font-semibold p-2 px-5 ${
                      activeSection === item.id ? "text-red-500" : "text-white"
                    }`}
                    onClick={() => {
                      const section = document.getElementById(item.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(item.id);
                      }
                    }}
                  >
                    {item.label}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
          <motion.button
            className="bg-red-600 text-white font-semibold py-2 px-4 rounded-full mt-4 h-14 w-14 flex justify-center items-center"
            // initial={{ opacity: 0, x: 100 }}
            // whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.15, cursor: "pointer" }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              const section = document.getElementById("Home");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                setActiveSection("Home");
              }
            }}
            aria-label="ScrollTop"
          >
            <AiFillCaretUp />
          </motion.button>
        </div>

        <div className="w-1/4 flex justify-between items-center space-x-4 mt-1">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
          >
            <Image
              src="/assets/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/quan.nguyen.834144/",
                  "_blank"
                )
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
          >
            <Image
              src="/assets/github.png"
              alt="GitHub"
              width={40}
              height={40}
              className="bg-white rounded-full"
              onClick={() => window.open("https://github.com/Eugeou", "_blank")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
          >
            <Image
              src="/assets/gmail.png"
              alt="Gmail"
              width={40}
              height={40}
              className="bg-white rounded-full"
              onClick={() => window.open("https://mail.google.com/", "_blank")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
          >
            <Image
              src="/assets/linkedin.png"
              alt="Linkedin"
              width={40}
              height={40}
              className="bg-white rounded-full"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nguy%E1%BB%85n-ho%C3%A0ng-minh-qu%C3%A2n-eugeous/",
                  "_blank"
                )
              }
            />
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
