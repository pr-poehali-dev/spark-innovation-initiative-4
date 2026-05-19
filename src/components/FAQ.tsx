import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Кто ваши клиенты?",
    answer:
      "Мы работаем с арендаторами коммерческой недвижимости (производство, логистика, офисы), собственниками объектов и земельных участков, инвесторами в индустриальную и складскую недвижимость, а также девелоперами и проектными организациями.",
  },
  {
    question: "Какова минимальная площадь аренды в ваших объектах?",
    answer:
      "Минимальный блок — от 500 м². В наших индустриальных парках и складских комплексах доступны как компактные секции, так и крупные площади под якорного арендатора. Мы подберём вариант под вашу задачу.",
  },
  {
    question: "Как работает аутсорсинг управления?",
    answer:
      "Мы принимаем объект в управление на основании договора. Берём на себя техническую эксплуатацию (инженерия, уборка, охрана), юридическое сопровождение аренды, сбор платежей и работу с дебиторкой, маркетинг и обеспечение заполняемости. Собственник получает ежемесячный финансовый отчёт.",
  },
  {
    question: "Что такое built-to-suit и как это работает?",
    answer:
      "Built-to-suit — это строительство объекта под конкретного арендатора или инвестора. Мы анализируем ваш участок или подбираем площадку, проектируем здание под ваш технологический процесс, строим и вводим в эксплуатацию. Условия: долгосрочная аренда, аренда с правом выкупа или выкуп. Срок реализации — 10–14 месяцев.",
  },
  {
    question: "Какие государственные программы вы помогаете получить?",
    answer:
      "Работаем с программами Минпромторга, региональных инвестиционных фондов, ОЭЗ и ТОСЭР (льготы по налогам на имущество, прибыль, землю), льготным лизингом оборудования, субсидиями на строительство инфраструктуры. Проводим анализ соответствия проекта и сопровождаем до получения поддержки.",
  },
  {
    question: "Как начать работу?",
    answer:
      "Оставьте заявку через форму на сайте или позвоните нам. Менеджер свяжется с вами в течение рабочего дня, уточнит задачу и предложит оптимальный формат: аренда готового объекта, передача в управление, застройка или консалтинг по господдержке.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
