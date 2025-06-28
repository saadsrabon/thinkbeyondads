import { motion } from "framer-motion";
import logo from '../assets/clientlogo/logo (1).png';
import logo2 from '../assets/clientlogo/logo (2).png';
import logo3 from '../assets/clientlogo/logo (3).png';
import logo4 from '../assets/clientlogo/logo (4).png';
import logo5 from '../assets/clientlogo/logo (5).png';
import logo6 from '../assets/clientlogo/logo (6).webp';
const logos = [
    logo,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    // Add more logos as needed
];

export default function BrandCarousel() {
  return (
    <div className="overflow-hidden py-6 relative mt-4">
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
          <img key={idx} src={logo} alt="brand" className="h-24 opacity-80" />
        ))}
      </motion.div>
    </div>
  );
}
