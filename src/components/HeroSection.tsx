import FadeIn from './FadeIn';

const profileImage = '/harsh.png';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'WHAT I DO', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internship', href: '#internship' },
  { label: 'Certification', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="cyber-grid" />
        <div className="cyber-lines" />
        <div className="cyber-glow glow-one" />
        <div className="cyber-glow glow-two" />
        <div className="cyber-glow glow-three" />
        <div className="ambient-orb orb-left" />
        <div className="ambient-orb orb-right" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/90 via-[#050816]/70 to-[#020817]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817]/80" />

      <div className="relative z-10 flex h-full flex-col">
        <FadeIn delay={0} y={-20} className="relative">
          <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-5 md:gap-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/80 transition hover:text-cyan-300 sm:text-xs md:text-sm sm:tracking-[0.2em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="hidden items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur-md transition hover:scale-[1.03] hover:bg-cyan-400/20 sm:inline-flex sm:px-5 sm:py-2.5 sm:text-xs"
            >
              Email me
            </a>
          </div>
        </FadeIn>

        <div className="flex flex-1 items-center">
          <div className="w-full max-w-7xl px-6 md:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <FadeIn delay={0.25} y={20}>
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-cyan-300/80 sm:text-xs">
                    Portfolio · 2026
                  </p>
                </FadeIn>

                <FadeIn delay={0.45} y={40}>
                  <h1
                    className="font-black uppercase leading-[0.88] tracking-[-0.05em] text-white"
                    style={{ fontSize: 'clamp(3rem, 9vw, 9.8rem)' }}
                  >
                    Rethin <span className="cyber-text">R</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.7} y={20}>
                  <p className="mt-4 max-w-xl text-[10px] font-medium uppercase tracking-[0.28em] text-slate-200/80 sm:text-xs md:text-sm">
                    Developer · Software · Cyber Security
                  </p>
                </FadeIn>

                <FadeIn delay={0.9} y={20}>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="#projects"
                      className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
                    >
                      View work
                    </a>
                    <a
                      href="#about"
                      className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.25em] text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      About me
                    </a>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.5} y={30} className="flex justify-center lg:justify-end">
                <div className="portrait-scene">
                  <div className="portrait-shell">
                    <div className="scan-ring ring-one" />
                    <div className="scan-ring ring-two" />
                    <div className="portrait-frame">
                      <img src={profileImage} alt="Rethin R" className="portrait-image" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between px-6 pb-7 sm:pb-10 md:px-10 md:pb-12">
          <FadeIn delay={1.1} y={20}>
            <a href="#about" aria-label="Scroll to next section" className="group flex flex-col items-center gap-3">
              <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-cyan-100/70 transition group-hover:text-white sm:text-[10px]">
                Scroll
              </span>
              <div className="relative h-12 w-px overflow-hidden bg-white/20">
                <span
                  className="absolute inset-x-0 top-0 h-1/2 w-full bg-gradient-to-b from-cyan-300 to-blue-500"
                  style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
                />
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={1.1} y={20}>
            <div className="flex items-center gap-3">
              <span
                className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.24em] text-cyan-100 sm:inline-block"
                style={{ animation: 'pulseFade 2s ease-in-out infinite' }}
              >
                Cyber ready
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        .cyber-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.16) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(circle at center, black 34%, transparent 100%);
          animation: gridShift 18s linear infinite;
        }

        .cyber-lines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(34, 211, 238, 0.06) 35%,
            transparent 48%,
            rgba(168, 85, 247, 0.08) 60%,
            transparent 100%
          );
          transform: rotate(8deg) scale(1.2);
          animation: lineDrift 12s ease-in-out infinite alternate;
        }

        .ambient-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(110px);
          opacity: 0.85;
          animation: orbPulse 10s ease-in-out infinite alternate;
        }

        .orb-left {
          width: 18rem;
          height: 18rem;
          left: 0;
          bottom: 0;
          background: rgba(6, 182, 212, 0.28);
        }

        .orb-right {
          width: 20rem;
          height: 20rem;
          right: 4%;
          top: 10%;
          background: rgba(168, 85, 247, 0.24);
          animation-delay: 2s;
        }

        .cyber-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(95px);
          opacity: 0.7;
          animation: floatGlow 12s ease-in-out infinite alternate;
        }

        .glow-one {
          width: 24rem;
          height: 24rem;
          left: 5%;
          bottom: 8%;
          background: rgba(0, 234, 255, 0.18);
        }

        .glow-two {
          width: 22rem;
          height: 22rem;
          right: 8%;
          top: 10%;
          background: rgba(147, 51, 234, 0.2);
          animation-delay: 1.5s;
        }

        .glow-three {
          width: 18rem;
          height: 18rem;
          left: 48%;
          top: 18%;
          background: rgba(59, 130, 246, 0.18);
          animation-delay: 3s;
        }

        .cyber-text {
          background: linear-gradient(135deg, #67e8f9 0%, #a78bfa 43%, #e0f2fe 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 26px rgba(103, 232, 249, 0.4);
        }

        .portrait-scene {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: min(100%, 25rem);
          padding: 1rem;
        }

        .portrait-shell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 22.5rem;
          aspect-ratio: 0.8;
          border-radius: 2.15rem;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(6, 182, 212, 0.15), rgba(15, 23, 42, 0.9));
          border: 1px solid rgba(103, 232, 249, 0.42);
          box-shadow:
            0 0 0 1px rgba(103, 232, 249, 0.2),
            0 0 35px rgba(34, 211, 238, 0.2),
            0 35px 90px rgba(15, 118, 110, 0.2);
          overflow: hidden;
          transform: perspective(1200px) rotateY(-9deg) rotateX(4deg);
          animation: floatCard 7s ease-in-out infinite;
        }

        .portrait-shell::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 20%, rgba(103,232,249,0.18) 35%, transparent 45%, transparent 100%);
          transform: translateX(-120%);
          animation: scanSweep 5.5s ease-in-out infinite;
        }

        .portrait-shell::after {
          content: '';
          position: absolute;
          inset: 0.8rem;
          border-radius: 1.6rem;
          border: 1px solid rgba(148, 163, 184, 0.26);
          box-shadow: inset 0 0 30px rgba(34, 211, 238, 0.08);
        }

        .portrait-frame {
          position: relative;
          width: 84%;
          height: 88%;
          border-radius: 1.5rem;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.28);
          background: rgba(6, 11, 25, 0.7);
          box-shadow: inset 0 0 24px rgba(103, 232, 249, 0.08), 0 0 30px rgba(59, 130, 246, 0.1);
          z-index: 1;
        }

        .portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: saturate(1.08) contrast(1.08) brightness(1.03);
          transform: scale(1.03);
        }

        .scan-ring {
          position: absolute;
          border-radius: 9999px;
          border: 1px solid rgba(103, 232, 249, 0.36);
          box-shadow: inset 0 0 18px rgba(103, 232, 249, 0.12), 0 0 18px rgba(103, 232, 249, 0.08);
        }

        .ring-one {
          width: 112%;
          height: 112%;
          animation: pulseRing 3s ease-in-out infinite;
        }

        .ring-two {
          width: 124%;
          height: 124%;
          border-color: rgba(168, 85, 247, 0.32);
          animation: pulseRing 3s ease-in-out infinite 0.8s;
        }

        @keyframes scanSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes gridShift {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(18px, 12px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @keyframes lineDrift {
          0% { transform: rotate(8deg) scale(1.2) translateX(-10px); }
          100% { transform: rotate(8deg) scale(1.25) translateX(10px); }
        }

        @keyframes floatCard {
          0%, 100% { transform: perspective(1200px) rotateY(-9deg) rotateX(4deg) translateY(0px); }
          50% { transform: perspective(1200px) rotateY(-7deg) rotateX(3deg) translateY(-12px); }
        }

        @keyframes floatGlow {
          0% { transform: translate3d(0, 0, 0) scale(0.96); }
          100% { transform: translate3d(22px, -20px, 0) scale(1.1); }
        }

        @keyframes orbPulse {
          0% { transform: scale(0.96); opacity: 0.7; }
          100% { transform: scale(1.08); opacity: 1; }
        }

        @keyframes pulseRing {
          0%, 100% { opacity: 0.28; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.04); }
        }

        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }

        @keyframes pulseFade {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
