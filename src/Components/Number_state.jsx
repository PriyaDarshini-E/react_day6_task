import React, { useState } from 'react'

const Number_state = () => {

  const [numb_1,setNumb_1] = useState([1,2,3])
  const numb = () =>{
    setNumb_1([2,3,4,5,6,7])
  }

  const [even,setEven] = useState(0)

  const even_1 = () => {
    setEven(even+2)
  }

  const [odd,setOdd_1] = useState(1)

  const odd_1 = () => {
    setOdd_1(odd+2)
  }
  

  return (
    <>
     <h1>String_state</h1>

      <button onClick={numb}>numbrer_1</button>
      <h4>Updated number - {numb_1}</h4>

      <button onClick={even_1}>Even_number</button>
       <h4>Updated number - {even}</h4>

       <button onClick={odd_1}>Odd_number</button>
       <h4>Updated number - {odd}</h4>



     </>
  )
}

export default Number_state