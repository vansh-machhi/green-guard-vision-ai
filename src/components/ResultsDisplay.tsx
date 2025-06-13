
import React from 'react';
import { CheckCircle, AlertTriangle, Info, Shield, Zap, Target } from 'lucide-react';

interface DetectionResult {
  cropName: string;
  disease: string;
  confidence: number;
  isHealthy: boolean;
  symptoms?: string[];
  treatment?: string[];
  preventionTips?: string[];
}

interface ResultsDisplayProps {
  result: DetectionResult;
  imageUrl: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, imageUrl }) => {
  const getStatusIcon = () => {
    if (result.isHealthy) {
      return <CheckCircle className="h-8 w-8 text-green-600" />;
    }
    return <AlertTriangle className="h-8 w-8 text-amber-600" />;
  };

  const getStatusColor = () => {
    if (result.isHealthy) return 'green';
    return 'amber';
  };

  const getConfidenceColor = () => {
    if (result.confidence >= 90) return 'text-green-600';
    if (result.confidence >= 70) return 'text-amber-600';
    return 'text-red-600';
  };

  const getConfidenceBarColor = () => {
    if (result.confidence >= 90) return 'bg-green-500';
    if (result.confidence >= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Main Result Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${result.isHealthy ? 'from-green-500 to-emerald-600' : 'from-amber-500 to-orange-600'} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {getStatusIcon()}
              <div>
                <h2 className="text-2xl font-bold">Analysis Complete</h2>
                <p className="text-white/90">AI-powered crop health assessment</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{result.confidence}%</div>
              <div className="text-white/90 text-sm">Confidence</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Analyzed Image</h3>
              <div className="relative">
                <img
                  src={imageUrl}
                  alt="Analyzed crop"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {result.cropName}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Detection Results</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700">Crop Type</span>
                    <span className="font-semibold text-gray-900">{result.cropName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700">Health Status</span>
                    <span className={`font-semibold ${result.isHealthy ? 'text-green-600' : 'text-amber-600'}`}>
                      {result.disease}
                    </span>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">Confidence Level</span>
                      <span className={`font-semibold ${getConfidenceColor()}`}>
                        {result.confidence}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getConfidenceBarColor()} transition-all duration-500`}
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information Cards */}
      {!result.isHealthy && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Symptoms Card */}
          {result.symptoms && result.symptoms.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Info className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Symptoms</h3>
              </div>
              <ul className="space-y-2">
                {result.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Treatment Card */}
          {result.treatment && result.treatment.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Treatment</h3>
              </div>
              <ul className="space-y-2">
                {result.treatment.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Prevention Tips */}
      {result.preventionTips && result.preventionTips.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <Target className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Prevention Tips</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {result.preventionTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
