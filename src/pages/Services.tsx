import { Section } from '../components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export function Services() {
  const tiers = [
    {
      tier: 'Tier 1',
      title: 'The Narrative',
      pitch: 'Own the Story.',
      focus: 'SOP & LOR Focus',
      desc: 'Moving beyond the resume. We transform your professional milestones into a cohesive "Why MBA/MS" narrative.',
      bestFor: 'Applicants with a strong profile who need to bridge the gap between "qualified" and "unforgettable."',
      deliverables: [
        "Deep-dive 'Story Mining' sessions.",
        "3-round iterative editing for SOPs/Essays.",
        "LOR Strategy: Mapping your recommenders to narrative gaps."
      ]
    },
    {
      tier: 'Tier 2',
      title: 'The Comprehensive',
      pitch: 'End-to-End Excellence.',
      focus: 'The Full-Cycle Engine',
      desc: 'Complete Application Management. We act as your "Chief of Staff" for the entire admissions cycle.',
      bestFor: 'High-stakes applicants targeting M7 and Top EU schools who require a zero-defect strategy.',
      featured: true,
      deliverables: [
        "Everything in 'The Narrative.'",
        "School Selection ROI Analysis (US vs EU trade-offs).",
        "Resume Re-engineering (The 'AdCom-Ready' format).",
        "Unlimited Mock Interviews (M7 & HEC/Bocconi style)."
      ]
    },
    {
      tier: 'Tier 3',
      title: 'The Final Polish',
      pitch: 'The Last 2%.',
      focus: 'The AdCom Review',
      desc: 'A rigorous, "Pre-Submission" audit for those who have already completed their drafts.',
      bestFor: 'Self-starters who want the peace of mind of a HEC/Bocconi Alum\'s final "Yes/No."',
      deliverables: [
        "One-time comprehensive review of the entire application portal.",
        "A 'Red Flag' report: Identifying inconsistencies or weak links.",
        "Final tone and 'Elite Polish' check."
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Section className="bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
        >
          Service Modularization
        </motion.div>
        <h1 className="text-5xl md:text-7xl mb-8">
          Strategic <br />
          <span className="italic text-brand-gold">Intervention.</span>
        </h1>
        <p className="text-xl text-brand-slate max-w-2xl mx-auto leading-relaxed">
          Choose the level of engagement your profile requires. From narrative architecture to end-to-end management.
        </p>
      </Section>

      <Section className="bg-brand-cream">
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`flex flex-col p-10 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 ${tier.featured ? 'ring-2 ring-brand-gold relative' : 'border border-gray-100'}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Most Comprehensive
                </div>
              )}
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">{tier.tier}</span>
              <h3 className="text-3xl mb-2">{tier.title}</h3>
              <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-6">{tier.pitch}</p>
              <p className="text-brand-slate text-sm leading-relaxed mb-8">{tier.desc}</p>
              
              <div className="mt-auto space-y-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-slate border-b border-gray-100 pb-2">Deliverables</p>
                  <ul className="space-y-3">
                    {tier.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start space-x-3 text-xs text-brand-navy leading-relaxed">
                        <Check size={14} className="text-brand-gold mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">Best For</p>
                  <p className="text-xs italic text-brand-slate">{tier.bestFor}</p>
                </div>
                
                <Link to="/evaluate" className={`btn-primary w-full text-center text-xs tracking-widest py-4 ${tier.featured ? 'bg-brand-gold' : ''}`}>
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
