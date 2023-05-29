import React, { useState } from 'react'




const UsObject = () => {
    
    const obj= { 
        name: 'saeed',
        age: 36,
        height :5.11,
        isYoung: true
    }
 
    const [person,setPerson] = useState(obj);
    
    
    // function update (){
    //     setPerson(
    //         { 
    //             name: 'ahmad',
    //             age: 20,
    //             height :5.11,
    //             isYoung: true
    //         }
    //     )
    // };
     function  updateObj() {
       setPerson ( previous =>  {
      return{
        ...previous,
        name: 'akram',
      }
       
       })
     

       
    //
  return (
    
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button  onClick={updateObj}>update</button>
    </div>
  )
}

}
 
export default UsObject ;
