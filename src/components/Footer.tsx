export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img src="/images/hously-logo.svg" alt="Управляющая компания" width={120} height={32} className="w-auto h-6" />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Управляющая компания в сфере коммерческой недвижимости. Индустриальные парки, БЦ и склады — от аренды до строительства под ключ.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Направления</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  Свои объекты
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Аутсорсинг управления
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Застройка под проект
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Консалтинг и господдержка
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О компании
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@uk-partner.ru" className="hover:text-foreground transition-colors">
                  info@uk-partner.ru
                </a>
              </li>
              <li>
                <a href="tel:+74951234567" className="hover:text-foreground transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Телеграм
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Управляющая компания. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
