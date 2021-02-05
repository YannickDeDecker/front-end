import React, { Component, setState, useEffect, useState } from 'react';
import fetch from 'node-fetch'
import {Link, Route} from "react-router-dom";
import Article from './Article'

export default class Blog extends Component {
    constructor(props){
        super(props);
        this.state = { posts: [] };
      }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(data => data.json())
            .then(json => this.setState({posts:json}))
    }

    render() {
        return (
        <div className="blog-page">
            <h1>Blog page</h1>
            {
                this.state.posts.map((item, i) => {
                    return (
                        <Link key={i} to={`/article/${item.id}`} style={{ 
                            'display': 'block',
                            'backgroundColor': '#ff7f50',
                            'margin' : '0 auto',
                            'maxWidth' : '650px',
                            'marginBottom' : '10px',
                            'padding' : '10px',
                            'color' : 'white',
                            'fontWeight' : 'bold',
                            'textDecoration' : 'none'
                        }}>{`${item.id}: ${item.title}`}</Link>
                    )
                })
            }
        </div>
        )
    }
}
