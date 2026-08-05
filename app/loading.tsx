export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse bg-[#faf7f2]" aria-label="Loading page">
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-8">
        <div className="h-8 w-40 rounded bg-white/80" />
        <div className="h-64 rounded-3xl bg-white/80 sm:h-96" />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="h-32 rounded-2xl bg-white/80" />
          <div className="h-32 rounded-2xl bg-white/80" />
          <div className="h-32 rounded-2xl bg-white/80" />
        </div>
      </div>
    </main>
  );
}
