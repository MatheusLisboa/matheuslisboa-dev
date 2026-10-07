import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import { experience } from '../data/qa';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="experience" className="py-28 px-6 max-w-4xl mx-auto scroll-mt-24" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader index="03" label="Experiência" />

        <ol className="relative border-l border-cyan-400/20 ml-2">
          {experience.map((e, i) => (
            <li
              key={`${e.company}-${e.period}`}
              className={`relative pl-8 pb-10 last:pb-0 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-400"
                style={{ boxShadow: '0 0 10px rgba(0,229,255,0.7)' }}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-sans font-bold text-xl text-text-primary">
                  {e.role} <span className="text-cyan-400">· {e.company}</span>
                </h3>
                <span className="font-mono text-xs text-text-muted">{e.period}</span>
              </div>
              <p className="font-mono text-xs text-green-400 mt-1 mb-3">{e.note}</p>
              <ul className="space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="text-text-secondary text-sm leading-relaxed flex gap-2">
                    <span className="text-cyan-400/60" aria-hidden="true">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
