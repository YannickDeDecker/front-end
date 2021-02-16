import React from "react";
import { Link } from "react-router-dom";
import Skills from "../Components/Skills";
import "./About.css";
import profilePic from "../Images/Profile-Pic.png";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="container">
          <div className="row">
            <div className="colAbout col-md-6">
                <h1>Over Mezelf</h1>
              <h2>
                Ik ben een Grafisch Vormgever en Front-End Developer uit
                Boortmeerbeek.
              </h2>
              <p>
                Zowel in het dagelijkse leven als op professioneel vlak streef
                ik naar perfectie. Mijn doel is elke dag bij te leren om mijn
                kennis en vaardigheden te blijven uitbreiden. Creativiteit is
                mijn ding. Mijn passie voor graphic design en webdesign hebben
                me gebracht tot waar ik nu sta. In mijn vrije tijd probeer ik
                mijn sportiviteit aan te wakkeren, kijk ik wel eens een goede
                film en sta ik graag achter het fornuis.
              </p>
              <p>
                Verdere contactgevens en mijn persoonlijke portfolio website vindt u op
                mijn{" "}
                <Link className="link" to="/contact">
                  <span>contact-pagina</span>
                </Link>
                .
              </p>
            </div>
            <div className="colAbout col-md-6">
                <img src={profilePic} alt="Profielfoto Yannick" />
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
