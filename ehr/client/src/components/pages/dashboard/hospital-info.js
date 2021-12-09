import React, { Component } from 'react';

class Vitals extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
               <table class="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">Hospital Information</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Room Number:</th>
                        <td>1</td>
                        <th>Admit Date:</th>
                        <td>9/9/2021</td>
                        <th>Code</th>
                        <td>Full Code</td>
                    </tr>
                    <tr>
                        <th>Diagnosis:</th>
                        <td>Annual Checkup</td>
                        <th>Isolation Status:</th>
                        <td>None</td>
                        <th>Activity Level:</th>
                        <td>N/A</td>
                        
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="button" class="btn btn-warning">Edit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </>
        )}   
        
};
export default Vitals;