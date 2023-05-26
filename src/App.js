import Header from "./components/Header";
import "./App.css";
import Movie from "./components/Movie";
import Movies from "./Movie.json";
import UseState from "./components/useState";
import New from "./components/Record";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          
        <Route path="/Header" element={<Header></Header>} ></Route> 
        <Route path="/About" element={<About></About>} ></Route> 
        <Route path="/Contact" element={<Contact></Contact>} ></Route> 
        <Route path="/Home" element={<Home></Home>} ></Route> 
          
        </Routes>

       
      </Router>
      <div className="Main">
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
         
        </div>
        <New></New>
      <UseState></UseState>
    </>
  );
}

export default App;
