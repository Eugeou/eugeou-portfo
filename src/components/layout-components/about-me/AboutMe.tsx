import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AboutMeContent } from "@/components/shared-components/about-me-content";
import { ElectricTrain } from "@/components/shared-components/train/electric-train";
import { CatTrain } from "@/components/shared-components/train/cat-train";

const AboutMe = () => {
  const about_ref = useRef<HTMLDivElement>(null);
  const isInAMSectionView = useInView(about_ref, { once: true });

  return (
    <motion.div
      id="AboutMe"
      ref={about_ref}
      initial={{ opacity: 0, y: 500 }}
      animate={{
        opacity: isInAMSectionView ? 1 : 0,
        y: isInAMSectionView ? 0 : 500,
      }}
      transition={{ duration: 0.9 }}
      layout
      className="flex flex-col overflow-hidden items-center h-screen bg-gradient-to-r from-[#f5f5f9] to-[#e1e2f7]"
    >
      <div className="flex flex-col items-center justify-center w-screen">
        <ElectricTrain />
        {/* <CatTrain /> */}
      </div>
      
      {/* <ScrollingText /> */}
      <AboutMeContent />
    </motion.div>
  );
};

export default AboutMe;
