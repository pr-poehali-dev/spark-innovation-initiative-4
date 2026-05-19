import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Опыт в стройке и эксплуатации",
    description:
      "Более 10 лет работы с коммерческой недвижимостью: от проектирования и строительства до технической эксплуатации и юридического сопровождения аренды.",
  },
  {
    title: "Работа с государственными программами",
    description:
      "Глубокая экспертиза в получении господдержки. Ведём клиентов через ОЭЗ, ТОСЭР, программы Минпромторга и региональных фондов — от первичного анализа до получения льгот.",
  },
  {
    title: "Прозрачный финансовый контроллинг",
    description:
      "Собственникам объектов предоставляем ежемесячную отчётность: сбор платежей, дебиторка, расходы на эксплуатацию. Вы всегда видите реальную картину доходности.",
  },
  {
    title: "Долгосрочные партнёрства",
    description: "Не разовые сделки — выстраиваем отношения на годы. Наши арендаторы и собственники возвращаются к нам снова, потому что мы решаем задачи, а не продаём услуги.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О компании</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Управляем
              <br />
              <HighlightedText>с результатом</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="/images/exterior.png"
                alt="Коммерческая недвижимость"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Мы управляем индустриальными парками, бизнес-центрами и складской недвижимостью — и строим новые объекты под задачи арендаторов и инвесторов. Один партнёр для всего цикла.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
