// import Header from "./components/Header";
import { useState } from "react";
import "./App.css";
// import Array from "./components/Array";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import UsObject from "./components/UsObject";
// import Movie from "./components/Movie";
// import Movies from "./Movie.json";
// import UseState from "./components/useState";
// import New from "./components/Record";
// import { useEffect, useState } from "react";
// import { Brightness3TwoTone } from "@mui/icons-material";
// // import { Key } from "@mui/icons-material";
// import {Routes, Route} from 'react-router-dom'
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// // import Navbar from "./components/Nav";
// import Navbar from "./components/Nav";
import CompA from "./components/CompA";

function App() {
const [data, setData]=useState("hey word ")

  return(
    <>
    {/* <Navbar/>
      <Routes>
        <Route  path="/" element={<Home></Home>}></Route>
        <Route  path="/contact"  element={<Contact/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
      </Routes> */}
      <CompA data={data}></CompA>
    </>
    
  )







  // const [state, setState] = useState(2);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const get= await fetch(
  //       `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
  //     );
  //     const res = await get.json();
  //     setData(res);
  //     console.log(res);
    
  //   }
  //   getData();
  //   document.title=`( ${state}) employees available`;
  // }, [state]);

  // return (
  //   <>
  //     <Header></Header>

  //     <div className="fetch">
  //       <button  onClick={() => setState(state + 2)}>{state} </button>
  //     </div>
  //     {/* <div className="Main">
  //       {Movies.map((Element, index) => {
  //         return (
  //           <Movie
  //             key={index}
  //             title={Element.Title}
  //             img={Element.Poster}
  //             runTime={Element.Runtime}
  //             year={Element.Year}
  //           ></Movie>
  //         );
  //       })} 

  //       <UseState></UseState>
  //     </div> */}

  //     {
  //       data.map ((Element, index) => {
  //         return (
  //           <div key={index} className="data">
  //             <h1>{Element.firstName}</h1>
  //             <h4>{Element.lastName}</h4>
  //             <h4>{Element.email}</h4>
  //             <h4>{Element.age}</h4>
  //             <h4>{Element.contactNumber}</h4>
              
             
  //           </div>
  //         );
  //       })
  //     }

      
  //     {/* <New></New> */}
  //   </>
  // );
}

export default App;
