// Challenge 1 of 4: Export the component


// use of curly braces to avoid confusing

let src ="https://i.imgur.com/lICfvbD.jpg" ;
const alt= "Aklilu Lemma";
let name= "saeed";

export  function Profiles() {

  return (
    <div>
    <h1>Hello {name} welcome </h1>
   <img src={src}
   alt={alt} />
    <Profile1></Profile1>
    <Todo></Todo>
    </div>
  )
}  




// Challenge 2 of 4: Fix the return statement 


function Profile1() {
    return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
  }

  let person={
    name: "saeed",
    age: 20,
    theme:{
      color:"red"
    }
  }
  
  // curly braces use 
  function Todo() {
<>
<h1 style={person.name}> Hello</h1>
</>
    
  }