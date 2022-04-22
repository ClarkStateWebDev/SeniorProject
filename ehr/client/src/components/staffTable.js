// import statements
import React, { Component, useState, useEffect } from 'react';
/* import '../../css/Table.css'; */
import '../assets/styles/Table.css';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Navigate, NavigationType } from 'react-router-dom';
const $ = require('jquery')
$.DataTable = require('datatables.net')


const TableBlock = () => {
    const [userList, setUserList] = useState([]);
    const [userData, setUserData] = useState([]);
    const [searchInput, setSearchInput] = useState("");    
    const [isChange, setIsChanged] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {    
            getAllUsers();        
        },1000);
      }, []);
    
    useEffect(() => {
        setTimeout(() => {
            $('#staffTable').DataTable();      
        },1000);
    },[userData]);

    useEffect(() => {
        $('#staffTable').DataTable().destroy();
        getAllUsers();
        setIsChanged(false);
    }, [isChange]);
      
    const deleteUser = (user_id) => {
        console.log("Delete function");
        Axios.delete(`http://localhost:3001/user/deleteUser/${user_id}`, 
        { 
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
              },
        }).catch(function(error) {
            console.log(error);
        });
        setIsChanged(true);
    };

    const editUser = (user_id) => {
        window.location.href = '/admin/editUser?userId='+user_id;
        
    }

    const getAllUsers = () => {
        Axios.get("http://localhost:3001/user/getAll",
        {
            headers: {
                'x-access-token': sessionStorage.getItem("accessToken"),
            },
        })
        .then(results => setUserData(results.data)/* {
            let data = results.data 
            let userArray = [];
            userArray.push(Object.values(data))
            
            console.log(userArray)

            let users = data.map((user) => {
                return (
                    <tr key={user.user_id}>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Button size="sm" variant="warning" className="editStaff" onClick={ () => { editUser(user.user_id) } }>
                                    Edit
                            </Button> 
                        </td>
                        
                        <td>
                            <Button size="sm" variant="danger" data-user_id={user.user_id} className="deleteStaff" onClick={ () => { if (window.confirm('Are you sure you wish to delete this user?')) deleteUser(user.user_id) } }>
                                Delete
                            </Button> 
                        </td>
                    </tr>
                );
            })
            setUserList(users);
        } */)

        .catch(function(error) {
          console.log(error);
        });
    }

    const handleSearch = (e) => {
    e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        console.log(userData.length)
       
    };
    const columns = userData[0] && Object.keys(userData[0]);
    console.log(userData);
    console.log("columns: " + columns);
        return ( 
        <>  
        {/* <input
            type="search"
            placeholder="Search here"
            onChange={handleSearch}
            value={searchInput} /> */}
        <div  style={{float: 'left', width: '49%', padding: '10px', marginTop: '20px', marginBottom: '50px'}}>
            <h4 style={{width:'100%'}}>Medical Staff</h4>
            {/* <Table striped bordered id="staffTable">
                <thead>
                    <tr className="text-center" style={{background: '#0065A0', color: 'white'}}>
                        <th scope="col">Name</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col" colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {   
                    userList                   
                }
                {userList.length > 0 ? ("") :
                    (
                    <tr>
                        <td colSpan="5">
                        No Staff
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </Table> */}
           <Table striped id="staffTable">
           <thead>
                <tr className="text-center" style={{background: '#0065A0', color: 'white'}}>
                    <th>Name</th>
                    <th>Patient Name</th>
                    <th>Action</th><th></th>
                </tr>
            </thead>
            {/* <tbody>
                {userData.map((user) => (
                    <tr key={user.user_id}>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Button size="sm" variant="warning" className="editStaff" onClick={ () => { editUser(user.user_id) } }>
                                Edit
                        </Button> 
                    </td>
                    
                    <td>
                        <Button size="sm" variant="danger" data-user_id={user.user_id} className="deleteStaff" onClick={ () => { if (window.confirm('Are you sure you wish to delete this user?')) deleteUser(user.user_id) } }>
                            Delete
                        </Button> 
                    </td>
                    </tr>
                ))}
            </tbody> */}
            
            <tbody>
                {userData.map((user) => (
                    <tr key={user.user_id}>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Button size="sm" variant="warning" className="editStaff" onClick={ () => { editUser(user.user_id) } }>
                                Edit
                        </Button>
                    </td>
                    <td>
                        <Button size="sm" variant="danger" data-user_id={user.user_id} className="deleteStaff" onClick={ () => { if (window.confirm('Are you sure you wish to delete this user?')) deleteUser(user.user_id) } }>
                            Delete
                        </Button> 
                    </td>
                    </tr>
                ))}
            </tbody> 
            </Table>
            </div>
            </>
        )}   


// export statements
export default TableBlock;