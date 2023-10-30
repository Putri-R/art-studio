import Navigasi from '../../components/Navigasi/navigasi';
import Footer from '../../components/Footer/footer';
import dance_img from './asset/dance-img.png';
import Markdown from 'react-markdown';
import './danceCoursePage.css';

function DanceCourse(){

    const markdownContent = `
Do you have a passion for dance? Are you ready to explore the captivating world of movement and expression? Look no further because our dance course offers an exhilarating journey into the realms of two extraordinary dance forms - Ballet and Hip-Hop.

**Ballet: Grace and Elegance Unveiled**

Ballet, often hailed as the "poetry of motion," is a dance form that emphasizes grace, precision, and storytelling through movement. In our course, you'll discover the rich history of ballet, from its origins in the courts of Renaissance Italy to the world-renowned classical ballets like Swan Lake and The Nutcracker.

Under the guidance of experienced instructors, you'll learn the fundamentals of ballet technique, from pliés to pirouettes. As you progress, you'll have the opportunity to master more complex movements and choreograph your ballet routines. The beauty of ballet lies in its ability to instill discipline and control, which carries over into all aspects of life.

**Hip-Hop: Groove to the Rhythm of the Streets**

Hip-Hop is a dance form that breathes life into the urban streets and music. This dynamic and energetic style is known for its powerful moves, rhythmic beats, and self-expression. Our course will take you on a journey through the history of hip-hop, from its roots in African and Latin dance traditions to the modern, diverse styles of today.

You'll learn the foundational moves of hip-hop, from popping and locking to breaking and krumping. Express yourself through freestyle sessions and gain the confidence to showcase your unique style. Hip-hop dance is not only a form of artistic expression but also a means of connecting with the rich cultural diversity of the world.

**Join Us on This Dance Journey**

At our dance course, we believe that everyone has a dancer within them waiting to be discovered. Whether you're drawn to the elegance of ballet or the urban rhythms of hip-hop, our course promises an inspiring and transformative experience.

Dance is not just a physical endeavor; it's a way to connect with your inner self and share your unique story with the world. Join us today and embark on a dance journey that will enrich your life in more ways than one. Unleash your potential, express your emotions, and discover the magic of dance. It's time to take that first step onto the dance floor and let the music guide your soul.
`;

    return(
        <>
            <Navigasi/>
            <div className= "dance-course">
                <h2><span>Dance</span> Course</h2>
                <p>Discover the Art of Dance: Ballet and Hip-Hop</p>
                <img src={dance_img} alt="" />

                <div className="markdown-container">
                    <Markdown>{markdownContent}</Markdown>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default DanceCourse;