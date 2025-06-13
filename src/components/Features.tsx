
import React from 'react';
import { Zap, Shield, Target, Brain, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Detection",
      description: "Our deep learning models trained on thousands of crop images provide accurate disease identification across multiple crop types.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive analysis results in seconds, not hours. Upload, analyze, and receive treatment recommendations instantly.",
      color: "green"
    },
    {
      icon: Target,
      title: "95%+ Accuracy",
      description: "State-of-the-art computer vision technology ensures highly accurate disease detection with detailed confidence scores.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Expert Recommendations",
      description: "Receive professional treatment suggestions and prevention strategies based on agricultural best practices.",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access crop health analysis anytime, anywhere. No need to wait for agricultural experts or lab results.",
      color: "amber"
    },
    {
      icon: Award,
      title: "Trusted Technology",
      description: "Built with cutting-edge AI technology and validated by agricultural professionals worldwide.",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-100",
      green: "from-green-500 to-green-600 text-green-600 bg-green-100",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-100",
      emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-100",
      amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-100",
      red: "from-red-500 to-red-600 text-red-600 bg-red-100"
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for comprehensive crop health monitoring and disease management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const [gradientClass, textClass, bgClass] = colorClasses.split(' ');
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className={`bg-gradient-to-br ${gradientClass} p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-green-100">Crop Types Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-green-100">Detection Accuracy</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-green-100">Images Analyzed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Service Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
