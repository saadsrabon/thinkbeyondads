import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Blackhawk is an excellent marketing team: always professional, responsive, and open.",
    name: "Marc Tafuro",
    company: "Fidelity Express",
  },
  // Add more testimonials if needed
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-12 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl text-violet-400 mb-4">❝</div>
          <p className="text-white text-xl font-semibold max-w-2xl mx-auto">
            "{testimonials[index].quote}"
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {testimonials[index].name}, {testimonials[index].company}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
