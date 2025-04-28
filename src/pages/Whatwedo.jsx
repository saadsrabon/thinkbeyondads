import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhatWeDo() {
  const services = [
    "Strategic Media Buying",
    "Funnel Strategy & Development",
    "Conversion Infrastructure",
    "Conversion Tracking & Analytics"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-8 lg:px-24 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-4"
        >
          What We Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Our services are designed to scale your brand through clarity, performance, and strategy.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br bg-gradient-to-r from-[#023E8A] to-[#0096C7] p-6 text-white shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-1000 animate-pulse pointer-events-none" />
              <div className="relative z-10 flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                <div>
                  <p className="text-xl font-semibold mb-1">
                    {service}
                  </p>
                  <p className="text-neutral-300 text-sm">
                    We use proven systems and performance tracking to ensure this service aligns with your growth goals.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
