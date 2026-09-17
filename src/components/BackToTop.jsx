import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-8 right-8 z-50 w-10 h-10 flex items-center justify-center border border-cyan-400/30 text-cyan-400 bg-bg transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ boxShadow: show ? '0 0 20px rgba(0,229,255,0.2)' : 'none' }}
    >
      <ArrowUp size={16} aria-hidden="true" />
    </button>
  );
}
