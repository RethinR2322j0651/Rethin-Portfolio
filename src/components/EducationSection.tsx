import { Building2, CalendarDays, GraduationCap } from 'lucide-react';
import FadeIn from './FadeIn';

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D7E2EA]/25 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-32 h-px w-1/3 bg-gradient-to-r from-[#B600A8]/70 to-transparent" />
      <div className="pointer-events-none absolute bottom-28 right-0 h-px w-1/3 bg-gradient-to-l from-[#BE4C00]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-24 left-1/2 w-px bg-gradient-to-b from-transparent via-[#D7E2EA]/10 to-transparent" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Education
          </h2>
        </FadeIn>

        <FadeIn delay={0.12} y={36} className="w-full">
          <div className="relative overflow-hidden rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.035] p-6 text-left shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00]" />

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#D7E2EA]/15 bg-[#D7E2EA]/10 text-[#D7E2EA]">
                  <GraduationCap size={26} strokeWidth={1.8} />
                </div>

                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/45">
                  Bachelor Degree
                </p>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-[#D7E2EA] sm:text-3xl md:text-4xl">
                  Bachelor of Computer Applications
                  <span className="block text-[#D7E2EA]/55">(BCA)</span>
                </h3>
              </div>

              <div className="grid gap-4 text-sm text-[#D7E2EA]/75 sm:grid-cols-2 md:w-[340px] md:grid-cols-1">
                <div className="flex items-center gap-3 border-t border-[#D7E2EA]/10 pt-4">
                  <Building2 size={18} className="shrink-0 text-[#D7E2EA]/55" />
                  <span>Sree Narayana Guru College</span>
                </div>
                <div className="flex items-center gap-3 border-t border-[#D7E2EA]/10 pt-4">
                  <GraduationCap size={18} className="shrink-0 text-[#D7E2EA]/55" />
                  <span>Bharathiar University</span>
                </div>
                <div className="flex items-center gap-3 border-t border-[#D7E2EA]/10 pt-4 sm:col-span-2 md:col-span-1">
                  <CalendarDays size={18} className="shrink-0 text-[#D7E2EA]/55" />
                  <span>Year of Graduation: July 2026</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EducationSection;
