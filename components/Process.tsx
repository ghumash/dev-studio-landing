import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Бриф и задача",
    desc: "Обсуждаем цель сайта, аудиторию и контент. Фиксируем объём и сроки.",
  },
  {
    n: "02",
    title: "Дизайн-макет",
    desc: "Собираю визуальную концепцию, согласовываем стиль до начала вёрстки.",
  },
  {
    n: "03",
    title: "Разработка",
    desc: "Вёрстка и логика на современном стеке, адаптив под все экраны.",
  },
  {
    n: "04",
    title: "Запуск и поддержка",
    desc: "Публикация, проверка скорости и SEO, сопровождение после релиза.",
  },
];

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Как проходит работа</span>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", marginTop: 16 }}>
            Процесс в четыре этапа
          </h2>
        </Reveal>

        <div
          style={{
            marginTop: 56,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
            position: "relative",
          }}
        >
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div style={{ position: "relative", padding: "0 20px 0 0" }}>
                <div
                  className="font-display"
                  style={{
                    fontSize: 42,
                    color: "transparent",
                    WebkitTextStroke: "1px var(--glass-border)",
                    marginBottom: 18,
                  }}
                >
                  {s.n}
                </div>
                <h3 className="font-display" style={{ fontSize: 18, marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
                {i < steps.length - 1 && (
                  <div
                    className="step-line"
                    style={{
                      position: "absolute",
                      top: 22,
                      right: 0,
                      width: 20,
                      height: 1,
                      background: "var(--glass-border)",
                    }}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
