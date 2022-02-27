// import statements
import React, { Component } from 'react';
import SearchBar from "material-ui-search-bar";
 
class SingleSearch extends Component {
    render () {
        return (
            /* searchbar */
            <SearchBar
                placeholder='Search'
                style={{width: '98%', padding: '10px', margin: '10px'}}   
            />
        );
    };
};

// export statements
export default SingleSearch;