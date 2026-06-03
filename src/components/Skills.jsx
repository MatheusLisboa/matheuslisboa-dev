import { useRef } from 'react';
import { useInView } from './useInView';

const categories = [
  {
    label: 'Frontend',
    color: '#61DAFB',
    skills: [
      { name: 'React', icon: '⚛' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind', icon: '🌊' },
    ],
  },
  {
    label: 'Backend',
    color: '#68A063',
    skills: [
      { name: 'Node.js', icon: '⬡' },
      { name: 'Express', icon: '⚡' },
      { name: 'REST API', icon: '🔗' },
      { name: 'GraphQL', icon: '◈' },
    ],
  },
  {
    label: 'Database',
    color: '#336791',
    skills: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Prisma', icon: '◆' },
    ],
  },
  {
    label: 'DevOps / Tools',
    color: '#2496ED',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '⎇' },
      { name: 'CI/CD', icon: '♻' },
      { name: 'Vercel', icon: '▲' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">03. Stack &amp; Ferramentas</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`p-6 border border-[#0d2a3f] bg-[#0a1520] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${ci * 0.12}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: cat.color }}>{cat.label}</span>
              </div>

              {/* Skill items */}
              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map((s, si) => (
                  <div
                    key={s.name}
                    className={`flex flex-col items-center gap-1.5 p-3 border border-[#0d2a3f] bg-[#050a0f]/60 hover:border-opacity-60 transition-all duration-300 cursor-default group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{
                      transitionDelay: `${ci * 0.12 + si * 0.05}s`,
                      '--hover-border': cat.color,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = cat.color + '55';
                      e.currentTarget.style.boxShadow = `0 0 15px ${cat.color}15`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <span className="text-lg leading-none">{s.icon}</span>
                    <span className="font-mono text-xs text-[#7a9bb5] group-hover:text-[#e8f4f8] transition-colors">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
