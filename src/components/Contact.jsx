import { useRef, useState } from 'react';
import { Phone, Send, CheckCircle, Mail, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import { site } from '../data/site';

const channels = [
  {
    href: `mailto:${site.email}`,
    label: 'Email',
    value: site.email,
    icon: Mail,
    external: false,
  },
  {
    href: site.whatsapp,
    label: 'WhatsApp',
    value: site.phone,
    icon: Phone,
    external: true,
  },
  {
    href: site.linkedin,
    label: 'LinkedIn',
    value: site.linkedinLabel,
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: site.github,
    label: 'GitHub',
    value: 'MatheusLisboa',
    icon: GithubIcon,
    external: true,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(site.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('fail');
      setSent(true);
    } catch {
      setError('Não consegui enviar agora. Tenta de novo ou me chama no e-mail.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto scroll-mt-24" ref={ref}>
      <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionHeader index="04" label="Contato" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
              Vamos construir
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #00e5ff 0%, #00ff88 100%)' }}
              >
                o próximo produto?
              </span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10">
              Freelance, full-time ou uma parceria pontual. Respondo em até 24h — e-mail é o canal mais direto.
            </p>

            <div className="flex flex-col gap-4">
              {channels.map(({ href, label, value, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 group-hover:border-cyan-400/60 transition-all">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-text-muted uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="font-mono text-sm text-text-primary group-hover:text-cyan-400 transition-colors break-all">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className="relative p-8 border border-cyan-400/15"
            style={{
              background: 'rgba(10, 21, 32, 0.7)',
              backdropFilter: 'blur(20px)',
              clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
              boxShadow: '0 0 40px rgba(0,229,255,0.06), inset 0 0 30px rgba(0,229,255,0.02)',
            }}
          >
            <div
              className="absolute top-0 right-0 w-5 h-5 border-t border-r border-cyan-400/40"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              aria-hidden="true"
            />

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4" role="status">
                <CheckCircle className="text-green-400" size={48} aria-hidden="true" />
                <p className="font-mono text-sm text-text-secondary text-center">
                  Mensagem enviada.
                  <br />
                  Retorno em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { name: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'seu@email.com' },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label htmlFor={name} className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                      {label}
                    </label>
                    <input
                      id={name}
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      autoComplete={name === 'email' ? 'email' : 'name'}
                      className="w-full bg-[#050a0f] border border-[#0d2a3f] text-text-primary font-mono text-sm px-4 py-3 focus:outline-none focus:border-cyan-400/50 placeholder-text-muted transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Olá Matheus, preciso de..."
                    rows={4}
                    required
                    className="w-full bg-[#050a0f] border border-[#0d2a3f] text-text-primary font-mono text-sm px-4 py-3 focus:outline-none focus:border-cyan-400/50 placeholder-text-muted transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="flex items-start gap-2 font-mono text-xs text-red-400" role="alert">
                    <AlertCircle size={14} className="mt-0.5 shrink-0" />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 font-mono text-sm font-medium tracking-widest uppercase py-3.5 text-bg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, #00e5ff 0%, #00b4d8 100%)',
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                    clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                  }}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" aria-hidden="true" />
                  ) : (
                    <>
                      <Send size={14} />
                      Enviar mensagem
                    </>
                  )}
                  {loading && <span className="sr-only">Enviando</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
