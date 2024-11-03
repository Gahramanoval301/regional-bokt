import HeroIndexBanner from "@/components/_common/HeroIndexBanner";
import IntroVideoSection from "@/components/_common/IntroVideoSection";
import ContactInfo from "@/components/_home/ContactInfo/ContactInfo";
import OurServices from "@/components/_home/Our-Services/OurServices";
import Partnerships from "@/components/_home/Partnerships/Partnerships";
import React from "react";

const HomeLandingPage = () => {
  return (
    <main className="">
      <HeroIndexBanner />
      <OurServices />
      <IntroVideoSection />
      <Partnerships />
      <ContactInfo/>
    </main>
  );
};

export default HomeLandingPage;
