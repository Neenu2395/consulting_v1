import { Section } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, BookOpen, Globe, CheckCircle2, Quote } from 'lucide-react';

export function Founders() {
  return (
    <div className="pt-20">
      <Section className="bg-white">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            The Global Power Couple Advantage
          </motion.div>
          <h1 className="text-5xl md:text-7xl mb-8">
            Two Perspectives. <br />
            <span className="italic text-brand-gold">One Goal.</span>
          </h1>
          <p className="text-xl text-brand-slate leading-relaxed mb-12">
            Most consultants provide a second pair of eyes. We provide a dual-committee review. Our 'Power Couple' approach means your application is stress-tested against the benchmarks of both the US M7 and the European Elite Master's standards. We are doing this to share our success stories and help aspirants reach their goals by providing the same elite-level strategy that cleared the gates for us.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="https://www.linkedin.com/in/athulgopinath/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-cream border border-brand-gold/20 flex items-center space-x-3 hover:border-brand-gold transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">HEC Paris Alum</span>
            </a>
            <a href="https://www.linkedin.com/in/neenuthankachan/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-cream border border-brand-gold/20 flex items-center space-x-3 hover:border-brand-gold transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest">SDA Bocconi Alum</span>
            </a>
          </div>
          <Link to="/evaluate" className="btn-primary">
            Meet Your Strategists
          </Link>
        </div>
      </Section>

      <Section className="bg-brand-navy text-white">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl mb-6">Dual-Vetted Strategies</h2>
              <p className="text-gray-400 leading-relaxed">
                Your narrative is reviewed by both founders. One applies the rigorous, structured logic of the French elite (HEC), while the other brings the entrepreneurial, design-thinking flair of the Italian masters (Bocconi). Together, we stress-test your profile against the M7 benchmarks.
              </p>
            </div>
            
            <div className="grid gap-8">
              {[
                {
                  icon: <Globe className="text-brand-gold" />,
                  title: "Global Network",
                  desc: "Direct access to alumni networks across London, Paris, Milan, New York, and Dubai."
                },
                {
                  icon: <BookOpen className="text-brand-gold" />,
                  title: "AdCom Insights",
                  desc: "We know exactly what the committees at Harvard, Stanford, INSEAD, and LBS are looking for this cycle."
                }
              ].map((item, i) => (
                <div key={i} className="flex space-x-6">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-800 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" 
                alt="Founders" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-gold p-8 text-brand-navy shadow-2xl">
              <span className="text-4xl font-serif font-bold">4+</span>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-2">YEARS POST-MBA EXPERIENCE</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 font-serif italic text-brand-navy">Our Mission</h2>
              <p className="text-brand-slate leading-relaxed mb-6">
                We started Elite Admissions because we saw too many brilliant candidates failing not due to a lack of merit, but due to a lack of strategy. 
              </p>
              <p className="text-brand-slate leading-relaxed">
                Our goal is to democratize the 'insider' knowledge of the HEC and Bocconi networks. We are doing this to share our success stories and help aspirants reach their goals by providing the same elite-level strategy that cleared the gates for us.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl border-t-4 border-brand-gold">
              <Quote className="text-brand-gold mb-4" size={32} />
              <p className="text-lg text-brand-navy font-serif italic leading-relaxed">
                "We don't just consult; we mentor. Your success is a testament to the effectiveness of the strategy we've engineered over years of post-MBA experience."
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-8">The "Hard Truth" Philosophy</h2>
          <p className="text-brand-slate mb-12 leading-relaxed">
            We don't tell you what you want to hear. We tell you what the AdCom will think. If your GMAT is too low for your target M7 or your narrative is too 'generic' for HEC, we will tell you - and then we will help you pivot.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "No Sales Pitches",
              "Direct Founder Access",
              "ROI-Driven School Selection",
              "Zero-Deficit Strategy"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 bg-brand-cream border border-gray-100">
                <CheckCircle2 className="text-brand-gold" size={20} />
                <span className="font-medium text-brand-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
