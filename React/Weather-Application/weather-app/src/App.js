import React, { Component } from 'react'
import { Container, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import fetch from 'node-fetch'

class WeatherApplication extends Component {
  componentDidMount() {
}

state = {
  city: "3337389",
  data: {
    weather: [{}],
    main: {},
    wind: {}
  },
  imageSrc: ''
}

updateWeather= (e) => {
  if(e.target.value === ''){
    return
  } 
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${e.target.value}&appid=0f353bcfac3a777a9f3aa79d952733eb`)
  .then(response => response.json())
  // .then(json => console.log(json))
  .then(json => {
    console.log(json);
    this.setState({
      city: e.target.value,
      data: json,
      imageSrc: `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
    })
  })
}  

render() {
    return (
      <div className="App">
        <Container>
        <h1 className="mb-4">Current Weather Application</h1>
        <p className="lead-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla enim enim, cursus faucibus vehicula ut, lacinia quis odio. Curabitur sagittis mi at risus consequat pharetra. In feugiat nec est a finibus. Vestibulum leo diam, cursus id ullamcorper at, consequat malesuada metus. Duis tempor faucibus diam, non euismod dolor cursus nec.</p>
        <FormGroup>
            <Label for="exampleSelect">Choose a city:</Label>
             <Input onChange={this.updateWeather} type="select" name="select" id="exampleSelect">
                <option value="">--Choose Option--</option>
                <option value="2803073">Aarlen</option>
                <option value="2803138">Antwerpen</option>
                <option value="2801483">Boortmeerbeek</option>
                <option value="2800931">Brugge</option>
                <option value="3337389">Brussel</option>
                <option value="2800481">Charleroi</option>
                <option value="2797671">Genk</option>
                <option value="2797656">Gent</option>
                <option value="2796696">Halle</option>
                <option value="2754779">Hasselt</option>
                <option value="2794055">Kortrijk</option>
                <option value="2792482">Leuven</option>
                <option value="2792413">Luik</option>
                <option value="2791537">Mechelen</option>
                <option value="2790471">Namen</option>
                <option value="2789787">Oostende</option>
                <option value="2786578">Sint-Niklaas</option>
                <option value="2785141">Turnhout</option>
                <option value="2784604">Vilvoorde</option>
             </Input>
        </FormGroup>
        <h2>{this.state.data.name}</h2>
        <img className="img-circle" src={this.state.imageSrc}></img>
        <div className="bg-container">
        <p><span>Weather:</span> {this.state.data.weather[0].main}</p>
        <p><span>Description:</span> {this.state.data.weather[0].description}</p>
        <p><span>Min. Temperature:</span> {Math.round(this.state.data.main.temp_min-273.15)}°C</p>
        <p><span>Max. Temperature:</span> {Math.round(this.state.data.main.temp_max-273.15)}°C</p>
        <p><span>Wind speed:</span> {Math.round(this.state.data.wind.speed*3.6)} km/hour</p>
        </div>
        </Container>
      </div>
    );
  }
}

export default WeatherApplication;
