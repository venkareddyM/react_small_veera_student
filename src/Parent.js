import React, { useState } from 'react';
import Child from './Child';

function Parent(){
    const [city , setCity]=useState("Bangalore")
    return(
        <div>
            <h1>Parent</h1>
            <h3>city: {city}</h3>
            <Child abc={(e)=>setCity(e)}/>
        </div>
    )
}
export default Parent;