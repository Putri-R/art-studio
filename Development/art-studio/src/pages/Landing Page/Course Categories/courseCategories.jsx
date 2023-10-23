import './courseCategories.css';
import painting from './asset/painting_course.png';
import dance from './asset/dance_course.png';
import music from './asset/music_course.png';

function CourseCategories(){
    return(
        <>
            <div className= "course-categories">
                <h2>Couser <span>Categories</span></h2>
                <p>Click on one of the courses to view course details and pricing</p>
            </div>

            <div className="coursecategories-group">
                <div className="course-group">
                    <a href=""><img src={painting} alt="" /></a>
                    <a className="course-name" href="#"><span>Painting</span> Course</a>
                </div>
                <div className="course-group">
                    <a href=""><img src={dance} alt="" /></a>
                    <a className="course-name" href="#"><span>Dance</span> Course</a>
                </div>
                <div className="course-group">
                    <a href=""><img src={music} alt="" /></a>
                    <a className="course-name" href="#"><span>Music</span> Course</a>
                </div>
            </div>      

            <div className="categories-button">
                <button type="button">Register Now</button>
            </div>      
        </>
    )
}

export default CourseCategories;