import React, { useState } from 'react'

const Showtext = () => {
  const [string_1, setString_1] = useState("Priya");

  const change = () => {
    if (string_1 === "Priya") {
      setString_1("Priya Darshini");
    } else {
      setString_1("Priya");
    }
  };

  return (
    <>
      <h3 className="text-xl font-semibold text-blue-700 text-center">
        3. State using Ternary Operator in Text
      </h3>

      <div className="flex flex-col justify-center items-center gap-4 mt-6">

        <button 
          onClick={change} 
          className="bg-orange-500 text-white p-3 w-40 font-bold shadow-md hover:scale-105 transition-all rounded-xl" >Update the String
        </button>

        <h4 className="text-lg font-semibold">
          Updated string → <span className="text-pink-600">{string_1}</span>
        </h4>

      </div>
      <hr className="h-[3px] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-6" />
    </>
  );
};

export default Showtext;
