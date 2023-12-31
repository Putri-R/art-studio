import './heroPage.css';
import hero_img from './asset/hero_image.png'
import { Link } from 'react-router-dom';

function Heropage(){
    return(
        <>
            <div className="hero">
                <div className="hero_group">
                    <h1>Unleashing and nurturing the <span>great potential</span> you possess</h1>
                    <p>Let's learn together with enjoyable instructors in a comfortable environment to discover and develop your artistic potential</p>
                    <Link to="/login">
                        <button className="hero-button" type="button">Get Started</button>
                    </Link>
                </div>
                <div className="hero_group">
                    <img src={hero_img} alt="" />
                </div>
            </div>
        </>
    )
}

export default Heropage;