import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import { practices } from '../data/qa';

export default function QAPractice() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="qa" className="py-28 px-6 max-w-6xl mx-auto scroll-mt-24" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader index="02" label="QA na prática" />

        <p className="text-text-secondary text-sm mb-10 max-w-2xl -mt-8">
          O que faço no dia a dia para a qualidade acontecer durante o desenvolvimento, e não só no fim.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p, i) => (
            <article
              key={p.title}
              className={`relative p-6 border border-[#0d2a3f] bg-surface transition-all duration-700 hover:border-cyan-400/30 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="absolute top-0 left-0 h-0.5 w-12"
                style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
                aria-hidden="true"
              />
              <h3 className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: p.color }}>
                {p.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
