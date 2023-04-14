// import { logDOM } from "@testing-library/react";

function PlayButton() {

  function handleClick() {
     alert("welcome")
  }
  return (
    <button
      style={{
        width: 140,
        margin: 120,
        backgroundColor: "yellowgreen",
        color: "black",
      }}
      // onClick={() => console.log("play")
      onClick={ handleClick}
      
    >
    welcome
    </button>
  );
}

export default PlayButton;
