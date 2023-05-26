import React from 'react'
import { Link} from 'react-router-dom'
export default function Header() {
  return (
    <>
        <div style={{backgroundColor:'aquamarine' ,height:70  }} >
      <h1 style={ {textAlign:'center' ,margin:0 }}>Movies Reviews</h1>
    <Link to={'/About'}> 
      <h1>About</h1>
    </Link>
    <Link to={'/About'}> 
      <h1>Home</h1>
    </Link>
    <Link to={'/About'}> 
      <h1>Contact</h1>
    </Link>
    </div>
  
    
    </>
  )
}
