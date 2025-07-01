"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Check, ArrowDown, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Strategic, Not Salesy",
    description: "We focus on building long-term value, not quick wins. Every move is backed by strategy and intent.",
    icon: "🧠",
    gradient: "from-purple-600 via-purple-500 to-pink-600",
    bgGradient: "from-purple-900/20 via-purple-800/10 to-pink-900/20",
    detail: "Our approach combines market psychology with data-driven insights to create campaigns that resonate deeply with your audience.",
    color: "purple"
  },
  {
    title: "Data-Driven Decisions",
    description: "We operate on insights, not guesses. Every decision is informed by real-time performance data.",
    icon: "📊",
    gradient: "from-blue-600 via-blue-500 to-cyan-600",
    bgGradient: "from-blue-900/20 via-blue-800/10 to-cyan-900/20",
    detail: "Advanced analytics and AI-powered insights guide every optimization, ensuring maximum ROI and sustainable growth.",
    color: "blue"
  },
  {
    title: "Clarity Over Clutter",
    description: "We cut through the noise with clear, simple, and effective design and messaging.",
    icon: "🧹",
    gradient: "from-green-600 via-emerald-500 to-teal-600",
    bgGradient: "from-emerald-900/20 via-green-800/10 to-teal-900/20",
    detail: "Minimalist design principles meet conversion optimization to create experiences that convert without overwhelming.",
    color: "green"
  },
  {
    title: "Built to Scale",
    description: "Our systems adapt and grow with you — flexible, scalable, and resilient by design.",
    icon: "🚀",
    gradient: "from-orange-600 via-red-500 to-pink-600",
    bgGradient: "from-orange-900/20 via-red-800/10 to-pink-900/20",
    detail: "Future-proof architecture and scalable processes that evolve with your business needs and market demands.",
    color: "orange"
  },
];

export default function WhyChooseModern() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      // Calculate which step should be active based on scroll progress
      const stepProgress = progress * benefits.length;
      const newActiveStep = Math.floor(stepProgress);
      
      if (newActiveStep !== activeStep && newActiveStep >= 0 && newActiveStep < benefits.length) {
        setActiveStep(newActiveStep);
      }
      
      // Reset when scrolled past
      if (progress < 0.1) {
        setActiveStep(-1);
      }
    });

    return unsubscribe;
  }, [scrollYProgress, activeStep]);

  return (
    <div ref={containerRef}>
      {/* Original Intro Section */}
      <section className="bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-pink-900/20 py-42 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-bg-accent mb-6 relative">
              Why Choose Us
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 text-2xl"
              >
                ✨
              </motion.div>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
              Strategic, performance-focused, and purpose-built — we engineer brand growth with clarity and confidence.
            </p>
          </motion.div>



          {/* Scroll Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 mb-4 font-medium">
              Scroll down to explore each benefit in detail
            </p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sequential Reveal Sections */}
      {benefits.map((item, index) => (
        <section
          key={index}
          className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-gradient-to-br ${item.bgGradient} dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: activeStep === index ? [1, 1.2, 1] : 1,
                rotate: activeStep === index ? [0, 180, 360] : 0,
                opacity: activeStep === index ? [0.03, 0.06, 0.03] : 0.02
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br ${item.gradient} rounded-full blur-3xl`}
            />
            <motion.div
              animate={{
                scale: activeStep === index ? [1.2, 1, 1.2] : 1,
                rotate: activeStep === index ? [360, 180, 0] : 0,
                opacity: activeStep === index ? [0.04, 0.08, 0.04] : 0.02
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl ${item.gradient} rounded-full blur-3xl`}
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{
                opacity: activeStep >= index ? 1 : 0.3,
                y: activeStep >= index ? 0 : 50,
                scale: activeStep >= index ? 1 : 0.9
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: activeStep === index ? 0.2 : 0
              }}
              className="text-center"
            >
              {/* Step Indicator */}
              <div className="flex justify-center mb-8">
                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.gradient} p-1`}>
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center relative">
                    <span className="text-3xl">{item.icon}</span>
                    
                    {/* Animated Ring */}
                    {activeStep === index && (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className={`absolute inset-0 rounded-full border-2 border-dashed border-transparent bg-gradient-to-r ${item.gradient} bg-clip-border`}
                          style={{ padding: '2px' }}
                        />
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-xl"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <motion.div
                animate={{
                  scale: activeStep === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className={`text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent leading-tight`}>
                  {item.title}
                </h2>
                
                <p className="text-2xl md:text-3xl text-bg-accent dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
                  {item.description}
                </p>
                
                {/* Detailed Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: activeStep === index ? 1 : 0,
                    y: activeStep === index ? 0 : 30
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-600/50 max-w-4xl mx-auto"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-xl`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        Deep Dive
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>


              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900/30 to-pink-900/30 py-24 px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Experience the difference that strategic, data-driven, and scalable solutions can make for your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6" />
            Get Started Today
            <ArrowDown className="w-5 h-5 rotate-[-90deg]" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}