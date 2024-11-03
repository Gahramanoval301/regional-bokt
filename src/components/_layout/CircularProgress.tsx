import React from 'react'

const CircularProgress = () => {
  return (
    <div className="relative flex justify-center items-center w-16 h-16">
      <div className="absolute w-full h-full border-4 border-gray-300 rounded-full"></div>
      <div className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default CircularProgress