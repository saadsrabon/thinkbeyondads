import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './shared/Navbar.jsx';
import Footer from './shared/Footer.jsx';
import AboutSection from './pages/AboutUs.jsx';
import WhatWeDo from './pages/Whatwedo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
     
      <Route path="/services" element={<Services/>} />
      
      <Route path="/work" element={<WhatWeDo/>} />
      
      <Route path="/about" element={<AboutSection/>} />
      
      <Route path="/contact" element={<Contact/>} />
    </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </StrictMode>,
)
