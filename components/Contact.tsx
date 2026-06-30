"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: подключить отправку (например, на свой API-роут или email-сервис)
    setSent(true);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          className="glass-strong"
          style={{
            padding: "56px 40px",
            borderRadius: "var(--radius-lg)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          <style>{`
            @media (max-width: 768px) {
              #contact .contact-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <div className="contact-grid" style={{ display: "contents" }}>
            <Reveal>
              <span className="eyebrow">Старт проекта</span>
              <h2 className="font-display" style={{ fontSize: "clamp(26px, 3.2vw, 38px)", marginTop: 16 }}>
                Расскажите о задаче
              </h2>
              <p style={{ marginTop: 16, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 380 }}>
                Опишите вкратце, какой сайт нужен — отвечу в течение дня и предложу
                план и примерную стоимость.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              {sent ? (
                <div
                  className="glass"
                  style={{ padding: 32, textAlign: "center" }}
                >
                  <p className="font-display" style={{ fontSize: 18, marginBottom: 8 }}>
                    Заявка отправлена
                  </p>
                  <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
                    Свяжусь с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input required name="name" placeholder="Ваше имя" className="input-field" />
                  <input required name="contact" placeholder="Telegram, email или телефон" className="input-field" />
                  <textarea name="message" placeholder="Кратко о проекте" rows={4} className="input-field" />
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                    Отправить заявку
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .input-field {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
          color: var(--text-main);
          font-size: 14px;
          font-family: inherit;
          resize: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .input-field::placeholder { color: var(--text-muted); }
        .input-field:focus {
          border-color: var(--violet-soft);
          background: rgba(255,255,255,0.06);
          outline: none;
        }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: var(--text-main); }
      `}</style>
    </section>
  );
}
