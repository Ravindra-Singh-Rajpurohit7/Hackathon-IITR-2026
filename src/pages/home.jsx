import React from 'react';

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Skip the Wait, <span className="text-blue-600">Join Digitally.</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          Real-time queue management for campus mess and hospitals. Track your turn from anywhere.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <button className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-blue-200 hover:scale-105 transition-transform text-left">
            <h3 className="text-xl font-bold mb-1">I'm a User</h3>
            <p className="text-blue-100 text-sm">Join a queue and get your token instantly.</p>
          </button>
          
          <button className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-blue-600 hover:scale-105 transition-all text-left">
            <h3 className="text-xl font-bold text-slate-800 mb-1">Admin Panel</h3>
            <p className="text-slate-500 text-sm">Manage counters and call next tokens.</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;