"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Strategic, Not Salesy",
    description: "We focus on building long-term value, not quick wins. Every move is backed by strategy and intent.",
    icon: "🧠",
  },
  {
    title: "Data-Driven Decisions",
    description: "We operate on insights, not guesses. Every decision is informed by real-time performance data.",
    icon: "📊",
  },
  {
    title: "Clarity Over Clutter",
    description: "We cut through the noise with clear, simple, and effective design and messaging.",
    icon: "🧹",
  },
  {
    title: "Built to Scale",
    description: "Our systems adapt and grow with you — flexible, scalable, and resilient by design.",
    icon: "🚀",
  },
];

export default function WhyChooseModern() {
  return (
    <section className="bg-white dark:bg-gray-950 py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-6"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-14"
        >
          Strategic, performance-focused, and purpose-built — we engineer brand growth with clarity and confidence.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl bg-[#f9fafb] dark:bg-[#0f1c3f] p-6 text-left shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
