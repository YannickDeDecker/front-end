import React, { Component } from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import CardContainer from './CardContainer'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <main>
                    <Filter/>
                    <CardContainer/>
                </main>
            </div>
        )
    }
}

export default Home
