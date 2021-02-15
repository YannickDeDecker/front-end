import React, { Component } from 'react'
import "./Contact.css";

export default class Contact extends Component {
    render() {
        return (
            <div>
            <div className="contact-container">
              <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1>bel me, mail me</h1>
                  <h2>
                    Ik ben een Grafisch Vormgever en Front-End Developer uit
                    Boortmeerbeek.
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
                    aspernatur assumenda maxime? Ex pariatur officia nam quibusdam
                    eaque dolorum sunt, laborum provident, nobis id sed neque
                    reiciendis et laboriosam. Vel minima corporis culpa asperiores
                    voluptates dolore saepe soluta impedit laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
                    et.
                  </p>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                      <label for="">Voornaam:</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                      <label for="">Achternaam:</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                      <label for="">Bedrijf:</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                      <label for="">E-mail:</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                      <label for="">GSM:</label>
                      <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"></input>
                      <label for="">Bericht:</label>
                      <textarea name="" id=""></textarea>
                      <button type="submit">Verzenden</button>
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        )
    }
}
