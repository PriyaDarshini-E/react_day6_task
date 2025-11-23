import React, { useState } from 'react'

const Null_state = () => {

  const [show, setShow] = useState(null);

  const changeValue = () => {
    if (show === null) {
      setShow(undefined);
    } else {
      setShow(null);
    }
  };

  return (
    <>
      <button onClick={changeValue}>Boolean_Number</button>
      <h4>Updated value - {String(show)}</h4>
    </>
  )
}

export default Null_state;
