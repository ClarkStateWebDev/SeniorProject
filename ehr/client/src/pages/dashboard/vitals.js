import React, { Component } from 'react';
import AddVitals from './vitalForm';

class Vitals extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
            <div style={{overflow: 'hidden'}}>
               <table class="table table-borderless" style={{ margin: '0 auto', display: 'table', backgroundColor: '#DBE1E4', maxWidth: '100%'}}>
                    <thead>
                        <tr>
                            <th scope="col" style={{color: '#006A99', fontWeight: 'bolder', fontSize: '20px'}}>Vitals</th>
                            <th ></th>
                            <th></th>
                            <th></th>
                            <td>Updated: 9/9/2021</td>
                            <td>12:20pm</td>
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
                            <td><AddVitals></AddVitals></td>
                        </tr>
                    </tbody>
                </table>
            </div>    
            </>
        )}   
        
};
export default Vitals;