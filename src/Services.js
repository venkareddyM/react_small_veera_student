import React, { useState } from 'react'
import Schild from './Schild'

function Services() {
  const [count, setCount]=useState(0)
  console.log("parent rerender")

  const incrementHandler=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <h2>Services</h2>
      <h2>count:{count} </h2>
      <button onClick={incrementHandler}>
        click:
      </button>
          <Schild/>

    </div>
  )
}

export default Services