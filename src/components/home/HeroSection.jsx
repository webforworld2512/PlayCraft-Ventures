import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Gamepad2, Sparkles } from 'lucide-react';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Image Background
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69725e6cfc28f2e50b9bbda0/9b41bdfb2_section-bg.jpg)'
          }}
        /> */}
        {/* Background Effects */}
        
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="assets/Trimmed.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-[#0a0a0f]/80 to-cyan-950/50" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />

        </div>

        <Navbar />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">

              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-gray-300">Investing in the Future of Gaming</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6">Investing Where Play Meets Technology







            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">We partner with founders building interactive entertainment, creator platforms, and AI-driven consumer experiences across Asia and the U.S.




            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 rounded-xl transition-all duration-300 shadow-xl shadow-violet-500/30">

                <Gamepad2 className="w-5 h-5" />
                Apply for Funding
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#vision"
                className="px-8 py-4 text-base font-semibold text-gray-300 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300">

                Learn More
              </a>
            </motion.div>


          </div>
        </div>


    </section>);

}