import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp, Users, Target, Zap, Award, BarChart3, Eye, DollarSign, Clock, CheckCircle, Building, Handshake } from 'lucide-react';
import p from '../assets/1.jpeg'
import p1 from '../assets/2.jpeg'
import p2 from '../assets/3.jpeg'
import p3 from '../assets/4.jpeg'

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
  {
    id: 1,
    title: "Home Health Aide Business",
    industry: "Healthcare Services",
    icon: "🏥",
    timeline: "30 Days",
    color: "from-emerald-400 to-teal-500",
    metrics: [
      { label: "More Leads", value: "51x", icon: TrendingUp },
      { label: "Lower CPL", value: "96%", icon: DollarSign },
      { label: "Cost Per Lead", value: "$14.76", icon: Target },
      { label: "Total Leads", value: "51", icon: Users }
    ],
    slides: [
      {
        type: "overview",
        title: "Client Overview",
        content: {
          industry: "Home Healthcare",
          service: "Paid Ads Strategy & Lead Generation",
          timeline: "30 Days",
          challenge: "Poor targeting and weak engagement with previous agency"
        }
      },
      {
        type: "challenge",
        title: "The Challenge",
        content: {
          description: "The client previously worked with another agency, spending $402.65 on ads that reached over 26,000 people - yet only one lead came in after 30 days. They were frustrated with poor targeting, weak engagement, and no real system to track or convert leads.",
          metrics: [
            { label: "Previous Ad Spend", value: "$402.65" },
            { label: "Total Reach", value: "26,623" },
            { label: "Total Leads", value: "1" },
            { label: "Cost Per Lead", value: "$402.65" }
          ]
        }
      },
      {
        type: "solution",
        title: "Our Solution",
        content: {
          strategies: [
            { title: "Demographic Targeting", description: "Reach family decision-makers and caregiver applicants" },
            { title: "High-Impact Video Ads", description: "Unique value proposition to stand out" },
            { title: "Real-Time Lead Delivery", description: "Recorded calls for full transparency" },
            { title: "Ongoing Performance Tracking", description: "Optimize and scale continuously" }
          ]
        }
      },
      {
        type: "results",
        title: "Results - First 30 Days",
        content: {
          comparison: [
            { metric: "Total Leads", before: "1", after: "51", improvement: "51x" },
            { metric: "Cost Per Lead", before: "$402.65", after: "$14.76", improvement: "96% lower" },
            { metric: "Total Reach", before: "26,623", after: "16,071", improvement: "Better targeting" },
            { metric: "Lead Conversion Rate", before: "0.0037%", after: "0.32%", improvement: "86x better" }
          ],
          highlights: [
            "51x More Leads Generated",
            "96% Lower Cost-Per-Lead",
            "Real-time lead delivery & full transparency"
          ]
        }
      },
      {
        type: "testimonial",
        title: "Client Testimonial",
        content: {
          quote: "The targeting made all the difference. We stopped wasting money on the wrong audience and finally saw real, qualified leads coming in.",
          author: "Home Health Aide Business Owner",
          results: ["51x More Leads", "96% Lower CPL", "$14.76 Cost Per Lead"]
        }
      },
      {
        type: "images",
        title: "Case Study Images",
        content: {
          images: [

            p, p1, p2, p3
]
        }
      }
    ]
  },
  {
    id: 2,
    title: "Performance Marketing Client",
    industry: "E-commerce",
    icon: "🚀",
    timeline: "6 Months",
    color: "from-purple-400 to-pink-500",
    metrics: [
      { label: "ROI Increase", value: "2000%", icon: TrendingUp },
      { label: "Search ROI", value: "19x", icon: BarChart3 },
      { label: "Facebook ROI", value: "35x", icon: Target },
      { label: "Quality Score", value: "10/10", icon: Award }
    ],
    slides: [
      {
        type: "overview",
        title: "Client Overview",
        content: {
          industry: "Highly Competitive E-commerce",
          service: "Search & Facebook Ad Optimization",
          timeline: "6 Months",
          challenge: "Low ROI and commoditized market competition"
        }
      },
      {
        type: "challenge",
        title: "The Challenge",
        content: {
          description: "A client operating in a highly competitive, almost completely commoditized market approached us with low-performing campaigns. Their Google Ads were generating only 1.2x ROI and Facebook ads at 1.07x ROI.",
          metrics: [
            { label: "Initial Google Ads ROI", value: "1.2x" },
            { label: "Initial Facebook ROI", value: "1.07x" },
            { label: "Market Type", value: "Highly Competitive" },
            { label: "Competition Level", value: "Commoditized" }
          ]
        }
      },
      {
        type: "solution",
        title: "Our Approach",
        content: {
          strategies: [
            { title: "Scientific Method Testing", description: "Weekly hypothesis testing on 50% of ad spend" },
            { title: "Audience Stratification", description: "Split audiences by search intent and behavior" },
            { title: "Quality Score Optimization", description: "Achieved 10/10 quality scores vs industry 7/10" },
            { title: "AI-Powered Optimization", description: "Combined manual supervision with algorithmic optimization" }
          ]
        }
      },
      {
        type: "results",
        title: "Google Ads Results",
        content: {
          timeline: [
            { month: "Month 1", roi: "9x", improvement: "650%" },
            { month: "Month 2", roi: "17x", improvement: "1,317%" },
            { month: "Month 3", roi: "19x", improvement: "1,483%" },
            { month: "Month 4", roi: "16x", improvement: "1,233%" }
          ],
          highlights: [
            "1,333% improvement in 4 months",
            "Cost per conversion halved",
            "Quality score improved to 10/10"
          ]
        }
      },
      {
        type: "results",
        title: "Facebook Ads Results",
        content: {
          timeline: [
            { month: "Month 1", roi: "27x", improvement: "2,422%" },
            { month: "Month 2", roi: "25x", improvement: "2,237%" },
            { month: "Month 3", roi: "32x", improvement: "2,890%" },
            { month: "Month 4", roi: "26x", improvement: "2,330%" }
          ],
          highlights: [
            "Started from 1.07x ROI",
            "32x ROI peak performance",
            "Significant brand awareness boost"
          ]
        }
      },
      {
        type: "methodology",
        title: "Our VQCV Framework",
        content: {
          framework: [
            { letter: "V", title: "Volume", description: "Measure numbers in their purest form" },
            { letter: "Q", title: "Quality", description: "Ensure traffic converts effectively" },
            { letter: "C", title: "Cost", description: "Marketing efforts bring real revenue" },
            { letter: "V", title: "Value", description: "Measure return on investment" }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: "Door Step Solutions",
    industry: "Multifamily Services",
    icon: "🏢",
    timeline: "12 Months",
    color: "from-blue-400 to-indigo-600",
    metrics: [
      { label: "Communities Growth", value: "550%", icon: TrendingUp },
      { label: "From Communities", value: "2", icon: Building },
      { label: "To Communities", value: "13", icon: Building },
      { label: "Strategic Partnership", value: "Secured", icon: Handshake }
    ],
    slides: [
      {
        type: "overview",
        title: "Case Study Overview",
        content: {
          industry: "Multifamily Services",
          service: "Full-funnel Growth System & Digital Transformation",
          timeline: "12 Months",
          challenge: "No digital presence with locked-in client contracts"
        }
      },
      {
        type: "challenge",
        title: "The Problem",
        content: {
          description: "Door Step Solutions was servicing only 2 multifamily communities with no digital presence and no consistent lead generation system. They faced overpriced competitors with long-term contracts that locked clients in.",
          metrics: [
            { label: "Initial Communities", value: "2" },
            { label: "Digital Presence", value: "None" },
            { label: "Lead Generation", value: "Inconsistent" },
            { label: "Competition", value: "Overpriced & Locked Contracts" }
          ]
        }
      },
      {
        type: "solution",
        title: "Full-funnel Growth Strategy",
        content: {
          strategies: [
            { title: "Complete Rebrand", description: "Rebuilt brand identity with optimized website" },
            { title: "Multi-Channel Advertising", description: "Google Ads + LinkedIn targeting for decision makers" },
            { title: "Service Expansion", description: "Expanded service offerings to capture more market share" },
            { title: "Strategic Partnership", description: "Secured equity deal with Momentum Multifamily for scale" }
          ],
          press: "https://www.momentummultifamily.com/resources/momentum-multifamily-forms-strategic-partnership-with-door-step-solutions-expanding-resident-service-offerings-to-portfolio-and-industry"
        }
      },
      {
        type: "results",
        title: "Hypergrowth Unlocked",
        content: {
          comparison: [
            { metric: "Communities Served", before: "2", after: "13", improvement: "550% growth" },
            { metric: "Digital Presence", before: "None", after: "Full Website + Ads", improvement: "Complete transformation" },
            { metric: "Lead Generation", before: "Inconsistent", after: "Hybrid Sales Engine", improvement: "Systematic approach" },
            { metric: "Revenue Model", before: "Project-based", after: "Recurring + Scale", improvement: "Predictable growth" }
          ],
          highlights: [
            "Grew from 2 to 13 communities (550% growth)",
            "Built hybrid digital-field sales engine",
            "Secured recurring revenue model with scale potential"
          ]
        }
      },
      {
        type: "partnership",
        title: "Strategic Partnership Achievement",
        content: {
          quote: "This partnership expands our resident service offerings and demonstrates our commitment to providing comprehensive solutions for multifamily communities.",
          author: "Momentum Multifamily Partnership",
          results: ["Equity Partnership Secured", "Industry Recognition", "Scalable Growth Platform"],
          pressLink: "https://www.momentummultifamily.com/resources/momentum-multifamily-forms-strategic-partnership-with-door-step-solutions-expanding-resident-service-offerings-to-portfolio-and-industry"
        }
      }
    ]
  }
];

  const nextSlide = () => {
    const maxSlides = selectedCase ? selectedCase.slides.length - 1 : 0;
    setCurrentSlide(prev => prev < maxSlides ? prev + 1 : 0);
  };

  const prevSlide = () => {
    const maxSlides = selectedCase ? selectedCase.slides.length - 1 : 0;
    setCurrentSlide(prev => prev > 0 ? prev - 1 : maxSlides);
  };

  const selectCase = (caseStudy) => {
    setSelectedCase(caseStudy);
    setCurrentSlide(0);
  };

  const closeCase = () => {
    setSelectedCase(null);
    setCurrentSlide(0);
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    if (!selectedCase) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [selectedCase, currentSlide]);

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedCase.icon}</div>
              <h2 className="text-3xl font-bold text-white mb-2">{selectedCase.title}</h2>
              <p className="text-blue-100 text-lg">{slide.content.industry}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="text-white font-semibold mb-2">Timeline</h3>
                <p className="text-blue-100">{slide.content.timeline}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target className="w-8 h-8 text-blue-300 mb-3" />
                <h3 className="text-white font-semibold mb-2">Service</h3>
                <p className="text-blue-100">{slide.content.service}</p>
              </div>
            </div>
            <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Challenge
              </h3>
              <p className="text-blue-100">{slide.content.challenge}</p>
            </div>
          </div>
        );

      case "challenge":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
              <p className="text-blue-100 text-lg leading-relaxed">{slide.content.description}</p>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
              {slide.content.metrics.map((metric, index) => (
                <div key={index} className="bg-red-500/20 border border-red-400/30 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-red-300 mb-2">{metric.value}</div>
                  <div className="text-blue-100 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "solution":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Solution</h2>
            </div>
            <div className="space-y-4">
              {slide.content.strategies.map((strategy, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{strategy.title}</h3>
                    <p className="text-blue-100">{strategy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "results":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">{slide.title}</h2>
            </div>
            
            {slide.content.comparison && (
              <div className="space-y-4">
                {slide.content.comparison.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-white font-semibold">{item.metric}</h3>
                      <span className="text-green-300 font-bold">{item.improvement}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-red-300">Before: {item.before}</div>
                      <ArrowRight className="w-5 h-5 text-blue-300" />
                      <div className="text-green-300">After: {item.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {slide.content.timeline && (
              <div className="grid grid-cols-2 gap-4">
                {slide.content.timeline.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-sm text-blue-300 mb-2">{item.month}</div>
                    <div className="text-3xl font-bold text-white mb-2">{item.roi}</div>
                    <div className="text-green-300 text-sm">{item.improvement}</div>
                  </div>
                ))}
              </div>
            )}

            {slide.content.highlights && (
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-center">Key Highlights</h3>
                <div className="space-y-2">
                  {slide.content.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-blue-100">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        );
      case "images":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Case Study Images</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols
-3 gap-6">
              {slide.content.images.map((image, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <img src={image} alt={`Case Study Image ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          </div>
        );

      case "testimonial":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Client Testimonial</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center relative">
              <div className="text-6xl text-blue-300 mb-4 opacity-50">"</div>
              <p className="text-xl text-blue-100 italic mb-6 leading-relaxed">
                {slide.content.quote}
              </p>
              <div className="text-blue-300 font-semibold">— {slide.content.author}</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {slide.content.results.map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-4 text-center">
                  <div className="text-white font-bold">{result}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "methodology":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our VQCV Framework</h2>
              <p className="text-blue-100">How we insert checks & balances</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {slide.content.framework.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.letter}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (selectedCase) {
    const currentSlideData = selectedCase.slides[currentSlide];
    
    return (
      <div className="min-h-screen bg-gradient-to-r from-[#023E8A] to-[#0096C7] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 p-6 flex justify-between items-center">
          <button
            onClick={closeCase}
            className="text-white hover:text-blue-300 transition-colors flex items-center space-x-2"
          >
            <ChevronLeft className="w-6 h-6" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="text-white text-center">
            <div className="text-sm opacity-75">
              {currentSlide + 1} / {selectedCase.slides.length}
            </div>
          </div>

          <div className="text-white text-right">
            <div className="text-sm opacity-75">Think Beyond Ads</div>
          </div>
        </div>

        {/* Slide Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <div className="min-h-[70vh] flex items-center justify-center">
            {renderSlideContent(currentSlideData)}
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-10 mb-4">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-2">
            {selectedCase.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  relative overflow-hidden text-black">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full"></div>
      </div>

      {/* Header */}
 

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-[#023E8A] to-[#0096C7] text-transparent bg-clip-text  mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl  mb-8 leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve 
            remarkable growth through strategic advertising and lead generation.
          </p>
        
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient-to-b from-[#023E8A] to-[#0096C7]  text-center mb-12">Client Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-gradient-to-b from-[#023E8A] to-[#0096C7] backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all hover:scale-105 cursor-pointer group"
                onClick={() => selectCase(caseStudy)}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{caseStudy.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-blue-200 text-sm">{caseStudy.industry}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-blue-200 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-200 text-sm">{caseStudy.timeline}</span>
                  <div className="flex items-center text-white group-hover:text-blue-300 transition-colors">
                    <span className="text-sm mr-2">View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Coming Soon Cards */}
            <div className="bg-gradient-to-b from-[#023E8A] to-[#0096C7] backdrop-blur-sm rounded-2xl p-8 border border-white/10 opacity-60">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏗️</div>
                <h3 className="text-xl font-bold text-white mb-2">Construction Company</h3>
                <p className="text-blue-200 text-sm">Coming Soon</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[1,2,3,4].map((_, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">--</div>
                    <div className="text-blue-200 text-xs">Metric</div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-blue-200 text-sm">Case Study Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className=" mb-8 text-lg">
            Stop guessing. Start generating real leads with proven strategies.
          </p>
          <button className="bg-gradient-to-b from-[#023E8A] to-[#0096C7] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105">
            Book Your Free Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;