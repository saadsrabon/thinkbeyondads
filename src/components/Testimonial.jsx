import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop"
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop"
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop"
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop"
  },
  {
    quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop"
  }
];

export default function AnimatedTestimonialsDemo() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 font-sans md:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left Section: Headline */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl font-extrabold text-[#1C1C1E]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Still not convinced? Let our satisfied clients do the talking. These testimonials reflect how we help businesses grow.
          </p>
        </div>

        {/* Right Section: Testimonials */}
        <div className="relative grid grid-cols-1 gap-8">
          <div className="relative h-80 md:w-full w-[70%]  mx-auto">
            <AnimatePresence>
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.src}
                  initial={{ opacity: 0, scale: 0.9, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(i) ? 1 : 0.7,
                    scale: isActive(i) ? 1 : 0.95,
                    rotate: isActive(i) ? 0 : randomRotateY(),
                    zIndex: isActive(i) ? 40 : testimonials.length - i
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={t.src}
                    alt={t.name}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-bold text-[#1C1C1E]">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[active].designation}
              </p>
              <motion.p className="mt-4 text-base text-[#1C1C1E]/80">
                {testimonials[active].quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.015 * i }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-6">
              <button
                onClick={handlePrev}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-[#D9D9D9] hover:scale-105 transition"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-[#D9D9D9] hover:scale-105 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

