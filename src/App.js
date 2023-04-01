import "./App.css";
import Video from "./components/video";


function App() {
  let nam='react app'
  return (
    <div className="App">
      <div>hello welcome</div>
      {nam}
      <Demo></Demo>
      <Video></Video>
      <Video></Video>
      
    </div>
  );
}
function Demo() {
 
  return (
    <div className="App">
      <div>demo</div>
    
      <demo></demo>
    </div>
  );
}

 
export default App;
