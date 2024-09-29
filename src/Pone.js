import React, { useState } from 'react';
import Ptwo from './Ptwo';

function Pone(){
    const [city, setCity]=useState("Bangalore")
    return(
        <div>
            <h1>P one component</h1>
            {/* <h3>city: {city}</h3> */}
            <Ptwo aaa={city}/>
        </div>
    )
}
export  default Pone;