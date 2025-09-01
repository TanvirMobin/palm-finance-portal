import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-gray-900" style={{backgroundColor: 'rgb(241, 241, 241)'}}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/docs" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Documentation Coming Soon</h1></div>} />
            <Route path="/transparency" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Transparency Coming Soon</h1></div>} />
            <Route path="/app" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Launch App Coming Soon</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
