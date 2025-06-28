import { motion } from "framer-motion";

const logos = [
  "/logos/austin.png",
  "/logos/salvation.png",
  "/logos/bucees.png",
  "/logos/keller.png",
  "/logos/cabobobs.png",
  "/logos/nulo.png",
  "/logos/popalock.png",
  "/logos/pci.png",
  "/logos/ricks.png",
];

export default function BrandCarousel() {
  return (
    <div className="overflow-hidden py-6 relative">
      <motion.div
        className="flex gap-16 animate-scroll whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <img key={idx} src={logo} alt="brand" className="h-12 opacity-80" />
        ))}
      </motion.div>
    </div>
  );
}
