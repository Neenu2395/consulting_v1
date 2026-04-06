import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export function EvaluationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 text-center shadow-2xl border border-brand-gold/20"
      >
        <CheckCircle2 size={64} className="mx-auto text-brand-gold mb-6" />
        <h3 className="text-3xl mb-4">Profile Received.</h3>
        <p className="text-brand-slate max-w-md mx-auto mb-8">
          Our founders are reviewing your diagnostic. Expect a hard-truth evaluation in your inbox within 24-48 hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="text-brand-gold font-medium hover:underline">
          Submit another profile
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Full Name</label>
          <input required type="text" className="input-field" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Email Address</label>
          <input required type="email" className="input-field" placeholder="john@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Current GMAT/GRE</label>
          <input required type="text" className="input-field" placeholder="740 / 330 or Practice Score" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Undergrad GPA & University</label>
          <input required type="text" className="input-field" placeholder="3.8 / 4.0 - IIT Delhi" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Years of Experience & Industry</label>
          <input required type="text" className="input-field" placeholder="4 Years - Fintech" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">Target Schools (Top 3)</label>
          <input required type="text" className="input-field" placeholder="INSEAD, HEC, LBS" />
        </div>
      </div>
      
      <div className="space-y-2 mb-8">
        <label className="text-xs font-bold uppercase tracking-widest text-brand-slate">The Biggest Gap in Your Profile</label>
        <textarea required className="input-field min-h-[120px]" placeholder="What keeps you up at night about your application?"></textarea>
      </div>

      <button 
        disabled={loading}
        type="submit" 
        className="btn-primary w-full flex justify-center items-center space-x-3 group"
      >
        <span>{loading ? 'Analyzing...' : 'Send My Profile for Review'}</span>
        {!loading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
      </button>
      
      <p className="text-[10px] text-center mt-6 text-brand-slate uppercase tracking-widest">
        Directly sent to <span className="text-brand-navy font-bold">consultingelitemba@gmail.com</span>
      </p>
    </form>
  );
}
