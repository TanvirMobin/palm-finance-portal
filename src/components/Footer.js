import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Verification', path: '/verification' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const resourceLinks = [
    { name: 'Docs', path: '/docs' },
    { name: 'Transparency', path: '/transparency' },
    { name: 'Whitepaper', path: '/whitepaper-v2.pdf' },
  ];

  const termLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Use', path: '/terms-of-use' },
  ];

  const socialLinks = [
    { name: 'X (Twitter)', url: 'https://x.com/palmfinance' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/palmfinance' },
    { name: 'Telegram', url: 'https://t.me/PalmFinanceTG' },
    { name: 'Discord', url: 'https://discord.gg/palmfinance' },
    { name: 'Email', url: 'mailto:hello@palm.finance' },
  ];

  return (
    <div className="px-12 space-y-8 py-16">
      {/* Join Palm Community Section */}
      <section className="bg-white py-16 rounded-2xl max-w-screen-lg mx-auto mb-8">
        <div className="text-center px-8">
          <h2 className="text-3xl font-normal text-black mb-8">
            Join the <span className="text-orange-500">Palm</span> Community
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Palm Navigation Section */}
      <footer className="bg-white py-16 rounded-2xl max-w-screen-lg mx-auto mb-8">
        <div className="px-16">
          <div className="flex justify-between items-start">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-4xl font-bold text-black">
                palm<span className="text-orange-500">.</span>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-3 gap-16">
              {/* Company Links */}
              <div>
                <h3 className="text-gray-500 text-sm font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
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

              {/* Resources */}
              <div>
                <h3 className="text-gray-500 text-sm font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
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

              {/* Terms */}
              <div>
                <h3 className="text-gray-500 text-sm font-semibold mb-4">Terms</h3>
                <ul className="space-y-3">
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

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-gray-500 text-sm font-mono">
              {currentYear} © PALM DIGITAL LIMITED ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
