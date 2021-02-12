import React, { Component } from 'react';
import './About.css';
import imgOne from '../Images/1.jpg';
import imgTwo from '../Images/2.jpg';
import imgThree from '../Images/3.jpg';
import imgFour from '../Images/4.jpg';
import imgFive from '../Images/5.jpg';
import imgSix from '../Images/6.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row row-one">
                    <div className="col-6">
                        <h1>Over Mezelf</h1>
                        <h2>Ik ben een Grafisch Vormgever en Front-End Developer uit Boortmeerbeek.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aspernatur assumenda maxime? Ex pariatur officia nam quibusdam eaque dolorum sunt, laborum provident, nobis id sed neque reiciendis et laboriosam. Vel minima corporis culpa asperiores voluptates dolore saepe soluta impedit laborum.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, et.</p>
                    </div>
                    <div className="col-6 profile">
                    </div>
                </div>
                <div className="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src={imgOne} alt="Cinque Terre" width="600" height="400"></img>
                    </a>
                </div>
                <div className="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src={imgTwo} alt="Cinque Terre" width="600" height="400"></img>
                    </a>
                </div>
                <div className="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src={imgThree} alt="Cinque Terre" width="600" height="400"></img>
                    </a>
                </div>
                <div className="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src={imgFour} alt="Cinque Terre" width="600" height="400"></img>
                    </a>
                </div>
                <div className="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src={imgFive} alt="Cinque Terre" width="600" height="400"></img>
                    </a>
                </div>
                <div className="gallery">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src={imgSix} alt="Cinque Terre" width="600" height="400"></img>
                    </a>
                </div>
            </div>
        )
    }
}
