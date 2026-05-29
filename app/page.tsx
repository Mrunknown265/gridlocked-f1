import { PageBackground } from "./components/page-background";
import { SiteHeader } from "./components/site-header";
import { SoftTyreIcon } from "./components/soft-tyre-icon";

/** "GRIDLOCKED.F1" logo text with the purple tyre replacing the letter O. */
function BrandMark({ size = "hero" }: { size?: "hero" | "header" }) {
  const isHero = size === "hero";
  return (
    <span
      className={`inline-flex items-center justify-center gap-0 font-bold italic leading-none [font-family:var(--font-orbitron)] ${
        isHero
          ? "flex-nowrap text-[clamp(1.55rem,9vw,2.5rem)] tracking-[0.02em] sm:text-6xl sm:tracking-[0.05em] md:text-7xl lg:text-[5rem] lg:leading-none xl:text-[6.25rem] 2xl:text-[7.25rem]"
          : "max-w-full flex-wrap text-sm tracking-[0.12em] sm:text-base"
      }`}
    >
      <span className="text-white">GRIDL</span>
      <SoftTyreIcon
        className={
          isHero
            ? "mx-0.5 h-[0.82em] w-[0.82em] shrink-0 drop-shadow-[0_0_18px_rgba(168,85,247,0.85)]"
            : "mx-0.5 h-[1.1em] w-[1.1em] drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
        }
      />
      <span className="text-white">CKED</span>
      <span className="text-[#c084fc] drop-shadow-[0_0_22px_rgba(168,85,247,0.95)]">
        .F1
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-[100dvh] min-h-screen flex-col overflow-x-hidden bg-[#03040c] text-white">
      <PageBackground gradientId="home-streak-gradient" />
      <SiteHeader />

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-12 md:px-8 md:py-14 lg:py-20">
        <div className="flex w-full min-w-0 max-w-5xl flex-col items-center">
          <h1 className="flex w-full min-w-0 justify-center px-1">
            <BrandMark size="hero" />
          </h1>

          <p className="mt-6 max-w-[18rem] text-xs leading-relaxed text-zinc-400 xs:max-w-xs xs:text-sm sm:mt-8 sm:max-w-md sm:text-base md:mt-12 md:max-w-xl">
            Formula 1, Telemetry, Standings and Content
          </p>

          <button
            type="button"
            className="group relative mt-10 flex w-full max-w-[min(100%,18rem)] items-center justify-center px-6 py-3.5 text-xs font-bold italic tracking-[0.18em] text-white transition-all duration-300 ease-out hover:-translate-y-1 xs:max-w-xs xs:px-10 xs:py-4 xs:text-sm xs:tracking-[0.22em] sm:mt-14 sm:max-w-sm sm:px-14 md:mt-16 md:mt-20 md:min-h-[3.25rem] md:text-base [font-family:var(--font-orbitron)]"
          >
            <span className="pointer-events-none absolute -inset-2 rounded-lg bg-gradient-to-r from-violet-600/40 via-purple-500/50 to-blue-500/40 opacity-70 blur-xl transition-all duration-300 ease-out group-hover:opacity-100 group-hover:blur-2xl group-hover:from-violet-500/70 group-hover:via-fuchsia-500/75 group-hover:to-blue-400/65" />
            <span className="pointer-events-none absolute inset-0 rounded-lg border border-violet-400/45 bg-[#08051a]/75 shadow-[0_0_22px_rgba(139,92,246,0.35),inset_0_1px_0_rgba(196,181,253,0.12)] transition-all duration-300 ease-out group-hover:border-violet-300/65 group-hover:bg-[#0c0824]/85 group-hover:shadow-[0_0_36px_rgba(168,85,247,0.6),0_0_24px_rgba(59,130,246,0.45)]" />
            <span className="relative z-10">ENTER PADDOCK</span>
          </button>
        </div>
      </section>
    </main>
  );
}
