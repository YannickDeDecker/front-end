import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Article from './Pages/Article'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/article/:id' component={Article} />
      </Router>
    </div>
  );
}

export default App;
