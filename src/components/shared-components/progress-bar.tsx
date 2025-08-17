"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="w-full h-[1px] bg-gradient-to-r from-[#f0c39d] to-[#d88e18]"
      style={{
        scaleX,
        width: "100%",
        transformOrigin: "0%",
        padding: "2px",
        position: "fixed",
        zIndex: 999,
      }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
};
