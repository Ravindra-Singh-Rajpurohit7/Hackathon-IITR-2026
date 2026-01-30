import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Lock, LogOut, QrCode, ChevronRight, LayoutGrid, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDash = () => {
  // --- Auth State ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const ADMIN_PIN = "1234";

  // --- Queue & QR State ---
  const [selectedService, setSelectedService] = useState(null);
  const [currentToken, setCurrentToken] = useState(24);

  const services = [
    { id: 'counter_01', name: 'General Billing', color: 'bg-blue-600' },
    { id: 'counter_02', name: 'Inquiry / Help', color: 'bg-purple-600' },
    { id: 'counter_03', name: 'Express Checkout', color: 'bg-emerald-600' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) setIsAuthenticated(true);
    else { alert("Wrong PIN!"); setPin(''); }
  };

  // --- 1. LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl max-w-sm w-full text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-600">
            <Lock size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Admin Gate</h2>
          <p className="text-slate-400 mb-8 font-medium">Secure Access Only</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" placeholder="PIN" maxLength={4} value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full text-center text-3xl tracking-[0.5em] font-black py-4 bg-slate-100 rounded-2xl border-2 border-transparent focus:border-blue-600 outline-none transition-all"
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 active:scale-95 transition-all">
              ENTER PANEL
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- 2. MAIN ADMIN PANEL ---
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 p-3 rounded-2xl text-white"><LayoutGrid size={24}/></div>
            <h1 className="text-2xl font-black tracking-tight">Queue Management</h1>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-2 text-slate-400 font-bold hover:text-red-500 transition-colors uppercase text-xs tracking-widest">
            Logout <LogOut size={18} />
          </button>
        </div>

        {!selectedService ? (
          /* --- OPTION SELECTOR --- */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold mb-6 text-slate-500 px-2 uppercase tracking-widest">Select Counter to Activate QR</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s) => (
                <button 
                  key={s.id} onClick={() => setSelectedService(s)}
                  className="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-left hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`${s.color} w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg`}>
                    <QrCode size={28} />
                  </div>
                  <h3 className="text-xl font-black mb-2">{s.name}</h3>
                  <p className="text-slate-400 text-sm font-medium mb-6 tracking-tight leading-snug">Generate unique scan point for this counter.</p>
                  <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Generate QR <ChevronRight size={16} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* --- DYNAMIC QR DISPLAY --- */
          <div className="max-w-2xl mx-auto animate-in zoom-in duration-300">
            <button onClick={() => setSelectedService(null)} className="mb-6 flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
              <ArrowLeft size={18} /> Change Counter
            </button>
            
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 text-center relative overflow-hidden">
              <div className={`absolute top-0 inset-x-0 h-3 ${selectedService.color}`}></div>
              <h2 className="text-3xl font-black mb-2">{selectedService.name}</h2>
              <p className="text-slate-400 font-medium mb-10 tracking-tight leading-relaxed px-10 text-lg uppercase">Scan this QR to get your token instantly</p>
              
              <div className="flex justify-center p-8 bg-white border-4 border-slate-50 rounded-[3rem] inline-block shadow-inner mb-10">
                <QRCodeSVG 
                  value={`${window.location.origin}/dashboard?service=${selectedService.id}`} 
                  size={280}
                  level="H"
                  includeMargin={true}
                />
              </div>

              {/* Admin Control (Call Next) inside QR view */}
              <div className="border-t border-slate-100 pt-10">
                <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-4">Live Serving</p>
                <div className="flex items-center justify-center gap-8 mb-8">
                   <h4 className="text-8xl font-black text-slate-900 tracking-tighter">{currentToken}</h4>
                   <button 
                    onClick={() => setCurrentToken(prev => prev + 1)}
                    className="bg-slate-900 text-white p-6 rounded-3xl hover:bg-blue-600 shadow-xl active:scale-90 transition-all"
                   >
                     <ChevronRight size={40} />
                   </button>
                </div>
                <p className="text-xs font-bold text-slate-300">TAP ARROW TO CALL NEXT</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDash;