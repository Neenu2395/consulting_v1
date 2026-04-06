import { Section } from '../components/Layout';
import { EvaluationForm } from '../components/EvaluationForm';
import { motion } from 'motion/react';
import { AlertCircle, ShieldAlert, TrendingUp, Users } from 'lucide-react';

export function Evaluate() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            Global Admissions Strategy
          </motion.div>
          <h1 className="text-5xl md:text-7xl mb-8">
            Get Your <br />
            <span className="italic text-brand-gold">Hard-Truth</span> Diagnostic.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            15 Minutes. Zero Fluff. Just a rigorous diagnostic of your M7/EU Elite MBA and MS chances. Speak directly with HEC and Bocconi Alums to identify the 'Red Flags' in your profile before the AdCom does.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-cream">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 shadow-lg border-l-4 border-brand-gold">
              <h3 className="text-2xl mb-6 font-serif">What to Expect</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <ShieldAlert className="text-brand-gold" size={20} />,
                    title: "Hard Feedback",
                    desc: "We identify the 'Red Flags' in your profile immediately."
                  },
                  {
                    icon: <TrendingUp className="text-brand-gold" size={20} />,
                    title: "ROI Filter",
                    desc: "We analyze if your target schools align with your salary goals."
                  },
                  {
                    icon: <Users className="text-brand-gold" size={20} />,
                    title: "Human Imperative",
                    desc: "AI can help write essays, but human evaluation is necessary to get admission."
                  },
                  {
                    icon: <AlertCircle className="text-brand-gold" size={20} />,
                    title: "No Sales Pitch",
                    desc: "This is a strategy session for you, not a discovery call for us."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-widest text-brand-navy">{item.title}</h4>
                      <p className="text-brand-slate text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-brand-navy text-white shadow-lg">
              <p className="text-sm italic font-serif text-gray-300">
                "We architect the narrative that ambitious global applicants need to stand out in the most competitive pools."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <EvaluationForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
