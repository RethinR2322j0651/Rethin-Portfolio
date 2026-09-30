import {
  Brain,
  Cloud,
  Code2,
  Monitor,
  ShieldCheck,
  TerminalSquare,
  UsersRound,
  Wrench,
} from 'lucide-react';
import FadeIn from './FadeIn';

const SKILLS = [
  {
    label: 'Programming Languages',
    items: ['Python', 'Java', 'C++'],
    icon: Code2,
  },
  {
    label: 'Cybersecurity',
    items: ['Network Security', 'Vulnerability Assessment', 'Risk Analysis'],
    icon: ShieldCheck,
  },
  {
    label: 'Cloud Computing',
    items: ['AWS', 'EC2', 'S3 - Basics'],
    icon: Cloud,
  },
  {
    label: 'Tools & Technologies',
    items: ['Git (Basic)', 'VS Code', 'Android Studio'],
    icon: Wrench,
  },
  {
    label: 'Operating Systems',
    items: ['Linux', 'Windows', 'Kali Linux'],
    icon: Monitor,
  },
  {
    label: 'AI Fundamentals',
    items: ['Basic Machine Learning Concepts'],
    icon: Brain,
  },
  {
    label: 'Soft Skills',
    items: ['Problem Solving', 'Communication Skills', 'Team Collaboration'],
    icon: UsersRound,
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/25 to-transparent" />
      <div className="pointer-events-none absolute left-6 top-24 hidden h-28 w-28 rotate-12 border border-[#B600A8]/20 md:block" />
      <div className="pointer-events-none absolute bottom-24 right-8 hidden h-36 w-36 -rotate-12 border border-[#BE4C00]/20 md:block" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        <FadeIn delay={0.12} y={36} className="w-full">
          <div className="relative overflow-hidden rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.035] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-6 md:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00]" />

            <div className="grid gap-px overflow-hidden rounded-lg border border-[#D7E2EA]/10 bg-[#D7E2EA]/10 text-left md:grid-cols-2">
              {SKILLS.map((group, index) => {
                const Icon = group.icon;

                return (
                  <FadeIn
                    key={group.label}
                    delay={0.08 + index * 0.04}
                    y={24}
                    className="bg-[#0C0C0C]/90"
                  >
                    <div className="group flex h-full flex-col gap-5 p-5 transition-colors hover:bg-[#D7E2EA]/[0.035] sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/10 text-[#D7E2EA] transition group-hover:border-[#D7E2EA]/35">
                          <Icon size={22} strokeWidth={1.8} />
                        </div>
                        <h3 className="text-base font-semibold uppercase tracking-[0.18em] text-[#D7E2EA] sm:text-lg">
                          {group.label}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-3 py-1.5 text-sm text-[#D7E2EA]/78 transition-colors group-hover:border-[#D7E2EA]/35 group-hover:text-[#D7E2EA]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}

              <div className="hidden bg-[#0C0C0C]/90 p-5 md:block sm:p-6">
                <div className="flex h-full min-h-40 flex-col justify-between rounded-lg border border-[#D7E2EA]/10 bg-gradient-to-br from-[#B600A8]/12 via-transparent to-[#BE4C00]/12 p-5">
                  <TerminalSquare size={28} className="text-[#D7E2EA]/65" strokeWidth={1.7} />
                  <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#D7E2EA]/55">
                    Technical foundation for secure, practical software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default SkillsSection;
