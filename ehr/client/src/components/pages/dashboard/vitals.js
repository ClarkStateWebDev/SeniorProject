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
                            <th scope="col">Vitals</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Blood Pressure:</th>
                            <td>120/80</td>
                            <th>Respiration:</th>
                            <td>14</td>
                            <th>Temperature:</th>
                            <td>98.5</td>
                        </tr>
                        <tr>
                            <th>Pulse:</th>
                            <td>70</td>
                            <th>Oxygen Level:</th>
                            <td>95%</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><button type="button" class="btn btn-warning">Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )}   
        
};
export default Vitals;