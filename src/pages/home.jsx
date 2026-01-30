import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShieldCheck, ArrowRight, Zap, Clock, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
          <Zap size={16} />
          <span>Real-time Queue Sync Active</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          Skip the Wait, <br />
          <span className="text-blue-600">Join Digitally.</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          Track your turn from anywhere. Perfect for campus mess, hospitals, and busy counters. 
          No more standing in long lines.
        </p>

        {/* Selection Cards (Routing Links) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Link to User Dashboard */}
          <Link to="/dashboard" className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border-b-8 border-blue-600 hover:-translate-y-2 transition-all duration-300 text-left h-full">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                I'm a User <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" size={20}/>
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Join a virtual queue instantly. Get live updates on your position and estimated wait time.
              </p>
            </div>
          </Link>

          {/* Link to Admin Dashboard */}
          <Link to="/admin" className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border-b-8 border-purple-600 hover:-translate-y-2 transition-all duration-300 text-left h-full">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                Admin Panel <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" size={20}/>
              </h3>
              <p className="text-slate-500 leading-relaxed">
                Manage counters, monitor crowd levels, and call the next token with a single click.
              </p>
            </div>
          </Link>

        </div>

        {/* Feature Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center border-t border-slate-200 pt-12">
          <div className="flex flex-col items-center">
            <div className="bg-slate-100 p-3 rounded-full mb-3 text-slate-700"><Clock size={20}/></div>
            <h4 className="font-bold text-slate-800">Save Time</h4>
            <p className="text-sm text-slate-500">Reduce physical waiting by 80%</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-100 p-3 rounded-full mb-3 text-slate-700"><Globe size={20}/></div>
            <h4 className="font-bold text-slate-800">Access Anywhere</h4>
            <p className="text-sm text-slate-500">Check status on your mobile</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-slate-100 p-3 rounded-full mb-3 text-slate-700"><Zap size={20}/></div>
            <h4 className="font-bold text-slate-800">Live Updates</h4>
            <p className="text-sm text-slate-500">Real-time token synchronization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;