import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/TechFlow_logo.svg"
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Innovate_logo.svg"
  },
  {
    quote: "This solution has significantly improved our team's productivity.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Cloud_logo.svg"
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Data_logo.svg"
  },
];

export default function TestimonialCards() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 font-sans text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#1C1C1E]">Client Testimonials</h2>
      <p className="text-gray-600 mb-10">
        Hear what our amazing clients say about working with us.
      </p>

      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl px-6 py-8 mx-auto max-w-xl"
          >
            <div className="mb-4">
              <p className="text-gray-800 text-lg leading-relaxed italic">
                “{testimonials[active].quote}”
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              {testimonials[active].logo && (
                <img
                  src={testimonials[active].logo}
                  alt={`${testimonials[active].name} logo`}
                  className="w-10 h-10 object-contain"
                />
              )}
              <div>
                <h4 className="text-md font-semibold text-[#1C1C1E]">
                  {testimonials[active].name}
                </h4>
                <p className="text-sm text-gray-500">{testimonials[active].designation}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl transition"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl transition"
        >
          →
        </button>
      </div> */}
    </div>
  );
}
