import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const newsItems = [
    {
      date: 'Coming Soon',
      title: 'Palm Finance Protocol Launch',
      excerpt: 'The official launch of Palm Finance protocol with full minting and staking capabilities.',
      category: 'Protocol'
    },
    {
      date: 'Coming Soon',
      title: 'Security Audit Completion',
      excerpt: 'Comprehensive security audit results and protocol safety measures.',
      category: 'Security'
    },
    {
      date: 'Coming Soon',
      title: 'Community Governance Launch',
      excerpt: 'Introduction of decentralized governance for Palm Finance protocol decisions.',
      category: 'Governance'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Latest News</h1>
          <p className="text-xl text-dark-300">
            Stay updated with the latest developments from Palm Finance
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-2xl p-6 hover:bg-dark-700 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-palm-400 text-sm font-medium">{item.category}</span>
                <span className="text-dark-400 text-sm">{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-dark-300 leading-relaxed">{item.excerpt}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default News;
