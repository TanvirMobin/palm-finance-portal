import React from 'react';
// import { Link } from 'react-router-dom';
import { Twitter, Linkedin, MessageCircle, MessageSquare, Mail } from 'lucide-react';

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  // const companyLinks = [
  //   { name: 'About', path: '/about' },

  // const resourceLinks = [
  //   { name: 'Docs', path: '/docs' },
  //   { name: 'Transparency', path: '/transparency' },
  //   { name: 'Whitepaper', path: '/whitepaper-v2.pdf' },
  // ];

  // const termLinks = [
  //   { name: 'Privacy Policy', path: '/privacy-policy' },
  //   { name: 'Terms of Use', path: '/terms-of-use' },
  // ];

  const socialLinks = [
    { name: 'X (Twitter)', url: 'https://x.com/palmfinance', icon: Twitter },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/palmfinance', icon: Linkedin },
    { name: 'Telegram', url: 'https://t.me/PalmFinanceTG', icon: MessageCircle },
    { name: 'Discord', url: 'https://discord.gg/palmfinance', icon: MessageSquare },
    { name: 'Email', url: 'mailto:hello@palm.finance', icon: Mail },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 space-y-8 py-8 md:py-12 lg:py-16" style={{backgroundColor: '#F1E9DB'}}>
      {/* Join Palm Community Section */}
      <section style={{backgroundColor: '#F7F1E8'}} className="py-8 md:py-12 lg:py-16 rounded-2xl max-w-screen-lg mx-auto mb-8">
        <div className="text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-normal text-black mb-6 md:mb-8">
            Join the <span className="text-orange-500">Palm</span> Community
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-lg text-xs md:text-sm font-medium transition-colors duration-200 flex items-center no-underline"
                  style={{gap: '0.5rem', textDecoration: 'none'}}
                >
                  <IconComponent size={20} />
                  <span className="social-label">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Palm Navigation Section */}
      {/* <footer style={{backgroundColor: '#F7F1E8'}} className="py-8 md:py-12 lg:py-16 rounded-2xl max-w-screen-lg mx-auto mb-8">
        <div className="px-10 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
            <div className="flex-shrink-0 text-center lg:text-left lg:w-1/4">
              <div className="text-3xl md:text-4xl font-bold text-black">
                Palm<span className="text-orange-500">.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 lg:w-3/4">
              <div className="text-center md:text-left">
                <h3 className="text-gray-500 text-sm font-semibold mb-3 md:mb-4">Company</h3>
                <div className="md:hidden space-y-2">
                  {companyLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-black text-sm transition-colors duration-200 block"
                        style={{textDecoration: 'none'}}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <ul className="hidden md:block space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-black text-sm transition-colors duration-200"
                        style={{textDecoration: 'none'}}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-gray-500 text-sm font-semibold mb-3 md:mb-4">Resources</h3>
                <div className="md:hidden space-y-2">
                  {resourceLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-black text-sm transition-colors duration-200 block"
                        style={{textDecoration: 'none'}}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <ul className="hidden md:block space-y-3">
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-black text-sm transition-colors duration-200"
                        style={{textDecoration: 'none'}}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-gray-500 text-sm font-semibold mb-3 md:mb-4">Terms</h3>
                <div className="md:hidden space-y-2">
                  {termLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-black text-sm transition-colors duration-200 block"
                        style={{textDecoration: 'none'}}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <ul className="hidden md:block space-y-3">
                  {termLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-black text-sm transition-colors duration-200"
                        style={{textDecoration: 'none'}}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;
