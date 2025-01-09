import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-orange-500">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-orange-500">Blog</Link></li>
              <li><Link to="/guides" className="text-gray-600 hover:text-orange-500">Cooking Guides</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-orange-500">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-orange-500">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-orange-500">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>© {currentYear} CulinaryCloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}