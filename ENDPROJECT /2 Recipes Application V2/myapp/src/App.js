import React, {Component, setState} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import {DataContext} from './context/DataContext'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Article from './Pages/Article'

export default class App extends Component {
  async componentDidMount() {
    const response = await fetch('./recipes.json');
    const json = await response.json();
    this.setState({ data: json });
  }
  
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Navbar/>
        </div>
        <DataContext.Provider value={this.data}>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/article/:id' component={Article} />
        </DataContext.Provider>
      </Router>
      </div>
    )
  }
}
