import React from 'react';
import { CheckCircle, AlertTriangle, Info, Shield, Zap, Target, XCircle, Camera, AlertCircle } from 'lucide-react';

interface DetectionResult {
  cropName: string;
  disease: string;
  confidence: number;
  isHealthy: boolean;
  symptoms?: string[];
  treatment?: string[];
  preventionTips?: string[];
  isValidCrop?: boolean;
  errorMessage?: string;
}

interface ResultsDisplayProps {
  result: DetectionResult;
  imageUrl: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, imageUrl }) => {
  // Enhanced handling for invalid crop images
  if (result.isValidCrop === false) {
    console.log('Displaying invalid image result:', result.errorMessage);
    
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Enhanced header for invalid images */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-600 dark:to-red-700 p-6 text-white">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <XCircle className="h-8 w-8" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Invalid Image Detected</h2>
                <p className="text-white/90 mt-1">Only crop images can be analyzed</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image display with overlay */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Uploaded Image
                </h3>
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt="Rejected image"
                    className="w-full h-64 object-cover rounded-xl shadow-lg opacity-75"
                  />
                  <div className="absolute inset-0 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                      NOT DETECTABLE
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced error message */}
              <div className="space-y-6 flex flex-col justify-center">
                <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-200 dark:border-red-800">
                  <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <AlertCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3">
                    Analysis Failed
                  </h3>
                  <p className="text-red-600 dark:text-red-300 text-lg font-medium mb-4">
                    {result.errorMessage}
                  </p>
                  
                  {/* Guidelines for valid uploads */}
                  <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-700">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Upload Guidelines
                    </h4>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>✓ Crop plants and leaves</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>✓ Agricultural vegetation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>✓ Clear, well-lit images</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>✗ Humans, animals, or objects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original results display for valid crops
  const getStatusIcon = () => {
    if (result.isHealthy) {
      return <CheckCircle className="h-8 w-8 text-green-600" />;
    }
    return <AlertTriangle className="h-8 w-8 text-amber-600" />;
  };

  const getConfidenceColor = () => {
    if (result.confidence >= 90) return 'text-green-600 dark:text-green-400';
    if (result.confidence >= 70) return 'text-amber-600 dark:text-amber-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getConfidenceBarColor = () => {
    if (result.confidence >= 90) return 'bg-green-500';
    if (result.confidence >= 70) return 'bg-amber-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Main Result Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${result.isHealthy ? 'from-green-500 to-emerald-600' : 'from-amber-500 to-orange-600'} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {getStatusIcon()}
              <div>
                <h2 className="text-2xl font-bold">Detection Results</h2>
                <p className="text-white/90">AI-powered crop health assessment</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{result.confidence}%</div>
              <div className="text-white/90 text-sm">Confidence Level</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Analyzed Image</h3>
              <div className="relative">
                <img
                  src={imageUrl}
                  alt="Analyzed crop"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  {result.cropName}
                </div>
              </div>
            </div>

            {/* Structured Results */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Analysis Results</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Crop Type</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{result.cropName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Health Status</span>
                    <span className={`font-semibold ${result.isHealthy ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                      {result.isHealthy ? 'Healthy' : 'Diseased'}
                    </span>
                  </div>

                  {!result.isHealthy && (
                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Disease Name</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">{result.disease}</span>
                    </div>
                  )}
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Confidence Level</span>
                      <span className={`font-semibold ${getConfidenceColor()}`}>
                        {result.confidence}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                  <Info className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Symptoms</h3>
              </div>
              <ul className="space-y-2">
                {result.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Treatment Card */}
          {result.treatment && result.treatment.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Treatment</h3>
              </div>
              <ul className="space-y-2">
                {result.treatment.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Prevention Tips */}
      {result.preventionTips && result.preventionTips.length > 0 && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
              <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Prevention Tips</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {result.preventionTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;
