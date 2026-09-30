import { ShieldCheck } from 'lucide-react';

const CERTIFICATIONS = [
  'Cloud Computing Certification – JB International Skill Park, Kochi',
  'Cybersecurity Certification – JB International Skill Park, Kochi',
  'Artificial Intelligence Certification – JB International Skill Park, Kochi',
  'Cyber Job Simulation – Deloitte',
  'Cyber Security and System Hacking – Spectrum Softtech Solution',
  'Python For Data Science - IBM Developer Skills Network',
];

const CertificationSection = () => {
  return (
    <section id="certifications" className="relative w-full bg-[#020617] text-white">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:px-10 md:py-28">
        <div className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D7E2EA]/75 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            Professional Credentials
          </div>

          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 88px)' }}
          >
            Certification
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.035] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00]" />

          <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-5">
            <div className="flex items-center gap-3 text-[#D7E2EA]">
              <ShieldCheck size={22} strokeWidth={1.8} />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D7E2EA]/55">
                Certified Training
              </span>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#D7E2EA]/30 via-[#D7E2EA]/10 to-transparent sm:block" />
          </div>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={cert}
                className="group relative overflow-hidden rounded-2xl border border-[#D7E2EA]/12 bg-[#0C0C0C]/40 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]/35 hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] sm:px-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#B600A8] via-[#7621B0] to-[#BE4C00] opacity-80" />
                <div className="flex items-start gap-4 pl-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/5 text-[#D7E2EA] transition-transform duration-300 group-hover:scale-110">
                    <ShieldCheck size={15} strokeWidth={1.8} />
                  </div>
                  <p className="text-sm leading-relaxed text-[#D7E2EA]/82 sm:text-base">
                    {cert}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;