"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const blocks = [
  { label: "Hero-блок", width: "92%", delay: 0 },
  { label: "О компании", width: "70%", delay: 0.15 },
  { label: "Каталог / услуги", width: "85%", delay: 0.3 },
  { label: "Форма заявки", width: "60%", delay: 0.45 },
];

const codeLine = "const site = await build({ fast: true, modern: true });";

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(codeLine.slice(0, i));
      if (i >= codeLine.length) clearInterval(interval);
    }, 38);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      className="section"
      style={{
        paddingTop: 180,
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: 56,
        alignItems: "center",
      }}
    >
      <style>{`
        @media (max-width: 920px) {
          #top .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="container hero-grid" style={{ display: "contents" }}>
        <div>
          <Reveal>
            <span className="eyebrow">Веб-разработка под ключ</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(36px, 5.2vw, 64px)",
                lineHeight: 1.06,
                fontWeight: 700,
                marginTop: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Сайты, которые <span className="gradient-text">собирают заявки</span>,
              а не пыль
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p
              style={{
                marginTop: 22,
                fontSize: 18,
                color: "var(--text-muted)",
                maxWidth: 480,
                lineHeight: 1.6,
              }}
            >
              Проектирую и разрабатываю лендинги, сайты-визитки и интернет-магазины
              на современном стеке. Быстро, адаптивно, с прицелом на конверсию и SEO.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">
                Обсудить проект →
              </a>
              <a href="#work" className="btn-ghost">
                Смотреть работы
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div
              className="font-mono"
              style={{
                display: "flex",
                gap: 28,
                marginTop: 48,
                fontSize: 13,
                color: "var(--text-muted)",
              }}
            >
              <div>
                <div className="font-display" style={{ fontSize: 24, color: "var(--text-main)" }}>
                  40+
                </div>
                сайтов запущено
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 24, color: "var(--text-main)" }}>
                  7 дн.
                </div>
                средний срок
              </div>
              <div>
                <div className="font-display" style={{ fontSize: 24, color: "var(--text-main)" }}>
                  98
                </div>
                Lighthouse score
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div
            className="glass-strong"
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                padding: "14px 18px",
                borderBottom: "1px solid var(--glass-border)",
              }}
            >
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span
                  key={c}
                  style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.85 }}
                />
              ))}
              <span
                className="font-mono"
                style={{ marginLeft: 12, fontSize: 12, color: "var(--text-muted)" }}
              >
                yoursite.ru
              </span>
            </div>

            <div style={{ padding: 24 }}>
              <div
                className="font-mono"
                style={{
                  fontSize: 13,
                  color: "var(--mint)",
                  minHeight: 20,
                  marginBottom: 20,
                }}
              >
                {typed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  style={{ display: "inline-block", width: 8, height: 14, background: "var(--mint)", marginLeft: 2, verticalAlign: "middle" }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {blocks.map((b) => (
                  <motion.div
                    key={b.label}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 + b.delay, ease: "easeOut" }}
                    style={{
                      transformOrigin: "left",
                      width: b.width,
                      height: 38,
                      borderRadius: 10,
                      background: "var(--glass)",
                      border: "1px solid var(--glass-border)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 14,
                      fontSize: 12,
                      color: "var(--text-muted)",
                    }}
                    className="font-mono"
                  >
                    {b.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
