import React, { Component, setState, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CardContainer.css";

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }

  componentDidMount() {
    fetch("./recipes.json")
      .then((data) => data.json())
      .then((json) => this.setState({ recipes: json.recipes }));
  }

  render() {
    return (
      <div>
          <section class="gallery-block cards-gallery">
          <div className="container">
          <div className="row">
            {this.state.recipes.map((item, i) => {
              return (
                <div className="col-md-6 col-lg-4">
                  <div className="card border-0 transform-on-hover">
                    <a className="lightbox" href={item.imgmain}>
                      <img
                        src={item.imgmain}
                        alt={item.name}
                        className="card-img-top"
                      ></img>
                    </a>
                    <div className="card-body">
                      <h6>{item.name}</h6>
                    <button><Link className="text-white" key={i} to={`/article/${item.id}`}>Klik voor recept</Link></button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
          </section>
      </div>
    );
  }
}
