import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Linkedin } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Founders', path: '/founders' },
    { name: 'Services', path: '/services' },
    { name: 'Success Stories', path: '/success-stories' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 premium-blur shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-brand-navy">
            ELITE <span className="text-brand-gold">ADMISSIONS</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-brand-slate">
            Global MBA & MS Strategy
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest hover:text-brand-gold transition-colors ${location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/evaluate" className="btn-primary py-3 px-6 text-xs tracking-widest">
            Free Evaluation
          </Link>
          <a 
            href="https://www.linkedin.com/in/elite-mba-consulting-9a91a4401/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-navy hover:text-brand-gold transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-brand-navy flex justify-between items-center"
                >
                  {link.name} <ChevronRight size={16} className="text-brand-gold" />
                </Link>
              ))}
              <Link 
                to="/evaluate" 
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center"
              >
                Book Free Evaluation
              </Link>
              <div className="flex justify-center pt-4">
                <a 
                  href="https://www.linkedin.com/in/elite-mba-consulting-9a91a4401/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-navy hover:text-brand-gold transition-colors flex items-center space-x-2"
                >
                  <Linkedin size={20} />
                  <span className="text-sm font-medium uppercase tracking-widest">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
