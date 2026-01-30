import React from 'react';
import { ChevronRight, Users, PlayCircle } from 'lucide-react';

const AdminDash = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Counter Management</h1>
          <p className="text-slate-500">Managing Counter #01 - Main Mess</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-400 font-bold uppercase text-xs tracking-wider mb-2">Currently Serving</p>
            <h2 className="text-6xl font-black text-blue-600">24</h2>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-400 font-bold uppercase text-xs tracking-wider mb-2">Total in Queue</p>
            <h2 className="text-6xl font-black text-slate-800">12</h2>
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-8 rounded-3xl text-2xl font-black shadow-xl shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-4">
          <PlayCircle size={32} />
          CALL NEXT TOKEN
        </button>
      </div>
    </div>
  );
};

export default AdminDash;