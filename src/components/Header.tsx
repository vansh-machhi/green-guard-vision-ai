
import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Green Guard
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About
            </a>
            <a href="#detect" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-colors font-medium">
              Start Detection
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-100 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
                About
              </a>
              <a href="#detect" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-colors font-medium text-center">
                Start Detection
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
