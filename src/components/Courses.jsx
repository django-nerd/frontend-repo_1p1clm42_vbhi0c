import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Основы менеджмента",
    level: "База",
    duration: "6 недель",
    description: "Планирование, постановка целей, KPI, делегирование и обратная связь.",
  },
  {
    title: "Проектный менеджмент",
    level: "Практика",
    duration: "8 недель",
    description: "Agile, Scrum, Kanban, управление рисками, дорожные карты и метрики.",
  },
  {
    title: "Продуктовый менеджмент",
    level: "Pro",
    duration: "8 недель",
    description: "Ценность для пользователя, гипотезы, JTBD, метрики продукта, go‑to‑market.",
  },
  {
    title: "Управление командой",
    level: "Middle",
    duration: "5 недель",
    description: "Мотивация, 1:1, найм, онбординг, фасилитация встреч и культура обратной связи.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-blue-50 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Наши курсы</h2>
            <p className="mt-2 text-blue-800/70">Выберите направление под свои цели и опыт</p>
          </div>
          <a href="#" className="hidden md:inline-block rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700">Консультация</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
