import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import News from './pages/News';
import Projects from './pages/Projects';
import Donate from './pages/Donate';
import Directory from './pages/Directory';
import Stories from './pages/Stories';
import Mentorship from './pages/Mentorship';
import Volunteer from './pages/Volunteer';
import Jobs from './pages/Jobs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;