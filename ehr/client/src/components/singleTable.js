// import statements
import React, { Component } from 'react';
/* import '../../css/Table.css'; */
import '../assets/styles/Table.css';

class SingTableBlock extends Component {
    render() {

        return (
            <>
            {/* table */}
                <div id="singleTable" className="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '10px'}}>
                        <table className="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Medication Name</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of medication rows */}
                            <tbody>
                            <tr>
                                <td>0.45% Sodium Chloride Solution 1000mL</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td>0.45% Sodium Chloride Solution 500mL</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td>0.9% Sodium Chloride Solution 1000mL</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td>0.9% Sodium Chloride Solution 500mL</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td>0.9% Sodium Chloride Solution 250mL</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td>0.9% Sodium Chloride Solution 100mL</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td>0.9% Sodium Chloride Solution 50mL</td>
                                <td><button type="button" className="btn btn-warning">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default SingTableBlock;