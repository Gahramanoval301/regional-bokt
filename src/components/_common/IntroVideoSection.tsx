import React from "react";

const IntroVideoSection = () => {
  return (
    <div className="mt-12">
      <video className="w-[90%] md:w-[60%] mx-auto" autoPlay loop controls poster="/common/regional_bokt.svg" src="/introVideo.mp4">IntroVideoSection</video>
    </div>
  );
};

export default IntroVideoSection;
