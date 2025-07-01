"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import { useEffect } from "react";
const TextNavigationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can tune breakpoint
    };
  
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const sections = [
    "Overview",
    "Media Buying",
    "Funnel Strategy",
    "Infrastructure",
    "Tracking",
    "Add-ons"
  ];

  const slides = [
    {
      section: "Overview",
      title: "Performance. Clarity. Scalability.",
      content:
        "All our services are engineered to drive measurable results. We help businesses grow by aligning design, technology, and strategy for scalable success.",
      image: "https://i.ibb.co/ZpVqD9cf/vecteezy-a-person-holding-up-glasses-with-a-cityscape-in-the-background-60203803.jpg"
    },
    {
      section: "Media Buying",
      title: "Strategic Media Buying",
      content:
        "We plan and manage ad spend to maximize ROI through data-driven targeting across Google, Meta, LinkedIn, and more.",
      image: "https://i.ibb.co/trgdm9C/marketing-ideas-share-research-planning-concept.jpg",
    },
    {
      section: "Funnel Strategy",
      title: "Funnel Strategy & Development",
      content:
        "We architect high-converting funnels tailored to your customer journey — from awareness to acquisition and retention.",
      image: "https://i.ibb.co/BH83zHbS/front-view-businessman-with-colorful-cones-representing-growth.jpg",
    },
    {
      section: "Infrastructure",
      title: "Conversion Infrastructure",
      content:
        "We build the backend that converts — landing pages, checkout flows, CRM syncing, and performance-focused architecture.",
      image: "https://i.ibb.co/whBkW0v7/man-holding-smartphone-with-apartment-buildings-hologram.jpg",
    },
    {
      section: "Tracking",
      title: "Conversion Tracking & Analytics",
      content:
        "Gain clarity with precise tracking, attribution, and real-time dashboards so you know what's working and why.",
      image: "https://i.ibb.co/HDQ0P0tD/man-working-with-infographics-indoors.jpg",
    },
    {
      section: "Add-ons",
      title: "Optional Add-ons",
      content:
        "Enhance your stack with CRM integration, custom lead magnets, and creative production — everything you need to scale efficiently.",
      image: "https://i.ibb.co/pBP4t8f1/istockphoto-1369075175-612x612.jpg",
    }
  ];

  const handleTextNavigationClick = (index) => {
    const sectionFirstIndex = slides.findIndex(
      (slide) => slide.section === sections[index]
    );
    if (sectionFirstIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(sectionFirstIndex);
    }
  };

  return (
    <div
      id="services"
      className="flex flex-col lg:flex-row justify-between max-w-[1240px] items-center gap-10 mx-auto mt-12 px-4 lg:px-0 mb-12"
    >
      <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px]">
        <h1 className="font-serif text-[28px] md:text-[40px] lg:text-[64px] leading-[32px] lg:leading-[76.8px]">
          Services
        </h1>
        <div className="flex flex-col justify-center space-y-1 md:space-y-3 lg:space-y-4 mt-[24px]">
          {sections.map((section, index) => (
            <motion.button
              key={index}
              onClick={() => handleTextNavigationClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-left transition-all duration-300 text-black flex items-center text-lg ${
                slides[activeIndex].section === section
                  ? "ms-1 text-[24px] md:text-[28px] lg:text-[32px] font-bold"
                  : "text-[20px] md:text-[26px] lg:text-[30px]"
              }`}
            >
              <span
                className={`${
                  slides[activeIndex].section === section
                    ? "h-[20px] md:h-[27px] w-[3px] md:w-[5px] me-1 bg-[#F04B23]"
                    : ""
                }`}
              ></span>
              {section}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="w-full h-auto lg:w-[743px] lg:h-[730px] overflow-hidden">
        <Swiper
          direction={isMobile ? "horizontal" : "vertical"}
          spaceBetween={30}
          slidesPerView={1}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full lg:h-[780px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#023e8a] text-white w-full  lg:h-[730px] rounded-[20px]"
              >
                <div className="lg:p-[56px] md:p-14 p-4">
                  <h2 className="font-serif text-[26px] md:text-[36px] lg:text-[48px] leading-[40px] lg:leading-[57.6px]">
                    {slide.title}
                  </h2>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] lg:leading-[30px] mt-6">
                    {slide.content}
                  </p>
                  <div className="mt-6">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-xl w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TextNavigationSlider;
