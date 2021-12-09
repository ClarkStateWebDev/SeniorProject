// import statements
import React, { Component } from 'react';
import SingleSearch from '../../subcomponents/search';
import Footer from '../../subcomponents/footer';
import '../../../css/footer.css';
import '../../../css/Tabs.css';
import { Breadcrumb, BreadcrumbItem } from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';
import MultiTable from '../../subcomponents/multiTable';

class Override extends Component {

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
                    {/* Override Data */}    
                        Override Data
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Tabs */}
                <AppBar position="static">
                        <Tabs id='tabs' style={{backgroundColor: '#89a9d0'}}>
                            <Tab id='adminDash' label="Admin Dashboard" href='/admin'/>
                            <Tab id='medData' label="Medication Data" href='/med-data'/>
                            <Tab id='override' class='activ' label="Override Data" href='/override-data'/>
                        </Tabs>
                </AppBar>

                {/* Add Mute Override Button */}
                <button type="button" class="btn btn-warning" style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36'}}>Mute Override</button>
                <br></br><br></br><br></br><br></br>

                {/* Searchbar */}
                <SingleSearch/>
                
                {/* Override Table */}
                <MultiTable/>
                
                {/* Footer */}
                <Footer/>
                </div>    
                
            </>
        )}   
};

/* Export Statement */
export default Override;