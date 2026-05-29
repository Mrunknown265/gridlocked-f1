import { SubPageLayout } from "../components/sub-page-layout";

export default function TelemetryPage() {
  return (
    <SubPageLayout
      eyebrow="Telemetry"
      title="Telemetry"
      gradientId="telemetry-streak-gradient"
    >
      <div className="mt-8 rounded-xl border border-violet-500/25 bg-[#08051a]/70 p-8 shadow-[0_0_48px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(196,181,253,0.08)] backdrop-blur-sm sm:mt-10 sm:p-12">
        <p className="text-center text-2xl font-bold italic tracking-[0.12em] text-white/50 transition-colors duration-300 sm:text-4xl md:text-5xl [font-family:var(--font-orbitron)]">
          COMING SOON
        </p>
        <p className="mt-4 text-center text-sm leading-relaxed text-zinc-400 sm:text-base">
          Live data, lap times and race insights are being built in the garage.
        </p>
      </div>
    </SubPageLayout>
  );
}
