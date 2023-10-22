import CourseCategories from "./Course Categories/courseCategories";
import Heropage from "./Hero Page/heroPage";
import HowItWorks from "./How it Works/howitworks";
import LatestEvents from "./Latest Events/latestEvents";


function LandingPage(){
    return(
        <>
            <Heropage/>
            <HowItWorks/>
            <LatestEvents/>
            <CourseCategories/>
            <Footer/>
        </>
    )
}

export default LandingPage;