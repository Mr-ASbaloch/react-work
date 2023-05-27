import Header from "./components/Header";
import "./App.css";
// import Movie from "./components/Movie";
// import Movies from "./Movie.json";
// import UseState from "./components/useState";
import New from "./components/Record";
import { useEffect, useState } from "react";
import { Brightness3TwoTone } from "@mui/icons-material";
// import { Key } from "@mui/icons-material";

function App() {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get= await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      console.log(res);
    
    }
    getData();
    document.title=`( ${state}) employees available`;
  }, [state]);

  return (
    <>
      <Header></Header>

      <div className="fetch">
        <button  onClick={() => setState(state + 2)}>{state} </button>
      </div>
      {/* <div className="Main">
        {Movies.map((Element, index) => {
          return (
            <Movie
              key={index}
              title={Element.Title}
              img={Element.Poster}
              runTime={Element.Runtime}
              year={Element.Year}
            ></Movie>
          );
        })} 

        <UseState></UseState>
      </div> */}

      {
        data.map ((Element, index) => {
          return (
            <div key={index} className="data">
              <h1>{Element.firstName}</h1>
              <h4>{Element.lastName}</h4>
              <h4>{Element.email}</h4>
              <h4>{Element.age}</h4>
              <h4>{Element.contactNumber}</h4>
              
             
            </div>
          );
        })
      }

      
      {/* <New></New> */}
    </>
  );
}

export default App;
