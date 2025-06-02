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
import SplashPage from './splash.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<SplashPage />} />

     
      <Route path="/services" element={<div className='mt-40'>  <Services/></div>} />
      
      <Route path="/work" element={<div className='mt-40'>  <WhatWeDo/></div>} />
      
      <Route path="/about" element={<div className='mt-40'>  <AboutSection/></div>} />
      
      <Route path="/contact" element={<div className='mt-40'>  <Contact/></div> } />
    </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  </StrictMode>,
)
