import { CheckCircle2, Target, CalendarClock, ShieldCheck } from "lucide-react";

const items = [
  { icon: CheckCircle2, title: "Практика", text: "Кейсы и задания, которые вы примените на работе уже завтра." },
  { icon: Target, title: "Наставники", text: "Опытные руководители из ведущих компаний." },
  { icon: CalendarClock, title: "Гибкость", text: "Записи занятий и удобный темп обучения без стресса." },
  { icon: ShieldCheck, title: "Сертификат", text: "Подтверждение навыков и помощь с портфолио." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Почему выбирают нас</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-6 ring-1 ring-blue-100 shadow-sm">
              <Icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-3 font-semibold text-blue-900">{title}</h3>
              <p className="mt-2 text-sm text-blue-900/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
