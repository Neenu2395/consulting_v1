import { Section, Container } from '../components/Layout';
import { motion } from 'motion/react';
import { Quote, GraduationCap, CheckCircle2 } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      school: 'RUHR Bochum',
      program: 'MS IN Computational engineering',
      result: 'Admitted',
      quote: "The strategic depth provided by the Elite Admissions team was unparalleled. They helped me articulate my technical background in a way that resonated perfectly with the German admissions committee's expectations.",
      candidate: "Applied materials engineer, Beck Engineering, Berlin"
    },
    {
      school: 'RWTH Aachen',
      program: 'MS in Materials Engineering',
      result: 'Admitted',
      quote: "I was struggling to differentiate my profile among thousands of applicants. The founders' dual-review process identified exactly which parts of my research experience to highlight for RWTH's rigorous standards.",
      candidate: "Student at RWTH"
    },
    {
      school: 'SDA Bocconi',
      program: 'MBA',
      result: 'Admitted',
      quote: "Working with HEC and Bocconi alumni gave me an 'insider' perspective that no other consultant could offer. They didn't just edit my essays; they architected a narrative that showcased my true leadership potential.",
      candidate: "Product manager at ABB, 2025 MBA Grad"
    }
  ];

  return (
    <div className="pt-20">
      <Section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-brand-gold text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            Proven Results
          </motion.div>
          <h1 className="text-5xl md:text-7xl mb-8">
            Elite <br />
            <span className="italic text-brand-gold">Success Stories.</span>
          </h1>
          <p className="text-xl text-brand-slate leading-relaxed max-w-2xl">
            We don't just aim for admissions; we aim for the top. Our candidates have secured spots in some of the most competitive technical and business programs globally.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-cream">
        <div className="grid gap-12">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={120} className="text-brand-navy" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="px-4 py-1 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest">
                    {story.result}
                  </div>
                  <div className="h-px w-12 bg-brand-gold" />
                  <span className="text-brand-gold font-serif text-xl">{story.school}</span>
                </div>

                <h3 className="text-3xl md:text-4xl mb-8 font-serif italic text-brand-navy">
                  {story.program}
                </h3>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                  <div className="lg:col-span-3">
                    <div className="relative">
                      <Quote className="absolute -top-6 -left-6 text-brand-gold/20" size={48} />
                      <p className="text-lg md:text-xl text-brand-slate leading-relaxed italic relative z-10">
                        "{story.quote}"
                      </p>
                    </div>
                    <p className="mt-6 text-brand-navy font-bold uppercase tracking-widest text-xs">
                      — {story.candidate}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <div className="p-6 bg-brand-cream border border-brand-gold/10">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Strategic Impact</h4>
                      <ul className="space-y-3">
                        {[
                          "Narrative Architecture",
                          "Stress-Tested SOP",
                          "AdCom Benchmark Alignment"
                        ].map((item, j) => (
                          <li key={j} className="flex items-center space-x-2 text-xs text-brand-navy">
                            <CheckCircle2 size={14} className="text-brand-gold" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-navy text-white text-center">
        <h2 className="text-4xl mb-8">Ready to be our next success story?</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Your journey to an elite MBA or MS program starts with a single, strategic conversation. Let's engineer your admission.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/evaluate" className="btn-primary bg-brand-gold hover:bg-white hover:text-brand-navy">
            Book Free Evaluation
          </a>
          <a href="https://www.linkedin.com/in/elite-mba-consulting-9a91a4401/" target="_blank" rel="noopener noreferrer" className="btn-outline border-white text-white hover:bg-white hover:text-brand-navy">
            Connect on LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
}
