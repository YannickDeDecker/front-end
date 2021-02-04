import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="about-page">
            <h1>Who am I?</h1>
            <div>
                <div className="profile-picture"></div>
                <div>
                    <h4>Yannick De Decker</h4>
                    <h4>28 years old</h4>
                    <h4>Boortmeerbeek</h4>
                    <h4>Graphic Designer and Web Developer</h4>
                    <button className="contact-btn"><Link className="nav-link" to="/contact">Contact Me</Link></button>
                </div>
            </div>
        </div>
    )
}
