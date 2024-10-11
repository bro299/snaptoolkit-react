import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import FeaturesSection from './components/FeaturesSection';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import CSFloatingButton from './components/CSFloatingButton';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-dark-200 to-dark-100 text-gray-100 min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/main" element={<MainSection />} />
        </Routes>
        <Footer />
        <CSFloatingButton />
      </div>
    </Router>
  );
}

export default App;
