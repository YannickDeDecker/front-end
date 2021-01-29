import React, { Component } from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import CardContainer from './CardContainer'
import Showcase from './Showcase'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <main>
                    <Showcase/>
                    <CardContainer/>
                </main>
            </div>
        )
    }
}

export default Home
