import React, { useState } from "react";

const Showshape = () => {
  const [index, setIndex] = useState(false);

  const changeShape = () => {
    setIndex((prev) => (prev + 1) % 4); // cycle 0 → 1 → 2 → 3 → 0
  };

  return (
    <>
      <h3 className="text-xl font-semibold text-blue-700 text-center">
        Change Shape One by One
      </h3>

      <div className="flex justify-center items-center flex-col gap-6 p-6">

        {/* CIRCLE */}
        {index === 0 && (
          <div className="bg-amber-400 rounded-full w-40 h-40 flex justify-center items-center text-white text-lg font-semibold">
            
          </div>
        )}

        {/* RECTANGLE */}
        {index === 1 && (
          <div className="bg-purple-600 h-40 w-60 flex justify-center items-center text-white text-lg font-semibold">
            
          </div>
        )}

        {/* TRIANGLE */}
        {index === 2 && (
          <div
            className="w-0 h-0 border-l-[80px] border-l-transparent
            border-r-[80px] border-r-transparent
            border-b-[140px] border-b-green-400"
          ></div>
        )}

        {/* SQUARE */}
        {index === 3 && (
          <div className="bg-red-400 w-40 h-40 flex justify-center items-center text-white text-lg font-semibold">
            
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={changeShape}
          className="bg-blue-500 text-white p-3 w-48 font-bold shadow-md hover:scale-105 transition-all rounded-xl"
        >
          Change Shape
        </button>
      </div>
    </>
  );
};

export default Showshape;
