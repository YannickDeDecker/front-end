import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Components/Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul className='nav-menu'>
                        <li>
                        <Link to="/" className="navbar-logo">
                            | Yannick De Decker
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-links">
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                    <button className="btn">
                        <Link to="/contact" className="btn-text">
                            Contact Me
                        </Link>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar