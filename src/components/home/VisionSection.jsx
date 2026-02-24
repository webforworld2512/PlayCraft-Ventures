import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Rocket } from 'lucide-react';

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-medium text-violet-300 uppercase tracking-wider">Our Vision</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Building the </span>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Future of Play
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              The gaming industry represents one of the largest entertainment markets in the world, 
              with billions of players across every continent. We believe great games come from 
              passionate teams with bold visions.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Throughout our careers, we've witnessed the evolution of gaming from niche hobby to 
              global phenomenon. We've built studios, published hits, and learned invaluable lessons 
              along the way. Now, we're here to share that knowledge and capital with the next 
              generation of game creators.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Game Studios', 'Gaming Tech', 'Gaming Services', 'Game Infrastructure'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Target,
                title: 'Focused Investment',
                description: 'We concentrate exclusively on gaming and interactive entertainment, bringing deep industry expertise to every partnership.',
                gradient: 'from-violet-500 to-violet-600'
              },
              {
                icon: Heart,
                title: 'Founder-First Approach',
                description: 'We believe in founders who dream big. We support their vision without interference, providing resources when needed.',
                gradient: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: Rocket,
                title: 'Strategic Growth',
                description: 'Beyond capital, we bring connections, operational expertise, and a proven playbook for scaling gaming companies.',
                gradient: 'from-violet-500 to-cyan-500'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group relative p-6 bg-[#13131a] border border-white/5 rounded-2xl hover:border-violet-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex gap-5">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}