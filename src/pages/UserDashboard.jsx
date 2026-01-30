import React from 'react';
import { Clock, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <Link to="/" className="inline-flex items-center text-blue-600 font-medium mb-8 hover:gap-2 transition-all">
        <ArrowLeft size={20} className="mr-2" /> Back to Selection
      </Link>

      <div className="max-w-md mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100 overflow-hidden border border-slate-100">
        <div className="bg-blue-600 p-10 text-center text-white relative">
          <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">LIVE</div>
          <p className="text-blue-100 uppercase tracking-widest text-sm font-bold mb-2">Current Serving</p>
          <h1 className="text-8xl font-black">24</h1>
        </div>
        
        <div className="p-8">
          <div className="flex justify-between items-center mb-8 bg-slate-50 p-6 rounded-3xl">
            <div className="text-center">
              <p className="text-slate-400 text-xs uppercase font-bold mb-1">Your Token</p>
              <p className="text-4xl font-black text-slate-800">#29</p>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-slate-400 text-xs uppercase font-bold mb-1">Wait Time</p>
              <p className="text-4xl font-black text-orange-500">12m</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <Users className="text-blue-600" />
              <p className="text-slate-700 font-medium"><span className="font-bold text-blue-700">05 People</span> ahead of you</p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
              <Clock className="text-green-600" />
              <p className="text-slate-700 font-medium">Next update in <span className="font-bold text-green-700">2 mins</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;