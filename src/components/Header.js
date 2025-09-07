import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header style={{backgroundColor: '#F1E9DB'}} className="py-16">
        <div className="max-w-screen-lg mx-auto px-10 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center" style={{textDecoration: 'none'}}>
              <div style={{
                backgroundColor: '#165D31',
                borderRadius: '8px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img 
                  src="/palm_logo.png" 
                  alt="Palm Logo" 
                  style={{ 
                    height: '28px',
                    width: 'auto',
                    display: 'block' 
                  }} 
                />
              </div>
            </Link>

            {/* Navigation Container with rounded white background */}
            <div className="hidden lg:flex items-center px-8 py-3 shadow-sm" style={{borderRadius: '15px', backgroundColor: '#F7F1E8'}}>
              <nav className="flex items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 mx-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200 rounded-lg ${
                      isActive(item.path)
                        ? 'text-black'
                        : 'text-gray-600 hover:text-black'
                    }`}
                    style={{textDecoration: 'none', paddingRight: '2rem'}}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Launch App Button */}
              <Link
                to="/app"
                className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 flex items-center gap-3 ml-8"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#165D31'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
                style={{textDecoration: 'none', whiteSpace: 'nowrap', minWidth: 'max-content',}}
              >
                LAUNCH&nbsp;APP
                <span className="text-sm text-white px-2 py-1 border" style={{fontSize: '12px', backgroundColor: 'transparent', borderRadius: '4px', marginLeft: '12px', borderColor: "white"}}>↗</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden bg-white text-gray-600 hover:text-black shadow-sm transition-colors duration-200 border-0 flex items-center justify-center"
              style={{borderRadius: '50%', border: 'none', width: '48px', height: '48px'}}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Overlay - Outside header to prevent layout shifts */}
      {isMenuOpen && (
        <>
          {/* Backdrop blur */}
          <div 
            className="lg:hidden fixed inset-0 backdrop-blur-lg bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
            style={{zIndex: 9998}}
          ></div>
          
          {/* Overlay menu */}
          <div className="lg:hidden fixed animate-slide-down" style={{top: 0, left: 0, right: 0, width: '100vw', height: '100vh', zIndex: 9999, backgroundColor: '#F1E9DB', position: 'absolute'}}>
            <div className="flex flex-col" style={{height: '100vh'}}>
              {/* Header with close button */}
              <div className="flex justify-between items-center" style={{padding: '2.4rem 2.4rem 2.4rem 2.4rem'}}>
                <Link to="/" className="flex items-center" style={{textDecoration: 'none'}}>
                  <div style={{
                    backgroundColor: '#165D31',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <img 
                      src="/palm_logo.png" 
                      alt="Palm Logo" 
                      style={{ 
                        height: '28px',
                        width: 'auto',
                        display: 'block' 
                      }} 
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-white text-gray-600 hover:text-black shadow-sm transition-colors duration-200 border-0 flex items-center justify-center"
                  style={{borderRadius: '50%', border: 'none', width: '48px', height: '48px'}}
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Navigation */}
              <div className="flex-1 flex flex-col justify-center" style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-light transition-colors duration-200 mb-6 ${
                      isActive(item.path)
                        ? 'text-black'
                        : 'text-gray-800 hover:text-black'
                    }`}
                    style={{textDecoration: 'none', lineHeight: '1.1', fontSize: '2rem'}}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Launch App Button at bottom */}
              <div style={{padding: '0 2rem 3rem 2rem'}}>
                <Link
                  to="/app"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 w-full flex items-center justify-center gap-2"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#165D31'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
                  style={{textDecoration: 'none'}}
                >
                  LAUNCH APP
                  <span className="text-sm">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
