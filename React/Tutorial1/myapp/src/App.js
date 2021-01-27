import React from 'react';
import Header from './Components/header'
import Home from './Components/home'
import Footer from './Components/footer'

// let number = 10;
let studentNames = ['Mikael', 'Susan', 'Priya', 'Adnan'];

function App(){
    return(
      <div>
        <Header />
        <Home />
        {4+4}
        {console.log(studentNames)}
        {studentNames.forEach(student => {
          console.log(student)
        })}
        <Footer />
      </div>
    )
}

export default App;
