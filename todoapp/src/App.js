import React, { Component } from 'react';
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = { 
    todos: [
      {id:1, content: "Regarder un bon film"},
      {id:2, content: "Lire un bon livre"},
      {id:3, content: "Apprendre JS"},
      {id:4, content: "Avancer dans le projet réel"}
    ]
   }

   deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id // si l'id de l'event n'est pas égal à celui du todo, alors rien ne se passe
      });
      this.setState({
        todos: todos // si c'est égal, le state todos est remplacé par celui que l'on vient de créer et qui le supprime
  })
   } // la fonction deleteTodo doit obligatoirement être créé car elle modifie le state

   addTodo = (todo) => {
      todo.id = Math.random(); //faible possibilité que deux todos aient le même id
      let todos = [...this.state.todos, todo];
      this.setState({
        todos: todos
      })   }
  
  render() { 
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm  addTodo={this.addTodo}/>
      </div>
      );
  }
}
 
export default App;