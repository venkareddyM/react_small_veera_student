import React from 'react';

class Classupdate extends React.Component{
    constructor(){
        super()
        this.state={
            city: "Bangalore"
        }
    }

    changetext=()=>{
        this.setState({city: "Hydarbad"})
    }
    render(){
        return(
            <div>
                <h3>classupdate</h3>
                <h2>city: {this.state.city}</h2>
                <button onClick={this.changetext}>change text</button>
            </div>
        )
    }
}
export default Classupdate;