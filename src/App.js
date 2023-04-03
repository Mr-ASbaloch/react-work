import "./App.css";
import Profile from "./components/profile";
import Video from "./components/video";
import {Profiles} from "./components/challenge";


function App() {
  let nam='react app'
  return (
    <div className="App">
      <div>hello welcome</div>
      {nam}
      <Demo></Demo>
      <Video></Video>
      <Video></Video>
      <Profile></Profile>
      <Profiles></Profiles>
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
