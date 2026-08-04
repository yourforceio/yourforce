export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Enterprise Commerce • Full Stack • AI
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          Enterprise Commerce
          <br />
          Built for Growth
        </h1>

        <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Helping brands build scalable Salesforce Commerce Cloud, Headless,
          Full-Stack and AI-powered commerce solutions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
            Start Your Project
          </button>

          <button className="rounded-xl border border-slate-600 px-6 py-3 font-semibold hover:bg-slate-800 transition">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
