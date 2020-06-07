import React, { Component } from 'react'

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null,
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value //attrape la propriété state correcte et y entre la valeur entrée
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt">Belt :</label>
                    <input type="text" name="" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja