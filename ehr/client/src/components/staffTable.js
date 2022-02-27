// import statements
import React, { Component } from 'react';
/* import '../../css/Table.css'; */
import '../assets/styles/Table.css';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Navigate, NavigationType } from 'react-router-dom';
class TableBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
           userList: [],
           isChanged: false
        };
        this.getAllUsers = this.getAllUsers.bind(this);
    }

    deleteUser(user_id) {
        console.log("Delete function");
        Axios.delete(`http://localhost:3001/user/deleteUser/${user_id}`, 
        { 
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
              },
        }).catch(function(error) {
            console.log(error);
        });
        this.setState({isChanged:true});
    };

    editUser(user_id){
        window.location.href = '/admin/editUser?userId='+user_id;
        
    }

    getAllUsers() {
        Axios.get("http://localhost:3001/user/getAll",
        {
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
            },
        })
        /* .then(results => {
            const data = JSON.parse(results)
            console.log("NEW RESULTS: " + data);
            return results;
        }) */
        .then(results => {
          console.log("getAllUsers: " + JSON.stringify(results))
          let users = results.data.map((user) => {
            return (
                <tr key={user.user_id}>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Button size="sm" variant="warning" className="editStaff" onClick={ () => { this.editUser(user.user_id) } }>
                                 Edit
                        </Button> 
                    </td>
                    
                    <td>
                        <Button size="sm" variant="danger" data-user_id={user.user_id} className="deleteStaff" onClick={ () => { if (window.confirm('Are you sure you wish to delete this user?')) this.deleteUser(user.user_id) } }>
                            Delete
                        </Button> 
                    </td>
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
        <div id="staffTable" className="table-wrapper-scroll-y my-custom-scrollbar" style={{float: 'left', width: '49%', padding: '10px', marginTop: '20px', marginBottom: '50px'}}>
                    <h4 style={{width:'100%'}}>Medical Staff</h4>
                    <Table striped bordered>
                    {/* table header */}
                    <thead>
                        <tr className="text-center" style={{background: '#0065A0', color: 'white'}}>
                            <th scope="col">Name</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col" colspan="2" >Action</th>
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
                </Table>
        </div>
            </>
        )}   
};

// export statements
export default TableBlock;