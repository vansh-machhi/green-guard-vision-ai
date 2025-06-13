
import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Green Guard</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Protecting crops worldwide with cutting-edge AI technology for disease detection and prevention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-green-400 transition-colors">Features</a></li>
              <li><a href="#detect" className="text-gray-400 hover:text-green-400 transition-colors">Detection</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Disease Detection</span></li>
              <li><span className="text-gray-400">Treatment Recommendations</span></li>
              <li><span className="text-gray-400">Prevention Tips</span></li>
              <li><span className="text-gray-400">Expert Consultation</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@greenguard.ai</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Green Guard. All rights reserved. Built with AI for agriculture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
