import React, { Component, setState, useEffect, useState } from 'react';
import {Link} from "react-router-dom";

export default class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state = { recipes: [] };
    }

    componentDidMount(){
        fetch('./recipes.json')
            .then(data => data.json())
            .then(json => this.setState({recipes:json.recipes}))
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        {
                         this.state.recipes.map((item, i) => {
                            return (
                                <div className="grid col-md-auto mr-3 mb-3">
                                    <div className="card-container">
                                        <h2>{item.name}</h2>
                                        <img src={item.imgmain}></img>
                                        <button><Link key={i} to={`/article/${item.id}`}>Klik voor recept</Link></button>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    </div>
                    </div>
                    )
                }
            }
