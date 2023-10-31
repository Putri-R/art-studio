import navbarLogo from './asset/art_studio_navbar_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './navigasi.css';

library.add(fab);

function Navigasi(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container d-flex">
                    <a className="navbar-brand" href="/"><img src={navbarLogo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about-us">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">Contact Us</a>
                            </li>
                        </ul>

                        <div className="sosmed d-flex flex-row justify-content-center">
                            <a className="nav-link" href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon className="nav-icon" icon={['fab', 'instagram']} style={{ color: "#e49700", fontSize: "25px" }} /></a>
                            <a className="nav-link" href="https://www.whatsapp.com/"><FontAwesomeIcon className="nav-icon" icon={['fab', 'whatsapp']} style={{ color: "#e49700", fontSize: "25px" }} /></a>
                            <a className="nav-link" href="https://twitter.com/login/"><FontAwesomeIcon className="nav-icon" icon={['fab', 'twitter']} style={{ color: "#e49700", fontSize: "25px" }} /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigasi;