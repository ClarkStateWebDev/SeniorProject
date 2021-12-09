import React, { Component } from 'react';

class PatientOverview extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
                <div>
                    <img src="img/MichaelScott.png" alt="..." class="card-img-left"/>
                </div>
                <div>
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Name</th> 
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">MR#</th>
                            <th scope="col">Provider</th>
                        </tr>
                        </thead>
                        <tbody>
                            
                        <tr>
                            <td>Michael Scott</td>
                            <td>56</td>
                            <td>Male</td>
                            <td>1245783</td>
                            <td>Health Insurance</td>
                        </tr>
                        <tr>
                            <td>Room #</td>
                            <td>DOB</td>
                            <td>Admit Date</td>
                            <td>Code</td>
                            <td>Allergies</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>3/15/1965</td>
                            <td>9/9/2021</td>
                            <td>Full Code</td>
                            <td>None</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )}   
        
};
export default PatientOverview;