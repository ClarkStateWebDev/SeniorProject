// import statements
import React, { Component } from 'react';
import SearchBar from "material-ui-search-bar";
 
class SearchRight extends Component {
    render () {
        return (
            /* searchbar */
            <SearchBar
                placeholder='Search'
                style={{float: 'right', width: '47%', padding: '10px', marginRight: '32px'}}   
            />
        );
    };
};

// export statements
export default SearchRight;