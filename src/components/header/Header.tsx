"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");

  const handleScroll = () => {
    
    const sections = ["Home", "AboutMe", "MySkills", "Experience", "Projects", "ContactMe"];
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

  const menuItems = [
    { id: "Home", label: "Home" },
    { id: "AboutMe", label: "About me" },
    { id: "MySkills", label: "My Skills" },
    { id: "Experience", label: "Experience" },
    { id: "Projects", label: "Projects" },
    { id: "ContactMe", label: "Contact me" },
  ];

  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-[#E6212B] to-[#801218] p-4 w-full fixed top-0 z-10">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="cursor-pointer ml-2"
          onClick={() => {
            const section = document.getElementById("Home");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              setActiveSection("Home");
            }
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex justify-between items-center w-1/2 px-2"
      >
        <motion.ul className="flex justify-between items-center w-full">
          {menuItems.map((item) => (
            <motion.li
              key={item.id}
              className={`cursor-pointer font-semibold p-2 px-5 ${
                activeSection === item.id
                  ? "bg-white text-[#E6212B] rounded-2xl"
                  : "text-white"
              }`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: "#E6212B",
                borderRadius: "20px",
              }}
              transition={{ duration: 0.5 }}
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
      </motion.div>
    </header>
  );
};

export default Header;
