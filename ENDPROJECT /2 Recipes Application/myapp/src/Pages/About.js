import React, { Component } from "react";
import "./About.css";
import profilePic from "../Images/Profile-Pic.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about-container">
          <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Over Mezelf</h1>
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
              <img src={profilePic} alt="Profielfoto Yannick" />
            </div>
          </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <p>Deze website is gemaakt in het kader van de opleiding Front-End Development van INTEC Brussel.</p>
            <p>Ontworpen met React &copy; Yannick De Decker - 2021</p>
          </div>
        </div>
      </div>
    );
  }
}
