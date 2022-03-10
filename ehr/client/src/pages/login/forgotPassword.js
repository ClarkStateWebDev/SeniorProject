<<<<<<< HEAD
import React, { Component } from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert  from 'react-bootstrap/Alert';
const title = {
  pageTitle: 'Forgot Password Screen',
};

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await Axios.post(
          'http://localhost:3001/forgotPassword',
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  showError = (bool) => {
    this.setState(
      {showError: bool}
    )
  }

  componentDidMount() {
    document.title = "Clark State EHR Forgot Password";
  }


  render() {
    const { email, messageFromServer, showNullError, showError } = this.state;
    return (
      <div class="container text-center"> 
        <img src="img/EHRLogo.png" alt="logo"></img>
        <Form onSubmit={this.sendEmail}>
          <Row className="justify-content-center">
            <Col sm={4} className="align-items-center">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="Email" name="email" placeholder="Enter Email" required onChange={this.handleChange('email')}/>
              <Form.Text className="text-muted">
                We'll send a recovery email to this address.
              </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col sm={2} className="align-items-center">
                  <Button className="mb-4"  variant="primary" type="submit">
                      Send Email
                  </Button>
                  <Button size="sm" className="mb-3" variant="link" onClick={() => {window.location.href = '/login'; }}>
                    Log In
                  </Button>   
              </Col>
          </Row>       
        </Form>
        
        
        
       {/*  <form className="form profile-form" onSubmit={this.sendEmail}>
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="Email" name="email" placeholder="Enter Email" required onChange={this.handleChange('email')}></input>
            </div>    
            <div class="form-group">
                <button type="submit">Send Email</button>
            </div> 
        </form> */}

        {showNullError && (
          <>{/* <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                The email address cannot be null.
              </p>
            </Alert> */}
          </>
        )}
        {showError && (
        <>
          <Alert variant="danger" onClose={() => this.showError(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                That email address isn&apos;t recognized. Please try again or
                register for a new account.
            </p>
          </Alert>
        </>
        )}
        {messageFromServer === 'recovery email sent' && (
        <>
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>
              Password Reset Email Successfully Sent!
            </p>
          </Alert>            
        </>
        )}
      </div>
    );
  }
}
=======
import React, { Component } from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert  from 'react-bootstrap/Alert';
const title = {
  pageTitle: 'Forgot Password Screen',
};

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await Axios.post(
          'http://localhost:3001/forgotPassword',
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  showError = (bool) => {
    this.setState(
      {showError: bool}
    )
  }

  componentDidMount() {
    document.title = "Clark State EHR Forgot Password";
  }


  render() {
    const { email, messageFromServer, showNullError, showError } = this.state;
    return (
      <div class="container text-center"> 
        <img src="img/EHRLogo.png" alt="logo"></img>
        <Form onSubmit={this.sendEmail}>
          <Row className="justify-content-center">
            <Col sm={4} className="align-items-center">
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="Email" name="email" placeholder="Enter Email" required onChange={this.handleChange('email')}/>
              <Form.Text className="text-muted">
                We'll send a recovery email to this address.
              </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col sm={2} className="align-items-center">
                  <Button className="mb-4"  variant="primary" type="submit">
                      Send Email
                  </Button>
                  <Button size="sm" className="mb-3" variant="link" onClick={() => {window.location.href = '/login'; }}>
                    Log In
                  </Button>   
              </Col>
          </Row>       
        </Form>
        
        
        
       {/*  <form className="form profile-form" onSubmit={this.sendEmail}>
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="Email" name="email" placeholder="Enter Email" required onChange={this.handleChange('email')}></input>
            </div>    
            <div class="form-group">
                <button type="submit">Send Email</button>
            </div> 
        </form> */}

        {showNullError && (
          <>{/* <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                The email address cannot be null.
              </p>
            </Alert> */}
          </>
        )}
        {showError && (
        <>
          <Alert variant="danger" onClose={() => this.showError(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                That email address isn&apos;t recognized. Please try again or
                register for a new account.
            </p>
          </Alert>
        </>
        )}
        {messageFromServer === 'recovery email sent' && (
        <>
          <Alert variant="success">
            <Alert.Heading>Success!</Alert.Heading>
            <p>
              Password Reset Email Successfully Sent!
            </p>
          </Alert>            
        </>
        )}
      </div>
    );
  }
}
>>>>>>> c2169ba77d2dece1f9eeec06a233b2ede44b7181
export default ForgotPassword;