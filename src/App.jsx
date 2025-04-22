import { useEffect, useRef } from "react";

function App() {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const handleMouseMove = (e) => {
      const rect = textElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update the position of the shine effect
      textElement.style.setProperty("--x", `${x}px`);
      textElement.style.setProperty("--y", `${y}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#F9FAFB] px-4 pt-32">
      <div className="mb-4 text-sm font-semibold text-blue-700">
        ✨ Inspired Strategy, Clear Messaging & Conversion Design
      </div>
      <h1 className="text-4xl md:text-6xl font-serif text-gray-900 max-w-4xl leading-tight">
        Ads Are Just the Beginning
      </h1>
      <p
        ref={textRef}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #000 0%, #000 50%, #7b68ee 51%, #3498db 100%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "var(--x, 0) var(--y, 0)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          transition: "background-position 0.05s ease",
        }}
        className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl font-sans"
      >
        We don’t just run ads—we engineer growth systems. Strategic media
        buying, funnel optimization, and conversion-driven web
        design—ThinkBeyondAds is your growth partner.
      </p>
      <button className="mt-8 bg-gradient-to-r from-[#023E8A] to-[#0096C7] text-white font-bold uppercase tracking-wide py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
        Book a Call — ThinkBeyondAds
      </button>

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-left">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-base font-bold text-[#023E8A] mb-1">
            Scan the Internet
          </h3>
          <p className="text-sm text-gray-600">
            Search billions of sites in seconds to protect your brand.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-base font-bold text-[#023E8A] mb-1">
            Run Similarity Reports
          </h3>
          <p className="text-sm text-gray-600">
            Instantly identify who’s copying your creative or assets.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-base font-bold text-[#023E8A] mb-1">
            Take Them Down
          </h3>
          <p className="text-sm text-gray-600">
            DMCA takedown, cease & desist, or legal enforcement—done.
          </p>
        </div>
      </div>

      {/* Client Logos or Testimonials */}
      <div className="mt-20 w-full max-w-5xl text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
          Trusted by
        </h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <img src="/logos/tinuiti.svg" alt="Tinuiti" className="h-10" />
          <img
            src="/logos/kreative.svg"
            alt="Kreative Media"
            className="h-10"
          />
          <img src="/logos/mts.svg" alt="MoreThanScaling" className="h-10" />
        </div>
      </div>
    </section>
  );
}

export default App;
