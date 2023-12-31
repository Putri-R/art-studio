import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/Landing Page/landingPage';
import ContactUs from '../pages/Contact Us/contactUs';
import AboutUs from '../pages/About Us/aboutUs';
import CourseCategories from '../pages/Landing Page/Course Categories/courseCategories';
import Event1 from '../pages/Event1 Page/event1Page';
import Event2 from '../pages/Event2 Page/event2Page';
import Event3 from '../pages/Event3 Page/event3Page';
import AllEventPage from '../pages/All Event Page/allEventPage';
import DanceCourse from '../pages/Dance Course Page/danceCoursePage';
import MusicCourse from '../pages/Music Course Page/musicCoursePage';
import PaintingCourse from '../pages/Painting Course Page/paintingCoursePage';
import Registration from '../pages/Registration Page/registrationPage';
import Login from '../pages/Login/login';
import ErrorPage from '../pages/404 Error Page/404Page';

function SetupRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/services" element={<CourseCategories/>}/>
        <Route path="/music-competition" element={<Event1/>} />
        <Route path="/dance-competition" element={<Event2/>} />
        <Route path="/painting-competition" element={<Event3/>} />
        <Route path="/more-event" element={<AllEventPage/>} />
        <Route path="/dance-course" element={<DanceCourse/>} />
        <Route path="/music-course" element={<MusicCourse/>} />
        <Route path="/painting-course" element={<PaintingCourse/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/error-page" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default SetupRouters;