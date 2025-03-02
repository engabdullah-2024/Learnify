import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import React from 'react';
import Course from './pages/Course';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Login from './pages/Login';
import Register from './pages/Register';
// import Services from './components/Services';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;