import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Lightbulb, Zap, Layers } from 'lucide-react';

const strengths = [
  {
    icon: TrendingUp,
    title: 'Asymmetric Return Focus',
    description: 'We target opportunities where upside compounds across cycles while downside is structurally protected particularly in picks-and-shovels models such as developer tooling, AI-native workflows, and cloud infrastructure.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop'
  },
  {
    icon: Lightbulb,
    title: 'Deep Gaming Ecosystem Insight',
    description: 'We understand that value accrues beyond content. From AAA release cycles to hardware transitions like those driven by Nintendo and platform shifts catalyzed by franchises like Grand Theft Auto VI, we identify secondary and adjacent winners early.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop'
  },
  {
    icon: Zap,
    title: 'Capital-Efficient Growth Mindset',
    description: 'We favor capital-efficient operators who leverage automation, AI integration, and scalable infrastructure to maximize returns without excessive burn.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    icon: Layers,
    title: 'Long-Term IP & Ecosystem Vision',
    description: 'We back founders building durable ecosystems — not single titles where IP extends across platforms, communities, and monetization layers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  }
];

export default function StrengthsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-medium text-cyan-300 uppercase tracking-wider">Why Playcraft</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Key Strengths
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            What sets us apart as your ideal investment partner in the gaming industry
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-[#13131a] border border-white/5 rounded-3xl overflow-hidden hover:border-violet-500/20 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={strength.image}
                  alt={strength.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-[#13131a]/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute bottom-4 left-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-violet-500/30">
                    <strength.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {strength.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {strength.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-cyan-500/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}