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
                    <img src={footerLogo} alt="" />
                    <p>Art Studio is the best course for painting, dancing, and music that supports every potential you have</p>
                    <h6>Address</h6>
                    <p>Merpati No. 4, Pekanbaru, Indonesia</p>
                </div>
                <div className="footer-group items2">
                    <div className="footer-items programs">
                        <h6>Programs</h6>
                        <ul>
                            <li><a href="">Painting Course</a></li>
                            <li><a href="">Dance Course</a></li>
                            <li><a href="">Music Course</a></li>
                        </ul>
                    </div>
                    <div className="footer-items general">
                        <h6>General</h6>
                        <li><a href="">Home</a></li>
                        <li><a href="">Our Services</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </div>
                    <div class="footer-items social-media">
                        <h6>Follow Us</h6>
                        <div className="social-media-icons">
                            <a className="nav-link" href="#"><FontAwesomeIcon className="nav-icon" icon={['fab', 'instagram']} style={{ color: "#000", fontSize: "36px" }} /></a>
                            <a className="nav-link" href="#"><FontAwesomeIcon className="nav-icon" icon={['fab', 'whatsapp']} style={{ color: "#000", fontSize: "36px" }} /></a>
                            <a className="nav-link" href="#"><FontAwesomeIcon className="nav-icon" icon={['fab', 'twitter']} style={{ color: "#000", fontSize: "36px" }} /></a>
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