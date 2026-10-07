import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ParticleCanvas from './ParticleCanvas';
import { site, roles } from '../data/site';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (!reducedMotion) return undefined;
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const current = roles[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 60);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 2000);
      return () => clearTimeout(t);
    }

    if (charIdx > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 30);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
      setTyping(true);
    }, 0);
    return () => clearTimeout(t);
  }, [charIdx, typing, roleIdx, reducedMotion]);

  const subtitle = reducedMotion ? roles[roleIdx] : displayed;

  return (
    <section id="hero" className="relative min-h-svh flex items-center justify-center overflow-hidden grid-bg noise scroll-mt-24 pt-24 pb-16">
      <ParticleCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/5 font-mono text-xs text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          {site.availability}
        </div>

        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl text-text-primary mb-4 tracking-tight leading-none">
          {site.firstName}
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #00e5ff 0%, #00ff88 100%)' }}
          >
            {site.lastName}
          </span>
        </h1>

        <p className="font-mono text-sm sm:text-lg md:text-xl text-text-secondary mb-3 max-w-xl mx-auto leading-relaxed">
          QA Lead em Maceió. Automação de testes, qualidade em produção e visão de quem também escreve código.
        </p>

        <div className="font-mono text-sm sm:text-base md:text-lg text-text-secondary mb-8 h-8 flex items-center justify-center gap-1" aria-live="polite">
          <span className="text-cyan-400 mr-2" aria-hidden="true">$</span>
          <span>{subtitle}</span>
          <span className="cursor text-cyan-400" aria-hidden="true">▌</span>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 max-w-xs sm:max-w-none mx-auto">
          <a
            href="#projects"
            className="group relative px-7 py-3 font-mono text-xs sm:text-sm font-medium tracking-widest uppercase overflow-hidden border border-cyan-400/50 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:text-bg text-center"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            <span className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 motion-reduce:translate-y-0" />
            <span className="relative z-10">Ver projetos</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3 font-mono text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary border border-text-muted/50 hover:border-text-secondary hover:text-text-primary transition-all duration-300 text-center"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            Fale comigo
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-cyan-400 transition-colors group"
          >
            <GithubIcon size={15} className="group-hover:scale-110 transition-transform" />
            <span className="sm:hidden">GitHub</span>
            <span className="hidden sm:inline">{site.githubLabel}</span>
          </a>
          <span className="text-text-muted hidden sm:inline" aria-hidden="true">/</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-cyan-400 transition-colors group"
          >
            <LinkedinIcon size={15} className="group-hover:scale-110 transition-transform" />
            <span className="sm:hidden">LinkedIn</span>
            <span className="hidden sm:inline">{site.linkedinLabel}</span>
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-text-muted hover:text-cyan-400 transition-colors animate-bounce motion-reduce:animate-none"
        aria-label="Ir para a seção sobre"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
