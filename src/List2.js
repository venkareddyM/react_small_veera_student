import React, { useState } from 'react'

function List2() {

    var students=["raju", "mahesh","suresh","rajesh", "pavan","kalyan"]

    const[data, setData]=useState(students)

    const searchHandler=(e)=>{
        let search=e.target.value;
        setData(students.filter((a)=>
        a.toLowerCase().startsWith(search)))
    }


  return (
    <div>
        <h3>List2 data</h3>

        {/* {data.map((e)=>{
            return(
                <div>{e} </div>
            )
        })} */}

        <div>
            <input type="text" placeholder='search..' onChange={searchHandler}/>
        </div>
        {data.map((e)=>(
            <div>{e} </div>
        ))}
    </div>


    
  )
}

export default List2