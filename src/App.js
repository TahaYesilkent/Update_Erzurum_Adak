import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'gallery': return <Gallery />;
      case 'contact': return <Contact />;
      case 'services': return <Home />; // Şimdilik Home içindeki hizmetlere scroll yapabilir
      default: return <Home />;
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
      <footer className="bg-white py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">© 2026 Erzurum Adak. Modern & Güvenilir Hizmet.</p>
      </footer>
    </div>
  );
}

export default App;