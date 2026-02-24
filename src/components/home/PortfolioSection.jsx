import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Gamepad2 } from 'lucide-react';

const portfolioCompanies = [
  {
    name: 'Nexus Games',
    description: 'AAA multiplayer studio building the next generation of competitive shooters.',
    category: 'Game Studio',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    name: 'Pixel Dynamics',
    description: 'Mobile-first studio pioneering innovative casual puzzle mechanics.',
    category: 'Mobile Games',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    name: 'CloudPlay Tech',
    description: 'Cloud gaming infrastructure enabling seamless cross-platform experiences.',
    category: 'Gaming Tech',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    name: 'Forge Interactive',
    description: 'VR/AR studio creating immersive social experiences for next-gen platforms.',
    category: 'VR/AR',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    name: 'Realm Studios',
    description: 'RPG specialists crafting deep narrative-driven adventures.',
    category: 'Game Studio',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    name: 'MetaForge',
    description: 'Building tools for user-generated content and game modding.',
    category: 'Gaming Tech',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    name: 'Starlight Games',
    description: 'Strategy game experts with multiple top-grossing titles.',
    category: 'Game Studio',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop',
    url: '#'
  },
  {
    name: 'PlayMetrics',
    description: 'Analytics platform helping studios optimize player engagement.',
    category: 'Gaming Services',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    url: '#'
  }
];

const categories = ['All', 'Game Studio', 'Mobile Games', 'Gaming Tech', 'VR/AR', 'Gaming Services'];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCompanies = activeCategory === 'All' 
    ? portfolioCompanies 
    : portfolioCompanies.filter(c => c.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Gamepad2 className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-medium text-violet-300 uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Investments
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            We partner with exceptional founders building the future of gaming
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredCompanies.map((company, i) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="group relative bg-[#13131a] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] to-transparent" />
                
                {/* External Link Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="inline-block px-2 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-md mb-3">
                  {company.category}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {company.description}
                </p>
              </div>

              {/* Hover Border Gradient */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-violet-500/20 transition-colors duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}