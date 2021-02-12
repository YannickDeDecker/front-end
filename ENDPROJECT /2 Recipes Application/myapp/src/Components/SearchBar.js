import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form className="d-flex">
                    <input id="search-bar" type="search" placeholder="Zoek in recepten" aria-label="Search"></input>
                </form>
            </div>
        )
    }
}
