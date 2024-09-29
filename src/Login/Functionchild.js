import React from 'react'

function Functionchild(props) {
  console.log(props.data)
  // console.log(props.data)

  // state mutable => we can change state value 
// props immutable => we can,t change the state value
  return (
    <div>
      <h1>Function child</h1>
      {/* <h2>city: {props.data}</h2> */}
      {/* <h3> Name: {props.xyz}</h3> */}
      <h2>Name: {props.data.name} </h2>
      <h2>City: {props.data.city}</h2>
    </div>
  )
}

export default Functionchild;