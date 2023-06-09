import React, { useContext } from 'react'
import { appState } from '../App'


const CompC = () => {

    const appData= useContext(appState)
  return (
    <div>
      <div>CompC</div>
      <h1>{appData.data}</h1>
      <h1>{appData.name.name}</h1>
      <h1>{appData.name.age}</h1>
    </div>

  )
}   

export default CompC
 