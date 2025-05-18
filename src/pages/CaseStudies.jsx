import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudySteps = [
  {
    label: "Case Study",
    title: "Door Step Solutions x Think Beyond Ads",
    subtitle: "From 2 to 13 Multifamily Communities",
    bg: "#0d1b2a"
  },
  {
    label: "Problem",
    title: "No digital presence, locked clients",
    points: [
      "Servicing only 2 communities",
      "No consistent lead generation",
      "Overpriced competitors with long contracts"
    ],
    bg: "#1b263b"
  },
  {
    label: "Strategy",
    title: "Full-funnel growth system",
    points: [
      "Rebrand + optimized website",
      "Google Ads + LinkedIn targeting",
      "Expanded service offerings",
      "Equity deal with Momentum Multifamily"
    ],
    press:"https://www.momentummultifamily.com/resources/momentum-multifamily-forms-strategic-partnership-with-door-step-solutions-expanding-resident-service-offerings-to-portfolio-and-industry",
    bg: "#415a77"
  },
  {
    label: "Outcome",
    title: "Hypergrowth unlocked",
    points: [
      "Grew from 2 to 13 communities",
      "Built hybrid digital-field sales engine",
      "Secured recurring revenue + scale"
    ],
    bg: "#778da9"
  },
  {
    label: "Case Study",
    title: "EcoClean Living x Think Beyond Ads",
    subtitle: "Sustainable ROI with Clean Branding",
    bg: "#0f2027"
  },
  {
    label: "Problem",
    title: "Low brand recall, poor conversions",
    points: [
      "No recognizable eco-branding",
      "Low trust from target audience"
    ],
    bg: "#203a43"
  },
  {
    label: "Strategy",
    title: "Design-led inbound system",
    points: [
      "Logo + site overhaul",
      "Targeted content marketing",
      "Focused on eco-property managers"
    ],
    bg: "#2c5364"
  },
  {
    label: "Outcome",
    title: "Client base scaled",
    points: [
      "400% brand recall growth",
      "7 premium contracts signed in Q3"
    ],
    bg: "#3a6073"
  }
];

export default function LockedHorizontalTimeline() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userScrolling, setUserScrolling] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle wheel events for scroll snapping
  useEffect(() => {
    const handleWheel = (e) => {
      // Only handle wheel events if we're in the timeline section
      if (!isElementInViewport(scrollContainerRef.current)) return;
      
      // Check if the target is or is inside an interactive element (like links)
      if (isInteractiveElement(e.target)) return;
      
      e.preventDefault();
      
      // Debounce scroll events
      const now = Date.now();
      if (now - lastScrollTime < 500 || isTransitioning) return;
      setLastScrollTime(now);

      // Determine scroll direction
      if (e.deltaY > 0 && activeIndex < caseStudySteps.length - 1) {
        // Scrolling down - go to next slide
        setIsTransitioning(true);
        setActiveIndex(prev => prev + 1);
        setTimeout(() => setIsTransitioning(false), 500);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        // Scrolling up - go to previous slide
        setIsTransitioning(true);
        setActiveIndex(prev => prev - 1);
        setTimeout(() => setIsTransitioning(false), 500);
      } else if (e.deltaY > 0 && activeIndex === caseStudySteps.length - 1) {
        // Allow scrolling to next section after viewing all slides
        setIsScrollLocked(false);
      }
    };

    // Utility function to check if element is in viewport
    function isElementInViewport(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    }
    
    // Utility function to check if element is interactive
    function isInteractiveElement(el) {
      const interactiveElements = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
      let current = el;
      
      // Check the element and its parents
      while (current) {
        if (interactiveElements.includes(current.tagName)) {
          return true;
        }
        current = current.parentElement;
      }
      
      return false;
    }

    // Lock scroll when timeline is in view
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const rect = scrollContainerRef.current.getBoundingClientRect();
      // If timeline is in view and we haven't scrolled through all slides
      if (rect.top <= 0 && rect.bottom >= 0 && activeIndex < caseStudySteps.length - 1) {
        if (!isScrollLocked && !userScrolling) {
          setIsScrollLocked(true);
          document.body.style.overflow = 'hidden';
        }
      } else if (activeIndex === caseStudySteps.length - 1 || rect.top > window.innerHeight || rect.bottom < 0) {
        // If we've viewed all slides or timeline is out of view
        if (isScrollLocked) {
          setIsScrollLocked(false);
          document.body.style.overflow = '';
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [activeIndex, isScrollLocked, isTransitioning, lastScrollTime, userScrolling]);

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    // Don't capture touch events on interactive elements
    if (isInteractiveElement(e.target)) return;
    
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // Don't capture touch events on interactive elements
    if (isInteractiveElement(e.target)) return;
    
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    // Don't process touch events on interactive elements
    if (isInteractiveElement(e.target)) return;
    
    if (isTransitioning) return;
    
    const now = Date.now();
    if (now - lastScrollTime < 300) return;
    setLastScrollTime(now);
    
    if (touchStart - touchEnd > 50) {
      // Swipe left - go to next slide
      if (activeIndex < caseStudySteps.length - 1) {
        setIsTransitioning(true);
        setActiveIndex(prev => prev + 1);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }
    
    if (touchEnd - touchStart > 50) {
      // Swipe right - go to previous slide
      if (activeIndex > 0) {
        setIsTransitioning(true);
        setActiveIndex(prev => prev - 1);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }
  };
  
  // Helper function to check if element is interactive
  const isInteractiveElement = (el) => {
    const interactiveElements = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
    let current = el;
    
    // Check the element and its parents
    while (current) {
      if (interactiveElements.includes(current.tagName)) {
        return true;
      }
      current = current.parentElement;
    }
    
    return false;
  };

  // Navigation functions
  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (activeIndex < caseStudySteps.length - 1 && !isTransitioning) {
      goToSlide(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0 && !isTransitioning) {
      goToSlide(activeIndex - 1);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative pointer-events-auto"
      style={{ height: "100vh" }} // Fixed height for the timeline section
    >
      <div 
        ref={scrollContainerRef}
        className="sticky top-0 h-screen overflow-hidden bg-black pointer-events-auto text-white"
      >
        {/* Touch handler - MODIFIED to allow links to work */}
        <div 
          className="absolute inset-0 z-10 touch-handler pointer-events-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        
        {/* Navigation buttons */}
        <button 
          onClick={handlePrev} 
          className={`absolute left-4 top-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full -translate-y-1/2 z-20 ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          disabled={activeIndex === 0 || isTransitioning}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={handleNext}
          className={`absolute right-4 top-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full -translate-y-1/2 z-20 ${activeIndex === caseStudySteps.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
          disabled={activeIndex === caseStudySteps.length - 1 || isTransitioning}
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Timeline content */}
        <motion.div 
          className="flex h-full"
          initial={{ x: 0 }}
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {caseStudySteps.map((step, index) => (
            <div
              key={index}
              className="w-screen h-full flex items-center justify-center px-10 py-16"
              style={{ backgroundColor: step.bg, flexShrink: 0 }}
            >
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0.3,
                    y: activeIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative z-20 pointer-events-auto" // Added z-index and pointer-events
                >
                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">{step.label}</p>
                  <h2 className="text-4xl font-bold text-white">{step.title}</h2>
                  {step.subtitle && <p className="text-lg text-gray-300 mt-2">{step.subtitle}</p>}
                  {step.points && (
                    <ul className="list-disc list-inside mt-4 text-gray-200 space-y-1">
                      {step.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {step.press && (
                    <a
                      href={step.press}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-blue-400 hover:underline cursor-pointer z-40 relative"
                      aria-label="Read the press release"
                    >
                      Read the press release
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Progress Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {caseStudySteps.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-white" : "w-2 bg-gray-500"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-30">
          <motion.div 
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ 
              width: `${(activeIndex / (caseStudySteps.length - 1)) * 100}%` 
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Instructional text */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-30">
          <p className="text-sm text-gray-400">
            {activeIndex === caseStudySteps.length - 1 
              ? "Scroll down to continue" 
              : "Use arrow keys or scroll to navigate"}
          </p>
        </div>
      </div>
    </section>
  );
}