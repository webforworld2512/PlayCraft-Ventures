import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Newspaper, Calendar } from 'lucide-react';

const news = [
  {
    title: 'Emerging Markets in Gaming: Scale, Monetization Gaps, and Policy-Driven Growth',
    date: '13 Feb 2026',
    excerpt: 'East Asia continues to function as the structural center of gravity for the global games industry, combining immense scale with persistent systemic risk. China\'s games market has reached approximate revenue equivalence with the United States, with each generating roughly $50 billion annually. The region has also demonstrated its ability to export globally successful intellectual property, as seen in titles such as Black Myth: Wukong. At the same time, China\'s deep expertise in mobile free-to-play design is increasingly being adapted to PC and console ecosystems. However, regulatory discontinuities — including periodic licensing suspensions and abrupt policy shifts — alongside geopolitical tensions, continue to introduce valuation uncertainty.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69725e6cfc28f2e50b9bbda0/6caab05fb_Post-1.png',
    url: '#'
  },
  {
    title: 'Macau Gaming Sector: Gaming 2026: Where Venture Capital Finds Asymmetric Returns',
    date: '04 Feb 2026',
    excerpt: 'Analysts from Jefferies are signaling a broadly optimistic outlook for Macau\'s gaming industry in 2026, with key operators expected to capitalize on the sector\'s recovery and evolving dynamics.\n\nAccording to the latest industry overview, established players such as Sands China, Galaxy Entertainment, and MGM China are positioned to stand out this year — driven by solid performance in both premium and mass gaming segments. These operators have demonstrated resilience and adaptability, suggesting a renewed confidence in Macau\'s ability to sustain growth after the challenges of recent years.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69725e6cfc28f2e50b9bbda0/716483b66_Post-2.jpeg',
    url: '#'
  },
  {
    title: 'Gaming 2026: Where Venture Capital Finds Asymmetric Returns',
    date: '26 Dec 2025',
    excerpt: 'The gaming industry is entering a capital-efficient upcycle driven not just by content, but by platform leverage, infrastructure scale, and IP monetization depth.\n\nFrom a VC perspective, we see five investable signals shaping 2025–2026:\n\n1. Blockbuster cycles reset risk appetite\nThe confirmed launch of GTA VI (Nov 2026) and a dense AAA pipeline historically catalyze ecosystem-wide spend — benefiting not only publishers, but tools, infrastructure, and services that scale with content demand.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69725e6cfc28f2e50b9bbda0/68636c728_Post-3.jpg',
    url: '#'
  }
];

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="news" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <Newspaper className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-300 uppercase tracking-wider">Latest News</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Insights & Updates
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Stay updated with our latest investments, portfolio news, and industry perspectives
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className="group relative bg-[#13131a] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}