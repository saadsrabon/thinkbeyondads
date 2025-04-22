

function App() {


  return (
    
      <div className="relative">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-serif text-[#023E8A]">ThinkBeyondAds</div>
        <ul className="hidden md:flex space-x-6 font-sans text-sm text-gray-700">
          <li className="hover:text-[#0096C7] cursor-pointer">Home</li>
          <li className="hover:text-[#0096C7] cursor-pointer">Services</li>
          <li className="hover:text-[#0096C7] cursor-pointer">Work</li>
          <li className="hover:text-[#0096C7] cursor-pointer">About</li>
          <li className="hover:text-[#0096C7] cursor-pointer">Contact</li>
        </ul>
        <button className="bg-[#023E8A] text-white px-4 py-2 rounded font-bold uppercase text-xs shadow hover:bg-[#0096C7] transition">
          Book Call
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#F9FAFB] px-4 pt-32">
        <div className="mb-4 text-sm font-semibold text-blue-700">
          ✨ Inspired Strategy, Clear Messaging & Conversion Design
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 max-w-4xl leading-tight">
          Ads Are Just the Beginning
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl font-sans">
          We don’t just run ads—we engineer growth systems. Strategic media buying,
          funnel optimization, and conversion-driven web design—ThinkBeyondAds is
          your growth partner.
        </p>
        <button className="mt-8 bg-gradient-to-r from-[#023E8A] to-[#0096C7] text-white font-bold uppercase tracking-wide py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform">
          Book a Call — ThinkBeyondAds
        </button>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-left">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-base font-bold text-[#023E8A] mb-1">Scan the Internet</h3>
            <p className="text-sm text-gray-600">
              Search billions of sites in seconds to protect your brand.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-base font-bold text-[#023E8A] mb-1">Run Similarity Reports</h3>
            <p className="text-sm text-gray-600">
              Instantly identify who’s copying your creative or assets.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-base font-bold text-[#023E8A] mb-1">Take Them Down</h3>
            <p className="text-sm text-gray-600">
              DMCA takedown, cease & desist, or legal enforcement—done.
            </p>
          </div>
        </div>

        {/* Client Logos or Testimonials */}
        <div className="mt-20 w-full max-w-5xl text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Trusted by</h2>
          <div className="flex justify-center gap-10 flex-wrap">
            <img src="/logos/tinuiti.svg" alt="Tinuiti" className="h-10" />
            <img src="/logos/kreative.svg" alt="Kreative Media" className="h-10" />
            <img src="/logos/mts.svg" alt="MoreThanScaling" className="h-10" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
