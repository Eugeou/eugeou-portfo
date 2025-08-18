"use client";
import Header from "@/components/layout-components/header/Header";
import React from "react";
import Hero from "@/components/layout-components/hero/Hero";
import AboutMe from "@/components/layout-components/about-me/AboutMe";
import Footer from "@/components/layout-components/footer/Footer";
import MySkillsSection from "@/components/layout-components/my-skill/MySkillSection";
import Image from "next/image";
import { ProgressBar } from "@/components/shared-components/progress-bar";

export default function Home() {
  return (
    <div className="mt-0">
      <ProgressBar />

      <div className="h-4 w-full z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src="/assets/gifs/banner.gif"
          alt="banner"
          fill
          className="object-cover"
        />
      </div>

      <Header />
      <Hero />
      <AboutMe />
      <MySkillsSection />
      <Footer />
    </div>
  );
}
