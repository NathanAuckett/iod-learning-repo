import React from "react";
// import ReactDOM from "react-dom";

export default class GreetingClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'World' };

        this.changeName = this.changeName.bind(this);
    }
    
    changeName(str) {
        this.setState({name: str});
    }
    

    render() {
        return (
            <div>
                <button onClick={() => {this.changeName("Nathan")}}>Greet Class</button>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}
