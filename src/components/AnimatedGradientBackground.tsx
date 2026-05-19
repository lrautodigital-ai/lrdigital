export function AnimatedGradientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-soft" />
      <div className="thin-grid mask-fade-bottom absolute inset-0 opacity-45" />
      <div className="absolute left-1/2 top-0 h-[1px] w-[84vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(34,211,238,.08),transparent)]" />
    </div>
  );
}
