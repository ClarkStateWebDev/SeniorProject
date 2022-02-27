/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert  from 'react-bootstrap/Alert';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

const title = {
  pageTitle: 'Password Reset Screen',
};

export default class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      updated: false,
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount() {
    document.title = "Clark State EHR Reset Password";
    const {
      match: {
        params: { token },
      },
    } = this.props;
    try {
      const response = await Axios.get('http://localhost:3001/reset', {
        params: {
          resetPasswordToken: token,
        },
      });
      console.log(response);
      if (response.data.message === 'password reset link a-ok') {
        this.setState({
          email: response.data.email,
          updated: false,
          isLoading: false,
          error: false,
        });
      }
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        updated: false,
        isLoading: false,
        error: true,
      });
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const {
      match: {
        params: { token },
      },
    } = this.props;
    try {
      const response = await Axios.put(
        'http://localhost:3001/updatePasswordViaEmail',
        {
          email,
          password,
          resetPasswordToken: token,
        },
      );
      console.log(response.data);
      if (response.data.message === 'password updated') {
        this.setState({
          updated: true,
          error: false,
        });
      } else {
        this.setState({
          updated: false,
          error: true,
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const {
 password, error, isLoading, updated 
} = this.state;

    if (error) {
      return (
        <div class="container text-center">
          <h1>{title.pageTitle}</h1>  
          <div className="justify-content-center" style={loading}>
            <h4>Problem resetting password. Please send another reset link.</h4>
            <Button size="sm" className="mb-3" variant="link" onClick={() => {window.location.href = '/forgotPassword'; }}>
              Forgot Password
            </Button> 
          </div>
          
        </div>
      );
    }
    if (isLoading) {
      return (
        <div >
          {title.pageTitle}
          <div style={loading}>Loading User Data...</div>
        </div>
      );
    }
    //let path = window.location.pathname.split("/")[1]
    
    return (
      <div class="container text-center">
        <img src="../img/EHRLogo.png" alt="logo"></img><br></br>
        {!updated ?
         ( <><h2>{title.pageTitle}</h2><Form onSubmit={this.updatePassword}>
            <Row className="justify-content-center">
              <Col sm={4} className="align-items-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" id="password" name="password" placeholder="New Password" required onChange={this.handleChange('password')} value={password} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={2} className="align-items-center">
                <Button className="mb-4" variant="primary" type="submit">
                  Update Password
                </Button>
              </Col>
            </Row>
          </Form></>): (
          <div class="container text-center">
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
            <Button size="sm" className="mb-3" variant="primary" onClick={() => {window.location.href = '/login'; }}>
              Login 
            </Button> 
          </div>
        )
        }
        
{/* 
        {updated && (
          <div class="container text-center">
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
            <Button size="sm" className="mb-3" variant="primary" onClick={() => {window.location.href = '/login'; }}>
              Login 
            </Button> 
          </div>
        )} */}
      </div>
    );
  }
}

ResetPassword.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }),
  }),
};
