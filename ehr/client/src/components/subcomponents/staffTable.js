// import statements
import React, { Component, useEffect } from 'react';
import '../../css/Table.css';
import Axios from 'axios';

class TableBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
           userList: [],
           isChanged: false
        };
        this.getAllUsers = this.getAllUsers.bind(this);
    }

    deleteUser(id) {
        alert(id);
        Axios.delete("http://localhost:3001/user/delete", { 
            data:{ 
            user_id: id
            }
        })
        this.setState({isChanged:true})
    };

    getAllUsers() {
        Axios.get("http://localhost:3001/user/getAll")
        .then(results => {
            console.log(results.data)
            return results;
        })
        .then(results => {
          let users = results.data.map((user) => {
            return (
                <tr key={user.user_id}>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td><button type="button" class="btn btn-warning editStaff">Edit</button></td>
                    <td><button type="button" data-userID={user.user_id} class="btn btn-danger deleteStaff" onClick={() => this.deleteUser(user.user_id)}>Delete</button></td>
                </tr>
            );
          })
          this.setState({userList: users});
          this.setState({isChanged:false});   
        })
        .catch(function(error) {
          console.log(error);

        });
    }
    componentDidUpdate() {
        // Typical usage (don't forget to compare props):
        /* console.log("props" + JSON. stringify(this.state.isChanged)) */
        if (this.state.isChanged == true) {
            this.getAllUsers()
        }
        
      }
    componentDidMount() {
        this.getAllUsers()
    }
    render() {
        return ( 
        <>       
        {/* beginning of staff table */}
        <div id="staffTable" class="table-wrapper-scroll-y my-custom-scrollbar" style={{float: 'left', width: '49%', padding: '10px', marginBottom: '50px'}}>
                        <table class="table table-borderless table-striped" >
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th style={{maxwidth:'50%'}}>Medical Staff</th>
                                </tr>
                                <tr style={{background: '#0065A0', color: 'white'}}>
                                    <th scope="col">Name</th>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            {/* beginning of nurse rows */}
                            <tbody>
                            {
                               this.state.userList
                            }
                            {this.state.userList.length > 0 ? ("") :
                                (
                                <tr>
                                    <td colSpan="5">
                                    No Staff
                                    </td>
                                </tr>
                                )
                            }
                            </tbody>
                        </table>
                </div>
            </>
        )}   
};

// export statements
export default TableBlock;