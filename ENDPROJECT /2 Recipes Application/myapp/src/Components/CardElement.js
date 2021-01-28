import React, { Component } from 'react'

class CardElement extends Component {
    render() {
        return (
            <div>
                <div className="grid col">
                    <h2>Recept Naam</h2>
                    <img src="../Images/puttanesca.jpg" alt=""></img>
                    <button>Klik voor recept</button>
                </div>
            </div>
        )
    }
}

export default CardElement
