import { PageBackground } from "./page-background";
import { SiteHeader } from "./site-header";

type SubPageLayoutProps = {
  eyebrow: string;
  title: string;
  gradientId: string;
  wide?: boolean;
  maxWidth?: string;
  children: React.ReactNode;
};

export function SubPageLayout({
  eyebrow,
  title,
  gradientId,
  wide = false,
  maxWidth,
  children,
}: SubPageLayoutProps) {
  return (
    <main className="relative flex min-h-[100dvh] min-h-screen flex-col overflow-x-hidden bg-[#03040c] text-white">
      <PageBackground gradientId={gradientId} />
      <SiteHeader />

      <section className="relative z-10 flex flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div
          className={`mx-auto w-full ${maxWidth ?? (wide ? "max-w-4xl" : "max-w-3xl")}`}
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-violet-400/90 sm:text-xs">
            {eyebrow}
          </p>

          <h1 className="mt-3 text-3xl font-bold italic leading-tight tracking-[0.04em] text-white sm:text-4xl md:text-5xl [font-family:var(--font-orbitron)]">
            {title}
          </h1>

          {children}
        </div>
      </section>
    </main>
  );
}
