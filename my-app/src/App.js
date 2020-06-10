import React, { Component} from 'react';
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";
// import './App.css';

class  App extends Component {
  state = {
    ninjas : [
    { name: "Sanjuron", age: 30, belt: "black", id: 1 },
    { name: "Dovakhin", age: 18, belt: "ultrablack", id: 2 },
    { name: "Yojimbo", age: 43, belt: "green", id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninjas =>{
      return ninja.id !== id
    }
      ); // filter est une méthode non destructrice
  
  this.setState({
    ninjas: ninjas
  })

  render(){
  return (
        <div className="App">
     <h1>My first React app</h1>
     <p>Bienvenue!</p>
     <Ninjas deleteNinja={this.deleteNinja} ninjas = {this.state.ninjas}/>
     <AddNinja  addNinja={this.addNinja}/>
    </div>
  );
}
}

export default App;
