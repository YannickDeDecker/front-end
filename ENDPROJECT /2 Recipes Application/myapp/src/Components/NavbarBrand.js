import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './NavbarBrand.css'
import Logo from '../Images/logo.png'

export default class NavbarBrand extends Component {
    render() {
        return (
            <div>
                <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo" /></Link>
            </div>
        )
    }
}
