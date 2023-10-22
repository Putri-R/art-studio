import CourseCategories from './components/Course Categories/courseCategories';
import Footer from './components/Footer/footer';
import Heropage from './components/Hero Page/heroPage';
import HowItWorks from './components/How it Works/howItWorks';
import LatestEvents from './components/Latest Events/latestEvents';

function App() {
  return (
    <>
      <Heropage/>
      <HowItWorks/>
      <LatestEvents/>
      <CourseCategories/>
      <Footer/>
    </>
  );
}

export default App;