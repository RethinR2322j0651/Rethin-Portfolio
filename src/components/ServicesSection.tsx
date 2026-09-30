import { useEffect, useRef, useState, type CSSProperties } from 'react';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    title: 'Python Full Stack Development',
    description:
      'Developing responsive web applications using Python-based backend technologies, frontend technologies, databases, and API integration.',
    icon: '🐍',
  },
  {
    title: 'Java Full Stack Development',
    description:
      'Building full-stack applications using Java, frontend technologies, databases, REST APIs, and modern development practices.',
    icon: '☕',
  },
  {
    title: 'Android Development',
    description:
      'Creating Android applications using Java and XML with responsive interfaces, local storage, and practical mobile features.',
    icon: '📱',
  },
  {
    title: 'Cybersecurity',
    description:
      'Learning and applying cybersecurity fundamentals, system security, networking, Linux, and security best practices through practical projects.',
    icon: '🛡️',
  },
  {
    title: 'Cloud Computing',
    description:
      'Working with cloud platforms, services, deployment concepts, and cloud-based solutions while developing practical cloud skills.',
    icon: '☁️',
  },
  {
    title: 'AI & Machine Learning',
    description:
      'Developing AI and machine learning projects involving data processing, model development, recommendation systems, and continuous learning.',
    icon: '🤖',
  },
  {
    title: 'Website Development',
    description:
      'Creating responsive and user-friendly websites using modern frontend technologies with clean interfaces and engaging user experiences.',
    icon: '🌐',
  },
  {
    title: 'Data Engineering',
    description:
      'Working with data processing, data management, databases, and structured data workflows to support reliable applications and solutions.',
    icon: '📊',
  },
  {
    title: 'Software Development',
    description:
      'Developing software solutions using programming, problem-solving, databases, APIs, and modern software development practices.',
    icon: '💻',
  },
];

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * t;

const ease = (t: number) => {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
};

type CardState = {
  x: number;
  y: number;
  z: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
  opacity: number;
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationFrame = useRef<number | null>(null);

  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);

  const [progress, setProgress] = useState(0);

  /*
   * Calculate scroll progress of the entire 3D scene.
   */
  useEffect(() => {
    const updateTargetProgress = () => {
      const scene = sectionRef.current;

      if (!scene) return;

      const rect = scene.getBoundingClientRect();
      const scrollable = scene.offsetHeight - window.innerHeight;

      if (scrollable <= 0) {
        targetProgress.current = 0;
        return;
      }

      targetProgress.current = clamp(-rect.top / scrollable);
    };

    const tick = () => {
      updateTargetProgress();

      /*
       * Smooth scrolling.
       * This keeps the cards moving naturally instead of jumping.
       */
      smoothProgress.current +=
        (targetProgress.current - smoothProgress.current) * 0.075;

      /*
       * Snap very small differences so the animation actually reaches
       * the final 3x3 grid.
       */
      if (
        Math.abs(
          targetProgress.current - smoothProgress.current
        ) < 0.0005
      ) {
        smoothProgress.current = targetProgress.current;
      }

      setProgress(smoothProgress.current);

      animationFrame.current =
        requestAnimationFrame(tick);
    };

    animationFrame.current =
      requestAnimationFrame(tick);

    window.addEventListener(
      'resize',
      updateTargetProgress
    );

    return () => {
      window.removeEventListener(
        'resize',
        updateTargetProgress
      );

      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * 3D CAROUSEL
   * ---------------------------------------------------------
   *
   * The carousel ends while the cards are still visible.
   * This is important because the previous version moved the
   * cards too far outside the screen before the grid started.
   */
  const getCarouselState = (
    index: number,
    carouselProgress: number
  ): CardState => {
    const count = SERVICES.length;

    /*
     * Reduced travel keeps the cards visible near the end
     * of the carousel.
     */
    const travel =
      carouselProgress * (count + 0.4);

    const offset =
      index - travel + 1.4;

    const x = offset * 300;

    const depth = Math.abs(offset);

    const z =
      130 - depth * 150;

    const y =
      15 + Math.min(depth, 2) * 20;

    const rotateY =
      clamp(offset / 2, -1, 1) * -26;

    const rotateZ =
      clamp(offset / 3, -1, 1) * -4;

    const rotateX = 2;

    const scale =
      1 - Math.min(depth * 0.10, 0.28);

    /*
     * Keep cards visible while they travel.
     */
    const opacity =
      clamp(
        1.2 - depth * 0.20,
        0.15,
        1
      );

    const reveal =
      clamp(
        (
          carouselProgress *
            (count + 0.4) -
          index +
          1.8
        ) / 1.5
      );

    return {
      x,
      y,
      z,
      rotateX,
      rotateY,
      rotateZ,
      scale,
      opacity: opacity * reveal,
    };
  };

  /*
   * ---------------------------------------------------------
   * 3x3 GRID
   * ---------------------------------------------------------
   */
  const getGridState = (
    index: number
  ): CardState => {
    const isMobile =
      typeof window !== 'undefined' &&
      window.innerWidth < 768;

    /*
     * Mobile:
     * 3 columns
     *
     * Desktop:
     * 3 columns
     *
     * This keeps the final layout as a proper 3x3 grid.
     */
    const columns = 3;

    const column =
      index % columns;

    const row =
      Math.floor(index / columns);

    if (isMobile) {
      return {
        x: (column - 1) * 150,
        y: (row - 1) * 185,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 0.42,
        opacity: 1,
      };
    }

    return {
      x: (column - 1) * 300,
      y: (row - 1) * 230,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 0.58,
      opacity: 1,
    };
  };

  /*
   * ---------------------------------------------------------
   * CARD STYLE
   * ---------------------------------------------------------
   *
   * 0.00 → 0.65 = 3D carousel
   * 0.65 → 1.00 = grid formation
   *
   * The grid gets 35% of the scroll scene so the user can
   * actually see the cards returning and forming the grid.
   */
  const getCardStyle = (
    index: number
  ): CSSProperties => {
    const carouselEnd = 0.65;

    const carouselProgress =
      clamp(
        progress / carouselEnd
      );

    const gridProgress =
      ease(
        (progress - carouselEnd) /
          (1 - carouselEnd)
      );

    const carousel =
      getCarouselState(
        index,
        carouselProgress
      );

    const grid =
      getGridState(index);

    /*
     * Interpolate every 3D property from carousel
     * position to final grid position.
     */
    const x = lerp(
      carousel.x,
      grid.x,
      gridProgress
    );

    const y = lerp(
      carousel.y,
      grid.y,
      gridProgress
    );

    const z = lerp(
      carousel.z,
      grid.z,
      gridProgress
    );

    const rotateX = lerp(
      carousel.rotateX,
      grid.rotateX,
      gridProgress
    );

    const rotateY = lerp(
      carousel.rotateY,
      grid.rotateY,
      gridProgress
    );

    const rotateZ = lerp(
      carousel.rotateZ,
      grid.rotateZ,
      gridProgress
    );

    const scale = lerp(
      carousel.scale,
      grid.scale,
      gridProgress
    );

    /*
     * Once grid formation starts, bring opacity back to 1
     * so the cards don't disappear during the transition.
     */
    const opacity =
      progress >= carouselEnd
        ? lerp(
            carousel.opacity,
            1,
            Math.min(gridProgress * 1.4, 1)
          )
        : carousel.opacity;

    return {
      transform: `
        translate3d(
          calc(-50% + ${x}px),
          calc(-50% + ${y}px),
          ${z}px
        )
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
        scale(${scale})
      `,
      opacity,
      zIndex:
        Math.round(
          1000 - Math.abs(z)
        ),
    };
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#020611] text-white"
    >
      {/* =====================================================
          INTRO
          ===================================================== */}
      <div className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-6">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
            style={{
              background:
                'radial-gradient(circle, rgba(0,220,255,0.35), transparent 70%)',
            }}
          />

          <div
            className="absolute left-[15%] top-[20%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
            style={{
              background:
                'radial-gradient(circle, rgba(30,100,255,0.5), transparent 70%)',
            }}
          />
        </div>

        <FadeIn>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2
              className="hero-heading font-black uppercase leading-[0.9] tracking-[-0.08em] text-white"
              style={{
                fontSize: 'clamp(3.2rem, 10vw, 120px)',
              }}
            >
              What I Do
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-[10px] font-medium uppercase tracking-[0.35em] text-cyan-300/80 sm:text-xs">
              Building &amp; Securing Digital Solutions
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Exploring software development,
              cybersecurity, cloud computing,
              artificial intelligence, and modern
              web technologies through practical
              projects and continuous learning.
            </p>

            <div className="mt-12 flex flex-col items-center gap-3 text-slate-500">
              <span className="text-xs uppercase tracking-[0.3em]">
                Scroll to explore
              </span>

              <div className="h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* =====================================================
          3D SCROLL SCENE
          ===================================================== */}
      <div className="services-3d-scene relative h-[700vh]">
        {/* Sticky 3D stage */}
        <div
          className="sticky top-0 h-screen overflow-hidden"
          style={{
            perspective: '1500px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Background grid */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(0, 220, 255, 0.35) 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    90deg,
                    rgba(0, 220, 255, 0.35) 1px,
                    transparent 1px
                  )
                `,
                backgroundSize:
                  '60px 60px',
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(0,160,255,0.08), transparent 55%)',
              }}
            />
          </div>

          {/* Center glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
            style={{
              background:
                'radial-gradient(circle, rgba(0,200,255,0.25), transparent 70%)',
            }}
          />

          {/* =================================================
              CARDS
              ================================================= */}
          <div
            className="absolute inset-0"
            style={{
              transformStyle:
                'preserve-3d',
            }}
          >
            {SERVICES.map(
              (service, index) => (
                <div
                  key={service.title}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width:
                      'min(310px, 78vw)',
                    height: '420px',
                    transformStyle:
                      'preserve-3d',
                    ...getCardStyle(index),
                  }}
                >
                  {/* Card */}
                  <div
                    className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#06101f]/95 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300"
                    style={{
                      boxShadow:
                        '0 20px 80px rgba(0,0,0,0.45), inset 0 0 35px rgba(0,200,255,0.035)',
                    }}
                  >
                    {/* Top glow */}
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
                      style={{
                        background:
                          'rgba(0,220,255,0.10)',
                      }}
                    />

                    {/* Card number */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400/70">
                        0
                        {index + 1}
                      </span>

                      <span className="text-2xl">
                        {service.icon}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-3xl shadow-[0_0_30px_rgba(0,220,255,0.08)]">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 mt-7 text-xl font-bold leading-tight text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 mt-4 text-sm leading-7 text-slate-400">
                      {service.description}
                    </p>

                    {/* Bottom line */}
                    <div className="relative z-10 mt-auto pt-6">
                      <div className="h-px w-full bg-gradient-to-r from-cyan-400/40 via-cyan-400/10 to-transparent" />

                      <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-cyan-400/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        Continuous Learning
                      </div>
                    </div>

                    {/* Hover border glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-300/0 transition-all duration-300 group-hover:border-cyan-300/30" />
                  </div>
                </div>
              )
            )}
          </div>

          {/* =================================================
              SCROLL INDICATOR
              ================================================= */}
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 z-[2000] -translate-x-1/2 transition-opacity duration-500"
            style={{
              opacity:
                progress > 0.12 ? 0 : 1,
            }}
          >
            <div className="flex flex-col items-center gap-2 text-cyan-400/50">
              <span className="text-[10px] uppercase tracking-[0.3em]">
                Scroll
              </span>

              <div className="h-8 w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />
            </div>
          </div>

          {/* =================================================
              FINAL GRID LABEL
              ================================================= */}
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 z-[2000] -translate-x-1/2 text-center transition-opacity duration-500"
            style={{
              opacity:
                progress > 0.88
                  ? clamp(
                      (progress - 0.88) /
                        0.08
                    )
                  : 0,
            }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/50">
              Explore My Skills
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          SMALL GAP AFTER THE GRID
          ===================================================== */}
      <div className="relative h-[10vh] bg-[#020611]" />
    </section>
  );
}