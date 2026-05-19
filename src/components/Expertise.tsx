import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Свои объекты",
    description: "Индустриальные парки, бизнес-центры и складские комплексы в аренду напрямую. Без посредников — от 500 м² до 50 000 м². Готовые блоки и возможность въезда в течение 30 дней.",
    icon: "Building2",
  },
  {
    title: "Аутсорсинг управления",
    description: "Возьмём ваш объект в профессиональное управление. Техническая эксплуатация, юридическое сопровождение, сбор платежей и обеспечение заполняемости. Повышаем доходность на 15–30%.",
    icon: "Settings",
  },
  {
    title: "Застройка под проект",
    description: "Строим складские комплексы, БЦ и производственные корпуса под ключ — под вашего арендатора или для собственного бизнеса. Срок — 10–14 месяцев. Built-to-suit с гарантией.",
    icon: "HardHat",
  },
  {
    title: "Консалтинг и господдержка",
    description: "Подбираем государственные программы с льготами до 100% налоговой экономии. ОЭЗ, ТОСЭР, Минпромторг, региональные фонды. Сопровождение от подачи заявки до получения субсидии.",
    icon: "BadgeCheck",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
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
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Ключевые направления</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Полный цикл</HighlightedText> работы
            <br />
            с недвижимостью
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            От аренды готовых площадей до строительства объекта под ваш проект и привлечения государственного финансирования — всё в одной компании.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon name={area.icon} className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
