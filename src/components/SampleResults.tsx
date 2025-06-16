
import React from 'react';
import { CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const SampleResults = () => {
  const sampleDetections = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      cropType: "Tomato",
      healthStatus: "Late Blight",
      confidence: 94,
      isHealthy: false,
      symptoms: "Dark lesions on leaves, white fuzzy growth"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      cropType: "Potato",
      healthStatus: "Healthy",
      confidence: 97,
      isHealthy: true,
      symptoms: "No visible symptoms detected"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop",
      cropType: "Corn",
      healthStatus: "Northern Leaf Blight",
      confidence: 89,
      isHealthy: false,
      symptoms: "Cigar-shaped lesions, yellowing leaves"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop",
      cropType: "Wheat",
      healthStatus: "Rust Disease",
      confidence: 92,
      isHealthy: false,
      symptoms: "Orange-red pustules on leaves"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      cropType: "Apple",
      healthStatus: "Healthy",
      confidence: 96,
      isHealthy: true,
      symptoms: "No disease symptoms present"
    }
  ];

  const getStatusIcon = (isHealthy: boolean) => {
    return isHealthy ? (
      <CheckCircle className="h-6 w-6 text-green-600" />
    ) : (
      <AlertTriangle className="h-6 w-6 text-amber-600" />
    );
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 70) return 'text-amber-600';
    return 'text-red-600';
  };

  const getConfidenceBarColor = (confidence: number) => {
    if (confidence >= 90) return 'bg-green-500';
    if (confidence >= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Sample Detection Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our AI accurately identifies crop diseases and provides detailed analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sampleDetections.map((sample) => (
            <div key={sample.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100">
                <img
                  src={sample.image}
                  alt={`${sample.cropType} sample`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {sample.cropType}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {getStatusIcon(sample.isHealthy)}
                  <h3 className="text-lg font-semibold text-gray-800">
                    Detection Results
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Health Status */}
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Health Status</span>
                    <span className={`text-sm font-semibold ${sample.isHealthy ? 'text-green-600' : 'text-amber-600'}`}>
                      {sample.healthStatus}
                    </span>
                  </div>

                  {/* Confidence Level */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Confidence</span>
                      <span className={`text-sm font-semibold ${getConfidenceColor(sample.confidence)}`}>
                        {sample.confidence}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getConfidenceBarColor(sample.confidence)}`}
                        style={{ width: `${sample.confidence}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600 block mb-1">Symptoms</span>
                    <p className="text-sm text-gray-700">{sample.symptoms}</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-colors text-sm font-medium">
                    View Full Analysis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
              <p className="text-gray-600">Average Accuracy</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600">Diseases Detected</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <AlertTriangle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">&lt;3s</h3>
              <p className="text-gray-600">Analysis Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleResults;
