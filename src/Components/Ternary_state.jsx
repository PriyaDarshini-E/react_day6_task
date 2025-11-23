import React, { useState } from 'react'
import Showimg from './Showimg';
import Showtext from './Showtext';
import Showshape from './Showshape';

const Ternary_state = () => {

  const [show, setShow] = useState(true);

  const changeValue = () => {
    setShow(!show);
  };

  const style = {
    backgroundColor: show ? "lightblue" : "darkblue",
    color: show ? "black" : "white",
    borderRadius: "10px",
  };

  return (
    <>
      <h3 className="text-xl font-semibold text-blue-700 text-center">
        1. State using Ternary Operator in Button
      </h3>

      <div className="flex justify-center items-center flex-col mt-6">

        {show ? (
          <div className="bg-blue-800 rounded-full w-40 h-40 flex justify-center items-center text-white shadow-lg"></div>
        ) : (
          <div className="bg-blue-300 rounded-full w-40 h-40 flex justify-center items-center text-black shadow-lg"></div>
        )}

        <button
          style={style}
          className="p-3 w-32 mt-4 font-bold shadow-md hover:scale-105 transition-all"
          onClick={changeValue}
        >
          {show ? "ON" : "OFF"}
        </button>
      </div>

      <hr className="h-[3px] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 border-0 my-6" />


        <Showimg/>
        <Showtext/>
        <Showshape/>
    </>
  );
};

export default Ternary_state;
