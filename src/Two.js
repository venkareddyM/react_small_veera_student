
import React from 'react';
import Classchild from './Classchild';

class Two extends React.Component{
    constructor(){
        super()
        this.state={
            city: "Hydrabad",
            name: "suresh",
            age:  "23",
            marks: "337"
        }
    }
    render(){
        return(
            <div>
                 <hr/>
                <h1>Child class</h1>
                <h3>city: {this.state.city}</h3>
                <Classchild abc={this.state}/>
            </div>
        )
    }
}
export default Two;