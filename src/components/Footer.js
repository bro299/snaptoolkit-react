import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark-200 mt-8 glassmorphism">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <p className="mb-4">&copy; 2024 SnapToolKit 2.0. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="mt-2 space-x-2 sm:space-x-4 text-sm sm:text-base">
          <Link to="/privacy" className="text-gray-400 hover:text-primary transition duration-300">Kebijakan Privasi</Link>
          <Link to="/terms" className="text-gray-400 hover:text-primary transition duration-300">Syarat Layanan</Link>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.instagram.com/beginneer.noob/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://github.com/Beginneernoob" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;