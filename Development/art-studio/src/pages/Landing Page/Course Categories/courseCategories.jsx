import './courseCategories.css';
import painting from './asset/painting_course.png';
import dance from './asset/dance_course.png';
import music from './asset/music_course.png';
import { Link } from 'react-router-dom';
import Navigasi from '../../../components/Navigasi/navigasi';

function CourseCategories(){
    return(
        <>
            <Navigasi/>
            <div className= "course-categories">
                <h2>Couser <span>Categories</span></h2>
                <p>Click on one of the courses to view course details and pricing</p>
            </div>

            <div className="coursecategories-group">
                <div className="course-group">
                    <a href="/painting-course"><img src={painting} alt="" /></a>
                    <a className="course-name" href="/painting-course"><span>Painting</span> Course</a>
                </div>
                <div className="course-group">
                    <a href="/dance-course"><img src={dance} alt="" /></a>
                    <a className="course-name" href="/dance-course"><span>Dance</span> Course</a>
                </div>
                <div className="course-group">
                    <a href="/music-course"><img src={music} alt="" /></a>
                    <a className="course-name" href="/music-course"><span>Music</span> Course</a>
                </div>
            </div>      

            <div className="categories-button">
                <Link to="/registration">
                    <button type="button">Register Now</button>
                </Link>
            </div>  

        </>
    )
}

export default CourseCategories;