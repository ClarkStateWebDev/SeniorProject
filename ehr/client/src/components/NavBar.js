import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

import { Navbar as HospitalRunNavbar, Toast } from '@hospitalrun/components'


class NavBar extends React.Component {

    render() {

        return (
             
                <HospitalRunNavbar
                  bg="dark"
                  variant="dark"
                  navItems={[
                    {
                      type: 'link-list-icon',
                      label: '',
                      name: 'menu',
                      size: 'lg',
                      iconClassName: 'align-bottom',
                      children: [
                        {
                          type: 'link',
                          label: 'Patient Dashboard',
                          href: '/',
                        },
                        {
                          type: 'link',
                          label: 'History',
                          href: '/history',
                        
                        },
                        {
                          type: 'link',
                          label: 'Imaging',
                         
                        },
                        {
                          type: 'link',
                          label: 'Labs',
                         
                        },
                        {
                          type: 'link',
                          label: 'Care Plan',
                         
                        },
                        {
                          type: 'link',
                          label: 'Order Entry',
                          dividerAbove: true,

                          
                        },
                        {
                          type: 'link',
                          label: 'Vitals',
                          dividerAbove: true,

                        },
                        {
                          type: 'link',
                          label: 'Weight',
                          
                        },
                        {
                          type: 'link',
                          label: 'Pain',
                          
                        },
                        {
                          type: 'link',
                          label: 'Input',
                         
                        },
                        {
                            type: 'link',
                            label: 'Output',
                           
                        },
                      ],
                    },
                    {
                      type: 'header',
                      label: 'Clark State EHR',
                      
                    },
                  ]}
                />
              
        );
    }
}

export default NavBar;
