import React from 'react';
import Pfour from './Pfour';

function Pthree(props){
    return(
        <div>
            <h1>P Three component</h1>
            {/* <h3>city: {props.bbb}</h3> */}
            <Pfour ccc={props.bbb}/>
        </div>
    )
}
export default Pthree;