"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlipClock from "../../shared-components/flip-clock/flip-clock";
import { useCheckMobile } from "@/hooks/use-check-mobile";
import { menuItems, sections } from "@/constants";
import { MenuIcon } from "../../shared-components/pixel-icons";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [isTabletMenuOpen, setisTabletMenuOpen] = useState(false);
  const { isTablet } = useCheckMobile();
  
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

  const handleMenuClick = () => {
    setisTabletMenuOpen(!isTabletMenuOpen);
  };

  const handleMenuItemClick = (itemId: string) => {
    const section = document.getElementById(itemId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(itemId);
      setisTabletMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="flex justify-between items-center border-b border-b-[rgb(200,203,211)] bg-white opacity-60 w-full fixed top-0 z-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <FlipClock
          width = {isTablet ? "100%" : "200px"}
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

        {isTablet ? (
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            onClick={handleMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-4"
          >
            <MenuIcon size={24} color="#000" />
          </motion.button>
        ) : (
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
                  className={`cursor-pointer flex gap-1 font-semibold p-2 px-2 ${
                    activeSection === item.id
                      ? "bg-white text-[#ff8c00] rounded-2xl"
                      : "text-black"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#fff",
                    color: "#ff8c00",
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
                  <div className="flex items-center gap-1">
                    {item.label}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isTabletMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setisTabletMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
            />
            
            {/* Left Sidebar Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-5 top-80 h-[32%] w-12 bg-white shadow-lg bg-opacity-50 rounded-xl z-40 pt-5"
            >
              <div className="flex flex-col p-1 space-y-1">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      activeSection === item.id
                        ? "bg-[#ff8c00] text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.icon && <item.icon size={14} />}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
