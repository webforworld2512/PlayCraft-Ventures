import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, MapPin, Users } from 'lucide-react';

const team = [
  {
    name: 'Alexandra Chen',
    role: 'Managing Partner',
    location: 'San Francisco, USA',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    bio: 'Former VP at EA Games. 20+ years in gaming.'
  },
  {
    name: 'Marcus Webb',
    role: 'General Partner',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    bio: 'Co-founded 3 gaming studios. Exited to Tencent.'
  },
  {
    name: 'Yuki Tanaka',
    role: 'Partner',
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    bio: 'Former Sony Interactive exec. Mobile gaming pioneer.'
  },
  {
    name: 'David Okonkwo',
    role: 'Principal',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    bio: 'Led $100M+ gaming investments. Emerging markets expert.'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Head of Operations',
    location: 'Austin, USA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    bio: 'Former Riot Games operations lead.'
  },
  {
    name: 'Erik Johansson',
    role: 'Venture Partner',
    location: 'Stockholm, Sweden',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    linkedin: '#',
    bio: 'Founded King. Advisor to 50+ gaming startups.'
  }
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Users className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-medium text-violet-300 uppercase tracking-wider">The Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Industry Veterans
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Our team brings decades of combined experience building, operating, and investing in gaming companies
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-[#13131a] border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-500">
                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-violet-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-4">
                    <MapPin className="w-3 h-3" />
                    {member.location}
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    {member.bio}
                  </p>
                  
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect
                  </a>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-cyan-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}