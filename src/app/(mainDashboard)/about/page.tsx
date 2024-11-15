import { color } from "framer-motion";
import { div } from "framer-motion/client";
import "./AboutPage.css";
import React from "react";

const AboutPage = () => {
  return (
    <div className="About">
      <img src="/about/st.jpeg" alt="Şirkət loqosu" />
      <h2 className="section-title-big text-center">Haqqımızda</h2>
      <div className="general">
        <div className="leftside">
          <span style={{ color: "purple" }}>"Regional"</span>BOKT MMC 10 Aprel
          2014 tarixində təsis edilmiş, 18 Aprel 2014 tarixində Dövlət
          qeydiyyatından keçmişdir. 1 Avqust 2014-cü ildə Mərkəzi Bankın verdiyi
          BKT - 26 saylı lisenziyası əsasında, Azərbaycan Respublikasının Bank
          Olmayan Kredit Təşkilatları haqqında qanuna və Mərkəzi Bankın göstəriş
          və təlimatlarına uyğun olaraq fəaliyyət göstərir. Təşkilat, kiçik və
          orta sahibkarlıq subyektlərinin, eləcə də fiziki şəxslərin kredit
          məhsullarına olan ehtiyacını ödəyən rəqabət qabiliyyətli, peşəkar
          komandaya malik kredit təşkilatıdır.
        </div>
        <div className="rightside">
          Müştərilərlə{" "}
          <span>
            qarşılıqlı hörmət, əlçatanlıq və operativlik prinsipləri əsasında
            xidmət göstərərək, şirkət bir çox nüfuzlu təşkilatlarla, maliyyə
            institutları ilə, banklar və dövlət strukturları ilə sıx əməkdaşlıq
            edir. Regional” BOKT öz fəaliyyətini korporativ idarəetmə və
            hesabatlılıq siyasəti əsasında tənzimləyir. Təşkilatımızın illik
            fəaliyyətinə dair hesabatlar rəsmi olaraq kənar auditor xidməti
            tərəfindən təsdiqlənir və kütləvi İnformasiya vasitələrində
            yayımlanır.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
