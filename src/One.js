import React, { useState } from 'react'
import Functionchild from './Login/Functionchild';

function One() {
  const [student, setStudent]=useState({
    // name: "kiran",
    // city: "ATP"
  })
    // const [city, setCity]=useState("Bangalore")
    // const [name, setName]=useState("Rajesh")
  return (
    <div>
        <h1>This is function component</h1>
        {/* <h3>City : {city}</h3> */}
        {/* <Functionchild data={city}  xyz={name}/> */}
        <Functionchild data={student}/>
    </div>
  )
}

export default One;