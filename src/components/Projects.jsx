import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import { projects } from '../data/projects';
import { site } from '../data/site';

function ProjectCard({ project, featured, inView, delay }) {
  const { name, desc, quality, tags, accent, github, demo, image, num } = project;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden border border-cyan-400/10 bg-surface transition-all duration-500 hover:border-cyan-400/30 ${
        featured ? 'md:flex-row md:min-h-[320px]' : ''
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        transitionDelay: `${delay}s`,
        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
      }}
    >
      <div className={`relative overflow-hidden bg-[#071018] ${featured ? 'md:w-[55%] min-h-[200px]' : 'h-44'}`}>
        <img
          src={image}
          alt={`Tela do projeto ${name}`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
          style={{ background: `linear-gradient(180deg, transparent 40%, ${accent}55)` }}
          aria-hidden="true"
        />
        <span className="absolute top-3 left-3 font-mono text-xs text-white/80 bg-black/50 px-2 py-0.5 backdrop-blur-sm">
          {num}
        </span>
      </div>

      <div className={`flex flex-col p-6 ${featured ? 'md:w-[45%] md:p-8' : ''}`}>
        <h3 className="font-sans font-bold text-xl text-text-primary mb-2 group-hover:text-white transition-colors">
          {name}
        </h3>
        <p className={`text-text-secondary text-sm leading-relaxed mb-4 ${featured ? '' : 'line-clamp-3'}`}>
          {desc}
        </p>

        {quality && (
          <p className="font-mono text-xs leading-relaxed mb-5 pl-3 border-l-2" style={{ borderColor: accent, color: '#9fe8d4' }}>
            <span className="uppercase tracking-widest text-[10px] block mb-1" style={{ color: accent }}>
              Qualidade
            </span>
            {quality}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-1 border"
              style={{ borderColor: `${accent}33`, color: accent, background: `${accent}0f` }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-text-muted/50 text-text-secondary hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
          >
            <GithubIcon size={12} /> Código
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs px-4 py-2 text-bg font-medium transition-shadow"
            style={{ background: accent, boxShadow: `0 0 15px ${accent}44` }}
          >
            <ExternalLink size={12} /> Live demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 scroll-mt-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionHeader index="04" label="Projetos" />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 top-0 font-mono text-xs text-text-muted hover:text-cyan-400 transition-colors uppercase tracking-widest hidden sm:inline"
          >
            Todos no GitHub →
          </a>
        </div>

        <div className="grid gap-6">
          {featured && <ProjectCard project={featured} featured inView={inView} delay={0} />}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((p, i) => (
              <ProjectCard key={p.num} project={p} inView={inView} delay={0.08 * (i + 1)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
