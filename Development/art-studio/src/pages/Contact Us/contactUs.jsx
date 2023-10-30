import Footer from '../../components/Footer/footer';
import Navigasi from '../../components/Navigasi/navigasi';
import contact_logo from './asset/contact-logo.png';
import './contactUs.css';

function ContactUs(){
    return(
        <>
            <Navigasi/>
            <div className="contact-title">
                <h2>Our <span>Contact</span></h2>
            </div>

            <div className="contact-us">
                <div>
                    <img src={contact_logo} alt="" />
                </div>
                <div className="contact-group">
                    <div>
                        <h3>Contact</h3>
                        <p>Phone Number : (888) 123-3210</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>Merpati No. 4, Pekanbaru, Indonesia</p>
                    </div>
                    <div>
                        <h3>Social Media</h3>
                        <p>WhatsApp : (888) 123-3210</p>
                        <p>Instagram : artstudio.official</p>
                        <p>Twitter : artstudio.official</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ContactUs;