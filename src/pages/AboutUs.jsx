import React from 'react';
import { Target, Zap, Users, TrendingUp, Heart, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen ">
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      {/* Header Section */}
      <div className=" py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-bg-accent mb-4">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12  mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Our Past */}
            <div>
              <h2 className="text-2xl font-bold text-bg-accent mb-4 uppercase tracking-wide">
                Our Past:
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Think Beyond Ads was founded by four industry leaders—AJ, Daniel, Joseph, and Amr—each bringing 5-7 years of hands-on experience in Meta and Google Ads. Together, we built this agency with the mission to empower businesses through results-driven advertising strategies. Our combined expertise allows us to craft highly effective campaigns on Meta and Google Ads, helping brands grow and outperform the competition.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that marketing, when done right, is a powerful engine for business growth. Inspired by our collective experience in the industry, we created an agency that focuses solely on Meta and Google Ads to deliver exceptional results, driving sustainable revenue and increasing brand visibility.
              </p>
            </div>

            {/* Our Present */}
            <div>
              <h2 className="text-2xl font-bold text-bg-accent mb-4 uppercase tracking-wide">
                Our Present:
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At Think Beyond Ads, we specialize in Meta Ads (Facebook/Instagram) and Google Ads, crafting strategies that drive real business outcomes. Since our inception, we've remained focused on delivering high-quality advertising solutions that put the consumer at the center. Our team—AJ, Daniel, Joseph, and Amr—uses a mix of creative thinking, data-driven strategies, and deep knowledge of Meta and Google Ads to help brands achieve remarkable results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We've had the privilege of partnering with businesses across various industries, from small startups to established brands, providing them with targeted, effective campaigns that boost ROI. Through our close partnerships with Google and Facebook, we deliver tailored solutions that ensure each ad dollar is working as hard as possible to grow our clients' businesses.
              </p>
            </div>

            {/* Our Future */}
            <div>
              <h2 className="text-2xl font-bold text-bg-accent mb-4 uppercase tracking-wide">
                Our Future:
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Looking ahead, Think Beyond Ads is committed to expanding our services within Meta and Google Ads to continue driving exceptional results. Over the next five years, we plan to deepen our expertise and push the boundaries of digital advertising. We're focused on perfecting our approach to help clients maximize their investment in Meta and Google Ads, achieving higher visibility, lower costs, and sustainable growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our vision is clear: to remain a trusted partner for businesses that want to unlock their true potential through smart, performance-driven advertising on Meta and Google Ads.
              </p>
            </div>
          </div>

          {/* Right Column - Team Cards */}
          <div className="w-full">
            <h2 className="text-2xl font-bold text-bg-accent mb-8 text-center lg:text-left uppercase tracking-wide">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* AJ Card */}
              <div className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">AJ</h3>
                    <p className="text-sm opacity-90 text-center">Chief Client Officer & Media Strategy Lead</p>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-center border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-300 mb-2">AJ</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      AJ manages client relationships and leads the media buying and marketing efforts, ensuring each campaign is aligned with client goals and delivering exceptional results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Daniel Card */}
              <div className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Daniel</h3>
                    <p className="text-sm opacity-90 text-center">Chief Operations Officer & Sales Team Lead</p>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-center border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-300 mb-2">Daniel</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Daniel is responsible for managing client relations, ensuring seamless execution of projects, and leading the sales team while driving operational efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Joseph Card */}
              <div className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-green-500 to-teal-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Joseph</h3>
                    <p className="text-sm opacity-90 text-center">Chief Growth Officer & Lead Generation Expert</p>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-center border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-300 mb-2">Joseph</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Joseph drives new business by sourcing leads and identifying growth opportunities, playing a vital role in expanding the agency's reach and securing partnerships.
                    </p>
                  </div>
                </div>
              </div>

              {/* Amr Card */}
              <div className="group perspective-1000 h-64">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Amr</h3>
                    <p className="text-sm opacity-90 text-center">Chief Business Development Officer & Lead Strategist</p>
                  </div>
                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-center border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-300 mb-2">Amr</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Amr focuses on business development, securing strategic partnerships, and driving expansion efforts while formulating strategies that drive business forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[#12172B] rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-bg-accent mb-12 uppercase tracking-wide">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dream Boldly */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wide">
                Dream Boldly
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe bold, innovative thinking drives success. We aim to achieve what others think is impossible with Meta and Google Ads.
              </p>
            </div>

            {/* Create With Passion */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wide">
                Create With Passion
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our passion for Meta and Google Ads is what fuels our creative approach. Every campaign is built with dedication and energy to deliver results.
              </p>
            </div>

            {/* Ignite Solutions */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wide">
                Ignite Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're focused on finding solutions that work. Through Meta and Google Ads, we unlock opportunities for growth and transformation.
              </p>
            </div>

            {/* Cultivate Meaningful Relationships */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wide">
                Cultivate Meaningful Relationships
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our clients are at the center of everything we do. We build lasting relationships based on trust, collaboration, and shared success.
              </p>
            </div>

            {/* Deliver Stories */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wide">
                Deliver Stories
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We craft compelling ad strategies on Meta and Google Ads that tell your brand's story and connect with your audience on a deeper level.
              </p>
            </div>

            {/* Be a Catalyst for Change */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wide">
                Be a Catalyst for Change
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are constantly evolving our strategies to stay ahead in the ever-changing world of digital advertising, delivering measurable impact for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-16 bg-gradient-to-b from-[#023E8A] to-[#0096C7] rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Think Beyond Ads?
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            At Think Beyond Ads, we don't just run ads—we design performance-driven strategies exclusively for Meta and Google Ads that empower your brand to grow and succeed.
          </p>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => window.open('https://calendly.com/thinkbeyondads/30min')}
            className="bg-gradient-to-r from-[#023E8A] to-[#0096C7] text-white font-bold uppercase tracking-wide py-3 px-6 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Book a Call — Think Beyond Ads
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;