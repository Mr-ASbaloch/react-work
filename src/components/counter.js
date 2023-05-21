import { useState } from "react";
function Counter() {

  const [number, setNumber] = useState(0);
  function handlerClick() {
   
    setNumber(number + 1);
    console.log(number);
    console.log("randering");
    alert('hey ')
  }
  return (
    <>
      <h1 > {number} </h1>
      <button onClick={handlerClick} style={{backgroundColor:"black", width:120  ,color:"aqua"}}> Add</button>
    </>
  );
}
export default Counter;
