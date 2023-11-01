import HowItWorks_img from './asset/how_it_works_logo.png'
import book from './asset/book.png'
import school from './asset/school.png'
import playbutton from './asset/play_button.png'
import { Link } from 'react-router-dom';
import './howitworks.css'

function HowItWorks(){
    return(
        <>
            <div className="howitworks">
                <h2>How is <span><img src={HowItWorks_img} alt="" /></span> Service ?</h2>

                <div className="howitworks-group">
                    <div className="howitworks-group2">
                        <img src={book} alt="" />
                        <p>Guided training starting from the basics to develop a strong foundation of potential</p>
                    </div>
                    <div className="howitworks-group2">
                        <img src={school} alt="" />
                        <p>Comfortable learning spaces with adequate facilities to support the learning process</p>
                    </div>
                    <div className="howitworks-group2">
                        <img src={playbutton} alt="" />
                        <p>Providing instructional videos that participants can access anytime and anywhere they need</p>
                    </div>
                </div>
                <Link to="/login">
                    <button className="howitworks-button" type="button">Get Started</button>
                </Link>
            </div>
        </>
    )
}

export default HowItWorks;