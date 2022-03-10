<<<<<<< HEAD
import { useNavigate  } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const LoggedOut = () => {
    const navigate = useNavigate();
    return (
        <article style={{ padding: "100px" }}>
            <h1>You have logged out of your account</h1>
            <p>Please close your browser.</p>
            
        </article>
    )
}

=======
import { useNavigate  } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const LoggedOut = () => {
    const navigate = useNavigate();
    return (
        <article style={{ padding: "100px" }}>
            <h1>You have logged out of your account</h1>
            <p>Please close your browser.</p>
            
        </article>
    )
}

>>>>>>> c2169ba77d2dece1f9eeec06a233b2ede44b7181
export default LoggedOut