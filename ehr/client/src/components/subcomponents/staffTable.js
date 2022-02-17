// import statements
import React, { Component } from 'react';
import '../../css/Table.css';

class TableBlock extends Component {
    render() {

        return (
            <>
            {/* beginning of staff table */}
                <div id="staffTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{float: 'left', width: '49%', padding: '10px', marginBottom: '50px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th style={{maxwidth:'50%'}}>Medical Staff</th>
                                </tr>
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* beginning of nurse rows */}
                            <tbody>
                            <tr>
                                <td><img src="img/nurse1.png" id='pic'/>Lacey Owens</td>
                                <td>Michael Scott</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td><img src="img/nurse5.png" id='pic'/>Eddie Hammond</td>
                                <td>Jim Halpert</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td><img src="img/nurse3.png" id='pic'/>Lisa Rodgers</td>
                                <td>Pam Beesly</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td><img src="img/nurse4.png" id='pic'/>Cory Parker</td>
                                <td>Dwight Schrute</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td><img src="img/nurse2.png" id='pic'/>Amber Mendez</td>
                                <td>Kelly Kapoor</td>
                                <td><button type="button" class="btn btn-warning">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};

// export statements
export default TableBlock;