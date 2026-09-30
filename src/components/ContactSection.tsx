import { Mail, MessageCircle, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rethinrethu72004@gmail.com',
    href: 'mailto:rethinrethu72004@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 8921540772',
    // wa.me requires digits only — no +, no spaces, no hyphens
    href: 'https://wa.me/918921540772',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'rethin-r-a97319372',
    href: 'https://www.linkedin.com/in/rethin-r-a97319372',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'RethinR2322j0651',
    href: 'https://github.com/RethinR2322j0651',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
    >
      {/* Heading */}
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Get in touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
        >
          Pick whichever channel suits you
        </p>
      </FadeIn>

      {/* Contact cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {CONTACT_METHODS.map((method, i) => {
          const Icon = method.icon;
          const isExternal = method.href.startsWith('http');

          return (
            <FadeIn key={method.label} delay={i * 0.1} y={30}>
              <a
                href={method.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group relative flex h-full flex-col justify-between gap-8 rounded-[28px] border border-[#D7E2EA]/15 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(20,20,24,0.95)_55%)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]/35 hover:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(20,20,24,1)_60%)] sm:gap-10 sm:p-7 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 p-3 transition-colors duration-300 group-hover:border-[#D7E2EA]/45 group-hover:bg-[#D7E2EA]/10 sm:p-3.5">
                    <Icon className="text-[#D7E2EA]" size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7E2EA]/15 bg-black/10 text-[#D7E2EA]/60 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#D7E2EA]">
                    <ArrowUpRight size={18} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                  <span
                    className="font-light uppercase tracking-[0.22em] text-[#D7E2EA]/55"
                    style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
                  >
                    {method.label}
                  </span>
                  <span
                    className="break-all font-medium text-[#D7E2EA] leading-snug"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
                  >
                    {method.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>

      {/* Footer line */}
      <FadeIn delay={0.4} y={20}>
        <div className="mx-auto mt-20 sm:mt-24 md:mt-28 flex max-w-5xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8 text-center sm:flex-row sm:justify-between">
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            © RETHIN R 2026
          </span>
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            DESIGNED & BUILT IN KERALA
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
