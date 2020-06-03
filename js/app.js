class App extends React.Component {
    
    state = {
        name: "Sanjuron",
        age: 30

    }

    handleChange = e => {
        this.setState({
            name: e.target.value,

        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name);
    }

     render() {
         return (
            <div className="app-content"> 
                <h1>Hey, {this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                
            </div>
         )
     }

}


ReactDOM.render(<App/>,document.getElementById('app'));