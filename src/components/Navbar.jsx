import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-cyan-400/10 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-sm font-bold text-cyan-400 glow-cyan tracking-widest">
          &gt; ML
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            return (
              <a
                key={href}
                href={href}
                className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:text-cyan-400 ${
                  active === id ? 'text-cyan-400 glow-cyan' : 'text-[#7a9bb5]'
                }`}
              >
                {active === id && <span className="mr-1 text-cyan-400">▸</span>}
                {label}
              </a>
            );
          })}
        </div>

        {/* Social + Mobile */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/matheuslisboa" target="_blank" rel="noopener noreferrer" className="text-[#7a9bb5] hover:text-cyan-400 transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href="https://linkedin.com/in/matheuslisboa-dev" target="_blank" rel="noopener noreferrer" className="text-[#7a9bb5] hover:text-cyan-400 transition-colors">
            <LinkedinIcon size={16} />
          </a>
          <button className="md:hidden text-[#7a9bb5] hover:text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-cyan-400/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-[#7a9bb5] hover:text-cyan-400 transition-colors tracking-widest uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
