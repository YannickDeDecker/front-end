import React, { Component } from "react";
import "./About.css";
import imgOne from "../Images/1.jpg";
import imgTwo from "../Images/2.jpg";
import imgThree from "../Images/3.jpg";
import imgFour from "../Images/4.jpg";
import imgFive from "../Images/5.jpg";
import imgSix from "../Images/6.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row row-one">
            <div className="col-6">
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
            <div className="col-6 profile"></div>
          </div>
        </div>
        <section class="gallery-block grid-gallery">
          <div class="container">
            <div class="row row-two">
              <div class="col-md-3 col-lg-2 item">
                <a class="lightbox" href={imgOne}>
                  <img
                    class="img-fluid image scale-on-hover"
                    src={imgOne}
                  ></img>
                </a>
              </div>
              <div class="col-md-3 col-lg-2 item">
                <a class="lightbox" href={imgTwo}>
                  <img
                    class="img-fluid image scale-on-hover"
                    src={imgTwo}
                  ></img>
                </a>
              </div>
              <div class="col-md-3 col-lg-2 item">
                <a class="lightbox" href={imgThree}>
                  <img
                    class="img-fluid image scale-on-hover"
                    src={imgThree}
                  ></img>
                </a>
              </div>
              <div class="col-md-3 col-lg-2 item">
                <a class="lightbox" href={imgFour}>
                  <img
                    class="img-fluid image scale-on-hover"
                    src={imgFour}
                  ></img>
                </a>
              </div>
              <div class="col-md-3 col-lg-2 item">
                <a class="lightbox" href={imgFive}>
                  <img
                    class="img-fluid image scale-on-hover"
                    src={imgFive}
                  ></img>
                </a>
              </div>
              <div class="col-md-3 col-lg-2 item">
                <a class="lightbox" href={imgSix}>
                  <img
                    class="img-fluid image scale-on-hover"
                    src={imgSix}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
