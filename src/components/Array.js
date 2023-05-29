import React, { useState } from 'react'

const Array = () => {
    let arr=[1,2,3,4,9,10,11]
const [value, setValue]=useState (arr)
let update =()=>{
    setValue (previous => {
     return [
        ...previous,
        Math.floor (Math.random ( ) * 60)
     ]
    })
}
  return (
    <div>
      <li >{value.map((n,i) => <h3  key={i}>{n}</h3>)}</li>
      <button onClick={update}>add number</button>
    </div>
  )
}

export default Array
