import React, { Component } from 'react'
import FilterFormGroup from './FilterFormGroup'

class Filter extends Component {
    render() {
        return (
            <div>
                <div id="filter-container" className="container">
                <h1 id="h2-homepage">Filter in Recepten</h1>
                <div id="filter" className="d-md-flex justify-content-between">
                    <FilterFormGroup/>
                    <FilterFormGroup/>
                    <FilterFormGroup/>
                </div>
                </div>
            </div>
        )
    }
}

export default Filter
