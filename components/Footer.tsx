import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 hidden lg:block">
             {/* Logo */}
             <div className="mb-6">
                <span className="text-xl font-bold tracking-tight text-slate-900 italic">
                  VisioCreate.
                </span>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Listing</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Property</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Agents</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Our Homes</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Member Stories</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Video</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Free trial</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Partnerships</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of use</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Get in touch</h4>
            <p className="text-sm text-gray-500 mb-6">
              You'll find your next home, in any style you prefer.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Share on Facebook" className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share on Twitter" className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-sky-500 hover:text-white text-gray-600 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share on LinkedIn" className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 hover:bg-blue-800 hover:text-white text-gray-600 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="mb-4 md:mb-0 lg:hidden">
             <span className="text-xl font-bold tracking-tight text-slate-900 italic">
                VisioCreate.
             </span>
          </div>
          <div className="hidden lg:block"></div>
          
          <p className="text-xs text-gray-400">
            Copyright 2020.com, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};