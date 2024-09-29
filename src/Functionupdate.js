import React, {useState} from 'react';

function Functionupdate(){
    const [data, setData]=useState("Hydrabad")

    function changeText(){
        setData("Bangalore")
        // alert("hello")
    }
    return(
        <div>
            <h2>function update </h2>
            <h3>name: {data}</h3>
            <button onClick={changeText}>change text</button>
        </div>
    )
}
export default Functionupdate;