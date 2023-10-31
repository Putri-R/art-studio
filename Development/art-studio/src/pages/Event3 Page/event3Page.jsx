import Navigasi from '../../components/Navigasi/navigasi';
import Footer from '../../components/Footer/footer';
import event3_img from './asset/event3_img.png'
import Markdown from 'react-markdown';
import './event3Page.css';

function Event3(){

    const markdownContent = `
Ava has successfully brought home the **trophy for the painting competition with a theme of naturalism**. Her remarkable talent and dedication to the art of painting shone brightly in this prestigious event. The competition, which drew participants from across the region, was a testament to Ava's commitment to her craft. Her victory reflects not only her artistic skills but also her ability to convey the beauty of the natural world through her artwork.

Ava's choice of the theme of naturalism for the painting competition displayed her deep connection with nature. Her ability to capture the intricacies of the natural world on canvas was truly awe-inspiring. Each brushstroke seemed to bring to life the vibrant colors and delicate details of flora and fauna. The judges were particularly impressed by her portrayal of the local landscapes, which showcased her keen observation of the world around her.

Throughout the competition, Ava's dedication to her craft was palpable. She spent countless hours in her studio, **perfecting her technique and refining her artistic vision**. Her commitment to her work is a testament to the passion that drives her artistic endeavors. This award is not just a recognition of her talent but also a celebration of her unwavering dedication.

The moment when Ava was announced as the winner of the painting competition was met with thunderous applause and a standing ovation. Her victory was well-deserved, and it was evident that her artwork had struck a chord with both the judges and the audience. The trophy she held aloft was not just a symbol of her artistic achievement, but also **a testament to her ability to communicate her love for nature through her art.**

Ava's win in the painting competition will undoubtedly serve as an inspiration to aspiring artists. It demonstrates the power of **passion, dedication, and a deep connection** with one's chosen subject matter. Her artwork reminds us of the beauty of the natural world and the importance of preserving it. It is a win not only for Ava but also for the appreciation of art and nature itself.
`;

    return(
        <>
            <Navigasi/>
            <div className= "event3">
                <h2>Award in <span>Painting Competition</span></h2>
                <div className="date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                        <g clip-path="url(#clip0_434_132)">
                            <path d="M11.25 0.5C14.0348 0.5 16.7055 1.60625 18.6746 3.57538C20.6438 5.54451 21.75 8.21523 21.75 11C21.75 13.7848 20.6438 16.4555 18.6746 18.4246C16.7055 20.3938 14.0348 21.5 11.25 21.5C8.46523 21.5 5.79451 20.3938 3.82538 18.4246C1.85625 16.4555 0.75 13.7848 0.75 11C0.75 8.21523 1.85625 5.54451 3.82538 3.57538C5.79451 1.60625 8.46523 0.5 11.25 0.5ZM2.71875 11C2.71875 13.2626 3.61758 15.4326 5.2175 17.0325C6.81742 18.6324 8.98737 19.5312 11.25 19.5312C13.5126 19.5312 15.6826 18.6324 17.2825 17.0325C18.8824 15.4326 19.7812 13.2626 19.7812 11C19.7812 8.73737 18.8824 6.56742 17.2825 4.9675C15.6826 3.36758 13.5126 2.46875 11.25 2.46875C8.98737 2.46875 6.81742 3.36758 5.2175 4.9675C3.61758 6.56742 2.71875 8.73737 2.71875 11ZM11.9062 6.73438V10.6614L14.568 11.7271C14.8026 11.8294 14.9881 12.0189 15.0853 12.2557C15.1824 12.4924 15.1836 12.7576 15.0886 12.9952C14.9935 13.2328 14.8097 13.424 14.576 13.5283C14.3424 13.6326 14.0773 13.6419 13.8369 13.5541L10.5557 12.2416C10.3733 12.1683 10.217 12.0422 10.1069 11.8794C9.9967 11.7167 9.93772 11.5247 9.9375 11.3281V6.73438C9.9375 6.4733 10.0412 6.22292 10.2258 6.03832C10.4104 5.85371 10.6608 5.75 10.9219 5.75C11.1829 5.75 11.4333 5.85371 11.6179 6.03832C11.8025 6.22292 11.9062 6.4733 11.9062 6.73438Z" fill="#B5B5B5"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_434_132">
                            <rect width="21" height="21" fill="white" transform="translate(0.75 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h6> February 04, 2023</h6>
                </div>
                <img src={event3_img} alt="" />

                <div className="markdown-container">
                    <Markdown>{markdownContent}</Markdown>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Event3;