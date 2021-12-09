import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        alert('hi ' + this.state.email);
        event.preventDefault();
    };

    render() {
        return (
            <>
            <div class="container text-center">
                <img src="img/EHRLogo.png" alt="logo"></img>
                <form onSubmit={this.handleSubmit}>
                    <label for="Email">Email</label>
                    <input type="Email" name="email" placeholder="Enter Email" required onChange={this.handleInputChange}></input>

                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="password" required onChange={this.handleInputChange}></input>

                    <p>Need help with your password? Click here to reset it</p>
                    <button type="submit">Login</button>
                    <button>Forgot Password</button>
                </form>
            </div>
            </>
        )}   
};
export default Login;