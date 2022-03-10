import React, { Component } from 'react';
import AddHospInfo from './hospInfoForm';

class Vitals extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
            <div style={{overflow: 'hidden'}}>
               <table class="table table-borderless" style={{ margin: '0 auto', display: 'table', backgroundColor: '#B0D1E0', maxWidth: '100%'}}>
                    <thead>
                    <tr>
                        <th scope="col" style={{color: '#006A99', fontWeight: 'bolder', fontSize: '20px'}}>Hospital Information</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <td>Updated: 9/9/2021</td>
                        <td>12:20pm</td>
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
                            <AddHospInfo></AddHospInfo>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>    
            </>
        )}   
        
};
export default Vitals;