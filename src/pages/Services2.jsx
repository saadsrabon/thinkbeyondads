"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import one from "../assets/results/NailsandBlinks -Results 1.png"
import two from "../assets/results/NailsandBlinks -Results 2.png"
import three from "../assets/results/NailsandBlinks -Results.png"
const Services2 = () => {
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
      description:
        "At ThinkBeyondAds, we focus on your bottom line by leveraging precise targeting and advanced optimizations...",
      image: one,
      color: "from-blue-600 to-purple-600",
    },
    {
      id: "media-buying",
      title: "Media Buying",
      heading: "Strategic Media Buying",
      description:
        "We plan and manage ad spend to maximize ROI through data-driven targeting...",
      image: two,
      color: "from-purple-600 to-pink-600",
    },
    {
      id: "strategy",
      title: "Strategy",
      heading: "Our Proven 4-Step Process",
      description:
        "At ThinkBeyondAds, we don't just focus on ads—we think beyond them...",
      steps: [
        { number: "01", title: "Evaluate", desc: "We take a close look at your ads..." },
        { number: "02", title: "Strategize", desc: "We craft a new, tailored roadmap..." },
        { number: "03", title: "Execute", desc: "We implement and drive performance..." },
        { number: "04", title: "Rinse & Repeat", desc: "Refining every 3 months..." }
      ],
      cta: "Schedule your strategy call today.",
      image: three,
      color: "from-green-600 to-blue-600",
    },
    {
      id: "add-ons",
      title: "Add-ons",
      heading: "Tailored Solutions to Meet Your Unique Needs",
      description:
        "At ThinkBeyondAds, we offer a variety of add-on services...",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib...",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <div id="services" className="block md:hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-bg-accent bg-clip-text text-transparent"
        >
          Services
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Comprehensive solutions designed to transform your business growth
        </p>
      </div>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="max-w-7xl mx-auto px-4 py-24 border-t border-gray-700/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text Content */}
            <div>
              <h2 className="text-5xl font-bold mb-4">{service.heading}</h2>
              {service.subheading && (
                <h3 className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-6">
                  {service.subheading}
                </h3>
              )}
              <p className="text-lg text-gray-300 mb-8">{service.description}</p>

              {service.steps && (
                <div className="space-y-6">
                  {service.steps.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-4 bg-gray-800/30 border border-gray-700 p-4 rounded-xl backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-bg-accent text-white font-bold rounded-lg">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                        <p className="text-gray-400">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {service.cta && (
                <button className="mt-8 group bg-bg-accent text-white tect-center px-6 py-3 rounded-xl font-bold text-lg flex items-center gap-3 hover:scale-105 transition-all">
                  {/* <Play className="w-5 h-5" /> */}
                  {service.cta}
                  {/* <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
                </button>
              )}
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 backdrop-blur-sm">
                <img
                  src={service.image}
                  alt={service.heading}
                  className="w-full h-[500px]  mix-blend-overlay relative z-10"
                  style={{ objectPosition: "0% 50%", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-20"></div>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default Services2;
