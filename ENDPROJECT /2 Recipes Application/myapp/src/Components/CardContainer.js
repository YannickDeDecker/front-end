import React, { Component } from 'react'
import CardElement from './CardElement'

class CardContainer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <CardElement/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardContainer
