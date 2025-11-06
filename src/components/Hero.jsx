import { ArrowRight, GraduationCap, Users, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20" style={{
        backgroundImage:
          "radial-gradient(40rem 40rem at 0% 0%, rgba(255,255,255,0.25), transparent), radial-gradient(30rem 30rem at 100% 20%, rgba(255,255,255,0.15), transparent)",
      }} />

      <div className="container mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-28">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20 backdrop-blur">
            <GraduationCap className="h-4 w-4" />
            <span>Онлайн‑школа современного менеджмента</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Станьте сильным менеджером и ведите команды к результату
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-blue-100">
            Практические курсы по управлению: от основ планирования и мотивации до
            продуктового и проектного менеджмента. Только реальные инструменты.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg shadow-blue-900/10 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Подобрать курс <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500/30 px-5 py-3 font-semibold text-white ring-1 ring-white/20 transition hover:bg-blue-500/40"
            >
              Почему мы
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-blue-100">
            <div className="flex items-center gap-2"><Users className="h-4 w-4"/> 5 000+ выпускников</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> Удобный график</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-24 bottom-[-6rem] hidden aspect-square w-[38rem] rounded-full bg-white/10 blur-3xl md:block" />
    </section>
  );
}
