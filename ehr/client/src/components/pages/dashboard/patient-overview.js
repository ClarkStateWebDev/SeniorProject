import React, { Component } from 'react';

class PatientOverview extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <>
            <div style={{maxWidth: '100%', margin: '15px'}}> 
                <div style={{float: 'inherit', maxWidth: '75'}}>
                    
                    <table class="table table-borderless" style={{margin: '0 auto', display: 'table', backgroundColor: '#006A99'}}>
                    <img style={{maxWidth: '100%', float: 'left'}}src="img/MichaelScott.png" class="card-img-left"></img>
                        <thead style={{color: 'white', float: 'left'}}>
                        <tr>
                            <th scope="col" >Name</th> 
                            <th scope="col" style={{paddingLeft: '63px'}}>Age</th>
                            <th scope="col" style={{paddingLeft: '53px'}}>Gender</th>
                            <th scope="col" style={{paddingLeft: '43px'}}>MR#</th>
                            <th scope="col" style={{paddingLeft: '43px'}}>Provider</th>
                        </tr>
                        </thead>
                        <br></br><br></br>
                        <tbody style={{color: 'white', float: 'left'}}>
                            
                        <tr>
                            <td >Michael Scott</td>
                            <td>56</td>
                            <td>Male</td>
                            <td>1245783</td>
                            <td>Health Insurance</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: 'bold'}}>Room #</td>
                            <td style={{fontWeight: 'bold'}}>DOB</td>
                            <td style={{fontWeight: 'bold'}}>Admit Date</td>
                            <td style={{fontWeight: 'bold'}}>Code</td>
                            <td style={{fontWeight: 'bold'}}>Allergies</td>
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
            </div>    
                
            </>
        )}   
        
};
export default PatientOverview;