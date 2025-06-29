import React, { useEffect, useRef } from "react";
import TrustSection from "./components/TrustSection";
import AboutUsHero from "./pages/AboutHero";
import WhyChooseModern from "./pages/whyChoose";
import ContactSection from "./pages/Contact";

function App() {
  const textRef = useRef(null);
  
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
  
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center  px-4 pt-32 relative overflow-hidden mt-6 pb-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-bg-accent   text-white text-sm font-semibold shadow-lg">
            <span className="mr-2">🚀</span>
           Done the Right Way
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-6xl leading-tight mb-6">
           
            <span className="relative">
              <span className="bg-bg-accent bg-clip-text text-transparent">A Leading Digital Marketing Agency Fueling Business Growth</span>
              {/* <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-teal-500 rounded-full"></div> */}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-4xl mx-auto leading-relaxed font-medium">
            Welcome to ThinkBeyondAds, where we turn your advertising into a growth engine. We specialize in expertly crafted Meta and Google Ads that drive real, measurable results.
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto leading-relaxed">
            Our team creates high-performance lead generation systems, turning your ad spend into a flood of qualified leads and sales. Focus on your business while we handle the rest.
          </p>
          
          {/* Signature Statement */}
          <div className="mt-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              We Don't Run Ads. 
              <span className="italic bg-bg-accent bg-clip-text text-transparent ml-2">
                We Grow Businesses.
              </span>
            </h2>
          </div>
          
          {/* CTA Button */}
          <button 
            onClick={() => window.open('https://calendly.com/thinkbeyondads/30min')}  
            className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
          >
            Book a Call to Unlock Your Ad Potential
          </button>
          
          {/* Secondary CTA for underperforming ads */}
          <div className="mt-12 p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Are your Google and Meta Ads underperforming?
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              You've been working with a "guru" or agency for a while, but your ROI still isn't where it should be... Maybe your ads have plateaued, and you're fed up with empty promises and the constant "just stay the course" advice.
            </p>
            <p className="text-lg font-semibold text-white mb-4">
              It's time to make your Google and Meta Ads work harder for you.
            </p>
            <div className="text-center">
              <p className="text-orange-400 font-bold text-lg mb-3">Ready to see real results?</p>
              <button 
                onClick={() => window.open('https://calendly.com/thinkbeyondads/30min')}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a Call to Unlock Your Ad Potential
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-center relative z-10">
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent mb-2">
              4-6X
            </div>
            <p className="text-gray-300 font-medium">
              The average ROI we see across our advertising accounts
            </p>
          </div>
          
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent mb-2">
              20%
            </div>
            <p className="text-gray-300 font-medium">
              Average increase to monthly revenue we see when running Google & Meta ads
            </p>
          </div>
          
          <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent mb-2">
              300+
            </div>
            <p className="text-gray-300 font-medium">
              Businesses we have helped increase revenue & grow their brand awareness through ads
            </p>
          </div>
        </div>
      </section>
      
      {/* Keep your existing components */}
      <TrustSection/>
      <AboutUsHero/>
      {/* <Services/> */}
      <WhyChooseModern/>
      <ContactSection/>
    </>
  );
}

export default App;