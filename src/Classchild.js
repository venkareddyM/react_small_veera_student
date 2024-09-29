import  React from 'react';

class Classchild extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.abc)
        return(
            <div>
                <h1>This is Class child</h1>
                <h3>city: {this.props.abc.city}</h3>
                <h3>Name: {this.props.abc.name}</h3>
                <h3>Age: {this.props.abc.age}</h3>
                <h3>Marks: {this.props.abc.marks}</h3>
            </div>
        )
    }
}
export default Classchild;