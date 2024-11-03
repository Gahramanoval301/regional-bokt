import { partnerships } from "@/data/Partnerships";
import React from "react";

const Partnerships = () => {
  return (
    <div className="section-gap mt-12">
      <h3 className="section-title text-center">Partnyorlar</h3>
      <div className="grid max-[450px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-items-center">
        {partnerships.map(({ id, imgUrl }) => (
          <div key={id}>
            <img className="text-center" src={imgUrl} alt={"partnership"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
