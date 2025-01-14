import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Feedback from './Feedback/Feedback';

const Body = () => { 
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact/>} />
            
            <Route path="/feedback" element={<Feedback />} />
                {/* Add more routes here as needed */}
        </Routes>
    );
};

export default Body;