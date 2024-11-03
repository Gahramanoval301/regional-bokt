import React from "react";
import MainButton from "./MainButton";

const HeroIndexBanner = () => {
  return (
    <div className="home-banner text-primary py-28 ">
      <div className="section-gap">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold w-full lg:w-8/12 tracking-wide ">
          KORPORATİV İSTİQRAZLARDAN SİZDƏ FAYDALANIN, İLLİK 14-15% GƏLİR ƏLDƏ
          EDİN!
        </h1>
        <MainButton
          styles="bg-secondary-black mt-5"
          title="FAİZLƏR HƏR AY ÖDƏNİLİR!"
        ></MainButton>
      </div>
    </div>
  );
};

export default HeroIndexBanner;
