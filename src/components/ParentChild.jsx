import React from 'react'

const ParentChild = ({propchivalue, navchange}) => {
  return (
    <div><h1>{propchivalue}</h1>
     <button onClick={navchange}>change name</button>
    </div>
  )
}

export default ParentChild