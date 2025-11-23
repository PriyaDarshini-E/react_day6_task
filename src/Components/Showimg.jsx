import React, { useState } from "react";
import girl from "../assets/Images/girl.webp";
import boy from "../assets/Images/boy.webp";

const Showimg = () => {
  const [selectedImg, setSelectedImg] = useState(""); // "girl" or "boy"

  return (
    <>
      <h3 className="text-xl font-semibold text-blue-700 text-center">
        2. State using Ternary Operator in Image
      </h3>

      {/* Image Rendering */}
      <div className="flex justify-center items-center mt-4">
        {selectedImg === "girl" && (
          <img src={girl} className="w-40 rounded-xl shadow-lg" alt="Girl" />
        )}

        {selectedImg === "boy" && (
          <img src={boy} className="w-40 rounded-xl shadow-lg" alt="Boy" />
        )}
      </div>

      <div className="flex justify-center items-center gap-3 mt-5">
        <button
          className="bg-pink-400 p-3 w-32 font-bold shadow-md hover:scale-105 transition-all rounded-xl"
          onClick={() => setSelectedImg("girl")}
        >
          GIRL
        </button>

        <button
          className="bg-blue-400 p-3 w-32 font-bold shadow-md hover:scale-105 transition-all rounded-xl"
          onClick={() => setSelectedImg("boy")}
        >
          BOY
        </button>
      </div>

      <hr className="h-[3px] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-6" />
    </>
  );
};

export default Showimg;
