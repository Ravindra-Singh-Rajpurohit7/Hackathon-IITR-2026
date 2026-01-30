import React from 'react';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto">
        <Home />
      </main>
    </div>
  );
}

export default App;