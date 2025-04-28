import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import AnimatedTestimonialsDemo from "./components/Testimonial";
import WhatWeDo from "./pages/Whatwedo";
import WhyChoose from "./pages/whyChoose";
import Services from "./pages/Services";
import AboutSection from "./pages/AboutUs";
import ContactSection from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Footer from "./shared/Footer";


function App() {
  const textRef = useRef(null);
  const globeContainerRef = useRef(null);
  
  // Text shine effect
  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;
    
    const handleMouseMove = (e) => {
      const rect = textElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update the position of the shine effect
      textElement.style.setProperty("--x", `${x}px`);
      textElement.style.setProperty("--y", `${y}px`);
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // Globe effect
 useEffect(() => {
  const container = globeContainerRef.current;
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshBasicMaterial({
    color: 0x0096C7,
    wireframe: true,
    transparent: true,
    opacity: 0.09,
  });
  const globe = new THREE.Mesh(geometry, material);
  scene.add(globe);

  const glowGeometry = new THREE.SphereGeometry(5.2, 32, 32);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0x023E8A,
    transparent: true,
    opacity: 0.05,
  });
  const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
  scene.add(glowMesh);

  camera.position.z = 15;

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;

  // Resize handling
  const resizeRenderer = () => {
    const { width, height } = container.getBoundingClientRect();
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  resizeRenderer();
  window.addEventListener('resize', resizeRenderer);

  // Audio setup
  const listener = new THREE.AudioListener();
  camera.add(listener);
  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load('/audio/ambient.mp3', (buffer) => {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.4);
    // sound.play();
  });

  // Animate
  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();

  return () => {
    window.removeEventListener('resize', resizeRenderer);
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
    geometry.dispose();
    material.dispose();
    glowGeometry.dispose();
    glowMaterial.dispose();
    controls.dispose();
    sound.stop();
  };
}, []);

  
  return (
    <>
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#F9FAFB] px-4 pt-32 relative overflow-hidden mt-6">
      {/* Globe Background */}
      <div 
        ref={globeContainerRef} 
        className="absolute hidden lg:block inset-0 z-0 opacity-80"
      />
      
      {/* Hero Content */}
      <div className="relative z-10">
        <div className="mb-4 text-sm font-semibold text-blue-700">
          ✨ Inspired Strategy, Clear Messaging & Conversion Design
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 max-w-4xl leading-tight">
          Ads Are Just the Beginning
        </h1>
        <p
          ref={textRef}
          style={{
            
            backgroundImage:
              "linear-gradient(90deg, #000 0%, #000 50%, #7b68ee 51%, #3498db 100%)",
            backgroundSize: "200% 100%",
            backgroundPosition: "var(--x, 0) var(--y, 0)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            transition: "background-position 0.05s ease",
          }}
          className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl font-sans"
        >
          We don't just run ads—we engineer growth systems. Strategic media
          buying, funnel optimization, and conversion-driven web
          design—ThinkBeyondAds is your growth partner.
        </p>
        <button className="mt-8 bg-gradient-to-r from-[#023E8A] to-[#0096C7] text-white font-bold uppercase tracking-wide py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
          Book a Call — ThinkBeyondAds
        </button>
      </div>

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-left relative z-10">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-base font-bold text-[#023E8A] mb-1">
            Clarity
          </h3>
          <p className="text-sm text-gray-600">
            Acquiring recurring customers and better data.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-base font-bold text-[#023E8A] mb-1">
            Conversation Infrastructure
          </h3>
          <p className="text-sm text-gray-600">
            Optimized digital presence and funnel strategy.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-base font-bold text-[#023E8A] mb-1">
            Scale
          </h3>
          <p className="text-sm text-gray-600">
            Systems and spend that growth with your business.
          </p>
        </div>
      </div>

      {/* Client Logos or Testimonials */}
      <div className="mt-20 w-full max-w-5xl text-center relative z-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
          Trusted by
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="h-10 w-20 bg-gray-200 rounded"></div>
          <div className="h-10 w-20 bg-gray-200 rounded"></div>
          <div className="h-10 w-20 bg-gray-200 rounded"></div>
        </div>
        
      </div>
    </section>
    <AboutSection/>
    <WhatWeDo/>
    <Services/>
    <WhyChoose/>
    <CaseStudies/>
    <AnimatedTestimonialsDemo/>
    <ContactSection/>
   
    </>
  );
}

export default App;