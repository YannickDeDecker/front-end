import React from 'react'
import SearchBar from './SearchBar'
import NavbarBrand from './NavbarBrand'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const links = document.querySelectorAll('.nav-link');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
          let current = document.querySelector('.active');
          current.className = current.className.replace('active', '');
          this.className += 'active';
        });
      }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark mt-5">
                    <div className="container">
                         <NavbarBrand/>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                         </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <SearchBar/>
                    </div>
                    </div>
                </nav>
        </div>
    )
}
