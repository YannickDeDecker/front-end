import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default class NavbarBrand extends Component {
    element = <FontAwesomeIcon className="icon" icon={faCoffee}/>
    render() {
        return (
            <div>
                <Link className="navbar-brand" to="/">{this.element} Recipe Application.</Link>
            </div>
        )
    }
}
