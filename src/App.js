import Header from "./components/Header";
import "./App.css";
import Movie from "./components/Movie";
import Movies from './Movie.json';
import UseState from "./components/useState";

function App() {
  return (
    <>
      <Header></Header>
      
      <div className="Main">
      {
        Movies.map((Element , index)=>{
           return (
            <Movie 
            key= {index}
            title={Element.Title}
            img={Element.Poster}
            runTime={Element.Runtime}
            year={Element.Year}
        
            ></Movie>
           )
        })
      }

      <UseState></UseState>
      
      </div>
    </>
  );
}

export default App;
