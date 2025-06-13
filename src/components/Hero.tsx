
import React from 'react';
import { ArrowDown, Shield, Zap, Target } from 'lucide-react';

const Hero = () => {
  const scrollToDetection = () => {
    document.getElementById('detect')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200/30 rounded-full blur-lg" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 mb-6">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">AI-Powered Crop Protection</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
              Green Guard
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Protect your crops with cutting-edge AI technology. 
            <br className="hidden md:block" />
            Instant disease detection with professional-grade accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToDetection}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Detection Now
            </button>
            <button className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors border-2 border-green-600 hover:border-green-700 px-8 py-4 rounded-full hover:bg-green-50">
              Learn More
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200">
              <Zap className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <Target className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">95%+ Accuracy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200">
              <Shield className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Expert Recommendations</span>
            </div>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-green-600 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
