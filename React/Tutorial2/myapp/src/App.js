import React, { Component } from 'react'
import { Container, Input, Label, Button } from 'reactstrap'
// import Counter from './Components/Counter'

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {fullName: '', age: '', email: ''};
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
      return (
          <div>
              {/* <Counter projectname="Counter Project v1.0" /> */}
              <hr />

              <Container>
              <p className="lead font-weight-bold">Full Name: {this.state.fullName}</p>
              <p className="lead font-weight-bold">Age: {this.state.age}</p>
              <p className="lead font-weight-bold">E-mail: {this.state.email}</p>
              <hr/>
              <div className="bg-dark p-4 text-white">
              <Label>Full Name: </Label>
                <Input name="fullName" type="text" className="bg-white text-dark" onChange={this.handleChange} />
                <Label className="mt-3">Age: </Label>
                <Input name="age" type="number" className="bg-white text-dark" onChange={this.handleChange} />
                <Label className="mt-3">E-mail: </Label>
                <Input name="email" type="email" className="bg-white text-dark" onChange={this.handleChange} />
               
                <Button className="mt-4" color="info" onClick={this.handleSubmit}>Send Message</Button>
              </div>
              </Container>
          </div>
      )
  }
}

export default App
