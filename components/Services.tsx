"use client";

import { Reveal } from "./Reveal";

const services = [
  {
    title: "Лендинги",
    desc: "Одностраничный сайт под конкретную цель: продажа, заявки, презентация продукта.",
    tag: "от 3 дней",
  },
  {
    title: "Сайты-визитки",
    desc: "Несколько страниц, аккуратная структура, удобно для услуг и небольших компаний.",
    tag: "от 5 дней",
  },
  {
    title: "Интернет-магазины",
    desc: "Каталог, корзина, оплата и интеграции — полноценная торговая площадка.",
    tag: "от 14 дней",
  },
  {
    title: "Поддержка и доработка",
    desc: "Правки, новые блоки, ускорение и SEO для уже существующего сайта.",
    tag: "по задаче",
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Что я делаю</span>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(28px, 3.4vw, 42px)", marginTop: 16, maxWidth: 560 }}
          >
            Услуги под разные задачи
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
            marginTop: 48,
          }}
        >
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div
                className="glass"
                style={{
                  padding: 28,
                  height: "100%",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "var(--violet-soft)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: 12,
                    color: "var(--mint)",
                    display: "inline-block",
                    marginBottom: 16,
                  }}
                >
                  {s.tag}
                </span>
                <h3 className="font-display" style={{ fontSize: 20, marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
