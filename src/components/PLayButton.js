// import { logDOM } from "@testing-library/react";

function PlayButton({ message, onSmash, children, onPlay, onPause }) {
  
  let playing = false;
  function handleClick() {
    // alert(message);
    // onSmash();
    
    if (playing) onPause();
    else onPlay();

    playing = !playing;
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
      onClick={handleClick}
    >
      {/* {name} */}
      {children} {playing ? '><' : '||'}
    </button>
  );
}

export default PlayButton;
