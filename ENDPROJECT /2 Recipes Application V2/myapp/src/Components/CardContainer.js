import React,{useContext} from 'react'
import {DataContext} from '../context/DataContext'
import {Link} from "react-router-dom";

function CardContainer() {
    const data = useContext(DataContext)
    return (
        <div>
            <div className="container">
                 <div className="row">
                    {
                    this.state.data.map((item, i) => {
                        return (
                            <div className="grid col-md-auto mr-3 mb-3">
                                <div className="card-container">
                                    <h2>{item.name}</h2>
                                    <img src={item.imgmain}></img>
                                    <button><Link key={i} to={`/article/${item.id}`}>Klik voor recept</Link></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardContainer