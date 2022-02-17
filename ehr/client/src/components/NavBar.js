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
                          href: '/dashboard',
                        },
                        {
                          type: 'link',
                          label: 'History',
                          href: '/history',
                        
                        },
                        {
                          type: 'link',
                          label: 'Imaging',
                          href: '/imaging',
                         
                        },
                        {
                          type: 'link',
                          label: 'Labs',
                          href: '/labs',
                         
                        },
                        {
                          type: 'link',
                          label: 'Care Plan',
                          href: '/care',
                         
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
                          href: '/vitals',

                        },
                        {
                          type: 'link',
                          label: 'Weight',
                          href: '/weight',
                          
                        },
                        {
                          type: 'link',
                          label: 'Pain',
                          href: '/pain',
                          
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
