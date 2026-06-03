import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ParticleCanvas from './ParticleCanvas';

const roles = ['Fullstack Developer Jr.', 'React & Node.js', 'Construindo produtos em escala'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise">
      <ParticleCanvas />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/5 font-mono text-xs text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for freelance &amp; full-time
        </div>

        {/* Main heading */}
        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl text-[#e8f4f8] mb-4 tracking-tight leading-none">
          Matheus
          <br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00e5ff 0%, #00ff88 100%)' }}>
            Lisboa
          </span>
        </h1>

        {/* Typing subtitle */}
        <div className="font-mono text-lg md:text-xl text-[#7a9bb5] mb-8 h-8 flex items-center justify-center gap-1">
          <span className="text-cyan-400 mr-2">$</span>
          <span>{displayed}</span>
          <span className="cursor text-cyan-400">▌</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="group relative px-7 py-3 font-mono text-sm font-medium tracking-widest uppercase overflow-hidden border border-cyan-400/50 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:text-bg"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            <span className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Ver Projetos</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3 font-mono text-sm font-medium tracking-widest uppercase text-[#7a9bb5] border border-[#3d5a73]/50 hover:border-[#7a9bb5] hover:text-[#e8f4f8] transition-all duration-300"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            Fale Comigo
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/matheuslisboa" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-[#7a9bb5] hover:text-cyan-400 transition-colors group">
            <GithubIcon size={15} className="group-hover:scale-110 transition-transform" />
            github.com/matheuslisboa
          </a>
          <span className="text-[#3d5a73]">/</span>
          <a href="https://linkedin.com/in/matheuslisboa-dev" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-[#7a9bb5] hover:text-cyan-400 transition-colors group">
            <LinkedinIcon size={15} className="group-hover:scale-110 transition-transform" />
            matheuslisboa-dev
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#3d5a73] hover:text-cyan-400 transition-colors animate-bounce">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
