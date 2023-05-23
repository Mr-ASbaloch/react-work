import React, { useState } from 'react';

 
function New() {
  const [name,setName]= useState ();
 const [email, setEmail]= useState ();
  return (
    <div>
       <form action=""  className='form'>
        <input type="text" value={name} placeholder='Name'  onChange={(event)=> setName(event.target.value)} style={{padding:7}}/>
        <input type='Email' value={email} placeholder='email' onChange={(event)=> setEmail(event.target.value)} style={{padding:7}} />
        <button className='btn1'>Add</button>
       </form>
    
    </div>
  )
}

export default New
