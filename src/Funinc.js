import React, { useState } from 'react';

function Funinc(){

    const [count, setcount]=useState(0)


   function changeincrementhandler(){
    if(count<=9){
        setcount(count+1)
    }else{
        alert("your reached 10")
    }
   }

   function changedecrementhandler(){
        setcount(count-1)
    // if(count>0){
    //     setcount(count-1)
    // }
   }

    return(
        <div>
            <h3>Increment & Decrement Counter</h3>

            <h2> counter: {count}</h2>

            <button onClick={changedecrementhandler} disabled={count===0}>Decrement</button>
           <button onClick={changeincrementhandler} disabled={count===10}>Increment</button>
        </div>
    )
}
export default Funinc;



