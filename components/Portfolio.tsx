import { Reveal } from "./Reveal";

const works = [
  { title: "Кофейня «Атмосфера»", tag: "Лендинг", gradient: "linear-gradient(135deg, #7c5cfc, #38e1c6)" },
  { title: "Студия йоги Flow", tag: "Сайт-визитка", gradient: "linear-gradient(135deg, #38e1c6, #7c5cfc)" },
  { title: "Магазин керамики Clay", tag: "Интернет-магазин", gradient: "linear-gradient(135deg, #a78bfa, #38e1c6)" },
  { title: "Юридическая фирма Lex", tag: "Корпоративный сайт", gradient: "linear-gradient(135deg, #7c5cfc, #a78bfa)" },
];

export function Portfolio() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Примеры работ</span>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.4vw, 42px)", marginTop: 16 }}>
            Несколько проектов
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
          {works.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div
                className="glass"
                style={{ overflow: "hidden", cursor: "pointer" }}
              >
                <div
                  style={{
                    height: 160,
                    background: w.gradient,
                    opacity: 0.85,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(11,14,26,0.5) 100%)",
                    }}
                  />
                </div>
                <div style={{ padding: 20 }}>
                  <span className="font-mono" style={{ fontSize: 11, color: "var(--mint)" }}>
                    {w.tag}
                  </span>
                  <h3 className="font-display" style={{ fontSize: 17, marginTop: 8 }}>
                    {w.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
