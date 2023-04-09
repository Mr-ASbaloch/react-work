import "./Video.css";
function Video({ title, views, channel, time, verified, smile }) {
  // const verified=true;

  //   let  channelJsx=  <div className="Channel"> {channel}✅</div>;
  //   if (verified) {
  //     channelJsx=  <div className="Channel"> {channel}✅</div>;
  //   } else {
  //     channelJsx= <div className="Channel"> {channel}</div>;
  //   }

  return (
    <>
      <div className="Main">
        <div className="Thumb">
          <img
            // src="https://i.imgur.com/yXOvdOSs.jpg"
            src="https://i.imgur.com/lICfvbD.jpg"
            alt="Hedy Lamarr"
            className="photo"
          />
        </div>
        {/* {channelJsx} */}
        <div className="title"> {title}</div>
        {verified ? (
          <div className="Channel"> {channel}✅</div>
        ) : (
          <div className="Channel"> {channel}</div>
        )}
        <div className="Views"> {views} { smile ? '😅' :null}</div>
        <div className="time"> {time} </div>
        <div />
      </div>
    </>
  );
}
export default Video;
