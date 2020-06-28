import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    // inclure tout le return dans une balise BrowserRouter
    // la navbar ne peut pas recevoir les props du router car elle n'a pas de path
    <BrowserRouter> 
      <div className="App">
        <Navbar /> 
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
