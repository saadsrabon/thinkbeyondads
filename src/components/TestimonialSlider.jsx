import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Think Beyond Ads helped us double our ROI with their expert Google and Meta Ads strategies!",
    name: "Rocco",
    company: "Rocc Solid Construction (Founder)",
  },
  {
    quote:
      "Our brand visibility has skyrocketed thanks to the team’s tailored ad campaigns.",
    name: "Sami",
    company: "Motor City (Founder)",
  },
  {
    quote:
      "The results speak for themselves—our leads increased by 40% within the first month!",
    name: "AJ",
    company: "QuietBounce (Founder)",
  },
  {
    quote:
      "Think Beyond Ads takes the guesswork out of digital advertising and delivers real results.",
    name: "Juan",
    company: "Homewatch Caregivers (Founder)",
  },
  {
    quote:
      "We saw immediate growth in our online sales, all thanks to their precision-targeted ads.",
    name: "Marilyn",
    company: "The Queens Corner Charity (Founder)",
  },
  {
    quote:
      "Their attention to detail and ability to optimize campaigns has transformed our marketing.",
    name: "Marilyn",
    company: "Royalty Health Care (Founder)",
  },
  {
    quote:
      "Working with Think Beyond Ads has been a game changer for our business growth.",
    name: "Valeria",
    company: "Nails&Blinks (Founder)",
  },
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
          <div className="text-4xl bg-gradient-to-b from-[#023E8A] to-[#0096C7] text-transparent bg-clip-text  mb-4">❝</div>
          <p className="bg-gradient-to-b from-[#023E8A] to-[#0096C7] text-transparent bg-clip-text  text-xl font-semibold max-w-2xl mx-auto">
            "{testimonials[index].quote}"
          </p>
          <p className="text-sm text-gray-300 mt-2 bg-gradient-to-b from-[#023E8A] to-[#0096C7] text-transparent bg-clip-text ">
            {testimonials[index].name}, {testimonials[index].company}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
