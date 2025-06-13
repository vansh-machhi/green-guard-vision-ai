
import React from 'react';
import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Analyzing your crop image...", 
  fullScreen = false 
}) => {
  const containerClasses = fullScreen
    ? "fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="relative mb-6">
          {/* Animated Background Circle */}
          <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <div className="w-16 h-16 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full flex items-center justify-center animate-pulse">
              <Loader className="h-8 w-8 text-green-600 animate-spin" />
            </div>
          </div>
          
          {/* Rotating Border */}
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-green-500 border-r-green-400 rounded-full animate-spin mx-auto"></div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          AI Analysis in Progress
        </h3>
        
        <p className="text-gray-500 mb-4 max-w-md">
          {message}
        </p>
        
        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <div className="mt-6 text-sm text-gray-400">
          This usually takes a few seconds...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
