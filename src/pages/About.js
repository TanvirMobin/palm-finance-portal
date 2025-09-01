import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen py-20 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">About Palm Finance</h1>
          <p className="text-xl text-dark-300">
            Universal Collateralization Infrastructure leading with innovations, security and yield
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="bg-dark-800 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-dark-300 leading-relaxed mb-6">
              Palm Finance is revolutionizing the DeFi landscape by providing a universal collateralization 
              infrastructure that enables users to unlock liquidity from any liquid asset. Our protocol 
              empowers users to mint PUSDf, an overcollateralized synthetic dollar, and stake it to earn 
              competitive yields through institutional-grade trading strategies.
            </p>
            <p className="text-dark-300 leading-relaxed">
              We believe in transparent, secure financial solutions designed for resilient yield 
              performance in any market condition, making DeFi accessible and profitable for everyone.
            </p>
          </div>

          <div className="bg-dark-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Why Palm Finance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-palm-400 mb-3">Innovation</h3>
                <p className="text-dark-300">
                  Cutting-edge technology that pushes the boundaries of what's possible in DeFi.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-palm-400 mb-3">Security</h3>
                <p className="text-dark-300">
                  Battle-tested protocols with multiple security audits and robust risk management.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-palm-400 mb-3">Yield</h3>
                <p className="text-dark-300">
                  Competitive returns through diversified, institutional-grade trading strategies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-palm-400 mb-3">Accessibility</h3>
                <p className="text-dark-300">
                  User-friendly interface that makes advanced DeFi strategies accessible to all.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
