
import music_img from './asset/music-img.png';
import Markdown from 'react-markdown';
import './musicCoursePage.css';

function MusicCourse(){

    const markdownContent = `
Music courses are **a fantastic way for individuals to explore their creative talents and develop their musical skills.** Among the plethora of instruments available for learning, the drums and guitar stand out as two of the most popular choices. These instruments offer unique opportunities for self-expression and can be a gateway to a lifelong passion for music.

Drumming is a rhythm-driven art that appeals to those who are drawn to the beat. Drumming courses provide students with a solid foundation in **rhythm, technique, and style.** Whether you're a beginner or an experienced drummer, these courses cater to all skill levels. Students learn to create dynamic beats, explore various percussion instruments, and develop their own sense of timing and coordination.

**The guitar is a versatile and beloved instrument**, making it a popular choice for aspiring musicians. Guitar courses offer a comprehensive education in playing techniques, music theory, and even songwriting. From acoustic to electric, these courses cover a wide range of guitar styles, enabling students to find their unique voice on this six-stringed wonder.

One of the keys to a successful music course is **having expert instructors.** Qualified music teachers bring a wealth of experience and knowledge to the classroom. They not only teach students the technical aspects of their chosen instrument but also inspire them to embrace the artistic side of music. Learning from skilled instructors can significantly accelerate a student's progress.

Like any skill, music requires consistent practice to improve. Both drum and guitar courses emphasize the importance of practice and provide students with the **tools and exercises** needed to enhance their abilities. Whether you're mastering a drum solo or playing intricate guitar solos, practice is the path to perfection.

Music courses often culminate in student performances. These opportunities allow students to showcase their progress and gain valuable experience performing in front of an audience. Whether it's a drumming ensemble or a guitar recital, these events instill **confidence and stage presence.**

In conclusion, music courses for instruments like drums and guitars offer individuals the chance to embark on a lifelong journey of musical exploration. Whether you're driven by the rhythmic allure of the drums or the melodic charm of the guitar, these courses open doors to **creativity, skill development, and a deeper connection** to the world of music. So, if you're eager to start your musical adventure, consider enrolling in a drum or guitar course today and unleash your inner musician.    
`;

    return(
        <>
            
            <div className= "music-course">
                <h2><span>Dance</span> Course</h2>
                <p>Discover the Rhythms of Music: Guitar and Drum</p>
                <img src={music_img} alt="" />

                <div className="markdown-container">
                    <Markdown>{markdownContent}</Markdown>
                </div>
            </div>
            
        </>
    )
}

export default MusicCourse;