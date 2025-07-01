"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowDown, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Strategic, Not Salesy",
    description: "We focus on building long-term value, not quick wins. Every move is backed by strategy and intent.",
   
    gradient: "from-purple-600 via-purple-500 to-pink-600",
    bgGradient: "from-purple-900/20 via-purple-800/10 to-pink-900/20",
    detail: "Our approach combines market psychology with data-driven insights to create campaigns that resonate deeply with your audience.",
  },
  {
    title: "Data-Driven Decisions",
    description: "We operate on insights, not guesses. Every decision is informed by real-time performance data.",
   
    gradient: "from-blue-600 via-blue-500 to-cyan-600",
    bgGradient: "from-blue-900/20 via-blue-800/10 to-cyan-900/20",
    detail: "Advanced analytics and AI-powered insights guide every optimization, ensuring maximum ROI and sustainable growth.",
  },
  {
    title: "Clarity Over Clutter",
    description: "We cut through the noise with clear, simple, and effective design and messaging.",
   
    gradient: "from-green-600 via-emerald-500 to-teal-600",
    bgGradient: "from-emerald-900/20 via-green-800/10 to-teal-900/20",
    detail: "Minimalist design principles meet conversion optimization to create experiences that convert without overwhelming.",
  },
  {
    title: "Built to Scale",
    description: "Our systems adapt and grow with you — flexible, scalable, and resilient by design.",
   
    gradient: "from-orange-600 via-red-500 to-pink-600",
    bgGradient: "from-orange-900/20 via-red-800/10 to-pink-900/20",
    detail: "Future-proof architecture and scalable processes that evolve with your business needs and market demands.",
  },
];

export default function WhyChooseModern() {
  return (
    <div>
      {/* Intro */}
      <section className=" py-42 px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-bg-accent mb-6 relative">
            Why Choose Us
            
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
            Strategic, performance-focused, and purpose-built — we engineer brand growth with clarity and confidence.
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stacked Benefit Sections */}
      {benefits.map((item, index) => (
        <section
          key={index}
          className={`min-h-screen px-4 sm:px-6 lg:px-12 py-24 bg-gradient-to-br ${item.bgGradient} flex items-center justify-center`}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <div className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${item.gradient} p-1`}>
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center relative text-3xl">
                  {item.icon}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 rounded-full border-2 border-dashed border-transparent bg-gradient-to-r ${item.gradient} bg-clip-border`}
                    style={{ padding: '2px' }}
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <h2 className={`text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent leading-tight`}>
              {item.title}
            </h2>
            <p className="text-2xl md:text-3xl text-bg-accent dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              {item.description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-600/50 max-w-4xl mx-auto text-left"
            >
              <div className="flex items-start gap-6">
                {/* <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-xl`}>
                  {item.icon}
                </div> */}
                <div>
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
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to <span className="text-bg-accent">Transform Your Brand?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Experience the difference that strategic, data-driven, and scalable solutions can make for your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-bg-accent text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-bg-accent/25 transition-all duration-300 inline-flex items-center gap-3"
          >
           
            Get Started Today
            <ArrowDown className="w-5 h-5 rotate-[-90deg]" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
