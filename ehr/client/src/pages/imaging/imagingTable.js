// import statements
import React, { Component } from 'react';
/* import '../../../css/Table.css'; */
import '../../assets/styles/footer.css';
import '../../assets/styles/Tabs.css';
import ImagingForm from './imagingForm';
/* import imagingTab from './imagingTab'; */
import ImagingFormTable from './imagingFormTable';

class ImagingTable extends Component {
    render() {

        return (
            <>
            <div>
                <ImagingForm></ImagingForm>
            </div>
            {/* table */}
                <div id="singleTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{width: '100%', padding: '10px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Date</th>
                                    <th scope='col'>Imaging Test</th>
                                    <th scope='col'>Results</th>
                                    <th scope='col'>Notes</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* start of medication rows */}
                            <tbody>
                            <tr>
                                <td>6/9/2021</td>
                                <td>Ultra sound of abdomen</td>
                                <td>Obstruction to bowel</td>
                                <td>LRQ</td>
                                <td><ImagingFormTable></ImagingFormTable></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><ImagingFormTable></ImagingFormTable></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><ImagingFormTable></ImagingFormTable></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><ImagingFormTable></ImagingFormTable></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><ImagingFormTable></ImagingFormTable></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><ImagingFormTable></ImagingFormTable></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><ImagingFormTable></ImagingFormTable></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>  
                            </tr>
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};
// export statements
export default ImagingTable;