"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Play, Target, Zap, BarChart3, Plus } from "lucide-react";
import one from "../assets/results/NailsandBlinks -Results 1.png"
import two from "../assets/results/NailsandBlinks -Results 2.png"
import three from "../assets/results/NailsandBlinks -Results.png"
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: "overview",
      title: "Overview",
      heading: "We Don't Run Ads.",
      subheading: "We Grow Businesses.",
      description: "At ThinkBeyondAds, we focus on your bottom line by leveraging precise targeting and advanced optimizations. Our ads don't just reach your audience—they deliver exponential returns, fueling business growth every step of the way.",
      image: one,
      icon: Target,
      color: "from-blue-600 to-purple-600"
    },
    {
      id: "media-buying",
      title: "Media Buying",
      heading: "Strategic Media Buying",
      description: "We plan and manage ad spend to maximize ROI through data-driven targeting across Google, Meta, LinkedIn, and more. Our expert team ensures every dollar spent delivers measurable results through advanced audience segmentation and performance optimization.",
      image: two,
      icon: BarChart3,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: "strategy",
      title: "Strategy",
      heading: "Our Proven 4-Step Process",
      description: "At ThinkBeyondAds, we don't just focus on ads—we think beyond them. We begin with an in-depth audit, followed by continuous Google & Meta Ads management. The result? Profits that speak for themselves.",
      steps: [
        { number: "01", title: "Evaluate", desc: "We take a close, strategic look at your current ads, identifying strengths and areas that need improvement." },
        { number: "02", title: "Strategize", desc: "We craft a new, tailored roadmap to ensure your ads are performing at their peak, generating maximum revenue." },
        { number: "03", title: "Execute", desc: "As we implement your new strategy, you'll start seeing the results: more leads, more sales, or both." },
        { number: "04", title: "Rinse & Repeat", desc: "Every three months, we revisit and refine your strategy, ensuring your ads keep delivering ongoing, sustainable growth." }
      ],
      cta: "Schedule your strategy call today.",
      image: three,
      icon: Zap,
      color: "from-green-600 to-blue-600"
    },
    {
      id: "add-ons",
      title: "Add-ons",
      heading: "Tailored Solutions to Meet Your Unique Needs",
      subheading: "",
      description: "At ThinkBeyondAds, we offer a variety of add-on services designed to enhance your strategy and drive results. Whether it's website redesign, social media management, creative production, or cross-platform ads, we're here to customize the perfect solution for your business. Let's create a strategy that works for you!",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      icon: Plus,
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br hidden md:block from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-bg-accent bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions designed to transform your business growth
          </p>
        </motion.div>

        {/* Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg relative overflow-hidden group ${
                activeIndex === index
                  ? 'bg-bg-accent text-white shadow-2xl shadow-bg-accent/30 hover:shadow-bg-accent/50'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <span className="relative z-10">{service.title}</span>
              {activeIndex === index && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-bg-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                {/* <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${services[activeIndex].color} flex items-center justify-center`}>
                  {React.createElement(services[activeIndex].icon, { size: 32, className: "text-white" })}
                </div> */}
                <div className="h-px bg-gradient-to-r from-gray-600 to-transparent flex-1"></div>
              </div>

              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {services[activeIndex].heading}
                </h2>
                {services[activeIndex].subheading && (
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {services[activeIndex].subheading}
                  </h3>
                )}
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {services[activeIndex].description}
                </p>
              </div>

              {/* Strategy Steps */}
              {services[activeIndex].steps && (
                <div className="space-y-6">
                  {services[activeIndex].steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: stepIndex * 0.1 + 0.3 }}
                      className="group flex gap-6 p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              {services[activeIndex].cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    {services[activeIndex].cta}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].heading}
                  className="w-full h-[500px] object-cover relative z-10 mix-blend-overlay"
                  style={{ objectPosition: "0% 50%", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-20"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-3 mt-16"
        >
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-bg-accent w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;