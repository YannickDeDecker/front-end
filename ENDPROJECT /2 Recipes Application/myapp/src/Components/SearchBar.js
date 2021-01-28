import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form className="d-flex">
                    <input id="search-bar" className="form-control" type="search" placeholder="Search Recipes" aria-label="Search"></input>
                </form>
            </div>
        )
    }
}
