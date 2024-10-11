import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFileAlt, faFilePdf, faFileWord, faMagic } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
  return (
    <section id="landing" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 md:pt-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-glow">SnapToolKit 2.0</h1>
        <p className="text-lg md:text-xl mb-8">Tingkatkan, Konversi, dan Ekstrak dengan Mudah</p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/main" className="inline-block py-3 px-6 bg-primary hover:bg-blue-600 rounded-full text-white transition duration-300 transform hover:scale-105 w-full md:w-auto">
            Mulai
          </Link>
          <Link to="/features" className="inline-block py-3 px-6 bg-transparent border border-white hover:bg-white hover:text-dark-200 rounded-full transition duration-300 transform hover:scale-105 mt-4 md:mt-0 w-full md:w-auto">
            Pelajari Lebih Lanjut
          </Link>
        </div>
      </div>
      
      {/* Mobile app mockup */}
      <div className="mt-12 relative w-64 h-128 mx-auto">
          <div className="absolute inset-0 bg-gray-800 rounded-3xl shadow-lg transform -rotate-6"></div>
          <div className="absolute inset-0 bg-gray-700 rounded-3xl shadow-lg transform rotate-6"></div>
          <div className="relative bg-dark-300 rounded-3xl shadow-lg p-4 h-full overflow-hidden">
            <div className="bg-dark-200 rounded-2xl p-4 h-full flex flex-col">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-2">SnapToolKit Mobile</h3>
                <p className="text-sm text-gray-400 mb-4">Akses alat-alat canggih saat bepergian!</p>
                <div className="space-y-2">
                  <div className="bg-dark-400 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faImage} className="text-secondary mr-2" />
                    Konverter HD
                  </div>
                  <div className="bg-dark-400 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faFileAlt} className="text-yellow-400 mr-2" />
                    Alat OCR
                  </div>
                  <div className="bg-dark-400 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faFilePdf} className="text-red-500 mr-2" />
                    Word ke PDF
                  </div>
                  <div className="bg-dark-400 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faFileWord} className="text-blue-500 mr-2" />
                    PDF ke Word
                  </div>
                  <div className="bg-dark-400 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faMagic} className="text-purple-500 mr-2" />
                    AI Remini
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full py-2 px-4 bg-primary rounded-lg text-white">
                  Buka Aplikasi
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default LandingPage;
