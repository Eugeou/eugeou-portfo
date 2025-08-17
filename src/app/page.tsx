"use client";
import Header from "@/components/header/Header";
// import Image from "next/image";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/hero/Hero";
import AboutMe from "@/components/about-me/AboutMe";
import Footer from "@/components/footer/Footer";
import MySkillsSection from "@/components/my-skill/MySkillSection";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="">
      {/* Progress bar */}
      <motion.div
        className="w-full h-[2px] bg-gradient-to-r from-[#90b4f7] to-[#2f14a8]"
        style={{
          scaleX,
          width: "100%",
          transformOrigin: "0%",
          padding: "3px",
          position: "fixed",
          zIndex: 999,
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <div className="h-4 w-full z-0">
        <Image
          src="/assets/gifs/banner.gif"
          alt="banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* About me */}
      <AboutMe />

      {/* My Skills */}
      <MySkillsSection />

      <div className="h-16 w-full bg-gradient-to-r from-[#f5f5f9] to-[#e1e2f7]"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
