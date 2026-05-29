import { SubPageLayout } from "../components/sub-page-layout";

export default function StandingsPage() {
  return (
    <SubPageLayout
      eyebrow="Standings"
      title="Standings"
      gradientId="standings-streak-gradient"
    >
      <div className="mt-8 rounded-xl border border-violet-500/25 bg-[#08051a]/70 p-8 shadow-[0_0_48px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(196,181,253,0.08)] backdrop-blur-sm sm:mt-10 sm:p-12">
        <p className="text-center text-2xl font-bold italic tracking-[0.12em] text-white/50 transition-colors duration-300 sm:text-4xl md:text-5xl [font-family:var(--font-orbitron)]">
          COMING SOON
        </p>
        <p className="mt-4 text-center text-sm leading-relaxed text-zinc-400 sm:text-base">
          Driver and constructor championship tables are on the way.
        </p>
      </div>
    </SubPageLayout>
  );
}
