import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-violet-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Rocket className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-medium text-violet-300 uppercase tracking-wider">Get Funded</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Level Up?
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Are you a startup building the future of interactive entertainment? We're actively seeking innovative founders with bold visions. Connect with us to explore funding opportunities.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <a href="mailto:ow@playcraftventures.com" className="text-gray-400 hover:text-violet-400 transition-colors">
                    ow@playcraftventures.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                  <p className="text-gray-400">HQ: Hong Kong SAR</p>
                </div>
              </div>
            </div>

            {/* What We Look For */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="font-semibold text-white mb-4">What We Look For</h4>
              <ul className="space-y-3">
                {[
                  'Visionary founders in gaming and entertainment',
                  'Innovative technology and compelling vision',
                  'Scalable business model and clear growth path',
                  'Strong founding team with domain expertise'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-[#13131a] border border-white/10 rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-gray-400">
                    We've received your submission. Our team will review it and reach out if there's a potential fit.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white mb-6">Connect With Us</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Founder Name</label>
                        <Input 
                          required
                          placeholder="Your name"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <Input 
                          type="email"
                          required
                          placeholder="founder@startup.com"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Startup Name</label>
                      <Input 
                        required
                        placeholder="Your startup name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Stage</label>
                      <Select value={stage} onValueChange={setStage}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="Select funding stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre-seed">Pre-seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="series-a">Series A</SelectItem>
                          <SelectItem value="series-b">Series B</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Tell us about your startup</label>
                      <Textarea 
                        required
                        rows={4}
                        placeholder="What are you building? What problem are you solving? What makes your solution unique?"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500 resize-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Deck URL (optional)</label>
                      <Input 
                        type="url"
                        placeholder="https://..."
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-violet-500"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full py-6 text-base font-semibold bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 rounded-xl shadow-lg shadow-violet-500/30 transition-all duration-300"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Submit
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}