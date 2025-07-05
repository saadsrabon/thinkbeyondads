import { motion } from "framer-motion";
import logo from "../assets/clientlogo/logo (1).webp";
import logo2 from "../assets/clientlogo/logo (2).webp";
import logo3 from "../assets/clientlogo/logo (3).webp";
import logo4 from "../assets/clientlogo/logo (4).webp";
import logo5 from "../assets/clientlogo/logo (5).webp";
import logo6 from "../assets/clientlogo/logo (6).webp";
import logo7 from "../assets/clientlogo/logo7.webp";
import logo8 from "../assets/clientlogo/logo8.png";
import logo9 from "../assets/clientlogo/logo9.webp";
import logo10 from "../assets/clientlogo/logo10.webp";
import logo11 from "../assets/clientlogo/logo11.webp";
import logo12 from "../assets/clientlogo/logo12.webp";
import logo13 from "../assets/clientlogo/logo13.webp";
import logo14 from "../assets/clientlogo/logo14.webp";

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
];

export default function BrandCarousel() {
  return (
    <div className="overflow-hidden py-6 relative mt-4 w-full">
      <div
      style={{ willChange: "transform" }}
        className="carousel-track flex gap-8 whitespace-nowrap w-max"
        
      >
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="brand"
            loading="lazy"
            draggable={false}
            className=" w-auto h-12  opacity-80 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
