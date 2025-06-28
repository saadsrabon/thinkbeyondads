"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";
import { q } from "motion/react-client";

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
          Book a quick call or drop us a message — we're here to help you grow
          with clarity and confidence.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-[#023e8a] dark:text-[#F04B23] mb-4">
              Schedule a Call
            </h3>
            {/* Replace below iframe with your calendar booking URL (Calendly, TidyCal, etc.) */}
            <div className="flex flex-col items-start">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pick a time that works best for you:
              </p>
              <a
                href="https://calendly.com/thinkbeyondads/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F04B23] text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-[#d93c17] transition transform hover:scale-105"
              >
                Open Booking Calendar
              </a>
              <div className="mt-4  hidden md:block w-full  overflow-hidden rounded-lg shadow-lg">
                <iframe
                  width="500"
                  height="700"
                  src="https://calendly.com/thinkbeyondads/30min"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#023e8a] dark:text-[#F04B23] mb-4">
                Contact Info
              </h3>
              <div className="flex items-start gap-3 mb-3">
                <Mail className="text-[#F04B23]" />
                <span className="text-gray-700 dark:text-gray-300 ">
                  thinkbeyondads@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#F04B23]" />
                <span className="text-gray-700 dark:text-gray-300">
                  (832)259-7239
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#023e8a] dark:text-[#F04B23] mb-4">
                FAQ
              </h3>
              <div className="space-y-4 overflow-y-scroll max-h-[600px]">
                {[
                  {
                    q: "Do you work with startups?",
                    a: "Absolutely. We specialize in helping early-stage brands establish a strong online presence through effective Meta and Google Ads strategies.",
                  },
                  {
                    q: "What's your pricing?",
                    a: "Our pricing varies based on the scope of your advertising needs. We offer transparent and flexible pricing structures tailored to meet your specific goals and budget.",
                  },
                  {
                    q: "Do you offer retainers?",
                    a: "Yes, many of our clients prefer to work with us on a monthly retainer basis. This allows us to maintain ongoing support and optimize campaigns for continuous improvement.",
                  },
                  {
                    q: "How do I know if Meta or Google Ads is right for my business?",
                    a: "We assess your business goals and target audience to determine the best platform. Whether it's Meta (Facebook/Instagram) Ads for social engagement or Google Ads for search intent, we'll guide you to the most effective solution.",
                  },
                  {
                    q: "What’s the difference between Meta Ads and Google Ads?",
                    a: "Meta Ads are great for building brand awareness and engaging with a broad audience through social media, while Google Ads are excellent for capturing high-intent customers actively searching for products or services like yours.",
                  },
                  {
                    q: "How soon will I see results?",
                    a: "It varies depending on the industry and campaign goals. Typically, you can expect to see measurable results within the first few weeks, but long-term success comes with continuous optimization and strategy refinement.",
                  },
                  {
                    q: "Do you handle ad creatives and copywriting?",
                    a: "Yes, we create custom ad creatives and copy tailored to your brand's voice and campaign objectives. Our team ensures that your ads are engaging and optimized for performance.",
                  },
                  {
                    q: "Can you manage ads across multiple platforms?",
                    a: "Absolutely! We can manage campaigns on both Meta (Facebook, Instagram) and Google Ads, along with other platforms like YouTube, to provide a comprehensive digital marketing strategy.",
                  },
                  {
                    q: "Do you offer analytics and reporting?",
                    a: "Yes. We provide detailed performance reports that show key metrics like click-through rates, conversions, ROI, and more. We ensure that you have full visibility into your campaign performance.",
                  },
                  {
                    q: "How do I get started?",
                    a: "Getting started is easy! Reach out to us for a consultation, and we’ll assess your business needs, craft a custom strategy, and start running ads that drive results.",
                  },
                  {
                    q: "Do you work with businesses in all industries?",
                    a: "Yes! We have experience working with businesses across various industries, from e-commerce and real estate to health & wellness, and more. Our strategies are tailored to each industry to maximize ad effectiveness.",
                  },
                  {
                    q: "How do I know if my campaigns are successful?",
                    a: "We focus on measurable goals, such as sales, lead generation, or website traffic. We continuously monitor your campaigns, adjust based on performance, and provide regular updates on how your campaigns are achieving success.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white dark:bg-white/5 p-4 rounded-md border border-gray-100 dark:border-gray-700 shadow-sm"
                  >
                    <p className="font-semibold text-[#023e8a] dark:text-[#F04B23]">
                      {item.q}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {item.a}
                    </p>
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
