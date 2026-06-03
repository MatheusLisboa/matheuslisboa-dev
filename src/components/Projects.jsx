import { useRef, useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useInView } from './useInView';

const projects = [
  {
    name: 'Tia Sheyla',
    desc: 'App de gestão para escola de Natação, com controle de alunos, turmas e pagamentos.',
    tags: ['TypeScript'],
    accent: '#00e5ff',
    github: 'https://github.com/matheuslisboa/tia-sheyla',
    demo: 'https://tia-sheyla.vercel.app/',
    num: '01',
  },
  {
    name: 'Task Force',
    desc: 'Sistema de board estilo Kanban voltado para operações de QA e gestão de War Rooms.',
    tags: ['TypeScript', 'CSS', 'JavaScript'],
    accent: '#d00e0e',
    github: 'https://github.com/matheuslisboa/force-qa',
    demo: 'https://force-qa.vercel.app/',
    num: '02',
  },
  {
    name: 'Barraca de Fogos',
    desc: 'Controle de estoque e distribuição, para vendedores parceiros, de fogos de artifício.',
    tags: ['TypeScript', 'CSS', 'JavaScript'],
    accent: '#7c3aed',
    github: 'https://github.com/matheuslisboa/barraca-fogos',
    demo: 'https://barraca-fogos.vercel.app/',
    num: '03',
  },
  {
    name: 'MW transportes',
    desc: 'Gerenciamento de transportadora rodoviária, com controle de viagens, veículos e financeiro.',
    tags: ['TypeScript', 'CSS', 'JavaScript'],
    accent: '#4ee681',
    github: 'https://github.com/matheuslisboa/mw-transportes',
    demo: 'https://mw-transportes.vercel.app/',
    num: '04',
  },  {
    name: 'Duo Odonto',
    desc: 'Lading Page para clinica odontológica, como foco em conversão de visitantes em clientes.',
    tags: ['TypeScript', 'CSS', 'JavaScript'],
    accent: '#ce4249',
    github: 'https://github.com/matheuslisboa/duoodontologia',
    demo: 'https://duoodontologia.vercel.app/',
    num: '05',
  },
  {
    name: 'Estofados Lisboa',
    desc: 'Landing Page para empresa de estofados, com foco em apresentar portfólio e captar clientes.',
    tags: ['TypeScript', 'CSS', 'JavaScript'],
    accent: '#e49a11',
    github: 'https://github.com/matheuslisboa/estofados-lisboa',
    demo: 'https://estofados-lisboa.vercel.app/',
    num: '06',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const inView = useInView(ref);
  const [active, setActive] = useState(0);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = el.querySelector('[data-card]')?.offsetWidth + 24 || 380;
    el.scrollBy({ left: dir * cardW, behavior: 'smooth' });
    setActive(a => Math.max(0, Math.min(projects.length - 1, a + dir)));
  };

  return (
    <section id="projects" className="py-28 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-between mb-14">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">02. Projetos</span>
              <div className="w-40 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
            </div>
            <div className="flex gap-2">
              <button onClick={() => scroll(-1)} className="w-9 h-9 flex items-center justify-center border border-cyan-400/20 text-[#7a9bb5] hover:border-cyan-400/60 hover:text-cyan-400 transition-all">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => scroll(1)} className="w-9 h-9 flex items-center justify-center border border-cyan-400/20 text-[#7a9bb5] hover:border-cyan-400/60 hover:text-cyan-400 transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Left padding */}
        <div className="shrink-0 w-[calc(50vw-280px)] hidden lg:block" />
        
        {projects.map((p, i) => (
          <div
            key={p.num}
            data-card
            className={`snap-center shrink-0 w-[340px] md:w-[380px] relative group border border-cyan-400/10 bg-[#0a1520] p-8 transition-all duration-500 hover:border-opacity-60 cursor-default ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transitionDelay: `${i * 0.15}s`,
              clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.accent + '66';
              e.currentTarget.style.boxShadow = `0 0 40px ${p.accent}15, inset 0 0 20px ${p.accent}05`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            {/* Number */}
            <div className="font-mono text-6xl font-bold mb-4 leading-none select-none" style={{ color: p.accent + '15' }}>
              {p.num}
            </div>

            <h3 className="font-sans font-bold text-xl text-[#e8f4f8] mb-3 group-hover:text-white transition-colors">
              {p.name}
            </h3>
            <p className="text-[#7a9bb5] text-sm leading-relaxed mb-6 line-clamp-2">{p.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map(t => (
                <span key={t} className="font-mono text-xs px-2.5 py-1 border" style={{ borderColor: p.accent + '33', color: p.accent, background: p.accent + '0f' }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-[#3d5a73]/50 text-[#7a9bb5] hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                <GithubIcon size={12} /> GitHub
              </a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs px-4 py-2 text-bg font-medium transition-all"
                style={{ background: p.accent, boxShadow: `0 0 15px ${p.accent}44` }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 25px ${p.accent}88`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 15px ${p.accent}44`}
              >
                <ExternalLink size={12} /> Live Demo
              </a>
            </div>
          </div>
        ))}

        <div className="shrink-0 w-[calc(50vw-280px)] hidden lg:block" />
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              const cards = el?.querySelectorAll('[data-card]');
              if (cards?.[i]) {
                cards[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                setActive(i);
              }
            }}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{ background: active === i ? '#00e5ff' : '#3d5a73', transform: active === i ? 'scale(1.5)' : 'scale(1)' }}
          />
        ))}
      </div>
    </section>
  );
}
