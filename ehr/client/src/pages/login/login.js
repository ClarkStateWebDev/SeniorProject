import React, { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert  from 'react-bootstrap/Alert';
import UserContext from '../../context/UserContext';

const Login = () => {
    const { error, setError } = useContext(UserContext);
    const { errorMsg, setErrorMsg } = useContext(UserContext);
    const { login, setLogin } = useContext(UserContext);
    const { setIsAuth } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    const { roles,setRoles } = useContext(UserContext);
    const { setUserID } = useContext(UserContext);
    const navigate = useNavigate();
   

    const handleSubmit = (event) => {
        event.preventDefault();
        

        const data = { email: login.email, password: login.password};
        
        Axios.post("http://localhost:3001/user/login", data).then((response) => {
            if (response.data.error) {
                setError(true);
                setErrorMsg(response.data.error);
            } else {
                /* console.log(response); */
                sessionStorage.setItem("accessToken", response.data.token);
                sessionStorage.setItem("user", JSON.stringify(response.data));
                const isAuth = sessionStorage.getItem("accessToken");
                const user = JSON.parse(sessionStorage.getItem("user"));
                setUser({...user, [user.name]: user.value });
                const userRole = user.roles;
                const userID = user.id;
                setRoles(userRole);
                setIsAuth(isAuth);
                setError(false);
                setErrorMsg("");
                setUserID(userID);
                console.log("ROLES: " + roles);
               if(response.data.roles !== 2){
                    navigate('/dashboard');
                }else{
                    navigate('/admin');
                } 
            }
        });        
    };
        return (
            <>
            <div class="container text-center">
                {error && (
                <>
                <Alert variant="danger" onClose={() => setError(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                       {errorMsg}
                    </p>
                </Alert>
                </>
                )}
                <img src="img/EHRLogo.png" alt="logo"></img>               
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center">
                        <Col sm={4} className="align-items-center">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="Email" name="email" placeholder="Enter Email" required onChange={(e) => setLogin({...login, email: e.target.value})}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">    
                        <Col sm={4} className="align-items-center">
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" required onChange={(e) => setLogin({...login, password: e.target.value})}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={2} className="align-items-center">
                            <Button className="mb-4" variant="primary" type="submit">
                                Submit
                            </Button>  
                            <Button size="sm" className="mb-3" variant="link" onClick={() => {window.location.href = '/forgotPassword'; }}>
                                Forgot Password
                            </Button> 
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Form>
            </div>
            </>
        )
};

export default Login;