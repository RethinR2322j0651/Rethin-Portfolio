import { Building2, Briefcase, MapPin, Network, ShieldCheck, TerminalSquare } from 'lucide-react';
import FadeIn from './FadeIn';

const KEY_AREAS = ['Cybersecurity', 'Networking', 'Linux', 'System Security'];

const InternshipSection = () => {
  return (
    <section
      id="internship"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/25 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-28 h-px w-2/5 bg-gradient-to-r from-[#B600A8]/65 to-transparent" />
      <div className="pointer-events-none absolute bottom-24 right-0 h-px w-2/5 bg-gradient-to-l from-[#BE4C00]/65 to-transparent" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden h-24 w-24 rotate-12 border border-[#D7E2EA]/10 md:block" />
      <div className="pointer-events-none absolute bottom-[15%] right-[10%] hidden h-32 w-32 -rotate-12 border border-[#D7E2EA]/10 md:block" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Internship
          </h2>
        </FadeIn>

        <FadeIn delay={0.12} y={36} className="w-full">
          <div className="relative overflow-hidden rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.035] p-6 text-left shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00]" />

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/10 text-[#D7E2EA]">
                  <Briefcase size={25} strokeWidth={1.8} />
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/45">
                  Practical Training
                </p>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-[#D7E2EA] sm:text-3xl md:text-4xl">
                  Cyber Security and System Hacking
                </h3>

                <div className="mt-6 grid gap-3 text-sm text-[#D7E2EA]/72 sm:grid-cols-2">
                  <div className="flex items-center gap-3 border-t border-[#D7E2EA]/10 pt-4">
                    <Building2 size={18} className="shrink-0 text-[#D7E2EA]/55" />
                    <span>Spectrum Softtech Solutions Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-center gap-3 border-t border-[#D7E2EA]/10 pt-4">
                    <MapPin size={18} className="shrink-0 text-[#D7E2EA]/55" />
                    <span>Kochi</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#D7E2EA]/10 bg-black/15 p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3 text-[#D7E2EA]">
                  <ShieldCheck size={22} strokeWidth={1.8} />
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E2EA]/55">
                    Duration
                  </span>
                </div>

                <p className="text-base leading-relaxed text-[#D7E2EA]/78 sm:text-lg">
                  May 2025 – Jun 2025
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-[#D7E2EA]/10 bg-black/10 p-5 sm:p-6">
              <p className="text-base leading-relaxed text-[#D7E2EA]/78 sm:text-lg">
                Gained hands-on exposure to cybersecurity, networking, Linux, system security, and
                security tools through practical training and real-world technical environments.
              </p>
            </div>

            <div className="mt-8 border-t border-[#D7E2EA]/10 pt-6">
              <div className="mb-4 flex items-center gap-3 text-[#D7E2EA]/65">
                <Network size={19} strokeWidth={1.8} />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                  Key Areas
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {KEY_AREAS.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-4 py-2 text-sm text-[#D7E2EA]/82 transition-colors hover:border-[#D7E2EA]/35 hover:text-[#D7E2EA]"
                  >
                    <TerminalSquare size={15} strokeWidth={1.8} />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.18} y={30} className="w-full">
          <div className="relative overflow-hidden rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.035] p-6 text-left shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#BE4C00] via-[#B600A8] to-[#7621B0]" />

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/10 text-[#D7E2EA]">
                  <Briefcase size={25} strokeWidth={1.8} />
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/45">
                  Internship Experience
                </p>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-[#D7E2EA] sm:text-3xl md:text-4xl">
                  Artificial Intelligence &amp; Machine Learning Intern
                </h3>

                <div className="mt-6 grid gap-3 text-sm text-[#D7E2EA]/72 sm:grid-cols-2">
                  <div className="flex items-center gap-3 border-t border-[#D7E2EA]/10 pt-4">
                    <Building2 size={18} className="shrink-0 text-[#D7E2EA]/55" />
                    <span>Cognevance Technologies</span>
                  </div>
                  <div className="flex items-center gap-3 border-t border-[#D7E2EA]/10 pt-4">
                    <MapPin size={18} className="shrink-0 text-[#D7E2EA]/55" />
                    <span>Virtual</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#D7E2EA]/10 bg-black/15 p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3 text-[#D7E2EA]">
                  <ShieldCheck size={22} strokeWidth={1.8} />
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E2EA]/55">
                    Duration
                  </span>
                </div>

                <p className="text-base leading-relaxed text-[#D7E2EA]/78 sm:text-lg">
                  Aug 15, 2026 – Present
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-[#D7E2EA]/10 bg-black/10 p-5 sm:p-6">
              <p className="text-base leading-relaxed text-[#D7E2EA]/78 sm:text-lg">
                Currently gaining hands-on experience in Artificial Intelligence and Machine Learning through practical projects, technical learning, and industry-oriented tasks. Developing knowledge of AI/ML concepts, data processing, model development, and problem-solving while strengthening practical skills through continuous learning.
              </p>
            </div>

            <div className="mt-8 border-t border-[#D7E2EA]/10 pt-6">
              <div className="mb-4 flex items-center gap-3 text-[#D7E2EA]/65">
                <Network size={19} strokeWidth={1.8} />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]">
                  Key Areas
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Artificial Intelligence', 'Machine Learning', 'Python', 'Data Processing', 'Model Development', 'Problem Solving'].map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-4 py-2 text-sm text-[#D7E2EA]/82 transition-colors hover:border-[#D7E2EA]/35 hover:text-[#D7E2EA]"
                  >
                    <TerminalSquare size={15} strokeWidth={1.8} />
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default InternshipSection;
