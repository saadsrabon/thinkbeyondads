"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-tr from-white to-[#f0f4f8] dark:from-[#0f1c3f] dark:to-[#1a1a2e] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="text-[#F04B23] w-6 h-6" /> About Us
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-14"
        >
          We’re not just a team — we’re architects of impact. With clarity, data, and intention, we help brands move forward with confidence.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {[
            {
              title: "Brand Mission",
              text: "To empower ambitious teams with systems and strategy that fuel sustainable growth.",
            },
            {
              title: "Why We Exist",
              text: "Scaling brands deserve more than templates — they need vision, velocity, and validation at every step.",
            },
            {
              title: "Who We Serve",
              text: "We work best with bold brands — founders, marketers, and product teams who want to build, launch, and scale the right way.",
            },
            {
              title: "Meet the Founder",
              text: "Created by a strategist and UI engineer with deep roots in data and storytelling. We bring clarity, not chaos.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-gray-800 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:translate-x-[-100%] before:scale-150 group-hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out"
            >
              <h3 className="text-xl font-bold text-[#023e8a] dark:text-[#F04B23] mb-3">
                {item.title}
              </h3>
              <p className="text-[17px] leading-relaxed tracking-wide relative italic pl-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F04B23] via-[#0096c7] to-[#023e8a] dark:text-white animate-[shimmer_4s_ease-in-out_infinite]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-[#F04B23] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#d93c17] hover:scale-105 transform transition animate-pulse"
          >
            Book a Discovery Call
          </a>
        </motion.div>
      <div className='mt-20 text-center text-sm text-gray-500 dark:text-gray-400 italic'>– Signed, The Founder</div>
</div> {/* Background flare */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90vw] h-[90vw] bg-gradient-radial from-[#0096c720] to-transparent rounded-full blur-3xl z-0"></div>
    

</section>
  );
}

