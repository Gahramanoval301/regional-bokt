import AboutContent from "@/components/_about/AboutContent";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="About">
      <div className="h-[80vh]">
        <Image className="w-[100%] h-[100%] object-cover" width={500} height={500} src="/about/st.jpeg" alt="Şirkət loqosu" />
      </div>
      <h2 className="section-title-big text-center mt-5">Haqqımızda</h2>
      <AboutContent />
    </div>
  );
};

export default AboutPage;
