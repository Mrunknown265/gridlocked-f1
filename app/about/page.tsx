import { PageBackground } from "../components/page-background";
import { SiteHeader } from "../components/site-header";

export default function AboutPage() {
  return (
    <main className="relative flex min-h-[100dvh] min-h-screen flex-col overflow-x-hidden bg-[#03040c] text-white">
      <PageBackground gradientId="about-streak-gradient" />
      <SiteHeader />

      <section className="relative z-10 flex flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-violet-400/90 sm:text-xs">
            About
          </p>

          <h1 className="mt-3 text-3xl font-bold italic leading-tight tracking-[0.04em] text-white sm:text-4xl md:text-5xl [font-family:var(--font-orbitron)]">
            GridLocked
            <span className="text-[#c084fc] drop-shadow-[0_0_18px_rgba(168,85,247,0.5)]">
              .F1
            </span>
          </h1>

          <div className="mt-8 space-y-6 rounded-xl border border-violet-500/25 bg-[#08051a]/70 p-6 shadow-[0_0_48px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(196,181,253,0.08)] backdrop-blur-sm sm:mt-10 sm:p-8">
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
              From championship battles and strategy masterclasses to rookie
              breakthroughs and unforgettable moments, this platform aims to bring
              fans closer to the sport through content, insights and standings.
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg">
              Built by a fan, for fans. Whether you&apos;ve watched every race for
              years or discovered F1 yesterday, there&apos;s always a seat waiting for
              you in the paddock.
            </p>
            <p className="text-sm font-medium leading-relaxed text-[#c084fc] sm:text-base md:text-lg">
              Welcome to GridLocked.F1 🏁
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
