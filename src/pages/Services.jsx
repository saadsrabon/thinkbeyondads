import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const services = [
  {
    title: "Strategic Media Buying",
    desc: "Meta, Google, YouTube ads engineered for ROAS, not just reach.",
    image: "/images/media-buying.jpg",
    color: "#2BB3A2",
    detail: "Our media buyers combine targeting precision with creative iteration to generate sustainable, scalable growth across Meta, Google, and YouTube. We don't just buy ads — we engineer campaigns that convert."
  },
  {
    title: "Funnel Strategy & Development",
    desc: "High-converting flows built around clarity, logic, and urgency.",
    image: "/images/funnel-strategy.jpg",
    color: "#FFA133",
    detail: "We audit, blueprint, and develop full-funnel journeys that reduce friction and increase urgency. Built for your buyer psychology — not templates."
  },
  {
    title: "Conversion Infrastructure",
    desc: "Landing pages and on-site experience optimized for conversion.",
    image: "/images/conversion-infra.jpg",
    color: "#1A2238",
    detail: "We craft high-performance landing pages and UX flows that turn traffic into customers — rooted in copy psychology, speed, and brand design."
  },
  {
    title: "Conversion Tracking & Analytics",
    desc: "Real-time insights into where attention turns into action.",
    image: "/images/analytics.jpg",
    color: "#D9D9D9",
    detail: "Know exactly what works — and why. We implement analytics and attribution to measure the true impact of every dollar spent."
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const detailAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#F8F8F8] py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-[#1C1C1E]"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-[#1C1C1E]/80 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Designed to scale what works. Rooted in data. Built for brands with momentum.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-md transition duration-300 relative overflow-hidden hover:shadow-2xl hover:scale-[1.02]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none z-0"></div>
            <img src={service.image} alt={service.title} className="rounded-xl mb-5 w-full h-48 object-cover relative z-10" />
            <h3 className="text-2xl font-serif mb-2 relative z-10" style={{ color: service.color }}>
              {service.title}
            </h3>
            <p className="text-[#1C1C1E] text-base leading-relaxed relative z-10">
              {service.desc}
            </p>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="mt-4 p-4 bg-[#F8F8F8] border-t border-[#D9D9D9] rounded-b-xl text-sm text-[#1C1C1E]/90"
                  {...detailAnim}
                >
                  {service.detail}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
