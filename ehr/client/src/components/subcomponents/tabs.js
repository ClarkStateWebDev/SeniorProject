import React, { Component, useState } from 'react';
import { Tab, TabsHeader, } from '@hospitalrun/components'


class Tabs extends React.Component {
    
    render() {
        return (
            <TabsHeader>
                <Tab label="Appointments" />
                <Tab label="Diagnoses" />
                <Tab label="Disabled" />
            </TabsHeader>
            
        );
    }
}

export default Tabs;

