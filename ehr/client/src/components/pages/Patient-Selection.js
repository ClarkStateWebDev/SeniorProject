import React, { Component } from 'react';
import Navbar from '@hospitalrun/components';
import SelectionTable from './Patient-Selection/PTable';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components';
import Footer from '../subcomponents/footer';
import App from '../../App';

class PatientSelection extends Component {
    

    render() {
        return (
            <>
                <h1 style={{marginTop:"70px"}}>Patient Selection Dashboard</h1>
                <Breadcrumb>
                    <BreadcrumbItem active>
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>

                <SelectionTable/>

                <br></br>
                <Footer />

              
  
            </>

        )}   
};
export default PatientSelection;