import ErrorIcon from './asset/404-ilustration.png';
import { Link } from 'react-router-dom';
import './404Page.css';

function ErrorPage(){
    return(
        <>
        <div className="error-page">
            <div>
                <img src={ErrorIcon} alt="" />
            </div>
            <div>
                <h1>404</h1>
                <h3><span>Not</span> Found</h3>
            </div>
        </div>
        <p>The resource requested could not be found on this server!</p>
        <div className="error-button">
            {/* navigasi dengan Link */}
            <Link to="/">
                <button type="button">Back to Home Page</button>
            </Link>
        </div>
        </>
    )
}

export default ErrorPage;