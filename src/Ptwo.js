import React from 'react';
import Pthree from './Pthree';

function Ptwo(props){
    return(
        <div>
            <h1>P Two component</h1>
            {/* <h3>city : {props.aaa}</h3> */}
            <Pthree bbb={props.aaa}/>
        </div>
    )
}
export default Ptwo;