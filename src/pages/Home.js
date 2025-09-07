import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(241, 233, 219)'}}>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-60 px-10 lg:px-60 text-center min-h-[80vh] flex items-center relative overflow-hidden">
        {/* Background Shapes */}
        <div className="inset-0">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>
          <div className="hero-circle hero-circle-4"></div>
        </div>
        
        <div className="max-w-screen-lg mx-auto relative z-10">
          <h1 className="hero-title text-black mb-6">
            Universal Collateralization<br />Infrastructure
          </h1>
          <p className="hero-tagline text-gray-500 max-w-2xl mx-auto px-4">
            Leading with innovations, security and yield
          </p>
          <div className="get-started-container">
            <Link
              to="/app"
              className="group inline-flex w-fit items-center gap-6 rounded-full transition-colors bg-black px-8 py-6"
              target="_blank"
              style={{textDecoration: 'none'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#165D31'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
            >
              <span className="font-mono text-[15px] uppercase leading-none group-hover:text-white text-white">Get Started</span>
              <div className="css-arrow"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-18 lg:mt-36 px-4 sm:px-6 md:px-10 lg:px-12 relative z-10 stats-section-mobile-padding">
        <div className="max-w-screen-lg mx-auto z-10">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 lg:gap-8 items-stretch">
            <div className="metric-card">
              <div className="text-4xl font-bold text-orange-500 mb-2">$1.4b</div>
              <div className="text-gray-600 text-sm">Palm Finance TVL</div>
            </div>
            <div className="metric-card">
              <div className="text-4xl font-bold text-orange-500 mb-2">$1.2b</div>
              <div className="text-gray-600 text-sm">PUSDf Supply</div>
            </div>
            <div className="metric-card">
              <div className="text-4xl font-bold text-orange-500 mb-2">8.2%</div>
              <div className="text-gray-600 text-sm">sPUSDf APY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Minting & Staking Section */}
      <section className="py-24 px-10 lg:px-12">
        <div className="max-w-screen-lg mx-auto">
          <div className="minting-staking-container rounded-2xl text-white relative overflow-hidden" style={{
            backgroundImage: "url('/mint-stake.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
              <div>
                <div className="inline-flex mb-8 relative palm-logo-container" style={{
                  backgroundColor: '#165D31',
                  borderRadius: '8px',
                  padding: '8px 16px',
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
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                <h2 className="text-5xl font-bold mb-8 leading-tight">
                  Palm Minting & Staking
                </h2>
                <p className="text-white/95 text-lg leading-relaxed mb-6">
                  <strong>Mint PUSD, a fully-collateralized, Shariah-compliant stablecoin designed for freedom and trust.</strong>
                </p>
                <p className="text-white/95 text-lg leading-relaxed mb-6">
                  Deposit approved liquid assets to create PUSD — a jurisdiction-neutral, non-freezable digital dollar backed 1:1 by real assets.
                </p>
                <p className="text-white/95 text-lg leading-relaxed mb-6">
                  <strong>Palm is built for individual sovereignty, global accessibility, and financial integrity.</strong> No central party can freeze, seize, or censor your funds.
                </p>
                
                <div className="mt-6">
                  <Link
                    to="/learn-more"
                    className="group inline-flex w-fit items-center gap-4 rounded-full bg-white text-black px-8 py-4 font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-200"
                    style={{textDecoration: 'none'}}
                  >
                    <span className="text-sm">LEARN MORE</span>
                    <div className="learn-more-arrow"></div>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="feature-card">
                  <span className="feature-number">01</span>
                  <div>
                    <h3 className="feature-title">Access the Palm Ecosystem</h3>
                    <p className="feature-description">
                      Easily mint and redeem PUSD through Palm's multi-jurisdictional treasury and cross-chain bridge network.
                      Enjoy a compliant, transparent, and censorship-resistant stablecoin wherever you are.
                    </p>
                  </div>
                </div>
                <div className="feature-card">
                  <span className="feature-number">02</span>
                  <div>
                    <h3 className="feature-title">Secure, Non-Freezable Holdings</h3>
                    <p className="feature-description">
                      Unlike traditional stablecoins, Palm guarantees <strong>no centralized freeze controls</strong>.
                      Your assets remain <strong>fully under your control</strong>, empowering users and communities worldwide.
                    </p>
                  </div>
                </div>
                <div className="feature-card">
                  <span className="feature-number">03</span>
                  <div>
                    <h3 className="feature-title">Built for Freedom</h3>
                    <div className="feature-description">
                      <p className="mb-3">Palm represents a next-generation standard for financial independence:</p>
                      <ul className="ml-4 space-y-1">
                        <li>Backed by <strong>real, verifiable reserves</strong></li>
                        <li>Operates outside unilateral jurisdictional control</li>
                        <li>Compliant with Shariah principles for ethical, interest-free stability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Asset, Your Yield Section */}
      <section className="py-32 px-10 lg:px-12 text-center bg-gray-50 overflow-hidden">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-black mb-8 leading-tight asset-yield-heading">
            Your Asset, Your Yield
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Falcon Finance unlocks liquidity from any liquid asset.
          </p>
          <div className="flex justify-center">
            <Link
              to="/app"
              className="group inline-flex w-fit items-center gap-6 rounded-full transition-colors bg-black px-8 py-6"
              target="_blank"
              style={{textDecoration: 'none'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#165D31'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
            >
              <span className="font-mono text-[15px] uppercase leading-none group-hover:text-white text-white">Start Now</span>
              <div className="css-arrow"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-10 lg:px-12 bg-gray-50 use-cases-section-mobile-padding">
        <div className="max-w-screen-lg mx-auto">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="text-left use-case-card p-8 lg:p-0 rounded-2xl transition-colors duration-300">
              <div className="w-fit rounded-lg bg-black p-2 mb-8">
                <div className="w-4 h-4 text-white flex items-center justify-center">
                  <div className="css-user-icon"></div>
                </div>
              </div>
              <h3 className="text-black font-bold text-xl lg:text-2xl mb-6 use-case-title">For Traders and Investors</h3>
              <p className="text-gray-600 leading-relaxed text-lg lg:text-base use-case-description">
                Leverage USDf to optimize your trading strategy. Convert crypto and other assets into 
                USDf, unlock liquidity, and access competitive yields.
              </p>
            </div>
            
            <div className="text-left use-case-card p-8 lg:p-0 rounded-2xl transition-colors duration-300">
              <div className="w-fit rounded-lg bg-black p-2 mb-8">
                <div className="w-4 h-4 text-white flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="1.5" fill="white"/>
                    <ellipse cx="8" cy="8" rx="6" ry="2.5" stroke="white" strokeWidth="1" fill="none"/>
                    <ellipse cx="8" cy="8" rx="6" ry="2.5" stroke="white" strokeWidth="1" fill="none" transform="rotate(60 8 8)"/>
                    <ellipse cx="8" cy="8" rx="6" ry="2.5" stroke="white" strokeWidth="1" fill="none" transform="rotate(120 8 8)"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-black font-bold text-xl lg:text-2xl mb-6 use-case-title">For Crypto Projects and Founders</h3>
              <p className="text-gray-600 leading-relaxed text-lg lg:text-base use-case-description">
                Redefine treasury management with PUSDf and sPUSDf. Preserve reserves, maintain liquidity, 
                and earn yields for your project.
              </p>
            </div>
            
            <div className="text-left use-case-card p-8 lg:p-0 rounded-2xl transition-colors duration-300">
              <div className="w-fit rounded-lg bg-black p-2 mb-8">
                <div className="w-4 h-4 text-white flex items-center justify-center">
                  <div className="css-bar-chart"></div>
                </div>
              </div>
              <h3 className="text-black font-bold text-xl lg:text-2xl mb-6 use-case-title">For Exchanges and Retail Platforms</h3>
              <p className="text-gray-600 leading-relaxed text-lg lg:text-base use-case-description">
                Offer cutting-edge access to yield-generating products with liquidity, security, 
                and growth potential.
              </p>
            </div>
          </div>

          {/* Mobile Carousel Layout */}
          <div className="hidden">
            <div className="carousel-container overflow-hidden">
              <div className="carousel-track flex transition-transform duration-300 ease-in-out" id="usecase-carousel">
                <div className="carousel-slide w-full flex-shrink-0">
                  <div className="text-left use-case-card p-8 rounded-2xl transition-colors duration-300">
                    <div className="w-fit rounded-lg bg-black p-2 mb-8">
                      <div className="w-4 h-4 text-white flex items-center justify-center">
                        <div className="css-user-icon"></div>
                      </div>
                    </div>
                    <h3 className="text-black font-bold text-xl mb-6">For Traders and Investors</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Leverage USDf to optimize your trading strategy. Convert crypto and other assets into 
                      USDf, unlock liquidity, and access competitive yields.
                    </p>
                  </div>
                </div>
                
                <div className="carousel-slide w-full flex-shrink-0">
                  <div className="text-left use-case-card p-8 rounded-2xl transition-colors duration-300">
                    <div className="w-fit rounded-lg bg-black p-2 mb-8">
                      <div className="w-4 h-4 text-white flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8" cy="8" r="1.5" fill="white"/>
                          <ellipse cx="8" cy="8" rx="6" ry="2.5" stroke="white" strokeWidth="1" fill="none"/>
                          <ellipse cx="8" cy="8" rx="6" ry="2.5" stroke="white" strokeWidth="1" fill="none" transform="rotate(60 8 8)"/>
                          <ellipse cx="8" cy="8" rx="6" ry="2.5" stroke="white" strokeWidth="1" fill="none" transform="rotate(120 8 8)"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-black font-bold text-xl mb-6">For Crypto Projects and Founders</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Redefine treasury management with PUSDf and sPUSDf. Preserve reserves, maintain liquidity, 
                      and earn yields for your project.
                    </p>
                  </div>
                </div>
                
                <div className="carousel-slide w-full flex-shrink-0">
                  <div className="text-left use-case-card p-8 rounded-2xl transition-colors duration-300">
                    <div className="w-fit rounded-lg bg-black p-2 mb-8">
                      <div className="w-4 h-4 text-white flex items-center justify-center">
                        <div className="css-bar-chart"></div>
                      </div>
                    </div>
                    <h3 className="text-black font-bold text-xl mb-6">For Exchanges and Retail Platforms</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Offer cutting-edge access to yield-generating products with liquidity, security, 
                      and growth potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="carousel-dot w-2 h-2 rounded-full bg-orange-500 transition-colors duration-200" data-slide="0"></button>
              <button className="carousel-dot w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200" data-slide="1"></button>
              <button className="carousel-dot w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200" data-slide="2"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Gradient CTA Section */}
      <section className="py-24 px-10 lg:px-12">
        <div 
          className="w-full text-white text-left relative overflow-hidden bg-cover bg-bottom bg-no-repeat flex items-center rounded-2xl"
          style={{
            backgroundImage: "url('/mint-stake.png')",
            height: '472px',
            maxWidth: '1024px',
            margin: '0 auto',
            backgroundPosition: '50% 80%'
          }}
        >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
        
        <div className="relative z-10 py-16 px-8 h-full flex flex-col justify-between">
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight max-w-lg pb-20">
            Unlock Your Liquidity<br />with Palm Finance
          </h2>
          <Link
            to="/docs"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white text-black px-8 py-4 font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors duration-200 self-start mt-2.5"
            style={{textDecoration: 'none'}}
          >
            <span className="text-sm">LEARN MORE</span>
            <div className="learn-more-arrow"></div>
          </Link>
        </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-37.5 px-8 text-center">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-4xl lg:text-5xl font-normal text-black mb-12 leading-tight">
            Pioneering the<br />Next Generation of Yield
          </h2>
          <Link
            to="/app"
            className="group inline-flex w-fit items-center gap-6 rounded-full transition-colors bg-black px-8 py-6"
            target="_blank"
            style={{textDecoration: 'none'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#165D31'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
          >
            <span className="text-white font-mono text-[15px] uppercase leading-none">GET STARTED</span>
            <div className="css-arrow"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
