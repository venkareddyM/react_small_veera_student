import React from 'react';

class Classinc extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incrementhandler=()=>{
        if(this.state.count<9){
            this.setState({count:this.state.count+1})
        }
    }

    decrementhandler=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
    }
    render(){
        return(
            <div>
                <h1>Increment & Decrement counter</h1>
                <h2>counter: {this.state.count+0}</h2>
                <button onClick={this.incrementhandler} disabled={this.state.count===9}>Increment</button>
                <button onClick={this.decrementhandler} disabled={this.state.count===0}>Decrement</button>
            </div>
        )
    }
}
export default Classinc;