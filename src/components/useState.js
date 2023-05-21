// import React, { useState } from 'react'
import React, { useState } from "react";

function UseState() {
  const [num, setNum] = useState(1);
  function handlerIncre() {
    setNum(num + 1);
  }
  function handlerDcre() {
    setNum(num - 1);
  }

  return (
    <div className="main">
      <h3>use state</h3>
      <h1> {num}</h1>
      <button className="btn" onClick={handlerIncre}>
        Increment
      </button>
      <button className="btn" onClick={handlerDcre}>
        Decrement
      </button>
    </div>
  );
}

export default UseState;
