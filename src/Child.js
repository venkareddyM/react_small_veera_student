import React from "react";

function Child(props){
    return(
        <div>
            <hr/>
            <h3>Child</h3>
            <button onClick={()=>props.abc("Hydrabad")}> change city</button>
        </div>
    )
}
export default Child;