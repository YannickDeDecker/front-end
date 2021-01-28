import React, { Component } from 'react'
import { Container, Input, Label, Button } from 'reactstrap'
// import ChildComponent from './Components/ChildComponent'
import Counter from './Components/Counter'

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          username: 'Arne',
          password: '1234',
          age: 12,
      }
  }

  inputHandler = (e) => {
      // console.log(e.target.value)
      this.setState({
          comment: e.target.value
      })
  }

  render() {
      return (
          <div>
              <Counter projectname="Counter Project v1.0" />
              <hr />
              <Input type="text" className="bg-primary text-white" onChange={this.inputHandler} />

              <p className="lead">
                  {this.state.comment}
              </p>
              
              <Container>
                <Label>Full Name: </Label>
                <Input type="text" className="bg-white text-dark" onChange={this.inputHandler} />
                <Label className="mt-3">Age: </Label>
                <Input type="number" className="bg-white text-dark" onChange={this.inputHandler} />
                <Label className="mt-3">E-mail: </Label>
                <Input type="email" className="bg-white text-dark" onChange={this.inputHandler} />
                <Button className="mt-4" color="info">Send Message</Button>
              </Container>
          </div>
      )
  }
}


export default App
