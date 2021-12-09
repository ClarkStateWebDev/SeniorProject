import React, { Component } from 'react';

class Health extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
               <table class="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">Health</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Medical Number:</th>
                        <td>12345</td>
                        <th>Diet:</th>
                        <td>Regular</td>
                        <th>Braden Scale:</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Allergies:</th>
                        <td>None</td>
                        <th>Fall Rate:</th>
                        <td>None</td>
                        
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
export default Health;