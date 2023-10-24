import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing Page/landingPage';
import ContactUs from './pages/Contact Us/contactUs';
import AboutUs from './pages/About Us/aboutUs';
import Event1 from './pages/Event1 Page/event1Page';
import Event2 from './pages/Event2 Page/event2Page';
import Event3 from './pages/Event3 Page/event3Page';
import AllEventPage from './pages/All Event Page/allEventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/music-competition" element={<Event1/>} />
        <Route path="/dance-competition" element={<Event2/>} />
        <Route path="/painting-competition" element={<Event3/>} />
        <Route path="/more-event" element={<AllEventPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
