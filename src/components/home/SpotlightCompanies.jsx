import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Lytrix', logo: 'Lytrix' },
  { name: 'Ditto AI', logo: 'DittoAI' },
  { name: 'Anthropic', logo: 'ANTHROP\\C' },
  { name: 'Nexus Games', logo: 'NEXUS' },
  { name: 'CloudPlay', logo: 'CloudPlay' },
  { name: 'Forge Interactive', logo: 'FORGE' },
  { name: 'MetaForge', logo: 'MetaForge' },
  { name: 'Starlight', logo: 'STARLIGHT' },
];

// Duplicate for seamless loop
const duplicatedCompanies = [...companies, ...companies];

export default function SpotlightCompanies() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d14]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Spotlight Companies
          </h2>
          <p className="text-gray-400 text-lg">
            We are proud to back exceptional founders building the future
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d14] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d14] to-transparent z-10 pointer-events-none" />
          
          {/* Marquee Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="w-48 h-28 bg-[#13131a] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-violet-500/30 hover:bg-[#16161f] transition-all duration-300 cursor-pointer">
                    {/* Logo Text */}
                    <div className="text-xl font-bold text-white/80 group-hover:text-white transition-colors">
                      {company.logo === 'DittoAI' ? (
                        <span>
                          Ditto<span className="text-violet-400">AI</span>
                        </span>
                      ) : company.logo === 'Lytrix' ? (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-pink-400" />
                          Lytrix
                        </span>
                      ) : company.logo === 'ANTHROP\\C' ? (
                        <span className="text-sm tracking-wider font-mono">ANTHROP\C</span>
                      ) : (
                        <span>{company.logo}</span>
                      )}
                    </div>
                    {/* Company Name */}
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}