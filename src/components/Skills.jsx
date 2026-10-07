import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import { categories } from '../data/skills';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto scroll-mt-24" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader index="05" label="Stack & ferramentas" />

        <p className="text-text-secondary text-sm mb-10 max-w-2xl -mt-8">
          Ferramentas que uso no dia a dia e que aparecem nos repositórios, não uma lista de buzzword:
          Playwright nos meus projetos, Cypress e Postman no trabalho, GitHub Actions para o CI.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`p-6 border border-[#0d2a3f] bg-surface transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${ci * 0.12}s` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                  aria-hidden="true"
                />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              <ul className="grid grid-cols-2 gap-2">
                {cat.skills.map((s) => (
                  <li
                    key={s.name}
                    className="flex flex-col items-center gap-1.5 p-3 border border-[#0d2a3f] bg-[#050a0f]/60 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <span
                      className="font-mono text-[10px] tracking-wider text-text-primary/80 leading-none"
                      aria-hidden="true"
                    >
                      {s.abbr}
                    </span>
                    <span className="font-mono text-xs text-text-secondary text-center">{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
