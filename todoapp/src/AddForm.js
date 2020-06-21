import React, { Component } from 'react'; // puisqu'il faut stocker les données entrées par l'utiliser, il faut donc utiliser une classe qui contient un state

class AddForm extends Component {
    state = { 
        content: '',

     }

     handleChange = e => {
        this.setState({
            content: e.target.value
        })
     }

     handleSubmit = e => {
         e.preventDefault();
         this.props.addTodo(this.state);
         this.setState({
             content: ''
         })
     }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Ajouter un nouveau Todo :</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/> 
                </form>
            </div>
          );
    }
}
 
export default AddForm;