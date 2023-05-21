import React from "react" ;

const Movie=(props) => {
  return (
    <div className="Movie">
      <img src={props.img} alt="img" />
      <p>{props.title}</p>
      <p>Year :{props.year}</p>
      <p>Run Time :{props.runTime}</p>
    </div>
  );
};

export default Movie;
