import { useRef, useState } from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useInView } from './useInView';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    
    const res = await fetch('https://formspree.io/f/xbderwwr', { // ← seu endpoint aqui
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(form),
  });

  setLoading(false);
  if (res.ok) setSent(true);
};

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">04. Contato</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-[#e8f4f8] mb-6 leading-tight">
              Vamos construir<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00e5ff 0%, #00ff88 100%)' }}>
                algo juntos?
              </span>
            </h2>
            <p className="text-[#7a9bb5] leading-relaxed mb-10">
              Estou disponível para projetos freelance, posições full-time e parcerias técnicas. Me manda uma mensagem — costumo responder em menos de 24h.
            </p>

            <div className="flex flex-col gap-4">
              <a href="https://w.app/matheuslisboa-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#3d5a73] uppercase tracking-widest mb-0.5">Telefone</div>
                  <div className="font-mono text-sm text-[#e8f4f8] group-hover:text-cyan-400 transition-colors">(82) 99950-3863</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/matheuslisboa-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                  <LinkedinIcon size={14} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#3d5a73] uppercase tracking-widest mb-0.5">LinkedIn</div>
                  <div className="font-mono text-sm text-[#e8f4f8] group-hover:text-cyan-400 transition-colors">matheuslisboa-dev</div>
                </div>
              </a>

              <a href="https://github.com/matheuslisboa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                  <GithubIcon size={14} />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#3d5a73] uppercase tracking-widest mb-0.5">GitHub</div>
                  <div className="font-mono text-sm text-[#e8f4f8] group-hover:text-cyan-400 transition-colors">matheuslisboa</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="relative p-8 border border-cyan-400/15"
            style={{
              background: 'rgba(10, 21, 32, 0.7)',
              backdropFilter: 'blur(20px)',
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
              boxShadow: '0 0 40px rgba(0,229,255,0.06), inset 0 0 30px rgba(0,229,255,0.02)',
            }}
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-cyan-400/40" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <CheckCircle className="text-green-400" size={48} />
                <p className="font-mono text-sm text-[#7a9bb5] text-center">Mensagem enviada!<br />Retorno em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { name: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'seu@email.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block font-mono text-xs text-[#3d5a73] uppercase tracking-widest mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      className="w-full bg-[#050a0f] border border-[#0d2a3f] text-[#e8f4f8] font-mono text-sm px-4 py-3 focus:outline-none focus:border-cyan-400/50 placeholder-[#3d5a73] transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-mono text-xs text-[#3d5a73] uppercase tracking-widest mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Olá Matheus, preciso de..."
                    rows={4}
                    required
                    className="w-full bg-[#050a0f] border border-[#0d2a3f] text-[#e8f4f8] font-mono text-sm px-4 py-3 focus:outline-none focus:border-cyan-400/50 placeholder-[#3d5a73] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 font-mono text-sm font-medium tracking-widest uppercase py-3.5 text-bg transition-all duration-300 disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%)',
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                    clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                  }}
                  onMouseEnter={e => !loading && (e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 229, 255, 0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.3)')}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
