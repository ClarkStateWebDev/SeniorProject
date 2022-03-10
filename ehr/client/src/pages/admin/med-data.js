// import statements
import React, { Component } from 'react';
import SingTableBlock from '../../components/singleTable';
import SingleSearch from '../../components/search';
import Footer from '../../layout/footer';
/* import '../../../css/footer.css';
import '../../../css/Tabs.css'; */
import '../../assets/styles/footer.css';
import '../../assets/styles/Tabs.css';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';

class Med extends Component {

    render() {
        return (  
            <>
            <div class='main'>
                {/* Breadcrumbs */}
                <Breadcrumb>
                    <BreadcrumbItem href='/'>
                    {/* Home */}
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                    {/* Medication Data */}    
                        Medication Data
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Tabs */}
                <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                            <Tab id='adminDash' label="Admin Dashboard" href='/admin'/>
                            <Tab id='medData' class='activ' label="Medication Data" href='/med-data'/>
                            <Tab id='override' label="Override Data" href='/override-data'/>
                        </Tabs>
                </AppBar>

                {/* Add Medication Button */}
                <button type="button" class="btn btn-warning" style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36'}}>Add Medication</button>
                <br></br><br></br><br></br><br></br>

                {/* Searchbar */}
                <SingleSearch/>
                
                {/* Medication Table */}
                <SingTableBlock/>
                
                {/* Footer */}
                <Footer/>
                </div>    
                
            </>
        )}   
};

/* Export Statement */
export default Med;