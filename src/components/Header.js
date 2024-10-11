import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-dark-200 shadow-lg">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold neon-glow">SnapToolKit</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-dark-200 z-50 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white focus:outline-none mb-4"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white hover:text-primary">Beranda</Link></li>
            <li><Link to="/features" className="text-white hover:text-primary">Fitur</Link></li>
            <li><Link to="/main" className="text-white hover:text-primary">Mulai</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;