"use client";
import Header from "@/components/layout-components/header/Header";
import React, { useEffect, useState } from "react";
import Hero from "@/components/layout-components/hero/Hero";
import AboutMe from "@/components/layout-components/about-me/AboutMe";
import Footer from "@/components/layout-components/footer/Footer";
import MySkillsSection from "@/components/layout-components/my-skill/MySkillSection";
import Image from "next/image";
import { ProgressBar } from "@/components/shared-components/progress-bar";
import { WIPModal } from "@/components/shared-components/working-in-progress";

export default function Home() {
  const [wipModal, setWipModal] = useState(false);

  useEffect(() => {
    setWipModal(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          unoptimized
        />
      </div>

      <Header />
      <Hero />
      <AboutMe />
      <MySkillsSection />
      <Footer />
      <WIPModal open={wipModal} onClose={() => setWipModal(false)} />
    </div>
  );
}
