import footerLogo from './asset/footer_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

library.add(fab);

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-group items1">
                    <img src={footerLogo} alt="art-studio-logo" />
                    <p>Art Studio is the best course for painting, dancing, and music that supports every potential you have</p>
                    <h6>Address</h6>
                    <p>Merpati No. 4, Pekanbaru, Indonesia</p>
                </div>
                <div className="footer-group items2">
                    <div className="footer-items programs">
                        <h6>Programs</h6>
                        <ul>
                            <li><a href="/painting-course">Painting Course</a></li>
                            <li><a href="/dance-course">Dance Course</a></li>
                            <li><a href="/music-course">Music Course</a></li>
                        </ul>
                    </div>
                    <div className="footer-items general">
                        <h6>General</h6>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Our Services</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </div>
                    <div class="footer-items social-media">
                        <h6>Follow Us</h6>
                        <div className="social-media-icons">
                            <a className="nav-link" href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon className="nav-icon" icon={['fab', 'instagram']} style={{ color: "#000", fontSize: "36px" }} /></a>
                            <a className="nav-link" href="https://www.whatsapp.com/"><FontAwesomeIcon className="nav-icon" icon={['fab', 'whatsapp']} style={{ color: "#000", fontSize: "36px" }} /></a>
                            <a className="nav-link" href="https://twitter.com/login/"><FontAwesomeIcon className="nav-icon" icon={['fab', 'twitter']} style={{ color: "#000", fontSize: "36px" }} /></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="copyright">
                <p>Copyright Art Studio 2023, All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer;