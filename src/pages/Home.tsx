import { Section, Container } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, Target, TrendingUp, ShieldCheck, Users, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -skew-x-12 translate-x-1/4 z-0" />
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
            >
              Elite Admissions Consulting
            </motion.div>
            <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1]">
              Stop Guessing. <br />
              <span className="italic text-brand-gold">Start Engineering</span> <br />
              Your Admission.
            </h1>
            <p className="text-xl text-brand-slate mb-10 max-w-xl leading-relaxed">
              Bridge the gap to the M7, Top EU MBA or Master's programs with a strategy crafted by those who’ve cleared the gates. We don't just edit essays; we architect the ROI-driven narrative that global high-achievers need to stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/evaluate" className="btn-primary text-center">
                Book Your Free Profile Evaluation
              </Link>
              <Link to="/services" className="btn-outline text-center">
                Our Services
              </Link>
            </div>
            
            <div className="mt-12 pt-12 border-t border-gray-200 flex items-center space-x-8">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-brand-navy">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-slate">Founder Led</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-brand-navy">MBA/MS</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-slate">Elite Focus</span>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <p className="text-xs text-brand-slate max-w-[200px] italic">
                "Direct access to the HEC Paris and SDA Bocconi networks. We don't hire 'mentors'; you work directly with the founders."
              </p>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
                alt="Elite Education" 
                className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-navy text-white p-8 shadow-2xl max-w-[280px]">
                <ShieldCheck className="text-brand-gold mb-4" size={32} />
                <p className="text-sm font-serif italic">
                  "We architect the narrative that ambitious global applicants need to stand out in the most competitive MBA and MS pools."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* AI vs Human Section */}
      <Section className="bg-brand-cream border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-10 bg-white shadow-2xl border-l-4 border-brand-gold">
              <h2 className="text-4xl mb-6">The Human <span className="italic text-brand-gold">Imperative</span></h2>
              <p className="text-brand-slate text-lg leading-relaxed mb-6">
                In an era of generative AI, anyone can produce a "good" essay. But "good" doesn't get you into Harvard, Stanford, or RWTH Aachen.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 bg-brand-navy text-white rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-brand-navy font-medium">
                    AI can help write essays, but <span className="text-brand-gold">human evaluation</span> is necessary to get admission.
                  </p>
                </div>
                <p className="text-brand-slate text-sm leading-relaxed">
                  We are trained to spot AI-generated patterns. We provide the rigorous, human-led stress testing that ensures your unique voice and authentic leadership potential are what shine through.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl mb-6">Beyond the Algorithm</h3>
            <p className="text-brand-slate mb-8 leading-relaxed">
              We leverage our HEC and Bocconi pedigree to provide a dual-committee review that no algorithm can replicate. We don't just check for grammar; we check for <span className="font-bold text-brand-navy">strategic alignment</span> with elite school benchmarks.
            </p>
            <Link to="/evaluate" className="text-brand-gold font-bold uppercase tracking-widest text-xs hover:underline flex items-center">
              Get Your Human-Led Diagnostic <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Trust Signals / Success Stories Preview */}
      <Section id="success" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Elite Success Stories</h2>
          <p className="text-brand-slate uppercase tracking-widest text-xs">Proven Results in MBA & Technical Master's</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { school: 'RUHR Bochum', profile: 'Applied mechanics engineer, Beck Engineering, Berlin', result: 'Admitted' },
            { school: 'RWTH Aachen', profile: 'Student at RWTH Aachen', result: 'Admitted' },
            { school: 'SDA Bocconi', profile: 'Product manager, ABB, Amazon Launch intern, 2025 MBA Grad', result: 'Admitted' }
          ].map((story, i) => (
            <div key={i} className="p-8 border border-gray-100 hover:border-brand-gold transition-colors bg-brand-cream/30">
              <div className="text-brand-gold font-serif text-2xl mb-2">{story.school}</div>
              <div className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-4">{story.profile}</div>
              <div className="pt-4 border-t border-gray-200 text-brand-slate italic">
                "{story.result}"
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/success-stories" className="text-brand-gold font-bold uppercase tracking-widest text-xs hover:underline flex items-center justify-center">
            View Full Success Stories & Candidate Quotes <ChevronRight size={14} className="ml-1" />
          </Link>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-brand-navy text-white">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-5xl mb-6 leading-tight">Service <br /><span className="text-brand-gold italic">Modularization</span></h2>
            <p className="text-gray-400 mb-8">Choose the level of strategic intervention your profile requires.</p>
            <Link to="/evaluate" className="btn-primary bg-brand-gold hover:bg-white hover:text-brand-navy">
              View All Services
            </Link>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {[
              { 
                tier: 'Tier 1', 
                title: 'The Narrative', 
                focus: 'SOP & LOR Focus',
                desc: 'Own the Story. We transform your professional milestones into a cohesive "Why MBA/MS" narrative.'
              },
              { 
                tier: 'Tier 2', 
                title: 'The Comprehensive', 
                focus: 'Full-Cycle Engine',
                desc: 'End-to-End Excellence. We act as your "Chief of Staff" for the entire admissions cycle.'
              }
            ].map((service, i) => (
              <div key={i} className="p-10 border border-white/10 hover:border-brand-gold transition-all group">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 block">{service.tier}</span>
                <h3 className="text-3xl mb-2">{service.title}</h3>
                <p className="text-brand-gold text-sm mb-6 font-mono">{service.focus}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{service.desc}</p>
                <ChevronRight className="group-hover:translate-x-2 transition-transform text-brand-gold" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
