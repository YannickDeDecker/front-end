import React, { Component } from 'react'
import SearchBar from './SearchBar'
import NavbarBrand from './NavbarBrand'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
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
                                <Link className="nav-link" to="/about">About Me</Link>
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
}

export default Navbar