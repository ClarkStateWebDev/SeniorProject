// import statements
import React, { Component } from 'react';
import SearchBar from "material-ui-search-bar";
 
class Search extends Component {
    render () {
        return (
            /* searchbar */
            <SearchBar
                placeholder='Search'
                style={{float: 'left', width: '45%', padding: '10px', marginLeft: '15px'}}   
            />
        );
    };
};

// export statements
export default Search;