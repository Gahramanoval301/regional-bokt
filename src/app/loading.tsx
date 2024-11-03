import CircularProgress from "@/components/_layout/CircularProgress";
import React from "react";

const loading = () => {
  return (
    <>
      <div className="text-center">
        <CircularProgress />
      </div>
    </>
  );
};

export default loading;
