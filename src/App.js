import Header from "./components/Header";
import "./App.css";
// import Movie from "./components/Movie";
// import Movies from "./Movie.json";
// import UseState from "./components/useState";
// import New from "./components/Record";
import Contact from "./components/contact";
import About from "./components/about";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  return (
    <>
    <RouterProvider>
      <Header></Header>

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
       
      </div>
      <New></New>
       */}
        
       
       

       </RouterProvider>  
     
    </>
  );
}

export default App;
