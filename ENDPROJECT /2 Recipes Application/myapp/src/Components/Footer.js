import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <div className="footer-container">
            <footer className="container">
            <p>Deze website is gemaakt in het kader van de opleiding <span>Front-End Development</span> van <span>INTEC Brussel</span>.</p>
            <p>Ontworpen met <span>React en Bootstrap &copy; Yannick De Decker</span> | 2021</p>
            </footer>
        </div>
    )
}

export default footer
