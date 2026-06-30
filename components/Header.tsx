"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 16,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <nav
        className="glass"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          padding: "12px 20px",
          width: "min(960px, calc(100% - 32px))",
          borderRadius: 100,
        }}
      >
        <a href="#top" className="font-display" style={{ fontWeight: 700, fontSize: 17 }}>
          dev<span className="gradient-text">.studio</span>
        </a>
        <div
          className="font-mono"
          style={{
            display: "flex",
            gap: 28,
            fontSize: 13,
            color: "var(--text-muted)",
          }}
        >
          <a href="#services" className="nav-link">
            Услуги
          </a>
          <a href="#process" className="nav-link">
            Процесс
          </a>
          <a href="#work" className="nav-link">
            Работы
          </a>
          <a href="#pricing" className="nav-link">
            Тарифы
          </a>
        </div>
        <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
          Заказать сайт
        </a>
      </nav>
    </motion.header>
  );
}
