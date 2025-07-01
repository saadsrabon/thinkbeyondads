import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import FooterImage from '../assets/footer-image.png';
import PartnerBadge from '../assets/clientlogo/logo (1).png'; // Use the correct relative path

export default function Footer() {
  return (
    <footer className="bg-[#1A2238] text-white px-6 md:px-20 py-14">
      <div className=" mb-12 bg-[#12172B] p-8 rounded-xl text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Unlock Your Business’s Full Potential</h2>
        <p className="text-sm md:text-base text-gray-300 mb-6">
          Ready to drive real growth? Let’s transform your ads into a powerhouse for long-term success.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#FFA133] text-black font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-orange-500 transition"
        >
          Book Your Strategy Call Now
        </a>

        {/* Partner Badges */}
        <div className="mt-8 flex justify-center">
          <img src={PartnerBadge} alt="Google and Meta Partner" className="h-12 md:h-14 object-contain" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10">
        {/* Brand */}
        <div className="flex flex-col justify-center items-start">
          <div>
            <img className="w-30 h-30 object-cover -mt-10 -ml-3.5" src={FooterImage} alt="Footer Logo" />
          </div>
          <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
            We engineer full-funnel growth systems that help high-LTV brands
            scale with strategy, not guesswork. Ads are just the beginning.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col justify-between md:items-center space-y-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Quick Links
          </h3>
          <div className="flex flex-col justify-center items-start space-y-4">
            <a href="/services" className="hover:text-teal-300 text-sm">Services</a>
            <a href="/case-studies" className="hover:text-teal-300 text-sm">Case Studies</a>
            <a href="/about" className="hover:text-teal-300 text-sm">About Us</a>
            <a href="/contact" className="hover:text-teal-300 text-sm">Contact</a>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Ready to Scale?
          </h3>
          <a
            href="/contact"
            className="inline-block bg-[#FFA133] text-black font-bold uppercase text-sm px-5 py-3 rounded-md hover:bg-orange-500 transition"
          >
            Book a Discovery Call
          </a>
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="https://linkedin.com" className="hover:text-teal-300"><FaLinkedin /></a>
            <a href="https://twitter.com" className="hover:text-teal-300"><FaTwitter /></a>
            <a href="mailto:hello@thinkbeyondads.com" className="hover:text-teal-300"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Banner CTA */}
      

      {/* Bottom Line */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
        <span>© {new Date().getFullYear()} ThinkBeyondAds. All rights reserved.</span>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="/privacy-policy" className="hover:text-teal-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-teal-300">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
