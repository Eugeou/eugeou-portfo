"use client";
import Header from "@/components/header/Header";
import Image from "next/image";
import React, { useState } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/hero/Hero";
import AboutMe from "@/components/about-me/AboutMe";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="">
      {/* Progress bar */}
      <motion.div 
        className="w-full h-1 bg-gradient-to-r from-[#D2E2FF] to-[#26127C]" 
        style={{scaleX, width: "100%", transformOrigin: "0%", padding: "3px", position: "fixed", zIndex: 999}} 
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* Header */}
      <Header/>
      
      {/* Hero */}
      <Hero/>

      {/* About me */}
      <AboutMe/>
    </div>
  );
}
