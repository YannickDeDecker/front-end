import React from 'react'
import {Link} from 'react-router-dom'

export default function Blog() {
    return (
        <div className="homepage">
            <h1>Welcome to homepage!</h1>
            <button><Link className="nav-link" to="/portfolio">View My Portfolio</Link></button>
        </div>
    )
}