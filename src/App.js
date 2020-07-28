// create your App component here

import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()

        this.state = {
            peopleInSpace: ''
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    handlePeople = () => {
        console.log(this.state.peopleInSpace)
        this.state.peopleInSpace.map(person => person.name)
    }

    render() {
        return (
            <div>
                <div>{this.handlePeople()}</div>
            </div>
        )
    }
}
