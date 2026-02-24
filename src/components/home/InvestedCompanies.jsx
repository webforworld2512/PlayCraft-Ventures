import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const companies = [
  { name: 'Tag Games', logo: 'tag' },
  { name: 'Rastar Game', logo: 'rastar' },
  { name: '6waves', logo: '6waves' },
  { name: 'Ledo Interactive', logo: 'ledo' },
  { name: 'Ledo Interactive CN', logo: 'ledocn' },
];

export default function InvestedCompanies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const renderLogo = (company) => {
    switch (company.logo) {
      case 'tag':
        return (
          <div className="flex items-center gap-1">
            <span className="bg-red-500 text-white font-bold px-2 py-1 rounded text-xl">tag</span>
            <span className="text-3xl font-light text-gray-700">games</span>
          </div>
        );
      case 'rastar':
        return (
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold tracking-wider">
                <span className="text-red-500">R</span>
                <span className="text-orange-500">A</span>
                <span className="text-red-600">ST</span>
                <span className="text-orange-400">A</span>
                <span className="text-red-500">R</span>
              </span>
              <span className="text-red-500 text-2xl">✦</span>
            </div>
            <span className="text-xs tracking-[0.3em] text-gray-500">RASTAR GAME</span>
          </div>
        );
      case '6waves':
        return (
          <div className="flex flex-col items-center">
            <div className="bg-red-500 rounded-lg px-3 py-2">
              <span className="text-white font-bold text-2xl">6W</span>
            </div>
            <span className="text-red-500 font-semibold text-sm mt-1">6waves</span>
          </div>
        );
      case 'ledo':
        return (
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-cyan-500 font-bold text-2xl">L</span>
              <span className="text-orange-500 font-bold text-2xl">D</span>
            </div>
            <span className="text-xs text-orange-500 tracking-wider">LEDO INTERACTIVE</span>
          </div>
        );
      case 'ledocn':
        return (
          <div className="flex items-center gap-1">
            <span className="text-3xl font-bold text-orange-500">乐</span>
            <span className="text-3xl font-bold text-orange-400">道</span>
          </div>
        );
      default:
        return <span className="text-2xl font-bold text-gray-700">{company.name}</span>;
    }
  };

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Invested companies are
          </h2>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-[#13131a] border border-white/5 rounded-2xl hover:border-violet-500/30 transition-all duration-300 w-full h-32"
            >
              {renderLogo(company)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}