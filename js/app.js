class App extends React.Component {
    
    state = {
        name: "Sanjuron",
        age: 30

    }

    handleClick = e => {
        // console.log(e.target);
        this.setState(
            {
                name: prompt("entre ton nom:"),
                age: prompt("entre ton age:")
            }
        )
        console.log(this.state);}
    

    handleMouseOver = e => {
        console.log(e.target, e.pageX);
    }

    handleCopy = e => {
        alert("Try being original, for once");
    }

    handlePaste = e => {
        alert("qu'est ce que t'essaies de faire malheureux!")
        e.preventDefault;
    }

     render() {
         return (
            <div className="app-content"> 
                <h1>Hey, Ninjas</h1>
                <p>Je m'appelle {this.state.name} et j'ai {this.state.age} ans</p>
                <button onClick={this.handleClick}>Clique-moi</button>
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
                <p onCopy={this.handleCopy}>What we think we become</p>
                <input type="text" onPaste={this.handlePaste}/>
            </div>
         )
     }

}


ReactDOM.render(<App/>,document.getElementById('app'));