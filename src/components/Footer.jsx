import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Learnify</h2>
            <p className="text-gray-300">Empowering Minds, Transforming Futures</p>
            <p className="text-sm text-gray-400">
              Your trusted partner in online education, making learning accessible to everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/course" className="text-gray-300 hover:text-blue-400 transition">Courses</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-blue-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-400 transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition">
                <FaLinkedin size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Email: contact@learnify.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Learnify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
