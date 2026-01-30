import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { User, Calendar, Camera, Ticket, CheckCircle2, ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  // States
  const [userData, setUserData] = useState({ name: '', age: '' });
  const [step, setStep] = useState(1); // 1: Form, 2: Scanner, 3: Success Token
  const [myToken, setMyToken] = useState(null);
  const [scannedService, setScannedService] = useState('');

  // Fake Live Data (Connect to Firebase later)
  const currentServing = 24;

  // Handle Form Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userData.name && userData.age) {
      setStep(2);
    }
  };

  // Scanner Logic
  useEffect(() => {
    let scanner = null;
    if (step === 2) {
      // 2 second delay taaki user ko transition feel ho
      scanner = new Html5QrcodeScanner("reader", { 
        fps: 10, 
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      });

      scanner.render((decodedText) => {
        // Scan Success!
        setScannedService(decodedText); // Admin ke QR se ID nikalegi
        setMyToken(Math.floor(Math.random() * 50) + 30); // Random Token for Demo
        setStep(3);
        scanner.clear();
      }, (error) => {
        // Scanning...
      });
    }

    return () => {
      if (scanner) {
        scanner.clear().catch(err => console.error("Scanner clear failed", err));
      }
    };
  }, [step]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-6 flex flex-col items-center">
      <div className="max-w-md w-full">
        
        {/* --- STEP 1: USER DETAILS FORM --- */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
               <div className="bg-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-100 rotate-6">
                  <User size={40} className="text-white -rotate-6" />
               </div>
               <h2 className="text-3xl font-black text-slate-900 tracking-tight">Join Queue</h2>
               <p className="text-slate-400 font-medium">Enter your details to start scanning</p>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-slate-300" size={20} />
                    <input 
                      type="text" placeholder="e.g. Ravi Kumar" required
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500 transition-all font-bold"
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Your Age</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-4 text-slate-300" size={20} />
                    <input 
                      type="number" placeholder="e.g. 21" required
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500 transition-all font-bold"
                      onChange={(e) => setUserData({...userData, age: e.target.value})}
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-600 active:scale-95 transition-all mt-4">
                  PROCEED TO SCAN
                </button>
              </form>
            </div>
          </div>
        )}

        {/* --- STEP 2: CAMERA SCANNER --- */}
        {step === 2 && (
          <div className="text-center animate-in zoom-in-95 duration-300">
            <button onClick={() => setStep(1)} className="mb-6 flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mx-auto">
              <ArrowLeft size={16} /> Back to Details
            </button>
            <div className="bg-white p-6 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 inset-x-0 h-2 bg-blue-600"></div>
               <h3 className="font-black text-slate-800 text-xl mb-2 pt-4">Point at Admin QR</h3>
               <p className="text-slate-400 text-sm mb-6 font-medium">Scanner will automatically detect the token</p>
               
               <div id="reader" className="rounded-3xl overflow-hidden border-none shadow-inner"></div>
               
               <div className="mt-8 flex items-center justify-center gap-2 text-blue-600 bg-blue-50 py-3 rounded-2xl">
                  <Camera size={18} className="animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">Camera Active</span>
               </div>
            </div>
          </div>
        )}

        {/* --- STEP 3: TOKEN SUCCESS DISPLAY --- */}
        {step === 3 && (
          <div className="animate-in zoom-in duration-500">
            <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-blue-100 overflow-hidden border border-slate-50">
              <div className="bg-blue-600 p-12 text-center text-white relative">
                <div className="absolute top-6 right-8 bg-white/20 p-2 rounded-full backdrop-blur-md">
                   <CheckCircle2 size={24} />
                </div>
                <p className="text-blue-100 uppercase tracking-[0.3em] text-[10px] font-black mb-4">Token Assigned To {userData.name.split(' ')[0]}</p>
                <h1 className="text-[9rem] font-black leading-none tracking-tighter">#{myToken}</h1>
              </div>
              
              <div className="p-10 text-center">
                <div className="bg-slate-50 rounded-[2.5rem] p-8 mb-8 border border-slate-100 flex justify-around shadow-inner">
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Serving</p>
                    <p className="text-5xl font-black text-slate-900">{currentServing}</p>
                  </div>
                  <div className="w-[1px] h-14 bg-slate-200"></div>
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Wait Time</p>
                    <p className="text-5xl font-black text-orange-500">~12m</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-blue-50 p-5 rounded-2xl border border-blue-100 text-left">
                   <MapPin size={24} className="text-blue-600 shrink-0" />
                   <p className="text-xs font-bold text-blue-800 leading-relaxed uppercase tracking-tight">
                     Successfully joined <span className="underline">{scannedService}</span>. Please stay in the area.
                   </p>
                </div>
              </div>
            </div>
            
            <Link to="/" className="block mt-10 text-center text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] hover:text-slate-600 transition-colors">
               Return to Home
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserDashboard;