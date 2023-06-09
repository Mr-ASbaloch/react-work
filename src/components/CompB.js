import React from 'react'
import CompC from './CompC'
import { useContext } from 'react'
import { appState } from '../App'

const CompB = () => {

    const appData= useContext(appState)
  return (
    <div>
      <div>CompB</div>
      <h3>{appData.data}</h3>
      <CompC ></CompC>
    </div>
  )
}

export default CompB
