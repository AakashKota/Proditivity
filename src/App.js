import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Home from './components/Pages/Home'; // Make sure these pages exist
import About from './components/Pages/About/About'; // Make sure these pages exist
import Blog from './components/Pages/Blog'; // Make sure these pages exist
import Contact from './components/Pages/Contact'; // Make sure these pages exist
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
