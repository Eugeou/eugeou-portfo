"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlipClock } from "react-flip-clock-lib";
import "react-flip-clock-lib/dist/index.css";
import { useCheckMobile } from "@/hooks/use-check-mobile";
import { RightIntroHero } from "@/components/shared-components/right-intro-hero";

const Hero = () => {
  const { isMobile } = useCheckMobile();
  return (
    <motion.div
      id="Home"
      className="flex flex-col justify-center md:flex-row md:justify-between items-center h-screen bg-gradient-to-r px-4 from-[#f5f5f9] to-[#e1e2f7] z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center h-40">
        <FlipClock
          width={isMobile ? "92%" : "68%"}
          height="144px"
          padding="16px"
          borderRadius="20px"
          unitWidth="100px"
          unitHeight="110px"
          digitFontSize="3em"
          colonFontSize="3.4em"
          colonDotSize="10px"
          colonHeight="116px"
          opacity={0.4}
          fontFamily="'Press Start 2P', 'Courier New', monospace"
          showAmPm = {!isMobile}
        />
      </div>
      <RightIntroHero />
    </motion.div>
  );
};

export default Hero;
