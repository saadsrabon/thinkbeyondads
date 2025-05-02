"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white dark:bg-[#0f1c3f] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 dark:text-white mb-4"
        >
          Let’s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Book a quick call or drop us a message — we're here to help you grow with clarity and confidence.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#023e8a] mb-4">Schedule a Call</h3>
            {/* Replace below iframe with your calendar booking URL (Calendly, TidyCal, etc.) */}
            <div className="flex flex-col items-start">
  <p className="text-gray-600 dark:text-gray-300 mb-4">Pick a time that works best for you:</p>
  <a
    href="https://calendly.com/thinkbeyondads/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-[#F04B23] text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-[#d93c17] transition transform hover:scale-105"
  >
    Open Booking Calendar
  </a>
  <div className="mt-4 w-full h-[400px] overflow-hidden rounded-lg shadow-lg">

  <iframe width="500" height="400" src="https://calendly.com/thinkbeyondads/30min" frameborder="0"></iframe>
  </div>
</div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#023e8a] mb-4">Contact Info</h3>
              <div className="flex items-start gap-3 mb-3">
                <Mail className="text-[#F04B23]" />
                <span className="text-gray-700 dark:text-gray-300">hello@yourdomain.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#F04B23]" />
                <span className="text-gray-700 dark:text-gray-300">+880 1234 567 890</span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#023e8a] mb-4">FAQ</h3>
              <div className="space-y-4">
  {[{
    q: "Do you work with startups?",
    a: "Absolutely. We love working with early-stage brands.",
  }, {
    q: "What's your pricing?",
    a: "It depends on scope, but we’re transparent and flexible.",
  }, {
    q: "Do you offer retainers?",
    a: "Yes. Most of our clients work with us on a monthly basis.",
  }].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.1 }}
      className="bg-white dark:bg-white/5 p-4 rounded-md border border-gray-100 dark:border-gray-700 shadow-sm"
    >
      <p className="font-semibold text-[#023e8a]">{item.q}</p>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{item.a}</p>
    </motion.div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
