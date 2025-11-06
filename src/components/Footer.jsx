export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold">MB School</div>
            <p className="mt-2 text-sm text-blue-100/80">Онлайн‑курсы по современному менеджменту</p>
          </div>
          <div>
            <div className="font-semibold">Контакты</div>
            <p className="mt-2 text-sm">hello@mb.school</p>
            <p className="text-sm">+7 (999) 123‑45‑67</p>
          </div>
          <div>
            <div className="font-semibold">Документы</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Публичная оферта</a></li>
              <li><a href="#" className="hover:underline">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-blue-100/70">© 2025 MB School</div>
      </div>
    </footer>
  );
}
