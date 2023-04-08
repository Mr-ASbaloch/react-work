import "./App.css";
import Profile from "./components/profile";
import Video from "./components/video";
import {Profiles} from "./components/challenge";
import Props from "./components/props";
import Conditional from "./components/condition";


function App() {
  let nam='react app'
  return (
    <div className="App">
      <div>hello welcome</div>
      {nam}
      <Demo></Demo>
      <Conditional></Conditional>
      <Video></Video>
      <Video></Video>
      <Profile></Profile>
      <Profiles></Profiles>
      <Props></Props>
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
