import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Founders } from './pages/Founders';
import { Evaluate } from './pages/Evaluate';
import { Services } from './pages/Services';
import { SuccessStories } from './pages/SuccessStories';
import { Mail, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tighter">
                ELITE <span className="text-brand-gold">ADMISSIONS</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">
                Global MBA & MS Strategy
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Architecting ROI-driven narratives for the next generation of global leaders.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="/founders" className="hover:text-brand-gold transition-colors">The Founders</a></li>
              <li><a href="/services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="/success-stories" className="hover:text-brand-gold transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-gold" />
                <a href="mailto:consultingelitemba@gmail.com" className="hover:text-brand-gold transition-colors">consultingelitemba@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Linkedin size={16} className="text-brand-gold" />
                <a href="https://www.linkedin.com/in/elite-mba-consulting-9a91a4401/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">LinkedIn Profile</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-8">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-4">Get the latest AdCom insights directly in your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-brand-gold w-full" />
              <button className="bg-brand-gold p-2 hover:bg-white transition-colors">
                <ArrowUpRight size={20} className="text-brand-navy" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © 2026 The HEC-Bocconi Collective. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/evaluate" element={<Evaluate />} />
            <Route path="/services" element={<Services />} />
            <Route path="/success-stories" element={<SuccessStories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
