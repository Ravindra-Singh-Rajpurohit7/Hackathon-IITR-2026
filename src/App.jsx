import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './pages/home';
import UserDashboard from './pages/UserDashboard'; 
import AdminDash from './pages/AdminDash';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;