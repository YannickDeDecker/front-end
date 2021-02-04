import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import Blog from './Pages/Blog';
import NavigationBar from './Components/NavigationBar'
import Contact from './Pages/Contact';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Article from './Pages/Article';

export default class App extends Component {

  render() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar/>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/article/:id' component={Article} />
      </Router>
    </div>
  );
}}
