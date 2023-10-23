import Footer from "../../components/Footer/footer";
import Navigasi from "../../components/Navigasi/navigasi";
import CourseCategories from "./Course Categories/courseCategories";
import Heropage from "./Hero Page/heroPage";
import LatestEvents from "./Latest Events/latestEvents";
import HowItWorks from "./How it Works/howItWorks";

function LandingPage(){
    return(
        <>
            <Navigasi/>
            <Heropage/>
            <HowItWorks/>
            <LatestEvents/>
            <CourseCategories/>
            <Footer/>
        </>
    )
}

export default LandingPage;