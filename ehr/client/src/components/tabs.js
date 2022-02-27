import React, { Component, useState } from 'react';
import { Tab, TabsHeader, } from '@hospitalrun/components'


class Tabs extends React.Component {
    
    render() {
        return (
            <TabsHeader>
                <Tab label="Dashboard" />
                <Tab label="History" href="/history"/>
                <Tab label="Imaging" />
                <Tab label="Labs" />
                <Tab label="Care Plan" />
            </TabsHeader>
            
        );
    }
}

export default Tabs;

