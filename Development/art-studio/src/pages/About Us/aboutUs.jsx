import Navigasi from '../components/Navigasi/navigasi';
import Footer from '../components/Footer/footer';
import Aboutus_logo from './asset/About_us_logo.png'
import Markdown from 'react-markdown';
import './aboutUs.css';

function AboutUs(){

    const markdownContent = `
**Welcome to Art Studio,** 
    
where creativity knows no bounds and artistic expression flourishes! We are not just a school, we are a sanctuary for all aspiring artists, where your imagination takes center stage. Our passion for the arts drives us, and we are here to ignite that same passion within you. 
    
At Art Studio, we believe that art is the universal language that connects hearts and transcends boundaries. Our mission is to inspire and nurture the artist in everyone. Whether you are a budding musician, a graceful dancer, or a budding painter, we have something exceptional to offer you. 
    
**Discover the Rhythms of Music:** Unleash the melodies within you with our music courses. Our expert instructors will guide you through the world of musical notes and rhythms. 
    
**Dance Your Heart Out:** Feel the rhythm, let your body speak, and dance your way into the spotlight with our dance courses. Our passionate dance instructors will help you find your unique groove. 
    
**Paint Your Imagination:** For those who believe that a canvas is a portal to the soul, our painting courses provide a canvas for your dreams. Our talented artists and instructors will guide you through the world of colors and techniques, allowing your creativity to flow freely. 
    
What sets Art Studio apart is our commitment to fostering a supportive and inclusive environment. We understand that art is a journey of self-discovery, and we are here to nurture your talent while encouraging your personal growth. At Art Studio, you are not just a student, you are a member of our vibrant artistic community. 
    
Lets embark on this artistic adventure together at **Art Studio**, where your passion finds its canvas, rhythm, and stage. Come, be a part of our creative family and lets paint, dance, and make music together!
`;

    return(
        <>
            <Navigasi/>
            <div className= "about-us">
                <h2>About <span>Us</span></h2>
                <img src={Aboutus_logo} alt="" />

                <div className="markdown-container">
                    <Markdown>{markdownContent}</Markdown>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AboutUs;