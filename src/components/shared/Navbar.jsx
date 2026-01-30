import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Shield, User, LayoutGrid } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Check if current page is Admin to change icon
  const isAdminPage = location.pathname.includes('admin');

  return (
    <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-[100] border-b border-slate-200/50 px-4">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-slate-900 p-2 rounded-2xl group-hover:rotate-[15deg] transition-all duration-300 shadow-lg shadow-slate-200">
            <Zap size={22} className="text-blue-400 fill-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-slate-900 tracking-tighter leading-none">
              Queue<span className="text-blue-600">Smart</span>
            </span>
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Next-Gen Sync</span>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          {location.pathname !== '/admin' && (
            <Link 
              to="/admin" 
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-slate-600 rounded-2xl font-bold text-xs uppercase tracking-widest border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <Shield size={14} />
              Admin Portal
            </Link>
          )}
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-2xl border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-green-700 uppercase tracking-wider">System Live</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;