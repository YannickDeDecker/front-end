import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class NavbarBrand extends Component {
    element = <FontAwesomeIcon className="icon" icon={faCoffee}/>
    render() {
        return (
            <div>
                <a className="navbar-brand" href="index.html">{this.element} Recipe Application.</a>
            </div>
        )
    }
}
