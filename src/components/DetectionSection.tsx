
import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import LoadingSpinner from './LoadingSpinner';
import ResultsDisplay from './ResultsDisplay';
import { analyzeImageContent } from '../utils/cropValidation';

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

const DetectionSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Enhanced mock results with more realistic crop disease data
  const mockResults: DetectionResult[] = [
    {
      cropName: "Tomato",
      disease: "Healthy",
      confidence: 94,
      isHealthy: true,
      isValidCrop: true,
      preventionTips: [
        "Maintain proper soil drainage",
        "Ensure adequate spacing between plants",
        "Regular watering schedule",
        "Monitor for early signs of disease"
      ]
    },
    {
      cropName: "Potato",
      disease: "Late Blight",
      confidence: 87,
      isHealthy: false,
      isValidCrop: true,
      symptoms: [
        "Dark brown or black lesions on leaves",
        "White fuzzy growth on leaf undersides",
        "Rapid leaf yellowing and death",
        "Dark lesions on stems and tubers"
      ],
      treatment: [
        "Remove and destroy affected plant parts immediately",
        "Apply copper-based fungicide spray",
        "Improve air circulation around plants",
        "Avoid overhead watering",
        "Consider resistant varieties for future planting"
      ],
      preventionTips: [
        "Plant in well-draining soil",
        "Avoid watering leaves directly",
        "Maintain good air circulation",
        "Regular crop rotation"
      ]
    },
    {
      cropName: "Corn",
      disease: "Northern Corn Leaf Blight",
      confidence: 91,
      isHealthy: false,
      isValidCrop: true,
      symptoms: [
        "Cigar-shaped gray-green lesions",
        "Lesions turning tan with dark borders",
        "Leaf yellowing and premature death",
        "Reduced kernel development"
      ],
      treatment: [
        "Apply fungicide at early disease stages",
        "Remove infected plant debris",
        "Use resistant corn varieties",
        "Implement crop rotation practices"
      ],
      preventionTips: [
        "Choose resistant varieties",
        "Practice crop rotation",
        "Manage crop residue properly",
        "Monitor weather conditions"
      ]
    }
  ];

  const handleImageSelect = async (file: File) => {
    setIsLoading(true);
    
    try {
      // Create image URL for display
      const url = URL.createObjectURL(file);
      setImageUrl(url);

      console.log('Starting image analysis...');
      
      // Validate if the image contains crops
      const imageAnalysis = await analyzeImageContent(file);
      console.log('Image analysis result:', imageAnalysis);
      
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      if (!imageAnalysis.isValidCrop) {
        console.log('Invalid crop image detected');
        setResult({
          cropName: "",
          disease: "",
          confidence: 0,
          isHealthy: false,
          isValidCrop: false,
          errorMessage: "Not Detectable – Please upload a valid crop image."
        });
      } else {
        console.log('Valid crop detected, proceeding with disease analysis...');
        // Randomly select a mock result for demonstration
        const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
        setResult(randomResult);
      }
    } catch (error) {
      console.error('Error analyzing image:', error);
      setResult({
        cropName: "",
        disease: "",
        confidence: 0,
        isHealthy: false,
        isValidCrop: false,
        errorMessage: "Error analyzing image. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetDetection = () => {
    setResult(null);
    setImageUrl(null);
    setIsLoading(false);
  };

  return (
    <section id="detect" className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30 dark:from-gray-900 dark:to-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AI Crop Disease Detection System
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Upload an image of your crop and get instant AI-powered disease detection with treatment recommendations. 
            Only agricultural crop images will be analyzed.
          </p>
        </div>

        {isLoading && <LoadingSpinner />}
        
        {!isLoading && !result && (
          <ImageUpload onImageSelect={handleImageSelect} />
        )}
        
        {result && imageUrl && !isLoading && (
          <div className="space-y-8">
            <ResultsDisplay result={result} imageUrl={imageUrl} />
            
            <div className="text-center">
              <button
                onClick={resetDetection}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                Analyze Another Image
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DetectionSection;
