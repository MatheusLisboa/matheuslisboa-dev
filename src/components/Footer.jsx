import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#3d5a73]">
          Matheus Lisboa <span className="text-cyan-400/40">©</span> 2025 — Feito com React + Vite
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/matheuslisboa" target="_blank" rel="noopener noreferrer"
            className="text-[#3d5a73] hover:text-cyan-400 transition-colors">
            <GithubIcon size={14} />
          </a>
          <a href="https://linkedin.com/in/matheuslisboa-dev" target="_blank" rel="noopener noreferrer"
            className="text-[#3d5a73] hover:text-cyan-400 transition-colors">
            <LinkedinIcon size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
