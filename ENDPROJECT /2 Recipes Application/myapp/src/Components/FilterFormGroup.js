import React, { Component } from 'react'

export default class FilterFormGroup extends Component {
    render() {
        return (
            <div>
                <div class="col-auto">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                     <div class="input-group p-0 m-0">
                     <div class="input-group-prepend">
                         <div class="input-group-text">Tekst</div>
                     </div>
                     <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search"></input>
                    </div>
                </div>
            </div>
        )
    }
}
