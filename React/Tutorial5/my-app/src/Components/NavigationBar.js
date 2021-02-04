import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
