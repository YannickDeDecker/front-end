import React, { Component } from 'react'
import fetch from 'node-fetch'
import { Button, Container, FormGroup, Label, Input } from 'reactstrap';

class Exchange extends Component {
    componentDidMount() {
        fetch('http://api.coinlayer.com/api/list?access_key=074cd10e790b97dc060d4dd8801842d8&')
        .then(res => res.json())
        .then(data => {
          console.log(data);
    })}

    state = {
        
      }
    
    currencyHandler = () => {
        fetch('http://api.coinlayer.com/api/live?access_key=074cd10e790b97dc060d4dd8801842d8&target=EUR')
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })

        let input = document.querySelector('#inputNumber');
        let output = document.querySelector('#outputNumber');
    }
    
    render() {
        return (
            <div>
                <Container>
                    <div>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="bitcoinSelect">
                            <option value="BTC">Bitcoin</option>
                            </Input>
                        </FormGroup>
                        <Button onClick={this.currencyHandler}>Klik</Button>
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="currencySelect">
                            <option value="">--Choose Option--</option>
                            <option value="EUR">Euro</option>
                            <option value="USD">Dollar</option>
                            <option value="GBP">Pound</option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div>
                    <Input id="inputNumber" type="number"></Input>
                    <Input id="outputNumber" type="number"></Input>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Exchange
