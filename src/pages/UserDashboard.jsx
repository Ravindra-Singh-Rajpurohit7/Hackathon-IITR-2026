import React from 'react';

const UserDashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600 text-white">
      <div className="text-center p-10 bg-white/10 rounded-3xl backdrop-blur-md">
        <h1 className="text-2xl font-bold">Your Token: #29</h1>
        <p className="text-6xl font-black my-4">Serving: 24</p>
        <p className="animate-pulse">Waiting for your turn...</p>
      </div>
    </div>
  );
};

export default UserDashboard;