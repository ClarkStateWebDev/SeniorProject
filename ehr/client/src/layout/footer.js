/************************************************************************** 
Name: footer.js

Created: 19 Feb 2022

Author: Jeris Payne 

Purpose: create a sticky footer to display copyright information

Modified: 3-7-2022

**************************************************************************/
import React, { Component, useState } from 'react';

class Footer extends React.Component {
    
    render() {
        return (
            <footer id="sticky-footer" className="flex-shrink-0 py-4 text-white-50">
                <div className="container text-center">
                    <small>Copyright &copy; Clark State College 2022</small>
                </div>
            </footer>
        );
    }
}

export default Footer;

