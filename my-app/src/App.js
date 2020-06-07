import React from 'react';
import Ninjas from "./Ninjas";
// import './App.css';

function App() {
  const ninjas = [
    { name: "Sanjuron", age: 30, belt: "black", id: 1 },
    { name: "Dovakhin", age: 4455665, belt: "ultrablack", id: 2 },
    { name: "Yojimbo", age: 43, belt: "green", id: 3 }
  ]

  return (
        <div className="App">
     <h1>My first React app</h1>
     <p>Bienvenue!</p>
     <Ninjas ninjas = {ninjas}/>

    </div>
  );
}


export default App;
