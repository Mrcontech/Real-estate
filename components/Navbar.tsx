import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-white italic">
          VisioCreate.
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center bg-white/10 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
        <a href="#" className="px-5 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors">About</a>
        <a href="#" className="px-5 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors">Our Product</a>
        <a href="#" className="px-5 py-2 text-sm font-medium text-white hover:text-blue-200 transition-colors">Services</a>
      </div>

      {/* Sign Up Button */}
      <div>
        <button className="bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm border border-slate-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Sign Up
        </button>
      </div>
    </nav>
  );
};