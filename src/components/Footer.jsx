import { GithubIcon, LinkedinIcon } from './Icons';
import { site } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-muted">
          {site.name} <span className="text-cyan-400/40">©</span> {year} — {site.location}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={14} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={14} />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-xs text-text-muted hover:text-cyan-400 transition-colors"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
