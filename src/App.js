// create your App component here
import React from 'react'

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => this.setState({data: json}))
    }


    render() {
        let names = "";
        console.log(this.state.data);
        if(this.state.data !== ""){
            names = this.state.data.people.map((person, idx) => {
                return <li>{person.name}</li>
            })
            console.log(names);
        }
                
        return (
            <div>
                <h2>
                    People
                </h2>
                <div>
                    {this.state.data !== "" ? names : null }
                </div>
            </div>
        )
    }
}