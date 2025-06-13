
import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Check, AlertCircle } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isLoading?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, isLoading = false }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File): boolean => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      setError('Please upload only JPG, JPEG, or PNG images.');
      return false;
    }

    if (file.size > maxSize) {
      setError('File size must be less than 10MB.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        handleFile(file);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        handleFile(file);
      }
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    onImageSelect(file);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setError(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
          dragActive
            ? 'border-green-500 bg-green-50'
            : selectedImage
            ? 'border-green-300 bg-green-50/50'
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50/30'
        } ${isLoading ? 'pointer-events-none opacity-75' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {selectedImage ? (
          <div className="space-y-4">
            <div className="relative inline-block">
              <img
                src={selectedImage}
                alt="Selected crop"
                className="max-h-64 max-w-full rounded-xl shadow-lg object-contain"
              />
              {!isLoading && (
                <button
                  onClick={clearImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Check className="h-5 w-5" />
              <span className="font-medium">Image ready for analysis</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
              <Upload className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Upload Crop Image
              </h3>
              <p className="text-gray-500 mb-4">
                Drag and drop your image here, or click to select
              </p>
              <button
                onClick={onButtonClick}
                disabled={isLoading}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ImageIcon className="h-5 w-5 inline mr-2" />
                Choose Image
              </button>
            </div>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          multiple={false}
          onChange={handleChange}
          accept="image/jpeg,image/jpg,image/png"
          className="hidden"
          disabled={isLoading}
        />
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500 text-center">
        Supported formats: JPG, JPEG, PNG • Max size: 10MB
      </div>
    </div>
  );
};

export default ImageUpload;
