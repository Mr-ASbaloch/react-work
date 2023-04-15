import "./App.css";
import Profile from "./components/profile";
import Video from "./components/video";
import { Profiles } from "./components/challenge";
import Props from "./components/props";
import PLayButton from "./components/PLayButton";

function App() {
  // let Obj= {
  //   title: "Html Css Javascript",
  //   time:"5 year ago" ,
  //    channel:"web",
  //     views:"7k views"
  // }

  // let nam='react app'
  let Videos = [
    {
      id: 1,
      smile: true,
      title: "Python",
      time: "5 year ago",
      channel: "web",
      views: "7k views",
    },
    {
      id: 2,
      smile: true,
      title: "Python",
      time: "5 year ago",
      channel: "web",
      views: "7k views",
    },
    {
      id: 3,
      smile: true,
      title: "Python",
      time: "5 year ago",
      channel: "web",
      views: "7k views",
      Verified: true,
    },
  ];

  return (
    <>
      <div className="App">
        <div>hello welcome</div>
        {/* {nam} */}

        <Profile></Profile>
        <Profiles></Profiles>
        <PLayButton
          //  message="Play-msg"
          // name="Play-Button"
          onSmash={ ()=>alert('Play')}
        >
        
          play
        </PLayButton>
        {/* <PLayButton
          //  message="Pauase msg"
          // name="Pause-Button"
          onSmash={() => console.log('pause')}
        >
          
          Pause
        </PLayButton> */}
        <PLayButton
         
          onPlay={() => console.log('Play')}
          onPause={() => console.log('pause')}
        >
      Check status
        </PLayButton>
        <Props></Props>

        {Videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            time={video.time}
            verified={video.Verified}
            smile={video.smile}
            channel={video.channel}
            views={video.views}
          ></Video>
        ))}

        {/* <Video  {...Obj}></Video>
      <Video verified={true} smile={false} title="React js" time="5 year ago"  channel="web" views="7k views"></Video>
      <Video title="Mongo DB" time="5 year ago"  channel="web" views="7k views"></Video>
      <Video smile={true} title="Python" time="5 year ago"  channel="web" views="7k views"></Video> */}
      </div>
    </>
  );
}

export default App;
