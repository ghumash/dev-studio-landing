import { Reveal } from "./Reveal";

const points = [
  { title: "Скорость", desc: "Современный стек и готовые подходы — сайт без лишних задержек." },
  { title: "Чистый код", desc: "Поддерживаемая структура, легко расширять и дорабатывать." },
  { title: "SEO с первого дня", desc: "Семантика, метаданные и скорость загрузки настроены сразу." },
  { title: "Прозрачные сроки", desc: "Понятный план по этапам, без неожиданных задержек." },
];

export function WhyMe() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Почему со мной</span>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", marginTop: 16 }}>
            Что вы получаете
          </h2>
        </Reveal>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 28,
          }}
        >
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div style={{ borderLeft: "2px solid var(--violet-soft)", paddingLeft: 18 }}>
                <h3 className="font-display" style={{ fontSize: 18, marginBottom: 8 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
