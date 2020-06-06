import React from 'react';
import Ninjas from "./Ninjas";
// import './App.css';

function App() {
  return (
        <div className="App">
     <h1>My first React app</h1>
     <p>Bienvenue!</p>
     <Ninjas name="Sanjuron" age="30" belt="black"/>
     <Ninjas name="Dovakhin" age="10000" belt="ultrablack"/>

    </div>
  );
}


export default App;
