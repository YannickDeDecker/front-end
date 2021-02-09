import React, { Component } from 'react'
import CardContainer from '../Components/CardContainer'
import Showcase from '../Components/Showcase'

class Home extends Component {
    render() {
        return (
            <div>
                <main>
                    <Showcase/>
                    <CardContainer/>
                </main>
            </div>
        )
    }
}

export default Home
