import { useNavigate  } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Missing = () => {
    const navigate = useNavigate();
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Page Not Found</p>
            <div className="flexGrow">
                <Button onClick={() => navigate(-1)}>go back</Button>
            </div>
        </article>
    )
}

export default Missing