import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StorePage from './pages/StorePage';
import HPCarePage from './pages/HPCarePage';
import RepairPage from './pages/RepairPage';
import SupportPage from './pages/SupportPage';
import OffersPage from './pages/OffersPage';
import ContactPage from './pages/ContactPage';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/hp-care" element={<HPCarePage />} />
          <Route path="/repair" element={<RepairPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
