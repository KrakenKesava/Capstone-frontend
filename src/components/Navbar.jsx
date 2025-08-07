import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-bold text-xl">GitDeploy</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium">Product</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Docs</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Support</a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin" className="text-gray-300 hover:text-white transition-colors font-medium">
              Sign In
            </Link>
            <Link to="/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium">Product</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Docs</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Support</a>
              <div className="pt-4 border-t border-gray-800 flex flex-col space-y-3">
                <Link to="/signin" className="text-gray-300 hover:text-white transition-colors font-medium text-left">
                  Sign In
                </Link>
                <Link to="/signup" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg font-semibold w-full text-center">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
