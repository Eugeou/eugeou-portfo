"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FlipClock from "../../shared-components/flip-clock/flip-clock";
import { menuItems, sections } from "@/constants";
import { useCheckMobile } from "@/hooks/use-check-mobile";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const isMobile = useCheckMobile();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="flex justify-between items-center border-b border-b-[rgb(200,203,211)] bg-white opacity-60 w-full fixed top-0 z-20">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <FlipClock
        width = {isMobile ? "100%" : "200px"}
        height = "60px"
        padding = "8px"
        borderRadius = "12px"
        unitWidth = "40px"
        unitHeight = "44px"
        unitBorderRadius = "8px"
        unitMargin = "4px"
        digitFontSize = "1em"
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
              className={`cursor-pointer font-semibold p-2 px-2 ${
                activeSection === item.id
                  ? "bg-white text-[#ff8c00] rounded-2xl"
                  : "text-black"
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
