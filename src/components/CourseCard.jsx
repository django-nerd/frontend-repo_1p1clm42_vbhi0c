export default function CourseCard({ title, level, duration, description }) {
  return (
    <div className="group rounded-2xl bg-white/70 p-6 ring-1 ring-blue-200/60 backdrop-blur shadow-sm hover:shadow-md transition shadow-blue-900/5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {level}
        </span>
      </div>
      <p className="mt-3 text-sm text-blue-800/80">{description}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-blue-800/70">
        <span>{duration}</span>
        <a href="#" className="text-blue-700 font-semibold hover:underline">Подробнее</a>
      </div>
    </div>
  );
}
