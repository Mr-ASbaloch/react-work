import React from 'react'
import CompC from './CompC'

const CompB = ({data}) => {
  return (
    <div>
      <div>CompB</div>
      <CompC data={data}></CompC>
    </div>
  )
}

export default CompB
