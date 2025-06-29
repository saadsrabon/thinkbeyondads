import React from 'react';
import { ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';

const AboutUsHero = () => {
    const navigate = useNavigate()
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#023E8A] to-[#0096C7]">Think Beyond Ads</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by four industry leaders with 5-7 years of hands-on experience in Meta and Google Ads, we specialize in crafting results-driven advertising strategies that empower businesses to grow and outperform the competition.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We don't just run ads—we design performance-driven strategies exclusively for Meta and Google Ads that unlock your brand's true potential through smart, data-driven advertising solutions.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-600">5-7</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">2</div>
                <div className="text-sm text-gray-600">Ad Platforms</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button onClick={()=>navigate('/about')} className="group bg-gradient-to-b from-[#023E8A] to-[#0096C7] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Know More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3"></div>
            
            {/* Main content card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Meet Our Founders
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">AJ</div>
                    <div className="text-sm text-gray-600">Client Officer</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">Daniel</div>
                    <div className="text-sm text-gray-600">Operations Officer</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">Joseph</div>
                    <div className="text-sm text-gray-600">Growth Officer</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">Amr</div>
                    <div className="text-sm text-gray-600">Business Dev Officer</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 italic">
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