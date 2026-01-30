import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 h-8 w-8 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">Q</span>
        </div>
        <span className="text-xl font-bold text-slate-800">Queue<span className="text-blue-600">Smart</span></span>
      </div>
      <div className="hidden md:flex gap-6 text-slate-600 font-medium">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">How it works</a>
      </div>
      <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
        Login
      </button>
    </nav>
  );
};

export default Navbar;