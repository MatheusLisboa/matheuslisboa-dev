import { useRef } from 'react';
import { useInView } from './useInView';

const stack = [
  { name: 'HTML', color: '#eb8c20' },
  { name: 'CSS', color: '#fbe961' },
  { name: 'JavaScript', color: '#61DAFB' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
 // { name: 'Docker', color: '#2496ED' },
  { name: 'Git', color: '#F05032' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">01. Sobre</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Avatar */}
<div className="relative flex justify-center" style={{ animationDelay: '0.2s' }}>
  <div className="relative w-80 h-80">
    
    {/* Outer ring */}
    <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_20s_linear_infinite]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400" />
    </div>

    {/* Middle ring */}
    <div className="absolute inset-6 rounded-full border border-green-400/15 animate-[spin_14s_linear_infinite_reverse]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-400" />
    </div>

    {/* FOTO */}
    <div
      className="absolute inset-10 overflow-hidden"
      style={{
        clipPath:
          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        border: '1px solid rgba(0,229,255,0.25)',
        boxShadow:
          '0 0 40px rgba(0,229,255,0.12), inset 0 0 30px rgba(0,229,255,0.05)',
      }}
    >
      <img
        src="/matheusdev.png"
        alt="Matheus Lisboa"
        className="w-full h-full object-cover scale-90"
      />

      {/* Overlay futurista */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071018]/40 to-transparent" />
    </div>

    {/* Floating nodes */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
        style={{
          top: `${50 + 45 * Math.sin(deg * Math.PI / 180)}%`,
          left: `${50 + 45 * Math.cos(deg * Math.PI / 180)}%`,
          boxShadow: '0 0 6px rgba(0,229,255,0.6)',
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}

    {/* Corner brackets */}
    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-400/40" />
    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-400/40" />
    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-cyan-400/40" />
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-400/40" />
  </div>
</div>

          {/* Right: Bio */}
          <div>
            <h2 className="font-sans font-bold text-4xl text-[#e8f4f8] mb-6 leading-tight">
              Desenvolvedor apaixonado por <span className="text-cyan-400">código</span> limpo
            </h2>
            <p className="text-[#7a9bb5] leading-relaxed mb-4">
              Atuo como Fullstack com experiência em construir aplicações web modernas, APIs robustas e interfaces que encantam. Apaixonado por resolver problemas reais com tecnologia.
            </p>
            <p className="text-[#7a9bb5] leading-relaxed mb-8">
              Trabalho com times ágeis e clientes diretamente, entregando produtos do design ao deploy. Experiência sólida como QA, tendo uma visão além do código.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-cyan-400/10">
              {[
                { n: '10+', label: 'Projetos' },
                { n: '1', label: 'Ano exp.' },
                { n: '100%', label: 'Dedicação' },
              ].map(({ n, label }) => (
                <div key={label} className="text-center">
                  <div className="font-mono text-2xl font-bold text-cyan-400 glow-cyan">{n}</div>
                  <div className="font-mono text-xs text-[#3d5a73] uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {stack.map(({ name, color }, i) => (
                <span
                  key={name}
                  className="font-mono text-xs px-3 py-1.5 rounded border transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    borderColor: color + '44',
                    color: color,
                    background: color + '11',
                    boxShadow: `0 0 8px ${color}22`,
                    animationDelay: `${i * 0.05}s`,
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
