import { Reveal } from "./Reveal";

const plans = [
  {
    name: "Старт",
    price: "от 25 000 ₽",
    desc: "Одностраничный лендинг под одну цель",
    features: ["До 5 блоков", "Адаптивная вёрстка", "Форма заявки", "Базовое SEO"],
    highlighted: false,
  },
  {
    name: "Бизнес",
    price: "от 60 000 ₽",
    desc: "Многостраничный сайт для компании",
    features: ["До 6 страниц", "Анимации и интерактив", "SEO-оптимизация", "Интеграция аналитики", "1 месяц поддержки"],
    highlighted: true,
  },
  {
    name: "Магазин",
    price: "от 120 000 ₽",
    desc: "Полноценный интернет-магазин",
    features: ["Каталог и корзина", "Приём оплаты", "Личный кабинет", "Расширенное SEO", "2 месяца поддержки"],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Стоимость</span>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", marginTop: 16 }}>
            Тарифы под задачу
          </h2>
        </Reveal>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={p.highlighted ? "glass-strong" : "glass"}
                style={{
                  padding: 32,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderColor: p.highlighted ? "var(--violet-soft)" : "var(--glass-border)",
                  position: "relative",
                }}
              >
                {p.highlighted && (
                  <span
                    className="font-mono"
                    style={{
                      position: "absolute",
                      top: -12,
                      left: 32,
                      background: "var(--violet)",
                      color: "#fff",
                      fontSize: 11,
                      padding: "4px 12px",
                      borderRadius: 100,
                    }}
                  >
                    популярно
                  </span>
                )}
                <h3 className="font-display" style={{ fontSize: 20 }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>{p.desc}</p>
                <div
                  className="font-display gradient-text"
                  style={{ fontSize: 28, marginTop: 20, marginBottom: 22 }}
                >
                  {p.price}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        fontSize: 13.5,
                        color: "var(--text-muted)",
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ color: "var(--mint)" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={p.highlighted ? "btn-primary" : "btn-ghost"}
                  style={{ marginTop: 24, textAlign: "center", justifyContent: "center" }}
                >
                  Выбрать
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
