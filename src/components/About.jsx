import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import { site, stats } from '../data/site';
import { stack } from '../data/skills';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto scroll-mt-24" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader index="01" label="Sobre" />

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_20s_linear_infinite] motion-reduce:animate-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <div className="absolute inset-6 rounded-full border border-green-400/15 animate-[spin_14s_linear_infinite_reverse] motion-reduce:animate-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>

              <div
                className="absolute inset-10 overflow-hidden"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  border: '1px solid rgba(0,229,255,0.25)',
                  boxShadow: '0 0 40px rgba(0,229,255,0.12), inset 0 0 30px rgba(0,229,255,0.05)',
                }}
              >
                <img
                  src={site.photo}
                  alt="Matheus Lisboa programando no notebook"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover object-top scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071018]/40 to-transparent" aria-hidden="true" />
              </div>

              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
                  style={{
                    top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                    boxShadow: '0 0 6px rgba(0,229,255,0.6)',
                  }}
                  aria-hidden="true"
                />
              ))}

              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-400/40" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-400/40" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-400/40" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-400/40" aria-hidden="true" />
            </div>
          </div>

          <div>
            <h2 className="font-sans font-bold text-4xl text-text-primary mb-6 leading-tight">
              Fullstack que entrega <span className="text-cyan-400">produto</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Construo aplicações de ponta a ponta — React e Next no frontend, Node e Postgres no backend —
              e coloco em produção para negócios reais em {site.location.replace(', AL', '')}.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Escola de natação, transportadora, BPO financeiro, finanças de casal. O padrão é o mesmo:
              entender o processo, modelar os dados e deixar o sistema simples de usar.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-cyan-400/10">
              {stats.map(({ n, label }) => (
                <div key={label} className="text-center">
                  <div className="font-mono text-xl sm:text-2xl font-bold text-cyan-400 glow-cyan">{n}</div>
                  <div className="font-mono text-[10px] sm:text-xs text-text-muted uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.map(({ name, color }) => (
                <span
                  key={name}
                  className="font-mono text-xs px-3 py-1.5 rounded border whitespace-nowrap transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    borderColor: `${color}44`,
                    color,
                    background: `${color}11`,
                    boxShadow: `0 0 8px ${color}22`,
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
