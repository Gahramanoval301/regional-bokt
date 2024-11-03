import CircularProgress from "@/components/_layout/CircularProgress";
import React from "react";

const loading = () => {
  return (
    <>
      <div className=" flex flex-col items-center w-[100vw] h-[100vh]">
        <CircularProgress />
      </div>
    </>
  );
};

export default loading;
