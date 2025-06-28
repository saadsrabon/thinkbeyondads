import { motion } from "framer-motion";
import logo from '../assets/clientlogo/logo (1).png';
import logo2 from '../assets/clientlogo/logo (2).png';
import logo3 from '../assets/clientlogo/logo (3).png';
import logo4 from '../assets/clientlogo/logo (4).png';
import logo5 from '../assets/clientlogo/logo (5).png';
import logo6 from '../assets/clientlogo/logo (6).webp';
import logo7 from '../assets/clientlogo/logo7.avif';
import logo8 from '../assets/clientlogo/logo8.png';
import logo9 from '../assets/clientlogo/logo9.png';
import logo10 from '../assets/clientlogo/logo10.jpg';
import logo11 from '../assets/clientlogo/logo11.png';
import logo12 from '../assets/clientlogo/logo12.jpg';
import logo13 from '../assets/clientlogo/logo13.jpg';
import logo14 from '../assets/clientlogo/logo14.jpg';

const logos = [
    logo,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
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
          <img key={idx} src={logo} alt="brand" loading="lazy" className="h-24 opacity-80" />
        ))}
      </motion.div>
    </div>
  );
}
