
import painting_img from './asset/painting-img.png';
import Markdown from 'react-markdown';
import './paintingCoursePage.css';

function PaintingCourse(){

    const markdownContent = `
Our Painting Course at Art Studio is a journey into the captivating world of visual art, where we offer a diverse range of styles and techniques to suit every artist's preference. This course is designed to nurture your creative instincts and develop your skills as a painter. Whether you are a beginner or an experienced artist, we have something special to offer you.

**Exploring Expressionism**

In our Painting Course, you will have the opportunity to delve into the expressive and emotive style of Expressionism. This artistic movement allows you to break free from conventional constraints and dive into the realm of raw emotions and vivid, abstract representations. Under the guidance of our experienced Expressionist artists, you will learn to channel your inner feelings onto the canvas, creating artwork that is deeply personal and evocative. Expressionism encourages you to use bold brushstrokes, vibrant colors, and non-representational forms, offering a unique and liberating painting experience.

**Embracing Naturalism**

On the other side of the spectrum, our Painting Course also explores the beauty of Naturalism. Naturalism is a style that emphasizes a true-to-life representation of the world, focusing on details, precision, and a faithful portrayal of the subject matter. You will learn the techniques and skills needed to capture the essence of your subjects, whether it's a landscape, a still life, or a portrait. Our expert naturalist painters will guide you in achieving a high level of realism and accuracy in your artwork. This style offers a sense of balance and harmony, making it an ideal choice for those who appreciate meticulous craftsmanship.

**What's Intriguing**

One of the most fascinating aspects of our Painting Course is the fusion of Expressionism and Naturalism. We encourage students to experiment with both styles, allowing you to harness the power of emotion in your naturalistic paintings or bring realism into your expressionistic works. This hybrid approach creates a unique artistic journey, pushing boundaries and sparking creativity. It's a space where you can blend the precision of Naturalism with the unrestrained emotions of Expressionism, creating art that truly reflects your inner self.


Our Painting Course also includes sessions in various mediums, from oil and acrylic paints to watercolors, ensuring that you have a well-rounded painting experience. Additionally, we host regular exhibitions and critique sessions, providing you with the opportunity to showcase your creations, receive feedback, and grow as an artist.

Whether you're drawn to the raw intensity of Expressionism or the precision of Naturalism, our Painting Course at Art Studio offers a platform for you to explore your artistic potential, expand your horizons, and discover the thrilling world of painting in its many forms. Join us in this artistic adventure and let your creativity flow freely on the canvas.
`;

    return(
        <>
            
            <div className= "painting-course">
                <h2><span>Painting</span> Course</h2>
                <p>Unleash Your Inner Artist</p>
                <img src={painting_img} alt="" />

                <div className="markdown-container">
                    <Markdown>{markdownContent}</Markdown>
                </div>
            </div>
            
        </>
    )
}

export default PaintingCourse;