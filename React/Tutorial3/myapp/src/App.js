import React, { Component } from 'react'
import FakePersonGenerator from './Components/FakePersonGenerator'
import Faker from 'faker'
import { Button, Container, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
export default class App extends Component {
  state = {
    people: [],
    blogposts: []
  }


  FakePerson = () => {
    let inputField = document.getElementById('inputNumber');
    let inputValue = parseInt(inputField.value);
    let people = this.state.people;

    for (let index = 0; index < inputValue; index++) {
      let name = Faker.name.findName()
      let username = Faker.internet.userName()
      let avatar = Faker.internet.avatar();
      let obj = {
        name: name,
        username: username,
        avatar: avatar
      }
      people.push(obj)
    }

    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div>
        <Container>
          <h1 className="mt-5">Give a number:</h1>
          <InputGroup className="mb-4">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>Number:</InputGroupText>
            </InputGroupAddon>
            <Input id="inputNumber" placeholder="give a number" />
          </InputGroup>
          
          <Button color="success" onClick={this.FakePerson}>Generate Fake Data</Button>
          <FakePersonGenerator fakepeople={this.state.people}/>
      </Container>
      </div>
    )
  }
}
