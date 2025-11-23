import React, { useState } from 'react'

const Array_state = () => {

   const [numb_1,setNumb_1] = useState([1,2,3])
    const numb = () =>{
      setNumb_1([...numb_1,34])
    }

    const [number,setNumb] = useState([1,2,3])
    const increase = ()=> {
      setNumb(number+1)
    }

  return (
    <>
     <h1>Array_state</h1>

      <button onClick={numb}>number_1</button>
      <h4>Updated number - {numb_1}</h4>

      <button onClick={increase}>number_2</button>
      <h4>Updated number - {number}</h4>
      </>
  )
}

export default Array_state