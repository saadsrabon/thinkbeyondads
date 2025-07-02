import React from 'react';
import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import daniel from '../assets/headshots/Daniel Coronel.JPG';
import joseph from '../assets/headshots/Joseph Johnson.JPG';
const AboutUsHero = () => {
    const navigate = useNavigate()
  return (
    <section className="py-20 px-4  relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div> */}
      {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div> */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-bg-accent rounded-full border border-bg-accent/30 backdrop-blur-sm">
                <span className="text-white text-sm font-medium">Meet Your Dream Team</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                About <span className="text-transparent bg-clip-text bg-bg-accent">Think Beyond Ads</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded by four industry leaders, each with 5-7 years of hands-on experience in Meta and Google Ads, we specialize in crafting results-driven advertising strategies that empower businesses to grow and outperform the competition.
              </p>
              
              <p className="text-gray-400 leading-relaxed text-lg">
                We don't just run ads—we design performance-driven strategies exclusively for Meta and Google Ads that unlock your brand's true potential through smart, data-driven advertising solutions.
              </p>
            </div>

            {/* Key Stats */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">4-6X</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">Average ROI across accounts</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">20%</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">Monthly revenue increase</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">300+</div>
                <div className="text-sm text-gray-400 mt-2 font-medium">Businesses helped grow</div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-6">
              <button 
                onClick={()=>navigate('/about')} 
                className="group bg-bg-accent text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              >
                <div className="absolute inset-0  group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Know More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 blur-sm"></div>
            
            {/* Main content card */}
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 transform -rotate-0 hover:rotate-0 transition-all duration-500 hover:shadow-purple-500/20">
              <div className="text-center space-y-8">
                {/* <div className="flex justify-center space-x-6 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                </div> */}
                
                <h3 className="text-3xl font-bold text-white mb-6 uppercase">
                  Meet your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> dream team</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-5 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="font-bold text-white text-lg">AJ</div>
                    <div className='flex items-center justify-center mb-2 py-4'>
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className='w-24 h-24 rounded-full object-fit ' />
                    </div>
                    <div className="text-sm text-blue-300 font-medium">Client Officer</div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="font-bold text-white text-lg">Daniel</div>
                    <div className='flex items-center justify-center mb-2 py-4'>
                      <img src={daniel} alt="" className='w-24 h-24 rounded-full object-cover' />
                    </div>
                    <div className="text-sm text-purple-300 font-medium">Operations Officer</div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="font-bold text-white text-lg">Joseph</div>
                    <div className='flex items-center justify-center mb-2 py-4'>
                      <img src={joseph} alt="" className='w-24 h-24 rounded-full object-bottom ' />
                    </div>
                    <div className="text-sm text-pink-300 font-medium">Growth Officer</div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="font-bold text-white text-lg">Amr</div>
                    <div className='flex items-center justify-center mb-2 py-4'>
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className='w-24 h-24 rounded-full object-fit ' />
                    </div>
                    <div className="text-sm text-green-300 font-medium">Business Dev Officer</div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-700/50">
                  <p className="text-sm text-gray-400 italic font-medium">
                    "Specializing exclusively in Meta & Google Ads"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;